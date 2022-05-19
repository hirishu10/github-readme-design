import Image from "next/image";
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
