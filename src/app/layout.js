import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./styles.css";

import { BLOG_TITLE } from "@/constants";
import RespectMotionPreferences from "@/components/RespectMotionPreferences";
import ThemeContextProvider from "@/components/ThemeContextProvider";
import ThemedLayout from "@/components/ThemedLayout";

export const metadata = {
  title: BLOG_TITLE,
  description: "A blog about web development and programming.",
};

function RootLayout({ children }) {
  return (
    <ThemeContextProvider>
      <RespectMotionPreferences>
        <ThemedLayout>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemedLayout>
      </RespectMotionPreferences>
    </ThemeContextProvider>
  );
}

export default RootLayout;
