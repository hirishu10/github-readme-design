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

const Home: NextPage = (data) => {
  // console.log("dataFromServer :>> ", data);

  const [errMesage, setErrMesage] = useState(false);
  const [succMessage, setSuccMessage] = useState(false);
  const [loadMessage, setLoadMessage] = useState("...");
  const [inputValue, setInputValue] = useState("");
  const [GITHUB_FLAG, setGithubFlag] = useState(false);
  const [COOKIE_CONFIG, setAutoCookie] = useState("");
  const [IMPORTANT_FLAG, setImportantValue] = useState(true);
  // const [cookieData, setCookieData] = useState(""); // This will for future release

  const testGit = {
    login: "hirishu10",
    id: 95957258,
    node_id: "U_kgDOBbgxCg",
    avatar_url: "https://avatars.githubusercontent.com/u/95957258?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/hirishu10",
    html_url: "https://github.com/hirishu10",
    followers_url: "https://api.github.com/users/hirishu10/followers",
    following_url:
      "https://api.github.com/users/hirishu10/following{/other_user}",
    gists_url: "https://api.github.com/users/hirishu10/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/hirishu10/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/hirishu10/subscriptions",
    organizations_url: "https://api.github.com/users/hirishu10/orgs",
    repos_url: "https://api.github.com/users/hirishu10/repos",
    events_url: "https://api.github.com/users/hirishu10/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/hirishu10/received_events",
    type: "User",
    site_admin: false,
    name: "Rishu Chowdhary",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: true,
    bio: null,
    twitter_username: null,
    public_repos: 14,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "2021-12-11T07:43:50Z",
    updated_at: "2022-04-14T06:45:23Z",
  };

  //   // [Optional]:: ==> Future Release ::::::::::::::::::::::::::::::::
  // useEffect(() => {
  //   const documentCookies = document.cookie;
  //   const cookie = convertCookieData(documentCookies);
  //   cookie.map((item, index) => {
  //     // ::::::::::::::::::::::::::::::::::::: Cookie :::::::
  //     if (item?.key === " name") {
  //       setCookieData(item?.value);
  //     }
  //     console.log("cookieData", cookieData);
  //   });
  // }, [inputValue, cookieData]);
  //   // ::::::::::::::::::::::::::::::::::::: <== Future Release:::::::

  // title={"Header Design Card"}
  // backgroundImage={"/headLight.svg"}
  // locked={true}
  // // comingSoon={true}
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
      locked: GITHUB_FLAG ? false : true,
      comingSoon: false,
      link: "/headstart",
    },
    {
      title: "Repo Pinned Card",
      backgroundImage: "/headLight.svg",
      locked: GITHUB_FLAG ? false : true,
      comingSoon: false,
      link: "/headstart",
    },
    {
      title: "Footer Design Card",
      backgroundImage: "/headLight.svg",
      locked: true,
      comingSoon: true,
      link: "/headstart",
    },
  ];

  const getGithubData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputValue === testGit?.login) {
      try {
        // console.log("data :>> ", data);
        setGithubFlag(true);
        setErrMesage(false);
        setSuccMessage(true);
        //
        setImportantValue(true);
        // Just Optional for adding expire in the cookies
        //********************************** */
        const d = new Date();
        d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
        // console.log("expires :>> ", expires);
        // console.log("d :>> ", d);
        // let cname = "rishu";
        // let cvalue = "successfully storign the cookies";
        // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        // document.cookie = cname + "=" + cvalue + ";";
        // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::

        //********* Adding Cookies ********** */
        document.cookie = `githubUser=${inputValue}; expires=${expires}; path=/;`;
        //********************************** */
        // <::::::::below is the example of the cookie syntax!
        // var c_value=escape(value) + "; expires=" + exdate.toUTCString(); + "; path=/spring; domain=aroth.no-ip.org";
        // ::::::::::::>
      } catch (error) {
        console.log("Something went wrong!");
        console.log("error", error);
        setErrMesage(false);
        setSuccMessage(true);
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
    const documentCookies = document.cookie;
    // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
    // console.log("makeArray :>> ", makeArray);
    // console.log("customFunction(makeArray) :>> ", customFunction(makeArray));
    // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
    const cookie = convertCookieData(documentCookies);
    cookie.map((item, index) => {
      // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
      console.log("cookie :>> ", cookie);
      // item?.key === " isDarkMode"
      //   ? console.log("check :>> ", item)
      //   : console.log("Sorry! can't find the isDarkMode");
      // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
      if (item?.key === "githubUser" || item?.key === " githubUser") {
        setAutoCookie(item?.value);
        if (IMPORTANT_FLAG) {
          setGithubFlag(true);
          setInputValue(item?.value);
          setImportantValue(false);
        }
      }
    });
  }, [inputValue, COOKIE_CONFIG, GITHUB_FLAG]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Github-Readme-Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navHeader}>Github-Readme-Design</nav>
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
                // setImportantValue(false);
                setErrMesage(false);
                setSuccMessage(false);
                setGithubFlag(false);
                setInputValue(e.target.value);
                // setTimeout(() => {
                //   if (e?.target?.value === testGit?.login) {
                //     try {
                //       //::::::::::::: For future release ::::::::::::::::::::::::>
                //       //********* Adding Cookies ********** */
                //       // document.cookie = `name=${testGit?.login}; expires=${expires}; path=/;`;
                //       // document.cookie = `name=${testGit?.login}; path=/;`;
                //       //********************************** */
                //       console.log("data :>> ", data);
                //       setGithubFlag(true);
                //     } catch (error) {
                //       console.log("Something went wrong!");
                //       console.log("error", error);
                //     }
                //     // if (
                //     //   testGit?.login !== "" ||
                //     //   testGit?.login !== undefined ||
                //     //   testGit?.login !== null
                //     // ) {
                //     setTimeout(() => {
                //       setErrMesage(false);
                //       setSuccMessage(true);
                //     }, 500);
                //   } else if (e?.target?.value === "") {
                //     alert("Please enter Github Username");
                //     setTimeout(() => {
                //       setErrMesage(false);
                //       setSuccMessage(false);
                //     }, 500);
                //   } else {
                //     setTimeout(() => {
                //       alert("Sorry unauthorised user!");
                //       setErrMesage(true);
                //       setSuccMessage(false);
                //     }, 500);
                //   }
                // }, 300);
                // // console.log("inputValue :>> ", inputValue);
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
                  router.push("/headstart");
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
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* instant markdown previewer */}
          Sponsored by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
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
