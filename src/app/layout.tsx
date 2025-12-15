import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Posting | Agencia Creativa",
  description:
    "Agencia Creativa y de Estrategia Digital en Bogotá. Transformamos tus ideas en diseño contenido Audiovisual Marketing digital y redes sociales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          name="facebook-domain-verification"
          content="o6jogjbxdx1rj26knndy08qv4z1rja"
        />
      </head>

      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
