/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import React from "react";
import styles from "../styles/CookieBanner.module.scss";

import $ from "jquery";
import "animate.css";
//::::> Get Redux Data
import { customSelector, customDispatch } from "../app/hooks";
import { setCookieEnabled } from "../redux/actions/index";

function CookieBanner() {
  const dispatch = customDispatch();
  const { cookieEnabled } = customSelector((state) => state.rootReducer);

  return (
    <div id={"cookieBanner"} className={styles.outerContainer}>
      <div className={styles.container}>
        This website uses <span style={{ marginRight: 5 }}>{`cookies 🍪`}</span>{" "}
        to improve user experience. By using our website you consent to all
        cookies in accordance with our{" "}
        <a
          className={styles.policy}
          href="/cookiepolicy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookie Policy.
        </a>
        <button
          className={styles.accept}
          onClick={(e) => {
            e.preventDefault();
            console.log("Working");
            $("#cookieBanner").addClass("animate__animated animate__zoomOut");
            //********* Adding Cookies ********** */
            //********************************** */
            const d = new Date();
            d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            document.cookie = `cookieEnabled=${true}; expires=${expires}; path=/;`;
            setTimeout(() => {
              dispatch(setCookieEnabled(true));
              $("#cookieBanner").removeClass(
                "animate__animated animate__zoomOut"
              );
            }, 500);
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
// This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
