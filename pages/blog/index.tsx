import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import React, { FunctionComponent } from "react";
type BlogProps = {
  slugs: string[];
};
const BlogHome: FunctionComponent<BlogProps> = ({ slugs }) => {
  return (
    <div>
      <Head>
        <title>Zenghao's Blog</title>
      </Head>
      <h1>Blog Posts</h1>
      {slugs.map((slug) => {
        return (
          <div key="slug">
            <Link href={`/blog/${slug}`}>
              <a>
                <h2>{slug}</h2>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const POSTS_PATH = "md/posts";
  const postTitles: string[] = fs
    .readdirSync(POSTS_PATH)
    .map((post) => post.replace(".md", ""));

  return {
    props: {
      slugs: postTitles,
    },
  };
}

export default BlogHome;
