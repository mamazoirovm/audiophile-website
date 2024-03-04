import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUDIOPHILE",
  description: "Headphone Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={manrope.className}>
        <div className="w-full">
            <Header/>
        {children}
        <Category/>
        <Hero/>
        <Footer/>
        </div>
      
        </body >
    </html>
  );
}
