import Link from "next/link";
import styles from "./BlogPostListing.module.scss";

type BlogPostProps = {
  post: PostMetadata;
};

const BlogPostListing: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className={styles.container}>
      <Link href={`/blog/${post.slug}`}>
        <a>
          <h2 className={styles.title}>{post.title}</h2>
        </a>
      </Link>
      <h4 className={styles.date}>{post.date}</h4>
      <p className={styles.description}>{post.description}</p>
    </div>
  );
};

export default BlogPostListing;
