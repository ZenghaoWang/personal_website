import styles from "./Navbar.module.scss";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/experience">
        <a>Experience</a>
      </Link>

      <Link href="/academics">
        <a>Academics</a>
      </Link>

      <Link href="/blog/home">
        <a>Blog</a>
      </Link>
    </div>
  );
}
