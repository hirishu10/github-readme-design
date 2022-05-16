import Image from "next/image";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://instantmarkdown.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* instant markdown previewer */}
        Sponsored by{" "}
        <span className={styles.logo}>
          <Image
            src="/instantMarkdown.png"
            alt="Instant Markdown Previewer Logo"
            width={150}
            height={20}
          />
        </span>
      </a>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
      <a
        href="https://github.com/hirishu10"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desinged by Rishu Chowdhary{" "}
        <span className={styles.logo}>
          <Image
            src="/rishufavicon.ico"
            alt="Rishu Chowdhary"
            width={30}
            height={30}
          />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
