import styles from "./Navbar.module.scss";
import Link from "next/link";
import ActiveAnchor from "../ActiveAnchor/ActiveAnchor";

const NavLink: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <ActiveAnchor href={href}>{children}</ActiveAnchor>
    </Link>
  );
};
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink href="/">Home</NavLink>

      <NavLink href="/experience">Experience</NavLink>

      <NavLink href="/academics">Academics</NavLink>

      <NavLink href="/blog">Blog</NavLink>
    </div>
  );
}
