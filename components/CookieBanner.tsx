import React from "react";
import styles from "../styles/CookieBanner.module.scss";

function CookieBanner() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        This website uses cookies to improve user experience. By using our
        website you consent to all cookies in accordance with our{" "}
        <a
          className={styles.policy}
          href="/cookiepolicy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookie Policy.
        </a>
        <a
          className={styles.accept}
          href="/cookiepolicy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accept
        </a>
      </div>
    </div>
  );
}

export default CookieBanner;
// This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
