import fs from "fs";
import path from "path";
import marked from "marked";
import matter from "gray-matter";
import Head from "next/head";

type PostProps = {
  htmlString: string;
  metadata: { [key: string]: any };
};

const Post = ({ htmlString, metadata }: PostProps) => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta title="description" content={metadata.description} />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
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
  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      metadata: parsedMarkdown.data,
    },
  };
};
export default Post;
