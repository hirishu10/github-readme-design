// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

// type Data = {
//   name: string;
// };

// res: NextApiResponse<Data>
export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
    email: "hi.10rishu@gmail.com",
    hireable: true,
    bio: null,
    twitter_username: "@rishuchowdhary",
    public_repos: 14,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "2021-12-11T07:43:50Z",
    updated_at: "2022-04-14T06:45:23Z",
  };
  const title = "Software Developer";
  // const title = "Full Stack Developer";
  // const title = "Software Engineering II";
  // const title = "Data Analyst";

  const name = "Rishu Chowdhary";
  // const r = useRouter();
  // console.log("r", req?.query?.name);
  // req?.headers
  const head =
    // '<svg width="200" height="200" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/>';
    // `<svg width="1280" height="200" viewBox="0 0 1280 200" xmlns="http://www.w3.org/2000/svg" style="box-shadow: 0 0 5px 10px rgba(0,0,0,.12);">
    `
    <svg width="1280" height="150" viewBox="0 0 1280 150" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect width="1280" height="150" fill="none" />
          <text x="1100" y="60" text-anchor="start" font-size="50" fill="#f82020" font-family="system-ui,sans-serif" font-weight="bolder">
            14
          </text>
          <text x="1160" y="60" text-anchor="start" font-size="35" font-family="system-ui,sans-serif" font-weight="medium"
          >
            May
          </text>
          <text x="1100" y="110" text-anchor="start" font-size="60" font-family="system-ui,sans-serif"
          >
            2022
          </text>
        </g>
        <g>
          <rect x="0" y="135" width="1280" height="15" style="fill:#333;"
          ></rect>
          <text x="1180" y="145" text-anchor="start" font-size="8" fill="silver" font-family="system-ui,sans-serif"
          >Github-Readme-Design</text>
        </g>
</svg>
`;

  //
  // const body = `<text x="10" y="50" textAnchor="start" fontSize="30" >${req?.query?.name}</text>`;
  // const body = `<text x="10" y="50" textAnchor="start" fontSize="30" >${name}</text>`;
  // const end = "</svg>";

  // const data = `${head}${body}${end}`;
  const data = `${head}`;

  fs.writeFile("test.svg", data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      // console.log("The written has the following contents:");
      // console.log(fs.readFileSync("books.svg", "utf8"));
    }
  });
  const filePath = path.join(process.cwd(), "/test.svg");
  if (req.method === "GET") {
    try {
      const buffer = fs.readFileSync(filePath);
      res.setHeader("Content-Type", "image/svg+xml");
      setTimeout(() => {
        res.status(200).send(buffer);
      }, 500);
    } catch (error) {
      res.status(404).send({
        access: "Denied",
        message: "Sorry for the inconvenience",
        errorMessage: error,
      });
    }
  }
}

// <svg width="1280" height="200" viewBox="0 0 1280 200" xmlns="http://www.w3.org/2000/svg">
// <style>
// @import url("https://fonts.googleapis.com/css?family=Poppins:500,700,500sm");
//   .outer{
//     font-family: Poppins, sans-serif;
//     fill: none;
//   }
// </style>
// <g>
//   <rect width="1280" height="200" class="outer"/>
//   <text x="20" y="70" text-anchor="start" font-size="50">Rishu Chowdhary</text>
//   <text x="20" y="100" text-anchor="start" font-size="20">👨🏻‍💻 Software Developer</text>
//   <text x="20" y="130" text-anchor="start" font-size="20">📧 hi.10rishu@gmail.com</text>
//   <text x="1050" y="80" text-anchor="start" font-size="60" fill="#f82020">13</text>
//   <text x="1110" y="80" text-anchor="start" font-size="40">May</text>
//   <text x="1050" y="150" text-anchor="start" font-size="70">2022</text>
// </g>
// <g>
// <text x="1150" y="190" text-anchor="start" font-size="10" fill="#e3e3e3">Github-Readme-Design</text>
// </g>
// </svg>

// <svg width="1280" height="200" viewBox="0 0 1280 200" xmlns="http://www.w3.org/2000/svg">
// <g>
//   <rect width="1280" height="200" fill="none"/>
//   <text x="20" y="70" text-anchor="start" font-size="50">Rishu Chowdhary</text>
//   <text x="20" y="100" text-anchor="start" font-size="20">👨🏻‍💻 Software Developer</text>
//   <text x="20" y="130" text-anchor="start" font-size="20">📧 hi.10rishu@gmail.com</text>
//   <text x="1050" y="80" text-anchor="start" font-size="60" fill="#f82020">13</text>
//   <text x="1110" y="80" text-anchor="start" font-size="40">May</text>
//   <text x="1050" y="150" text-anchor="start" font-size="70">2022</text>
// </g>
// <g>
// <text x="1150" y="190" text-anchor="start" font-size="10" fill="#e3e3e3">Github-Readme-Design</text>
// </g>
// </svg>

// export default function handler(req, res) {
//   // const r = useRouter();
//   // console.log("r", req?.query?.name);
//   // req?.headers
//   // const head =
//   //   '<svg width="200" height="200" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/>';
//   // const body = `<text x="10" y="50" textAnchor="start" fontSize="30" >${req?.query?.name}</text>`;
//   // const end = "</svg>";

//   // const data = `${head}${body}${end}`;

//   // fs.writeFile("test.svg", data, (err) => {
//   //   if (err) console.log(err);
//   //   else {
//   //     console.log("File written successfully\n");
//   //     // console.log("The written has the following contents:");
//   //     // console.log(fs.readFileSync("books.svg", "utf8"));
//   //   }
//   // });

//   const filePath = path?.join(process?.cwd(), "/test.svg");

//   if (req.method === "GET") {
//     // Process a POST request
//     try {
//       // const filePath = path.join(process.cwd(), "/test.svg");
//       // const buffer = fs.readFileSync(filePath);
//       // res.setHeader("Content-Type", "image/svg+xml");
//       // res.send(buffer);
//       // setTimeout(() => {
//       //   const filePath = path.join(process.cwd(), "/test.svg");
//       const buffer = fs?.readFileSync(filePath);
//       res.setHeader("Content-Type", "image/svg+xml");
//       res.status(200)?.send(buffer);
//       // res.send(buffer);
//       // }, 2000);
//       //
//       // res.status(200).send({
//       //   access: "Success",
//       //   message: "Ok error gone?",
//       // });
//       //
//       //
//       //   res.status(401).send({
//       //     access: "Denied",
//       //     message: "You are not authorized to fetch the data",
//       //     copyright: "© Copyright Rishu Chowdhary 2022 | All rights reserved",
//       //   });
//     } catch (error) {
//       res.status(404).send({
//         access: "Denied",
//         message: "Sorry for the inconvenience",
//         errorMessage: error,
//       });
//     }
//   }
// }

('<svg width="1280" height="200" viewBox="0 0 1280 200" className={sCode.outer} xmlns="http://www.w3.org/2000/svg" style="boxShadow: 0px 0px 5px 1px #acacac;"> <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@500&display=swap" rel="stylesheet" ></link> <g> <rect width="100%" height="100%" style="fill:#ffffff,strokeWidth: 1;" /></svg>');

// <svg xmlns="http://www.w3.org/2000/svg" width="495" height="195" viewBox="0 0 495 195" fill="none">
//         <style>
//           .header {
//             font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
//             fill: #2f80ed;
//             animation: fadeInAnimation 0.8s ease-in-out forwards;
//           }
//           @supports(-moz-appearance: auto) {
//             /* Selector detects Firefox */
//             .header { font-size: 15.5px; }
//           }

//     .stat {
//       font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #434d58;
//     }
//     @supports(-moz-appearance: auto) {
//       /* Selector detects Firefox */
//       .stat { font-size:12px; }
//     }
//     .stagger {
//       opacity: 0;
//       animation: fadeInAnimation 0.3s ease-in-out forwards;
//     }
//     .rank-text {
//       font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif; fill: #434d58;
//       animation: scaleInAnimation 0.3s ease-in-out forwards;
//     }

//     .bold { font-weight: 700 }
//     .icon {
//       fill: #4c71f2;
//       display: none;
//     }

//     .rank-circle-rim {
//       stroke: #2f80ed;
//       fill: none;
//       stroke-width: 6;
//       opacity: 0.2;
//     }
//     .rank-circle {
//       stroke: #2f80ed;
//       stroke-dasharray: 250;
//       fill: none;
//       stroke-width: 6;
//       stroke-linecap: round;
//       opacity: 0.8;
//       transform-origin: -10px 8px;
//       transform: rotate(-90deg);
//       animation: rankAnimation 1s forwards ease-in-out;
//     }

//     @keyframes rankAnimation {
//       from {
//         stroke-dashoffset: 251.32741228718345;
//       }
//       to {
//         stroke-dashoffset: 126.97466698901034;
//       }
//     }

//     /* Animations */
//     @keyframes scaleInAnimation {
//       from {
//         transform: translate(-5px, 5px) scale(0);
//       }
//       to {
//         transform: translate(-5px, 5px) scale(1);
//       }
//     }
//     @keyframes fadeInAnimation {
//       from {
//         opacity: 0;
//       }
//       to {
//         opacity: 1;
//       }
//     }

//         </style>

//         <rect data-testid="card-bg" x="0.5" y="0.5" rx="4.5" height="99%" stroke="#e4e2e2" width="494" fill="#fffefe" stroke-opacity="1"/>

//       <g data-testid="card-title" transform="translate(25, 35)">
//         <g transform="translate(0, 0)">
//       <text x="0" y="0" class="header" data-testid="header">Rishu Chowdhary's GitHub Stats</text>
//     </g>
//       </g>

//         <g data-testid="main-card-body" transform="translate(0, 55)">

//     <g data-testid="rank-circle" transform="translate(400, 47.5)">
//         <circle class="rank-circle-rim" cx="-10" cy="8" r="40"/>
//         <circle class="rank-circle" cx="-10" cy="8" r="40"/>
//         <g class="rank-text">
//           <text x="-5" y="3" alignment-baseline="central" dominant-baseline="central" text-anchor="middle">
//             A+
//           </text>
//         </g>
//       </g>

//     <svg x="0" y="0">
//       <g transform="translate(0, 0)">
//     <g class="stagger" style="animation-delay: 450ms" transform="translate(25, 0)">

//       <text class="stat bold" y="12.5">Total Stars Earned:</text>
//       <text class="stat" x="170" y="12.5" data-testid="stars">13</text>
//     </g>
//   </g><g transform="translate(0, 25)">
//     <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">

//       <text class="stat bold" y="12.5">Total Commits (2022):</text>
//       <text class="stat" x="170" y="12.5" data-testid="commits">146</text>
//     </g>
//   </g><g transform="translate(0, 50)">
//     <g class="stagger" style="animation-delay: 750ms" transform="translate(25, 0)">

//       <text class="stat bold" y="12.5">Total PRs:</text>
//       <text class="stat" x="170" y="12.5" data-testid="prs">2</text>
//     </g>
//   </g><g transform="translate(0, 75)">
//     <g class="stagger" style="animation-delay: 900ms" transform="translate(25, 0)">

//       <text class="stat bold" y="12.5">Total Issues:</text>
//       <text class="stat" x="170" y="12.5" data-testid="issues">0</text>
//     </g>
//   </g><g transform="translate(0, 100)">
//     <g class="stagger" style="animation-delay: 1050ms" transform="translate(25, 0)">

//       <text class="stat bold" y="12.5">Contributed to:</text>
//       <text class="stat" x="170" y="12.5" data-testid="contribs">0</text>
//     </g>
//   </g>
//     </svg>

//         </g>
//       </svg>
