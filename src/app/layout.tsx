import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import MotionRoot from "@/components/MotionRoot";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const title = "Dr. Augusto César Borges | Otorrino em Uberlândia";
const description =
  "Otorrinolaringologista em Uberlândia – MG. Ouvido, nariz e garganta para adultos e crianças, rinoplastia e cirurgia plástica da face. Nota 4,9 no Google. Agende pelo WhatsApp ou Doctoralia.";

export const metadata: Metadata = {
  metadataBase: new URL("https://draugusto.vercel.app"),
  title,
  description,
  keywords: [
    "otorrino Uberlândia",
    "otorrinolaringologista Uberlândia",
    "rinoplastia Uberlândia",
    "Dr. Augusto César Borges",
    "labirintite Uberlândia",
    "septoplastia Uberlândia",
    "otorrino infantil Uberlândia",
  ],
  alternates: { canonical: "/" },
  // A imagem da prévia vem de src/app/opengraph-image.tsx
  openGraph: {
    title: "Dr. Augusto César Borges, otorrino",
    description: "Ouvido, nariz e garganta em Uberlândia – MG. Agende pelo WhatsApp ou Doctoralia.",
    url: "/",
    siteName: "Dr. Augusto César Borges",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Augusto César Borges, otorrino",
    description: "Ouvido, nariz e garganta em Uberlândia – MG.",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} antialiased`}>
      <body className="min-h-full">
        <SmoothScroll />
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
