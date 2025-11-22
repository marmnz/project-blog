"use client";
import React from "react";
import { ThemeContext } from "../ThemeContextProvider";
import clsx from "clsx";
import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

function ThemedLayout({ children }) {
  const theme = React.useContext(ThemeContext).theme;
  return (
    <>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={theme}
        style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body>{children}</body>
      </html>
    </>
  );
}

export default ThemedLayout;
