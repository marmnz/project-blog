import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";

import { readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BLOG_TITLE } from "@/constants";
import COMPONENT_MAP from "@/helpers/component-map";

const getFileData = React.cache(async (postSlug) => {
  const fileContent = await readFile(
    `${process.cwd()}/content/${postSlug}.mdx`,
    "utf-8"
  );

  const { data: frontmatter, content } = matter(fileContent);

  return { frontmatter, content };
});

export async function generateMetadata({ params }) {
  const { postSlug } = params;
  const { frontmatter } = await getFileData(postSlug);
  return {
    title: `${BLOG_TITLE}: ${frontmatter.title}`,
    description: frontmatter.description,
  };
}

async function BlogPost({ params }) {
  const { postSlug } = await params;

  const { frontmatter, content } = await getFileData(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
