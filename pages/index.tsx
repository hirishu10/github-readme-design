import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Home.module.scss";
//
import fs from "fs";
import path from "path";
import { convertCookieData } from "../utils/convertCookieData";
import { makeFile } from "../utils/makeFile.js";
//

const Home: NextPage = (data) => {
  const [errMesage, setErrMesage] = useState(false);
  const [succMessage, setSuccMessage] = useState(false);
  const [loadMessage, setLoadMessage] = useState("...");
  const [inputValue, setInputValue] = useState("");
  const [cookieData, setCookieData] = useState("");
  // useEffect(() => {
  //   console.log("inputValue", inputValue);
  // }, [inputValue]);

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

  // useEffect(() => {
  //   const documentCookies = document.cookie;
  //   // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
  //   // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
  //   const cookie = convertCookieData(documentCookies);
  //   cookie.map((item, index) => {
  //     // ::::::::::::::::::::::::::::::::::::: Cookie :::::::
  //     if (item?.key === " name") {
  //       setCookieData(item?.value);
  //     }
  //     console.log("cookieData", cookieData);
  //   });
  // }, [inputValue, cookieData]);

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
          <div className={styles.loadContainer}>
            {loadMessage}
            {/* <span
              className={styles.loadContainerString}
              // onClick={(e) => {
              //   setErrMesage(true);
              // }}
            >
              {loadMessage}
            </span> */}
          </div>
        )}
        {/*  */}
        <div className={styles.repoBoxContainer}>
          {/*  */}
          <div className={styles.repoBoxContainerLabel}>Github Username</div>
          {/*  */}
          <div className={styles.repoBoxContainerInput}>
            <input
              aria-label="repo_name"
              className={styles.repoBoxInput}
              placeholder={"Please enter you username"}
              value={inputValue}
              onChange={(e) => {
                e.preventDefault();
                setErrMesage(false);
                setSuccMessage(false);
                setInputValue(e.target.value);
                setTimeout(() => {
                  if (e?.target?.value === testGit?.login) {
                    try {
                      //********* Adding Cookies ********** */
                      // document.cookie = `name=${testGit?.login}; expires=${expires}; path=/;`;
                      // document.cookie = `name=${testGit?.login}; path=/;`;
                      //********************************** */
                      // makeFile(testGit?.name);
                      // console.log("data :>> ", data);
                    } catch (error) {
                      console.log("Something went wrong!");
                      console.log("error", error);
                    }
                    // if (
                    //   testGit?.login !== "" ||
                    //   testGit?.login !== undefined ||
                    //   testGit?.login !== null
                    // ) {
                    setTimeout(() => {
                      setErrMesage(false);
                      setSuccMessage(true);
                    }, 500);
                  } else if (e?.target?.value === "") {
                    setTimeout(() => {
                      setErrMesage(false);
                      setSuccMessage(false);
                    }, 500);
                  } else {
                    setTimeout(() => {
                      setErrMesage(true);
                      setSuccMessage(false);
                    }, 500);
                  }
                }, 300);
                // console.log("inputValue :>> ", inputValue);
              }}
            />
          </div>
        </div>

        {/* Below the design block */}
      </main>
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
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

export default Home;

// export async function getStaticProps() {
//   const testGit = {
//     login: "hirishu10",
//     id: 95957258,
//     node_id: "U_kgDOBbgxCg",
//     avatar_url: "https://avatars.githubusercontent.com/u/95957258?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/hirishu10",
//     html_url: "https://github.com/hirishu10",
//     followers_url: "https://api.github.com/users/hirishu10/followers",
//     following_url:
//       "https://api.github.com/users/hirishu10/following{/other_user}",
//     gists_url: "https://api.github.com/users/hirishu10/gists{/gist_id}",
//     starred_url:
//       "https://api.github.com/users/hirishu10/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/hirishu10/subscriptions",
//     organizations_url: "https://api.github.com/users/hirishu10/orgs",
//     repos_url: "https://api.github.com/users/hirishu10/repos",
//     events_url: "https://api.github.com/users/hirishu10/events{/privacy}",
//     received_events_url:
//       "https://api.github.com/users/hirishu10/received_events",
//     type: "User",
//     site_admin: false,
//     name: "Rishu Chowdhary",
//     company: null,
//     blog: "",
//     location: null,
//     email: null,
//     hireable: true,
//     bio: null,
//     twitter_username: null,
//     public_repos: 14,
//     public_gists: 0,
//     followers: 0,
//     following: 0,
//     created_at: "2021-12-11T07:43:50Z",
//     updated_at: "2022-04-14T06:45:23Z",
//   };
//   const head =
//     '<svg width="200" height="200" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/>';
//   const body = `<text x="10" y="50" textAnchor="start" fontSize="30" >${testGit?.name}</text>`;
//   const end = "</svg>";

//   const data = `${head}${body}${end}`;

//   fs.writeFile("test.svg", data, (err) => {
//     if (err) console.log(err);
//     else {
//       console.log("File written successfully\n");
//       // console.log("The written has the following contents:");
//       // console.log(fs.readFileSync("books.svg", "utf8"));
//     }
//   });
//   return {
//     props: {
//       data,
//     },
//   };
// }
