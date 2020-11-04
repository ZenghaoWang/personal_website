import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footerHeader}>Contact</h2>
      {/*_blank Opens link in new tab */}
      <a
        href="https://github.com/ZenghaoWang"
        target="_blank"
        rel="noopener noreferrer author"
      >
        My Github
        <img src="/github.svg" alt="Github Logo" className={styles.logo} />
      </a>

      <a
        href="https://linkedin.com/in/zenghao-wang"
        target="_blank"
        rel="noopener noreferrer author"
      >
        My Linkedin
        <img src="/linkedin.svg" alt="Linkedin Logo" className={styles.logo} />
      </a>

      <a
        href="mailto:zenghao.wang@mail.utoronto.ca"
        rel="noopener noreferrer author"
      >
        My Email
        <img src="/email.svg" alt="Email Logo" className={styles.logo} />
      </a>
    </footer>
  );
}
