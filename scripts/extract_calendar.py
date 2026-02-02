#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path

import fitz  # PyMuPDF
from PIL import Image
import pytesseract

MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
]

MONTH_RE = re.compile(r"\b(" + "|".join(MONTHS) + r")\b", re.IGNORECASE)


def extract_text_from_image(img: Image.Image) -> str:
    # Tesseract tends to do better on higher-contrast images.
    # Convert to RGB (in case of RGBA) then to L for OCR.
    gray = img.convert("L")
    return pytesseract.image_to_string(gray)


def page_to_image(page: fitz.Page, target_width: int = 1600) -> Image.Image:
    # Render page to pixmap at target width, keeping aspect ratio.
    zoom = target_width / page.rect.width
    mat = fitz.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    mode = "RGB"
    img = Image.frombytes(mode, [pix.width, pix.height], pix.samples)
    return img


def classify_page(index: int, text: str) -> str:
    if index == 0:
        return "cover"
    if MONTH_RE.search(text):
        return "month"
    return "extra"


def find_month_title(text: str) -> str | None:
    match = MONTH_RE.search(text)
    if not match:
        return None
    # Normalize capitalization
    month = match.group(1)
    return month[0].upper() + month[1:].lower()


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: extract_calendar.py /path/to/calendar.pdf [output_dir]")
        return 1

    pdf_path = Path(sys.argv[1]).expanduser().resolve()
    if not pdf_path.exists():
        print(f"PDF not found: {pdf_path}")
        return 1

    output_root = Path(sys.argv[2]).expanduser().resolve() if len(sys.argv) > 2 else Path.cwd()
    images_dir = output_root / "public" / "calendar"
    data_dir = output_root / "src" / "data"
    images_dir.mkdir(parents=True, exist_ok=True)
    data_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(pdf_path)
    items = []

    for i, page in enumerate(doc):
        img = page_to_image(page)
        image_name = f"page-{i+1:02d}.jpg"
        image_path = images_dir / image_name
        img.save(image_path, format="JPEG", quality=90)

        text = extract_text_from_image(img)
        text_clean = " ".join(text.split())
        page_type = classify_page(i, text_clean)
        title = find_month_title(text_clean)

        items.append({
            "pageIndex": i,
            "title": title,
            "body": text_clean,
            "image": f"/calendar/{image_name}",
            "type": page_type,
        })

        print(f"Processed page {i+1}/{doc.page_count}: {page_type} - {title or 'Untitled'}")

    data_path = data_dir / "months.json"
    data_path.write_text(json.dumps(items, indent=2), encoding="utf-8")

    print(f"Wrote data to {data_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
