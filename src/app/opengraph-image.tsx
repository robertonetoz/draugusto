import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { doctor } from "@/data/site";

// Prévia que aparece ao colar o link no Instagram, WhatsApp, Facebook etc.
export const alt = "Dr. Augusto César Borges, otorrinolaringologista em Uberlândia – MG";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const paper = "#faf8f5";
const linen = "#f3eee7";
const stone = "#c9bcab";
const taupe = "#7a6d61";
const graphite = "#3a332e";
const stetho = "#3e6aa8";

// Marca do estetoscópio, igual à do site
const mark = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 100" fill="none"><g stroke="${graphite}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M27 8C14 0 2 8 4 24c2 14 18 22 28 30 10-8 26-16 28-30 2-16-10-24-23-16"/><path d="M32 54v19"/><circle cx="32" cy="84" r="11"/></g><circle cx="27" cy="8" r="3.6" fill="${stetho}"/><circle cx="37" cy="8" r="3.6" fill="${stetho}"/><circle cx="32" cy="84" r="3.8" fill="${stetho}"/></svg>`
)}`;

export default async function Image() {
  // Caminhos escritos por extenso para o build incluir só esses arquivos
  const [serif, serifItalic, sans, photo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-Light.woff")),
    readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-LightItalic.woff")),
    readFile(join(process.cwd(), "assets/fonts/Jost-Regular.woff")),
    readFile(join(process.cwd(), "public/images/dr-augusto-retrato.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: paper, fontFamily: "Jost", color: graphite }}>
        {/* Texto */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "64px 0 60px 80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mark} width={30} height={47} alt="" />
            <div style={{ display: "flex", fontSize: 21, letterSpacing: 1, color: taupe }}>Otorrinolaringologista em Uberlândia</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 44, fontFamily: "Cormorant", fontSize: 90, lineHeight: 0.98, letterSpacing: -1 }}>
            <span>Augusto César</span>
            <span>Borges</span>
          </div>

          <div style={{ display: "flex", marginTop: 22, fontFamily: "Cormorant Italic", fontSize: 30, color: taupe, maxWidth: 500, lineHeight: 1.25 }}>
            Ouvido, nariz e garganta, rinoplastia e cirurgia plástica da face
          </div>

          <div style={{ display: "flex", marginTop: "auto", gap: 56, paddingTop: 24, borderTop: `1px solid ${stone}`, width: 520, fontSize: 19, color: taupe }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 28, color: graphite }}>{doctor.googleRating} no Google</span>
              <span>{doctor.googleReviews} avaliações</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 28, color: graphite }}>{doctor.doctoraliaReviews} opiniões</span>
              <span>no Doctoralia</span>
            </div>
          </div>
        </div>

        {/* Retrato em arco, com a linha fina deslocada atrás */}
        <div style={{ display: "flex", position: "relative", width: 430, height: "100%", marginRight: 70 }}>
          <div
            style={{
              position: "absolute",
              left: 22,
              right: -22,
              top: 50,
              bottom: 22,
              border: `1.5px solid ${stone}`,
              borderRadius: "215px 215px 0 0",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 72,
              bottom: 44,
              display: "flex",
              overflow: "hidden",
              borderRadius: "215px 215px 0 0",
              background: linen,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photoSrc} alt="" width={514} height={514} style={{ position: "absolute", left: -42, top: -10 }} />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: serif, weight: 300, style: "normal" },
        { name: "Cormorant Italic", data: serifItalic, weight: 300, style: "italic" },
        { name: "Jost", data: sans, weight: 400, style: "normal" },
      ],
    }
  );
}
