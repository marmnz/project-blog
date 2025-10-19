import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";

import { readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const fileContent = await readFile(
    `${process.cwd()}/content/${postSlug}.mdx`,
    "utf-8"
  );

  const { data: frontmatter, content } = await matter(fileContent);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;
