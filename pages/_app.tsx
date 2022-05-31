/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { useEffect, useState } from "react";

// :::::: Store Config with the Redux
import { Provider } from "react-redux";
import { store } from "../store";
//::::::::: Personal :::::::::::
import { getConsoleDesign } from "../utils/getConsoleDesign";
import { logEvent } from "@firebase/analytics";
import { analytics } from "../firebase";
import Splash from "../components/Splash";

function MyApp({ Component, pageProps }: AppProps) {
  const [load, setLoad] = useState(true);
  // This print one time only when app is loaded
  useEffect(() => {
    if (load) {
      setTimeout(() => {
        setLoad(false);
      }, 1800);
    }
    logEvent(analytics, "screen_view");
    // :::::::::::::: Console Design for Browser ::::::::::::::
    getConsoleDesign();
    // :::::::::::::: Console Design for Browser ::::::::::::::
  }, []);
  //
  return (
    <Provider store={store}>
      {load ? <Splash /> : <Component {...pageProps} />}
    </Provider>
  );
}

export default MyApp;
