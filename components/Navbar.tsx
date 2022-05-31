/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import styles from "../styles/Navbar.module.scss";

type FooterConfig = {
  title: string;
};

function Footer({ title }: FooterConfig) {
  return (
    <div className={styles.container}>
      <nav className={styles.navHeader}>{title}</nav>
    </div>
  );
}

export default Footer;
