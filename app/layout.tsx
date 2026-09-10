import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fuentes autoalojadas (Bebas Neue y Manrope, licencia OFL) en vez de
// next/font/google: así la web no depende de una petición a Google Fonts
// en cada build y funciona igual sin conexión.
const display = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: "./fonts/Manrope-Variable.ttf",
  variable: "--font-body",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  title: "SUKI RAMEN·SUSHI | Ramen y Sushi en Granada",
  description:
    "Ramen, sushi y ambiente anime en pleno centro de Granada. Consulta la carta, la ubicación y reserva tu mesa en SUKI RAMEN·SUSHI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
