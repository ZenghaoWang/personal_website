import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import React, { FunctionComponent } from "react";
import { POSTS_PATH } from "../../util/paths";

type PostData = {
  slug: string;
  title: string;
  isPublished: boolean;
  isPinned: boolean;
  date: string;
  description: string;
};

type PostsProp = {
  posts: PostData[];
};

const BlogHome: FunctionComponent<PostsProp> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Zenghao's Blog</title>
      </Head>
      <h1>Blog Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
                <h3>{post.date}</h3>
                <p>{post.description}</p>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  // go through the posts directory and grab a list of post metadata
  const postData: PostData[] = fs
    .readdirSync(POSTS_PATH)
    .map((fileName) => {
      const markdownWithMetaData = fs
        .readFileSync(path.join(POSTS_PATH, fileName))
        .toString();
      const slug = fileName.replace(".md", "");
      const parsedMarkdown = matter(markdownWithMetaData);

      return {
        slug: slug,
        title: parsedMarkdown.data.title,
        isPublished: parsedMarkdown.data.published,
        isPinned: parsedMarkdown.data.pinned,
        date: parsedMarkdown.data.date,
        description: parsedMarkdown.data.description,
      };
    })
    .filter((post) => post.isPublished) // only want published posts
    .sort((a, b) => (a.date > b.date ? -1 : 1)); // sort by date from newest to oldest
  return {
    props: {
      posts: postData,
    },
  };
}

export default BlogHome;
