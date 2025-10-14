import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";

import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
  const files = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {files.map((file, index) => (
        <BlogSummaryCard
          key={index}
          slug={file.slug}
          title={file.title}
          abstract={file.abstract}
          publishedOn={file.publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
