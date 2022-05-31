import React, { useEffect } from "react";

import styles from "../styles/CookiePolicy.module.scss";
import $ from "jquery";
import Head from "next/head";
import { logEvent } from "@firebase/analytics";
import { analytics } from "../firebase";

const CookiePolicy = () => {
  //
  useEffect(() => {
    logEvent(analytics, "screen_view");
    $("body").css("background-color", "#F6F6F6");
  }, []);
  //
  return (
    <div>
      <Head>
        <title>{`🍪  Cookie Policy`}</title>
        <meta
          name="Cookie Policy"
          content="Github-Readme-Design Cookie Policy"
        />
        <meta
          name="cookie-policy"
          content="Cookie Policy for the Github-Readme-Design"
        />
        <link rel="icon" href="/rishufavicon.ico" />
        <link
          rel="preload"
          as="image"
          href="https://raw.githubusercontent.com/hirishu10/my-assets/main/github-readme-design/cookie.png"
        />
        <link
          rel="preload"
          as="image"
          href="https://raw.githubusercontent.com/hirishu10/my-assets/main/github-readme-design/cookiefooter.png"
        />
      </Head>
      <div className={styles.wrapper}>
        <p>
          <img
            src="https://raw.githubusercontent.com/hirishu10/my-assets/main/github-readme-design/cookie.png"
            alt="https://github.com/hirishu10"
          />
        </p>

        <h1 id="cookie-policy-for-github-readme-design">
          🍪 Cookie Policy for Github-Readme-Design
        </h1>

        <p>
          This is the Cookie Policy for Github-Readme-Design, accessible from{" "}
          <a href="https://github-readme-design.vercel.app/">
            Github-Readme-Design
          </a>
        </p>

        <h4 id="what-are-cookies">What Are Cookies❓</h4>

        <p>
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or 'break'
          certain elements of the sites functionality.
        </p>

        <h4>How We Use Cookies 🔌</h4>

        <p>
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>

        <h4>Disabling Cookies ⚠️</h4>

        <p>
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies.
        </p>

        <h3>🔐 The Cookies We Set</h3>

        <ul>
          <li>
            <p>Site preferences cookies 🚀</p>
          </li>
          <li>
            <p>
              ⚡️ In order to provide you with a great experience on this site
              we provide the functionality to set your preferences for how this
              site runs when you use it. In order to remember your preferences
              we need to set cookies so that this information can be called
              whenever you interact with a page is affected by your preferences.
            </p>
          </li>
        </ul>
        <p>
          <strong>Third Party Cookies 👨🏻‍💻</strong>
        </p>

        <p>
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </p>

        <ul>
          <li>
            <p>
              💻 Third party analytics are used to track and measure usage of
              this site so that we can continue to produce engaging content.
              These cookies may track things such as how long you spend on the
              site or pages you visit which helps us to understand how we can
              improve the site for you.
            </p>
          </li>
        </ul>

        <h3>ℹ More Information</h3>

        <p>
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren't sure whether you need
          or not it's usually safer to leave cookies enabled in case it does
          interact with one of the features you use on our site.
        </p>

        <p>
          For more general information on cookies, please read{" "}
          <a href="https://www.generateprivacypolicy.com/#cookies">
            "Cookies" article from the Privacy Policy Generator
          </a>
          .
        </p>

        <p>
          However if you are still looking for more information then you can
          contact us through one of our preferred contact methods:
        </p>

        <ul>
          <li>
            By visiting this link:{" "}
            <a href="https://github-readme-design.vercel.app/">
              https://github-readme-design.vercel.app/
            </a>
          </li>
        </ul>
      </div>
      <img
        id={"footer"}
        style={{}}
        width={"100%"}
        height={"100%"}
        src="https://raw.githubusercontent.com/hirishu10/my-assets/main/github-readme-design/cookiefooter.png"
        alt="https://github.com/hirishu10"
      />
    </div>
  );
};

export default CookiePolicy;
