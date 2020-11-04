import styles from "./Navbar.module.scss";
import Link from "next/link";
import NavLink from "./NavLink/NavLink";
import { FunctionComponent } from "react";

const Navbar: FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <NavLink href="/">Home</NavLink>

      <NavLink href="/experience">Experience</NavLink>

      <NavLink href="/academics">Academics</NavLink>

      <NavLink href="/blog">Blog</NavLink>
    </div>
  );
};

export default Navbar;
