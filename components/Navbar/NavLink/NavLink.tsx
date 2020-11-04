import Link from "next/link";
import styles from "./NavLink.module.scss";
import { useRouter } from "next/router";

type NavLinkProps = { href: string };
/**
 * Render a navlink which changes color depending on whether the href it points to is the current page.
 */
const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  const router = useRouter();

  const isActive = (): boolean => {
    if (href === "/") {
      return href === router.pathname;
    }
    return router.pathname.startsWith(href);
  };

  const status = isActive() ? styles.active : styles.inactive;
  return (
    <Link href={href}>
      <a className={status}>{children}</a>
    </Link>
  );
};
export default NavLink;
