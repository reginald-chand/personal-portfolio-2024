import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reginald Sahil Chand",
  description:
    "Reginald Sahil Chand: Full Stack Developer specializing in backend technologies. Proficient in HTML, CSS, JavaScript (including TypeScript), React, Next.js, Node.js, Express, MongoDB, Mongoose, C++, and Python. Passionate about coding and building robust web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`text-gray-50 ${inter.className}`}>
      <body className="bg-gray-950">{children}</body>
    </html>
  );
}
