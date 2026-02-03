import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgOptions = {
  eyebrow: string;
  headline: string;
};

export async function createOgImage({ eyebrow, headline }: OgOptions) {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const bottleResponse = await fetch(`${origin}/images/keikos-bottle.png`);
  const bottleData = await bottleResponse.arrayBuffer();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#0f1415",
          color: "#f4e7d2",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Bottle image - positioned bottom-right, extending off-frame */}
        <img
          src={bottleData}
          alt=""
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-5%",
            width: "42%",
            height: "110%",
            objectFit: "contain",
            opacity: 0.25,
          }}
        />
        {/* Gradient overlay - warm accent glows + fade from left to blend bottle */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, #0f1415 0%, #0f1415 50%, transparent 85%), radial-gradient(circle at 15% 25%, rgba(232,160,123,0.3), transparent 45%), radial-gradient(circle at 80% 80%, rgba(244,231,210,0.12), transparent 50%), linear-gradient(180deg, #0f1415 0%, #111718 50%, #0b1011 100%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.5em",
              fontSize: 20,
              color: "rgba(244,231,210,0.6)",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              maxWidth: 820,
            }}
          >
            {headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 22,
            color: "rgba(244,231,210,0.75)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>Fine Reserve X.O.</span>
          <span>Turks &amp; Caicos Islands</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
