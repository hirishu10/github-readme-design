/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
//
import { convertCookieData } from "../utils/convertCookieData";
import { logEvent } from "@firebase/analytics";
import { analytics } from "../firebase";

import router from "next/router";
import AllCard from "../components/AllCard";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

//::::> Get Redux Data
import { customSelector, customDispatch } from "../app/hooks";
import { setCookieEnabled, setGithubUsername } from "../redux/actions/index";

import axios from "axios";

const Home: NextPage = (data) => {
  const dispatch = customDispatch();
  const { cookieEnabled, githubUsername } = customSelector(
    (state) => state.rootReducer
  );

  const [errMesage, setErrMesage] = useState(false);
  const [succMessage, setSuccMessage] = useState(false);
  const [loadMessage, setLoadMessage] = useState(
    "👨🏻‍💻 Setting up please wait..... ⚡️"
  );
  const [inputValue, setInputValue] = useState(githubUsername);

  // ::> Some Important Flags
  const [GITHUB_FLAG, setGithubFlag] = useState(true);
  const [COOKIE_BANNER, setCookieBanner] = useState(true);
  const [getClickedFlag, setClickedFlag] = useState(false);
  const [getClickedFlagForEachCard, setClickedFlagForEachCard] =
    useState(false);

  const cardArray = [
    {
      title: "Header Design Card",
      backgroundImage: "/banner/headLight.svg",
      locked: false,
      comingSoon: false,
      link: "/headstart",
    },
    {
      title: "Metric Card",
      backgroundImage: "/metric/light.svg",
      locked: GITHUB_FLAG ? true : false,
      comingSoon: false,
      link: "/api/metricCard?user=",
    },
    {
      title: "Repo Pinned Card",
      backgroundImage: "/repoStar/light.svg",
      locked: GITHUB_FLAG ? true : false,
      comingSoon: false,
      link: "/star/repo/",
    },
    {
      title: "Most Language Used",
      backgroundImage: "/language/light.svg",
      locked: GITHUB_FLAG ? true : false,
      comingSoon: false,
      link: "/api/languageCard?user=",
    },
    {
      title: "Footer Design Card",
      backgroundImage: "/banner/headLight.svg",
      locked: true,
      comingSoon: true,
      link: "/headstart",
    },
  ];

  const getGithubData = async (e: { preventDefault: () => void }) => {
    setClickedFlag(true); //If user matched we not authorise user to send the API request again and again!
    setLoadMessage("Please wait...");
    if (!getClickedFlag) {
      // console.log("testingclicking.....") //::Debug
      //
      if (inputValue === "") {
        alert("Please enter Github Username");
        setClickedFlag(false);
      } else {
        try {
          axios
            .get(`https://api.github.com/users/${inputValue}`, {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/vnd.github.v3+json",
                Authorization: `token ${process.env.AUTH_TOKEN}`,
              },
            })
            .then((res) => {
              const testGit = res?.data;
              //
              e.preventDefault();
              if (inputValue === testGit?.login) {
                try {
                  setTimeout(() => {
                    setGithubFlag(false);
                    setErrMesage(false);
                    setSuccMessage(true);
                  }, 800);
                  //
                  // Just Optional for adding expire in the cookies
                  //********************************** */
                  const d = new Date();
                  d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
                  let expires = "expires=" + d.toUTCString();
                  // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
                  const documentCookies = document.cookie;
                  const cookie = convertCookieData(documentCookies);
                  cookie?.map((item, index) => {
                    if (
                      item?.key === "cookieEnabled" ||
                      item?.key === " cookieEnabled"
                    ) {
                      if (item?.value === "true") {
                        // if cookie enabled then it will remembered the github username otherwise not
                        //********* Adding Cookies ********** */
                        document.cookie = `githubUsername=${inputValue}; expires=${expires}; path=/;`;
                      }
                    }
                  });
                  //********************************** */
                } catch (error) {
                  console.log("Something went wrong!");
                  console.log("error", error);
                  setErrMesage(true);
                  setSuccMessage(false);
                }
              } else {
                alert("Sorry unauthorised user!");
                setErrMesage(true);
                setSuccMessage(false);
                setClickedFlag(false);
              }
            })
            .catch((err) => {
              alert(
                "Something went wrong!\nPlease check your internet connection\n" +
                  err
              );
              setClickedFlag(false);
              setLoadMessage("...");
            });
        } catch (error) {
          alert("Something went wrong!\nPlease check your internet connection");
          setClickedFlag(false);
          setLoadMessage("...");
        }
      }
    }
  };

  useEffect(() => {
    logEvent(analytics, "screen_view");
    // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
    // console.log("cookieEnabled :>> ", cookieEnabled);
    // console.log("process.env.NODE_ENV :>> ", process.env.NODE_ENV);
    //
    const documentCookies = document.cookie;
    // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
    // console.log("makeArray :>> ", makeArray);
    // console.log("customFunction(makeArray) :>> ", customFunction(makeArray));
    // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
    const cookie = convertCookieData(documentCookies);
    cookie?.map((item, index) => {
      // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
      // console.log("cookie :>> ", cookie);
      // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
      //
      if (item?.key === "cookieEnabled" || item?.key === " cookieEnabled") {
        if (item?.value === "true") {
          dispatch(setCookieEnabled(true));
          setTimeout(() => {
            setCookieBanner(true); // Refresh the Cookie Banner with the current cookieEnabled status
          }, 500);
        }
      }
      //
      if (item?.key === "githubUsername" || item?.key === " githubUsername") {
        dispatch(setGithubUsername(item?.value));
        if (item?.value !== "") {
          setTimeout(() => {
            setInputValue(githubUsername);
          }, 500);
        }
      }
    });
    //
    setCookieBanner(cookieEnabled);
    setTimeout(() => {
      setLoadMessage("...");
    }, 1500);
  }, [router, COOKIE_BANNER, cookieEnabled, githubUsername]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Github-Readme-Design-GUI</title>
        <meta name="Dashboard" content="From Github-Readme-Design" />
        <link rel="icon" href="/rishufavicon.ico" />
      </Head>
      <div
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "#072130",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/appLogo/backHeaderGUI.svg"
          alt="github-readme-design-api"
          width={1000}
          height={100}
        />
      </div>
      <main className={styles.outerContainer}>
        {errMesage ? (
          <div className={styles.errorContainer}>
            Sorry user not match 😶
            <span
              className={styles.errorContainerClose}
              onClick={(e) => {
                setErrMesage(false);
              }}
            >
              X
            </span>
          </div>
        ) : succMessage ? (
          <div className={styles.succContainer}>
            wow! user matched 🙂
            <span
              className={styles.succContainerClose}
              onClick={(e) => {
                setSuccMessage(false);
              }}
            >
              X
            </span>
          </div>
        ) : (
          <div className={styles.loadContainer}>{loadMessage}</div>
        )}
        {/*  */}
        <div className={styles.repoBoxContainer}>
          {/*  */}
          <div className={styles.repoBoxContainerLabel}>
            <div className={styles.repoBoxContainerLabelIcon}>
              <FontAwesomeIcon icon={faGithub} size={"4x"} style={{}} />
            </div>
            <div className={styles.repoBoxContainerLabelText}>
              Github Username
            </div>
          </div>
          {/*  */}
          <div className={styles.repoBoxContainerInput}>
            <input
              aria-label="repo_name"
              className={styles.repoBoxInput}
              placeholder={"Github Username"}
              value={inputValue}
              onChange={(e) => {
                e.preventDefault();
                setLoadMessage("...");
                setGithubFlag(true);
                setErrMesage(false);
                setSuccMessage(false);
                setInputValue(e.target.value);
                setClickedFlag(false);
              }}
            />
            <div
              className={styles.repoBoxButton}
              onMouseEnter={(e) => {
                e.preventDefault();
                e.currentTarget.style.color = "#333";
                e.currentTarget.style.transition = "0.3s";
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                e.currentTarget.style.color = "#bcbcbc";
                e.currentTarget.style.transition = "0.3s";
              }}
              onClick={getGithubData}
            >
              <FontAwesomeIcon icon={faArrowRight} size={"sm"} style={{}} />
            </div>
          </div>
        </div>

        {/* Below the design block */}
        <div className={styles.desingCard}>
          {cardArray?.map((item, index) => (
            <AllCard
              key={index}
              title={item?.title}
              backgroundImage={item?.backgroundImage}
              locked={item?.locked}
              comingSoon={item?.comingSoon}
              onClick={(e) => {
                e.preventDefault();
                /**
                 * Check if the browser is Chrome then push beacuse
                 * Chrome does not have issue whiele routing but other
                 * broswer do so we just replace instead push.
                 */
                const browserName =
                  navigator?.userAgent?.indexOf("Chrome") >= 0
                    ? "Chrome"
                    : "Other";
                // console.log("browserName :>> ", browserName); //::::> Debug
                // ::::>
                // Below Function to route ↓
                if (!getClickedFlagForEachCard) {
                  if (item?.locked && !item?.comingSoon) {
                    alert("Please enter Github Username");
                  } else if (item?.comingSoon && item?.locked) {
                    alert("We are working on this :)");
                  } else {
                    if (item?.title === "Repo Pinned Card") {
                      setLoadMessage("Please wait...");
                      setSuccMessage(false);
                      setErrMesage(false);
                      router.push(`${item?.link}${inputValue}`);
                      setClickedFlagForEachCard(true);
                      // ::::>
                    } else if (item?.title === "Metric Card") {
                      if (browserName === "Chrome") {
                        router.push(`${item?.link}${inputValue}`);
                      } else {
                        router
                          .push(`${item?.link}${inputValue}`)
                          .then((r) => {
                            alert(
                              "ℹ FYI (Information)\n> We are making the desing please wait.....\n> Please refresh the page if you click back.\n ~ From \n   Github-Readme-Design"
                            );
                          })
                          .catch((err) => {
                            console.log("err :>> ", err);
                          });
                      }
                      setClickedFlagForEachCard(true);
                      // ::::>
                    } else if (item?.title === "Most Language Used") {
                      if (browserName === "Chrome") {
                        router.push(`${item?.link}${inputValue}`);
                      } else {
                        router
                          .push(`${item?.link}${inputValue}`)
                          .then((r) => {
                            alert(
                              "ℹ FYI (Information)\n> We are making the desing please wait.....\n> Please refresh the page if you click back.\n ~ From \n   Github-Readme-Design"
                            );
                          })
                          .catch((err) => {
                            console.log("err :>> ", err);
                          });
                      }
                      setClickedFlagForEachCard(true);
                      // ::::>
                    } else {
                      router.push("/headstart");
                      setClickedFlagForEachCard(true);
                    }
                    // ::::>
                    setLoadMessage("Please Wait...");
                    setErrMesage(false);
                    setSuccMessage(false);
                  }
                }
              }}
            />
          ))}
        </div>
        {/* Above the design block */}
      </main>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 16,
          }}
        >
          <p>
            Read Full{" "}
            <span
              style={{
                fontWeight: 500,
                fontSize: 16,
                color: "#f74f4f",
              }}
            >
              API Documentation
            </span>
            :{" "}
            <span
              style={{
                fontWeight: 500,
                fontSize: 14,
                color: "#0e2d41",
              }}
            >
              https://github-readme-design.vercel.app/api
            </span>{" "}
            <a
              href="https://github-readme-design.vercel.app/api"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "blue",
              }}
            >
              Github-Readme-Design-API
            </a>
          </p>
          <br />
        </div>
      </div>
      {COOKIE_BANNER ? null : <CookieBanner />}
      <Footer fromFlag={true} />
    </div>
  );
};

export default Home;
