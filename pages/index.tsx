import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowRight, faCogs } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
//
import fs from "fs";
import path from "path";
import { convertCookieData } from "../utils/convertCookieData";
//
import $ from "jquery";
import router from "next/router";
import AllCard from "../components/AllCard";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Navbar from "../components/Navbar";

//::::> Get Redux Data
import { customSelector, customDispatch } from "../app/hooks";
import { setCookieEnabled, setGithubUsername } from "../redux/actions/index";

const Home: NextPage = (data) => {
  const dispatch = customDispatch();
  const { cookieEnabled, githubUsername } = customSelector(
    (state) => state.rootReducer
  );
  console.log("cookieEnabled :>> ", cookieEnabled);
  console.log("process.env.NODE_ENV :>> ", process.env.NODE_ENV);

  // console.log("dataFromServer :>> ", data);

  const [errMesage, setErrMesage] = useState(false);
  const [succMessage, setSuccMessage] = useState(false);
  const [loadMessage, setLoadMessage] = useState(
    "👨🏻‍💻 Setting up please wait..... ⚡️"
  );
  const [inputValue, setInputValue] = useState(githubUsername);

  // ::> Some Important Flags
  const [GITHUB_FLAG, setGithubFlag] = useState(true);
  const [COOKIE_BANNER, setCookieBanner] = useState(true);

  const cardArray = [
    {
      title: "Header Design Card",
      backgroundImage: "/headLight.svg",
      locked: false,
      comingSoon: false,
      link: "/headstart",
    },
    {
      title: "Metric Card",
      backgroundImage: "/headLight.svg",
      locked: GITHUB_FLAG ? true : false,
      comingSoon: false,
      link: "/headstart",
    },
    {
      title: "Repo Pinned Card",
      backgroundImage: "/headLight.svg",
      locked: GITHUB_FLAG ? true : false,
      comingSoon: false,
      link: "/star/repo/",
    },
    {
      title: "Footer Design Card",
      backgroundImage: "/headLight.svg",
      locked: true,
      comingSoon: true,
      link: "/headstart",
    },
  ];

  const getGithubData = async (e: { preventDefault: () => void }) => {
    // let name = context?.params?.user;
    // const res = await fetch(`https://api.github.com/users/${name}/starred`);
    const res = await fetch(`https://api.github.com/users/${inputValue}`);
    // const test = await res.json();
    // console.log("testGit :>> ", test);
    const testGit = await res.json();

    e.preventDefault();
    if (inputValue === testGit?.login) {
      try {
        setLoadMessage("Please wait...");
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
          if (item?.key === "cookieEnabled" || item?.key === " cookieEnabled") {
            if (item?.value === "true") {
              // if cookie enabled then it will remembered the github username otherwise not
              //********* Adding Cookies ********** */
              document.cookie = `githubUsername=${inputValue}; expires=${expires}; path=/;`;
            }
          }
        });
        //********************************** */
        // <::::::::below is the example of the cookie syntax!
        // var c_value=escape(value) + "; expires=" + exdate.toUTCString(); + "; path=/spring; domain=aroth.no-ip.org";
        // ::::::::::::>
      } catch (error) {
        console.log("Something went wrong!");
        console.log("error", error);
        setErrMesage(true);
        setSuccMessage(false);
      }
    } else if (inputValue === "") {
      alert("Please enter Github Username");
    } else {
      alert("Sorry unauthorised user!");
      setErrMesage(true);
      setSuccMessage(false);
    }
  };

  useEffect(() => {
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
            setGithubFlag(false);
          }, 500);
        }
      }
    });
    //
    setCookieBanner(cookieEnabled);
    setTimeout(() => {
      setLoadMessage("...");
    }, 1500);
  }, [COOKIE_BANNER, cookieEnabled, githubUsername]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Github-Readme-Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <nav className={styles.navHeader}>Github-Readme-Design</nav> */}
      <Navbar title={"Github-Readme-Design"} />
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
                setGithubFlag(true);
                setErrMesage(false);
                setSuccMessage(false);
                setInputValue(e.target.value);
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
                    setTimeout(() => {
                      setLoadMessage("...");
                    }, 800);
                  } else {
                    router.push("/headstart");
                  }
                }
              }}
            />
          ))}
        </div>
        {/* Above the design block */}
      </main>
      {/*  */}
      {/* <div> */}
      {/*  */}
      {/* <iframe
          src="http://instantmarkdown.herokuapp.com/"
          width="100%"
          height="500"
          style={{ border: "1px solid black" }}
        ></iframe> */}
      {/*  */}
      {/* </div> */}
      {/*  */}
      {COOKIE_BANNER ? null : <CookieBanner />}
      {/* {!cookieEnabled ? <CookieBanner /> : null} */}
      {/* <CookieBanner /> */}
      <Footer />
    </div>
  );
};

// This gets called on every request
// export async function getServerSideProps(_context: any) {
//   const githubUser = [""];
//   const documentCookies = document.cookie;
//   // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
//   // console.log("makeArray :>> ", makeArray);
//   // console.log("customFunction(makeArray) :>> ", customFunction(makeArray));
//   // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
//   const cookie = convertCookieData(documentCookies);
//   cookie.map((item, index) => {
//     // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
//     console.log("cookie :>> ", cookie);
//     // item?.key === " isDarkMode"
//     //   ? console.log("check :>> ", item)
//     //   : console.log("Sorry! can't find the isDarkMode");
//     // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
//     if (item?.key === "githubUser" || item?.key === " githubUser") {
//       githubUser.push(item?.value);
//     }
//   });
//   return {
//     props: {
//       data: githubUser?.length > 0 ? githubUser[0] : "",
//     },
//   };
// }

export default Home;
