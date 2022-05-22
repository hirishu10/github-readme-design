import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { useEffect } from "react";

// :::::: Store Config with the Redux
import { Provider } from "react-redux";
import { store } from "../store";
//::::::::: Personal :::::::::::
import { getConsoleDesign } from "../utils/getConsoleDesign";
import { logEvent } from "@firebase/analytics";
import { analytics } from "../firebase";

function MyApp({ Component, pageProps }: AppProps) {
  // This print one time only when app is loaded
  useEffect(() => {
    logEvent(analytics, "screen_view");
    // :::::::::::::: Console Design for Browser ::::::::::::::
    getConsoleDesign();
    // :::::::::::::: Console Design for Browser ::::::::::::::
  }, []);
  //
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
