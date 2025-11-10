import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amauta Asesores",
  description:
    "Gestión de Asesorías Financieras, Laborales, Fiscales y de Extranjería",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primario text-neutro`}
      >
        <main className="min-h-screen flex flex-col">
          {children}
          <footer className="mt-auto py-6 text-center text-sm text-gray-400 border-t border-gray-200 bg-gray-100">
            © {new Date().getFullYear()} Amauta Asesoría Integral. Todos los
            derechos reservados.
          </footer>
        </main>
      </body>
    </html>
  );
}
