import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/component/Nav/nav";
import Footer from "@/component/footer/footer";

// Define metadata directly here
export const metadata: Metadata = {
  title: "TeraCores - Web Development",
  description: "Your trusted partner in web development.",
  openGraph: {
    title: "TeraCores - Web Development",
    description: "Providing top-notch web solutions for your business.",
    url: "https://teracores.com",
    siteName: "TeraCores",
  },
  twitter: {
    card: "summary_large_image",
    site: "@teracores",
    title: "TeraCores - Web Development",
    description: "Providing top-notch web solutions for your business.",
  },
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
