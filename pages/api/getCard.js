// import TestCard from "../../components/TestCard.tsx";
// import TestCard from "../../utils/test.html";
// import path from "node/path";
// import TestCard from "../../components/TestCard.jsx";
import TestCard from "../../components/TestCard";
import Personalpagefortesting from "../personalpagefortesting";
import sCode from "../../styles/GithubProfile.module.scss";

export default function handler(req, res) {
  let name = "RIshu Choahasdfjh";
  if (req.method === "GET") {
    // Process a POST request
    try {
      // res.status(200).send({
      //   access: "Success",
      //   message: "Hello this is working",
      // });
      // res.write(<TestCard />);
      // res.sendFile("../../utils/test.html");
      // res.send(TestCard());
      // *
      // res.send(
      //   '<div><svg width="283" height="64" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/></svg></div>'
      // );
      // *
      // res.send(
      //   '<svg width="800" height="200" xmlns="http://www.w3.org/2000/svg" color="red" > <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@500&display=swap" rel="stylesheet" ></link> <g className={sCode.groupFirst}> <rect width="100%" height="40%" fill="lightgreen" strokewidth="1" /><text className={sCode.textLayout} x="10" y="50" textAnchor="start" font-size="30" >\'{name}\'</text><text className={sCode.textLayout} x="500" y="50" textAnchor="start" fontSize="18">{getDateTime}</text></g></svg>'
      // );

      // res.header("Content-Type", "image/svg+xml");
      // res
      //   .status(200)
      //   .sendRaw(
      //     '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="400" height="180"> <rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke: black;stroke-width:5;opacity:0.5" /> </svg> '
      //   );
      res.send(
        '<div><svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="black" /> <circle cx="150" cy="100" r="90" fill="blue" /> </svg></div>'
      );
      // res
      //   .header("Content-Type", "image/svg+xml")
      //   .send(
      //     '<svg width="283" height="64" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/></svg>'
      //   );
      //   res.status(401).send({
      //     access: "Denied",
      //     message: "You are not authorized to fetch the data",
      //     copyright: "© Copyright Rishu Chowdhary 2022 | All rights reserved",
      //   });
    } catch (error) {
      res.status(404).send({
        access: "Denied",
        message: "Sorry for the inconvenience",
        errorMessage: error,
      });
    }
  }
}
