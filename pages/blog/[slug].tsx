import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock/CodeBlock";

type PostProps = {
  markdownContent: string;
  metadata: { [key: string]: any };
};

const Post = ({ markdownContent, metadata }: PostProps) => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta title="description" content={metadata.description} />
      </Head>

      <ReactMarkdown
        children={markdownContent}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
};

const POST_PATHS = "md/posts";

export const getStaticPaths = async () => {
  const files = fs.readdirSync(POST_PATHS);

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
    .readFileSync(path.join(POST_PATHS, `${slug}.md`))
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
