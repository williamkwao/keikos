#!/usr/bin/env python3
import json
from pathlib import Path
from PIL import Image, ImageStat

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = PROJECT_ROOT / "src" / "data" / "months.json"
SRC_DIR = PROJECT_ROOT / "public" / "calendar"
OUT_DIR = PROJECT_ROOT / "public" / "gallery"
OUT_DIR.mkdir(parents=True, exist_ok=True)

CROP_RATIO = 0.6


def variance(img: Image.Image) -> float:
    stat = ImageStat.Stat(img)
    return stat.var[0]


def choose_crop_side(img: Image.Image) -> str:
    w, h = img.size
    left = img.crop((0, 0, w // 2, h))
    right = img.crop((w // 2, 0, w, h))
    return "left" if variance(left) >= variance(right) else "right"


def main() -> None:
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    for item in data:
        if item.get("type") != "extra":
            continue
        image_name = Path(item["image"]).name
        src_path = SRC_DIR / image_name
        if not src_path.exists():
            print(f"Missing source: {src_path}")
            continue
        with Image.open(src_path) as img:
            img = img.convert("RGB")
            side = choose_crop_side(img)
            w, h = img.size
            if side == "left":
                crop_box = (0, 0, int(w * CROP_RATIO), h)
            else:
                crop_box = (int(w * (1 - CROP_RATIO)), 0, w, h)
            cropped = img.crop(crop_box)
            out_path = OUT_DIR / image_name
            cropped.save(out_path, format="JPEG", quality=90)
            print(f"Cropped {image_name}: {side}")


if __name__ == "__main__":
    main()
