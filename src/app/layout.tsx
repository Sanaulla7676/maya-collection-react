import React from "react";
import "./globals.css"; // Imports your Tailwind/global styles

export const metadata = {
  title: "MAYA Collection",
  description: "Minimal Luxury South Asian Apparel Atelier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-stone-900 selection:bg-stone-100">
        {children}
      </body>
    </html>
  );
}