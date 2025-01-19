// /app/head.tsx

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "TeraCores",
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

export default function Head() {
  return (
    <>
      {/* Meta Tags */}
      <meta name="description" content="Your trusted partner in web development." />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="TeraCores - Web Development" />
      <meta property="og:description" content="Providing top-notch web solutions for your business." />
      <meta property="og:url" content="https://teracores.com" />
      <meta property="og:site_name" content="TeraCores" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@teracores" />
      <meta name="twitter:title" content="TeraCores - Web Development" />
      <meta name="twitter:description" content="Providing top-notch web solutions for your business." />
      
      {/* You can add other meta tags here */}
    </>
  );
}
