import Link from "next/link";
import styles from "./ActiveAnchor.module.scss";
import { useRouter } from "next/router";

/**
 * Render an anchor tag which changes color depending on whether the href it points to is the current page.
 */
const ActiveAnchor: React.FC<{ href: string }> = ({ children, href }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <a
      onClick={handleClick}
      href={href}
      className={router.pathname === href ? styles.active : styles.inactive}
    >
      {children}
    </a>
  );
};
export default ActiveAnchor;
