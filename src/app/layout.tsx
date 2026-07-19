import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "idkdawg — Pro. Beyond.",
  description: "An Apple-inspired homepage built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
