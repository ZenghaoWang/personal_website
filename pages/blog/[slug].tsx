import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import { POSTS_PATH } from "../../util/paths";
import styles from "../../styles/BlogPost.module.scss";

type PostProps = {
  markdownContent: string;
  metadata: PostMetadata;
};

const Post = ({ markdownContent, metadata }: PostProps) => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta title="description" content={metadata.description} />
      </Head>

      <div className={styles.header}>
        <h1>{metadata.title}</h1>
        <h3 className="highlight-tertiary">{`Date Published: ${metadata.date}`}</h3>
      </div>

      <ReactMarkdown
        children={markdownContent}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(POSTS_PATH);

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

type ContextType = { params: { slug: string } };

export const getStaticProps = async (context: ContextType) => {
  const slug = context.params.slug;
  const markdownWithMetadata = fs
    .readFileSync(path.join(POSTS_PATH, `${slug}.md`))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      metadata: parsedMarkdown.data,
      markdownContent: parsedMarkdown.content,
    },
  };
};
export default Post;
