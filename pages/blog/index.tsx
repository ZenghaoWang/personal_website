import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import React, { FunctionComponent } from "react";
import { POSTS_PATH } from "../../util/paths";
import BlogPostListing from "../../components/BlogPostListing/BlogPostListing";

export type PostData = {
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
        return <BlogPostListing post={post} />;
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
        title: parsedMarkdown.data.title || "No title",
        isPublished: parsedMarkdown.data.published || false,
        isPinned: parsedMarkdown.data.pinned || false,
        date: parsedMarkdown.data.date || "No Date",
        description: parsedMarkdown.data.description || "No Description",
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
