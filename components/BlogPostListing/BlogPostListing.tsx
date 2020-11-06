import Link from "next/link";
import styles from "./BlogPostListing.module.scss";

type BlogPostProps = {
  post: PostMetadata;
};

const BlogPostListing: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <h2 className={styles.title}>{post.title}</h2>
        <h3 className={styles.date}>{post.date}</h3>
        <p className={styles.description}>{post.description}</p>
      </a>
    </Link>
  );
};

export default BlogPostListing;
