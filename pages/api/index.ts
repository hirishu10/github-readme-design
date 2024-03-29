/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

type Data = string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  //
  if (req.method === "GET") {
    const data = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="/rishufavicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="Github-Readme-Design-API"
        content="Github-Readme-Design-API is the API documentation which help to use the github-readme-design feature using API." />
      <title>Github-Readme-Design-API</title>
    </head>
    
    <body style="background-color: #f6f6f6">
    
      <style>
        .wrapper {
          font-size: 16px;
          transition: 0.5s;
          font-family: system-ui, sans-serif;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
    
        .insideWrapper {
          width: 80%;
        }
    
        .hljs {
          background-color: transparent;
        }
    
        .insideWrapper>p {
          line-height: 2;
        }
    
        .insideWrapper>h1 {
          padding-bottom: 8px;
          color: #232930;
          border-bottom: 1px solid #d7dee5;
        }
    
        .insideWrapper>h1>img {
          height: 30px;
        }
    
        .insideWrapper>h1 img:first-child {
          padding-left: 300px;
        }
    
        .insideWrapper>h2 {
          padding-bottom: 8px;
          color: #232930;
          border-bottom: 1px solid #d7dee5;
          display: flex;
        }
    
        .insideWrapper>h2>img {
          width: 30px;
          height: 30px;
          padding-top: 5px;
          padding-left: 10px;
        }
    
        .insideWrapper>h2 img:first-child {
          padding-left: 300px;
        }
    
        .insideWrapper>h4 {
          font-weight: 600;
        }
    
        .insideWrapper>h6 {
          font-size: 0.8em;
        }
    
        .insideWrapper>p>code {
          padding: 5px;
          border-radius: 5px;
          font-size: 0.9em;
        }
    
        .insideWrapper>pre {
          display: block;
          overflow: hidden;
          padding: 10px 0 10px 20px;
          margin-left: 20px;
          border-radius: 5px;
          line-height: 1.5;
          font-size: 0.8em;
          font-family: Poppins, sans-serif;
          font-weight: 600;
        }
    
        .insideWrapper>p>a {
          color: #004fc7;
          text-decoration: none;
        }
    
        .insideWrapper>p>a:hover {
          text-decoration: underline;
        }
    
        .insideWrapper>blockquote {
          height: 20px;
          border-left: 3px solid #beceed;
        }
    
        .insideWrapper>blockquote>p {
          padding-left: 15px;
          color: #6c6f78;
          font-weight: 500;
        }
    
        .insideWrapper>table {
          border-collapse: collapse;
          border: 1px solid #beceed;
        }
    
        .insideWrapper>thead {
          border-bottom: 1px solid #beceed;
        }
    
        .insideWrapper>tr>th {
          border-right: 1px solid #beceed;
          padding: 10px;
        }
    
        .insideWrapper>tbody>tr {
          border-bottom: 1px solid #beceed;
        }
    
        .insideWrapper>tbody>td {
          border-right: 1px solid #beceed;
          text-align: center;
          padding: 10px;
        }
    
        .insideWrapper>tbody>code {
          padding: 5px;
          border-radius: 5px;
          background-color: #e8ebef;
          font-size: 0.9em;
        }
    
        .insideWrapper>ul {
          font-size: 1em;
          line-height: 1.5em;
          font-weight: 350;
        }
    
        .insideWrapper>li>a {
          text-decoration: none;
          color: #004fc7;
        }
    
        .insideWrapper>li>a:hover {
          text-decoration: underline;
        }
    
        .insideWrapper>ol {
          font-size: 1em;
          line-height: 1.8em;
          font-weight: 500;
        }
    
        img {
          display: block;
          max-width: 90%;
        }
    
        #badges {
          display: flex;
          justify-content: center;
          align-items: center;
        }
    
        #badges>p {
          width: 100px;
          height: 30px;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
    
        #badges>img {
          width: 100%;
          height: 80%;
        }
    
        .containerForLogo {
          width: 100%;
        }
    
        .containerForLogoTitle {
          width: 100%;
          height: 50%;
          color: #d49f00;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
    
        .containerForLogoImage {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
    
      <div class="wrapper">
        <div class="insideWrapper">
          <p style="
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              ">
            <img src="/appLogo/backHeaderAPI.svg" alt="github-readme-design-api" />
          </p>
    
          <h2 id="title-for-header">
            🔌 Application Programming Interface (API)
          </h2>
    
    
          <h4 id="what-is-api">What is API❓</h4>
    
          <p>
            An application programming interface (API) is a connection between
            computers or between computer programs. It is a type of software
            interface, offering a service to other pieces of software. A document
            or standard that describes how to build or use such a connection or
            interface is called an API specification. A computer system that meets
            this standard is said to implement or expose an API. The term API may
            refer either to the specification or to the implementation.
          </p>
    
          <h3 id="prerequisite">Prerequisite 🚀</h3>
    
          <ul>
            <li>
              <p>Valid Github Username 👨🏻‍💻</p>
            </li>
            <li>
              <p>Valid Github Repository Name 📕</p>
            </li>
          </ul>
    
          <br />
          <br />
    
          <!-- ****************************************************************** -->
    
          <h2 id="banners">Banner's 🪧</h2>
    
          <p>
            Doesn't require any username or Repository name.
          </p>
    
          <!--  Light Banner-->
          <div style="width:100%;height:100px;background-color:none;">
            <!-- First -->
            <div
              style="width:100%;height:30%;background-color:none;display:flex;justify-content: flex-start;align-items: center;border-bottom: 1px solid #031018;">
              <div style="width:150px;height:100%;background-color:grey;display:flex;">
                <div
                  style="width:60%;height:100%;background-color:#031018;color:white;display:flex;justify-content: center;align-items: center">
                  Method</div>
                <div
                  style="width:40%;height:100%;background-color:#1ae000;color:#031018;display:flex;justify-content: center;align-items: center">
                  GET</div>
              </div>
              <p style="padding-left: 10px;"> Light Banner</p>
            </div>
            <!-- Second -->
            <div style="width:100%;height:70%;background-color:none;">
              <div
                style="width:100%;height:95%;background-color:none; display:flex;justify-content: flex-start;align-items: center;padding-left: 20px;">
                API endpoint → <p style="padding-left: 5px;color:#0e2d41;">
                  https://github-readme-design.vercel.app/api/getHeadLight</p>
              </div>
              <div style="width:100%;height:5%;background-color:#031018;">
              </div>
            </div>
          </div>
    
          <!--  Light Banner-->
    
          <br />
          <br />
    
    
          <!--  Dark Banner-->
          <div style="width:100%;height:100px;background-color:none;">
            <!-- First -->
            <div
              style="width:100%;height:30%;background-color:none;display:flex;justify-content: flex-start;align-items: center;border-bottom: 1px solid #031018;">
              <div style="width:150px;height:100%;background-color:grey;display:flex;">
                <div
                  style="width:60%;height:100%;background-color:#031018;color:white;display:flex;justify-content: center;align-items: center">
                  Method</div>
                <div
                  style="width:40%;height:100%;background-color:#1ae000;color:#031018;display:flex;justify-content: center;align-items: center">
                  GET</div>
              </div>
              <p style="padding-left: 10px;"> Dark Banner</p>
            </div>
            <!-- Second -->
            <div style="width:100%;height:70%;background-color:none;">
              <div
                style="width:100%;height:95%;background-color:none; display:flex;justify-content: flex-start;align-items: center;padding-left: 20px;">
                API endpoint → <p style="padding-left: 5px;color:#0e2d41;">
                  https://github-readme-design.vercel.app/api/getHeadDark</p>
              </div>
              <div style="width:100%;height:5%;background-color:#031018;">
              </div>
            </div>
          </div>
    
          <!--  Dark Banner-->
          <!--  ***********************************************************************************************  -->
    
    
          <br />
          <br />
          <br />
          <br />
    
    
          <!--  Pinned Repository-->
    
          <h2 id="pinned-repo">Pinned Repository 📕</h2>
    
          <p>
            Require the Github <span style="font-weight:bold;">Username</span> and the <span
              style="font-weight:bold;">Repository Name</span>.
            <br />
            If you have the License added inside the Repository then will be fetch automatically otherwise you can forcely
            add any license for your repository just add this line <span style="font-weight:bold;">&license=MIT</span> <span
              style="font-style: italic;font-size: 14px;">(We have added MIT here but you can add your own)</span> to
            the end of API.
            <br />
          <p>
            <span style="font-style:italic;text-decoration: underline;">Example:</span>
            <span
              style="padding-left: 5px;color:#0e2d41;">https://github-readme-design.vercel.app/api/starRepo/getStarLight?user=username&repo=repository-name&license=MIT</span>
          </p>
          </p>
    
          <!-- Light Starred Repositiry -->
    
          <div style="width:100%;height:100px;background-color:none;">
            <!-- First -->
            <div
              style="width:100%;height:30%;background-color:none;display:flex;justify-content: flex-start;align-items: center;border-bottom: 1px solid #031018;">
              <div style="width:150px;height:100%;background-color:grey;display:flex;">
                <div
                  style="width:60%;height:100%;background-color:#031018;color:white;display:flex;justify-content: center;align-items: center">
                  Method</div>
                <div
                  style="width:40%;height:100%;background-color:#1ae000;color:#031018;display:flex;justify-content: center;align-items: center">
                  GET</div>
              </div>
              <p style="padding-left: 10px;"> Light Starred Repository</p>
            </div>
            <!-- Second -->
            <div style="width:100%;height:70%;background-color:none;">
              <div
                style="width:100%;height:95%;background-color:none; display:flex;justify-content: flex-start;align-items: center;padding-left: 20px;">
                API endpoint → <p style="padding-left: 5px;color:#0e2d41;">
                  https://github-readme-design.vercel.app/api/starRepo/getStarLight?user=username&repo=repository-name
                </p>
              </div>
              <div style="width:100%;height:5%;background-color:#031018;">
              </div>
            </div>
          </div>
    
          <!-- Light Starred Repositiry -->
    
          <br />
          <br />
    
    
          <!-- Dark Starred Repositiry -->
    
          <div style="width:100%;height:100px;background-color:none;">
            <!-- First -->
            <div
              style="width:100%;height:30%;background-color:none;display:flex;justify-content: flex-start;align-items: center;border-bottom: 1px solid #031018;">
              <div style="width:150px;height:100%;background-color:grey;display:flex;">
                <div
                  style="width:60%;height:100%;background-color:#031018;color:white;display:flex;justify-content: center;align-items: center">
                  Method</div>
                <div
                  style="width:40%;height:100%;background-color:#1ae000;color:#031018;display:flex;justify-content: center;align-items: center">
                  GET</div>
              </div>
              <p style="padding-left: 10px;"> Dark Starred Repository</p>
            </div>
            <!-- Second -->
            <div style="width:100%;height:70%;background-color:none;">
              <div
                style="width:100%;height:95%;background-color:none; display:flex;justify-content: flex-start;align-items: center;padding-left: 20px;">
                API endpoint → <p style="padding-left: 5px;color:#0e2d41;">
                  https://github-readme-design.vercel.app/api/starRepo/getStarDark?user=username&repo=repository-name
                </p>
              </div>
              <div style="width:100%;height:5%;background-color:#031018;">
              </div>
            </div>
          </div>
    
          <!-- Dark Starred Repositiry -->
    
          <!--  -->
          <!--  ***********************************************************************************************  -->
    
          <br />
          <br />
          <br />
          <br />
    
          <!--  Metric Card or Github Stat -->
    
          <h2 id="metric-card">Metric Card 📊 or Statistics 📈</h2>
    
          <p>
            Require the Github <span style="font-weight:bold;">Username</span>.
            <br />
            If you need to enable the dark mode then add this line <span style="font-weight:bold;">&dark=true</span> to the
            end of API.
            <br />
            Note: We have only dark and light mode right now in future versions we are updating new modes but you can also
            contribute to this 🙂
            <br />
          <p>
            <span style="font-style:italic;text-decoration: underline;">Example:</span>
            <span
              style="padding-left: 5px;color:#0e2d41;">https://github-readme-design.vercel.app/api/metricCard?user=username&dark=true</span>
          </p>
          </p>
    
          <!-- Light Metric Card -->
    
          <div style="width:100%;height:100px;background-color:none;">
            <!-- First -->
            <div
              style="width:100%;height:30%;background-color:none;display:flex;justify-content: flex-start;align-items: center;border-bottom: 1px solid #031018;">
              <div style="width:150px;height:100%;background-color:grey;display:flex;">
                <div
                  style="width:60%;height:100%;background-color:#031018;color:white;display:flex;justify-content: center;align-items: center">
                  Method</div>
                <div
                  style="width:40%;height:100%;background-color:#1ae000;color:#031018;display:flex;justify-content: center;align-items: center">
                  GET</div>
              </div>
              <p style="padding-left: 10px;"> Light Statistic's Card</p>
            </div>
            <!-- Second -->
            <div style="width:100%;height:70%;background-color:none;">
              <div
                style="width:100%;height:95%;background-color:none; display:flex;justify-content: flex-start;align-items: center;padding-left: 20px;">
                API endpoint → <p style="padding-left: 5px;color:#0e2d41;">
                  https://github-readme-design.vercel.app/api/metricCard?user=username</p>
              </div>
              <div style="width:100%;height:5%;background-color:#031018;">
              </div>
            </div>
          </div>
    
          <!-- Light Metric Card -->
    
          <br />
          <br />
    
    
          <!-- Dark Metric Card -->
    
          <div style="width:100%;height:100px;background-color:none;">
            <!-- First -->
            <div
              style="width:100%;height:30%;background-color:none;display:flex;justify-content: flex-start;align-items: center;border-bottom: 1px solid #031018;">
              <div style="width:150px;height:100%;background-color:grey;display:flex;">
                <div
                  style="width:60%;height:100%;background-color:#031018;color:white;display:flex;justify-content: center;align-items: center">
                  Method</div>
                <div
                  style="width:40%;height:100%;background-color:#1ae000;color:#031018;display:flex;justify-content: center;align-items: center">
                  GET</div>
              </div>
              <p style="padding-left: 10px;"> Dark Statistic's Card</p>
            </div>
            <!-- Second -->
            <div style="width:100%;height:70%;background-color:none;">
              <div
                style="width:100%;height:95%;background-color:none; display:flex;justify-content: flex-start;align-items: center;padding-left: 20px;">
                API endpoint → <p style="padding-left: 5px;color:#0e2d41;">
                  https://github-readme-design.vercel.app/api/metricCard?user=username&dark=true</p>
              </div>
              <div style="width:100%;height:5%;background-color:#031018;">
              </div>
            </div>
          </div>
    
          <!-- Dark Metric Card -->
    
          <!--  -->
          <!--  ***********************************************************************************************  -->
    
          <br />
          <br />
          <br />
          <br />
    
          <!--  Most Language Used -->
    
          <h2 id="language-used">Language Used 🔡</h2>
    
          <p>
            Require the Github <span style="font-weight:bold;">Username</span>.
            <br />
            If you need to enable the dark mode then add this line <span style="font-weight:bold;">&dark=true</span> to the
            end of API.
            <br />
            Note: We have only dark and light mode right now in future versions we are updating new modes but you can also
            contribute to this 🙂
            <br />
          <p>
            <span style="font-style:italic;text-decoration: underline;">Example:</span>
            <span
              style="padding-left: 5px;color:#0e2d41;">https://github-readme-design.vercel.app/api/languageCard?user=username&dark=true</span>
          </p>
          </p>
    
          <!-- Light Metric Card -->
    
          <div style="width:100%;height:100px;background-color:none;">
            <!-- First -->
            <div
              style="width:100%;height:30%;background-color:none;display:flex;justify-content: flex-start;align-items: center;border-bottom: 1px solid #031018;">
              <div style="width:150px;height:100%;background-color:grey;display:flex;">
                <div
                  style="width:60%;height:100%;background-color:#031018;color:white;display:flex;justify-content: center;align-items: center">
                  Method</div>
                <div
                  style="width:40%;height:100%;background-color:#1ae000;color:#031018;display:flex;justify-content: center;align-items: center">
                  GET</div>
              </div>
              <p style="padding-left: 10px;"> Language Most Used (Light)</p>
            </div>
            <!-- Second -->
            <div style="width:100%;height:70%;background-color:none;">
              <div
                style="width:100%;height:95%;background-color:none; display:flex;justify-content: flex-start;align-items: center;padding-left: 20px;">
                API endpoint → <p style="padding-left: 5px;color:#0e2d41;">
                  https://github-readme-design.vercel.app/api/languageCard?user=username</p>
              </div>
              <div style="width:100%;height:5%;background-color:#031018;">
              </div>
            </div>
          </div>
    
          <!-- Light Metric Card -->
    
          <br />
          <br />
    
    
          <!-- Dark Metric Card -->
    
          <div style="width:100%;height:100px;background-color:none;">
            <!-- First -->
            <div
              style="width:100%;height:30%;background-color:none;display:flex;justify-content: flex-start;align-items: center;border-bottom: 1px solid #031018;">
              <div style="width:150px;height:100%;background-color:grey;display:flex;">
                <div
                  style="width:60%;height:100%;background-color:#031018;color:white;display:flex;justify-content: center;align-items: center">
                  Method</div>
                <div
                  style="width:40%;height:100%;background-color:#1ae000;color:#031018;display:flex;justify-content: center;align-items: center">
                  GET</div>
              </div>
              <p style="padding-left: 10px;"> Language Most Used (Dark)</p>
            </div>
            <!-- Second -->
            <div style="width:100%;height:70%;background-color:none;">
              <div
                style="width:100%;height:95%;background-color:none; display:flex;justify-content: flex-start;align-items: center;padding-left: 20px;">
                API endpoint → <p style="padding-left: 5px;color:#0e2d41;">
                  https://github-readme-design.vercel.app/api/languageCard?user=username&dark=true</p>
              </div>
              <div style="width:100%;height:5%;background-color:#031018;">
              </div>
            </div>
          </div>
    
          <!-- Dark Metric Card -->
    
          <!--  -->
          <!--  ***********************************************************************************************  -->
    
    
          <br />
          <br />
    
          <!-- Bottom -->
    
          <p>
    
            Please help us to improve this for everyone need Thank You!
            <br />
            Want to <span style="font-weight:bold;font-size:14px; color:#ff3737">Contribute?</span>
            Visit our official github repository to contribute <a href="https://github.com/hirishu10/github-readme-design"
              target="_blank" rel="noopener noreferrer">
              Github-Readme-Design
            </a>
          </p>
          <br />
          <p>
            Unable to understand? Sorry for this please use our GUI <span style="font-size:18px; color:#00063c">(Graphic
              User Interface)</span> 💻 page for the help!
            <a href="https://github-readme-design.vercel.app/" target="_blank" rel="noopener noreferrer">
              Github-Readme-Design-GUI
            </a>
          </p>
          <!-- Bottom -->
    
          <br />
          <br />
    
          <!-- Footer -->
          <div class="containerForLogo">
            <div class="containerForLogoTitle">from</div>
            <div class="containerForLogoImage">
              <Image src="/footerLogo/myLogo.svg" alt="Rishu Chowdhary" width="40px" height="27px" priority="true" />
              <span style="font-size:18px;color:black;">
                Rishu
              </span>
            </div>
          </div>
          <!-- Footer -->
          <br />
        </div>
    </body>
    
    </html>
    
    `;
    try {
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send(data);
    }
  }
}
