import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hacker News",
  description: "Coding asignment for Lemvigh-Müller",
};

const RootLayout: FC<Readonly<{ children: ReactNode}>> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
