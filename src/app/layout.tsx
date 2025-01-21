// /app/layout.tsx

"use client"; // Ensure this is present for useEffect and state hooks

import React, { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { setCookie, getCookie } from "../utils/cookie"; // Adjust the path
import "./globals.css";
import Nav from "@/component/Nav/nav"; // Adjust the path
import Footer from "@/component/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);

  useEffect(() => {
    const userVisited = getCookie("userVisited");
    const cookiesAccepted = getCookie("cookiesAccepted");

    if (!userVisited) {
      setCookie("userVisited", "true", { expires: 365, path: "/" });
      setWelcomeMessage("Welcome to our website!");
    } else {
      setWelcomeMessage("Welcome back!");
    }

    if (!cookiesAccepted) {
      setShowCookieConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookie("cookiesAccepted", "true", { expires: 365, path: "/" });
    setShowCookieConsent(false);
  };

  const declineCookies = () => {
    setCookie("cookiesAccepted", "false", { expires: 365, path: "/" });
    setShowCookieConsent(false);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />

        {/* Display the welcome message */}
        {welcomeMessage && (
          <div className="fixed top-0 left-0 w-full  text-white p-4 text-center">
            {welcomeMessage}
          </div>
        )}

        {/* Cookie Consent Message at the bottom left corner */}
        {showCookieConsent && (
          <div className="fixed bottom-4 left-4 w-80 bg-gradient-to-r from-[#1b1b1b] to-[#292929] border-2 border-[#353535] text-white p-4 rounded-lg z-50">
            <p className="text-sm">
              We use cookies for marketing and analytics purposes. By clicking
              &quot;Accept&quot;, you agree to the use of cookies.
            </p>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={acceptCookies}
                className="bg-none text-sm hover:text-black border-2 text-white px-4 py-2 rounded-lg"
              >
                Accept
              </button>
              <button
                onClick={declineCookies}
                className="bg-none text-sm hover:text-black border-2 text-white px-4 py-2 rounded-lg"
              >
                Decline
              </button>
            </div>
          </div>
        )}

        {children}
        <Footer />
      </body>
    </html>
  );
}
