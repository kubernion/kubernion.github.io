import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Using Google Fonts
import "./globals.css";
import PrivacyBanner from "../components/PrivacyBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Kubernion",
  description: "Coding Beyond Boundaries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning fixes the error from your browser extension
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans bg-black`}
      >
        {children}
        <PrivacyBanner />
      </body>
    </html>
  );
}