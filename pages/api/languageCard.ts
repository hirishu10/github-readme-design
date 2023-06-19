/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { languageConfigValues } from "../../utils/languageConfigValues";
import NextCors from "nextjs-cors";

type Data = any;

/**
 *
 * @param req Request from the user for the Language Card
 * @param res Response will return the SVG Item
 */
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

  //: GET
  if (req.method === "GET") {
    if (req?.query?.user && req?.query?.user !== "") {
      const rawData = languageConfigValues(req?.query?.user);
      rawData
        .then((raw: any) => {
          //   console.log("raw", raw); //::Debug
          let other = 0;
          let otherValues: any = {};

          try {
            raw?.language?.map((item: { value: number }, index: any) => {
              other = other + item?.value;
            });

            // add Other Total Value
            otherValues = {
              name: "Other",
              value: 100 - other,
              fill: "lavender",
            };
            // ::::::::::::::::::::::::>
            let xOne: any = {
              name: raw?.language[0]?.name ? raw?.language[0]?.name : "",
              value:
                raw?.language[0]?.value !== undefined &&
                raw?.language[0]?.value !== null
                  ? raw?.language[0]?.value
                  : "",
              // bar_value::> (450 / 100) * raw?.language[0]?.value => 450 - value% which is total width minus the current value percent
              bar_value:
                raw?.language[0]?.value !== undefined &&
                raw?.language[0]?.value !== null
                  ? (450 / 100) * raw?.language[0]?.value
                  : 0,
              fill: raw?.language[0]?.fill ? raw?.language[0]?.fill : "none",
            };
            // ::::::::::::::::::::::::>
            let xTwo: any = {
              name: raw?.language[1]?.name ? raw?.language[1]?.name : "",
              value:
                raw?.language[1]?.value !== undefined &&
                raw?.language[1]?.value !== null
                  ? raw?.language[1]?.value
                  : "",
              // bar_value::> (450 / 100) * raw?.language[0]?.value => 450 - value% which is total width minus the current value percent
              bar_value:
                raw?.language[1]?.value !== undefined &&
                raw?.language[1]?.value !== null
                  ? (450 / 100) * raw?.language[1]?.value
                  : 0,
              fill: raw?.language[1]?.fill ? raw?.language[1]?.fill : "none",
            };
            // ::::::::::::::::::::::::>
            let xThree: any = {
              name: raw?.language[2]?.name ? raw?.language[2]?.name : "",
              value:
                raw?.language[2]?.value !== undefined &&
                raw?.language[2]?.value !== null
                  ? raw?.language[2]?.value
                  : "",
              // bar_value::> (450 / 100) * raw?.language[0]?.value => 450 - value% which is total width minus the current value percent
              bar_value:
                raw?.language[2]?.value !== undefined &&
                raw?.language[2]?.value !== null
                  ? (450 / 100) * raw?.language[2]?.value
                  : 0,
              fill: raw?.language[2]?.fill ? raw?.language[2]?.fill : "none",
            };
            // ::::::::::::::::::::::::>
            let xFour: any = {
              name: raw?.language[3]?.name ? raw?.language[3]?.name : "",
              value:
                raw?.language[3]?.value !== undefined &&
                raw?.language[3]?.value !== null
                  ? raw?.language[3]?.value
                  : "",
              // bar_value::> (450 / 100) * raw?.language[0]?.value => 450 - value% which is total width minus the current value percent
              bar_value:
                raw?.language[3]?.value !== undefined &&
                raw?.language[3]?.value !== null
                  ? (450 / 100) * raw?.language[3]?.value
                  : 0,
              fill: raw?.language[3]?.fill ? raw?.language[3]?.fill : "none",
            };

            //::>Debug
            // console.log("xOne :>> ", xOne);
            // console.log("xTwo :>> ", xTwo);
            // console.log("xThree :>> ", xThree);
            // console.log("xFour :>> ", xFour);
            // console.log("otherValues :>> ", otherValues);
            //::>Debug
            if (raw !== null) {
              // :::::> Success Data
              const data = `
            <svg xmlns="http://www.w3.org/2000/svg" width="495" height="195" viewBox="0 0 495 195">

            <style>
            .animationForAll {
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
    
            .eachHeader {
                text-anchor: start;
                font-size: 15px;
                font-weight: 500;
                font-family: system-ui, sans-serif;
                fill:${req?.query?.dark === "true" ? "white " : "#072130"};
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
    
            .regards {
                text-anchor: start;
                font-size: 5px;
                font-weight: 500;
                font-family: system-ui, sans-serif;
                fill: silver;
            }
    
            .fillingAnimation {
                opacity: 0;
                animation: gradeAnimation 0.8s ease-in-out forwards;
            }
    
    
            @keyframes gradeAnimation {
                from {
                    opacity: 0;
                    animation-delay: 300s;
                }
    
                to {
                    opacity: 1;
                }
            }
    
            @keyframes fadeInAnimation {
                0% {
                    opacity: 0;
                }
    
                25% {
                    opacity: 0.2;
                }
    
                50% {
                    opacity: 0.5;
                }
    
                75% {
                    opacity: 0.7;
                }
    
                100% {
                    opacity: 0.8;
                }
            }
        </style>

        <link rel="icon" href="/rishufavicon.ico" />
        <title>${
          req?.query?.user ? req?.query?.user : "User"
        }'s used languages</title>
        
            <!-- Container Start -->
            <rect x="0.5" y="0.5" rx="3" height="99%" stroke="silver" width="494" fill="${
              req?.query?.dark === "true" ? "#182e40" : "white"
            }" stroke-opacity="${req?.query?.dark === "true" ? "0" : "1"}" />
        
        
            <g>
        
                <!-- width - percent = value then add the value with the x -->
                <rect x="20" y="35" height="15" width="450" fill="${
                  otherValues?.fill
                }" />
                <!-- back above don't change -->
                
                <!--   -->
                <rect x="20" y="35" height="15" width="${
                  xOne?.bar_value
                }" fill="${xOne?.fill}" />
                

                <!--   -->
                <rect x="${xOne?.bar_value + 20}" y="35" height="15" width="${
                xTwo?.bar_value
              }" fill="${xTwo?.fill}" />
                

                <!--   -->
                <rect x="${
                  xTwo?.bar_value + xOne?.bar_value + 20
                }" y="35" height="15" width="${xThree?.bar_value}" fill="${
                xThree?.fill
              }" />
                

                <!--   -->
                <rect x="${
                  xThree?.bar_value + xTwo?.bar_value + xOne?.bar_value + 20
                }" y="35" height="15" width="${xFour?.bar_value}" fill="${
                xFour?.fill
              }" /> 
            </g>
        
        
            <!--  xOne -->
            <g>
                <rect x="40" y="90" height="10" width="10" fill="${
                  xOne?.fill
                }" />
                <text class="eachHeader" x="55" y="100">${xOne?.name} ${
                xOne?.value !== "" ? `${xOne?.value}%` : ""
              }</text>
            </g>
        

            <!--  xTwo -->
            <g>
                <rect x="280" y="90" height="10" width="10" fill="${
                  xTwo?.fill
                }" />
                <text class="eachHeader" x="295" y="100">${xTwo?.name} ${
                xTwo?.value !== "" ? `${xTwo?.value}%` : ""
              }</text>
            </g>
        
            
            <!--  xThree -->
            <g>
                <rect x="40" y="125" height="10" width="10" fill="${
                  xThree?.fill
                }" />
                <text class="eachHeader" x="55" y="135">${xThree?.name} ${
                xThree?.value !== "" ? `${xThree?.value}%` : ""
              }</text>
            </g>
            
            <!--  xFour -->
            <g>
                <rect x="280" y="125" height="10" width="10" fill="${
                  xFour?.fill
                }" />
                <text class="eachHeader" x="295" y="135">${xFour?.name} ${
                xFour?.value !== "" ? `${xFour?.value}%` : ""
              }</text>
            </g>
            
            
            <!--  Below is the Other which is static -->
            <g>
                <rect x="185" y="165" height="10" width="10" fill="${
                  otherValues?.fill
                }" />
                <text class="eachHeader" x="200" y="175">${otherValues?.name} ${
                otherValues?.value
              }%</text>
            </g>
        
            <!-- **************************************************************** -->
        
            <!-- Regards -->
            <g>
                <text class="regards" x="430" y="98%">Github-Readme-Design</text>
            </g>
            <!-- Regards -->
        
        </svg>
    
    `;
              res.setHeader("Content-Type", "image/svg+xml");
              res.setHeader(
                "Cache-Control",
                "public, s-maxage=10, stale-while-revalidate=59"
              );
              res.status(200).send(data);
            } else {
              // :::::> Error Data
              const errorData = `
            <svg xmlns="http://www.w3.org/2000/svg" width="495" height="195" viewBox="0 0 495 195">
        
            <style>
                .animationForAll {
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
                }
        
                .errorLogo {
                    text-anchor: start;
                    font-size: 20px;
                    font-weight: 500;
                    font-family: system-ui, sans-serif;
                    fill: #ff475d;
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
                }
        
                .errorHeader {
                    text-anchor: start;
                    font-size: 30px;
                    font-weight: 500;
                    font-family: system-ui, sans-serif;
                    fill: #ff475d;
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
                }
        
                .errorChild {
                    text-anchor: start;
                    font-size: 15px;
                    font-weight: 500;
                    font-family: system-ui, sans-serif;
                    fill: #ff475d;
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
                }
        
                .errorChildList {
                    text-anchor: start;
                    font-size: 11px;
                    font-weight: 500;
                    font-family: system-ui, sans-serif;
                    fill:${req?.query?.dark === "true" ? "white " : "#101626"};
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
                }
        
                .linkText {
                    text-anchor: start;
                    font-size: 11px;
                    font-weight: 500;
                    font-family: system-ui, sans-serif;
                    fill: #ff475d;
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
                }
        
                .linkChild {
                    text-anchor: start;
                    font-size: 11px;
                    font-weight: 500;
                    font-family: system-ui, sans-serif;
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
                }
        
                .linkChild:hover {
                    text-decoration: underline;
                    fill:${req?.query?.dark === "true" ? "white " : "blue"};
                }
        
                .regards {
                    text-anchor: start;
                    font-size: 5px;
                    font-weight: 500;
                    font-family: system-ui, sans-serif;
                    fill: silver;
                }
        
                .fillingAnimation {
                    opacity: 0;
                    animation: gradeAnimation 0.8s ease-in-out forwards;
                }
        
                .sideExtra {
                    opacity: 0;
                    text-anchor: start;
                    font-size: 10px;
                    font-weight: 500;
                    font-family: system-ui, sans-serif;
                    fill:${
                      req?.query?.dark === "true" ? "navajowhite" : "#ebbd34"
                    };
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
                }
        
        
                @keyframes gradeAnimation {
                    from {
                        opacity: 0;
                        animation-delay: 300s;
                    }
        
                    to {
                        opacity: 1;
                    }
                }
        
                @keyframes fadeInAnimation {
                    0% {
                        opacity: 0;
                    }
        
                    25% {
                        opacity: 0.2;
                    }
        
                    50% {
                        opacity: 0.5;
                    }
        
                    75% {
                        opacity: 0.7;
                    }
        
                    100% {
                        opacity: 0.8;
                    }
                }
            </style>
        
            <title>Error!</title>

            <!-- Container Start -->
            <rect x="0.5" y="0.5" rx="3" height="99%" stroke="silver" width="494" fill="${
              req?.query?.dark === "true" ? "#182e40" : "none"
            }" stroke-opacity="${req?.query?.dark === "true" ? "0" : "1"}" />
            <!-- Discurssion Start -->
            <g>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" x="400" y="10"
                    class="fillingAnimation">
                    <path fill-rule="evenodd"
                        d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"
                        fill="${
                          req?.query?.dark === "true" ? "lavender" : "#57606a"
                        }">
                    </path>
                </svg>
        
                <a href="https://github.com/hirishu10/github-readme-design/discussions" target="_blank"
                    rel="noopener noreferrer">
                    <text class="linkChild" x="420" y="20" fill="${
                      req?.query?.dark === "true" ? "#cfcfcf" : "#005656"
                    }">
                        Discussion
                    </text>
                </a>
            </g>
            <!-- Discurssion End -->
        
            <!-- Inside Container -->
            <g>
                <text class="errorLogo" x="20" y="35">❌</text>
                <text class="errorHeader" x="45" y="38">Error:</text>
                <text class="errorChild" x="20" y="65">Sorry for the inconvenience!</text>
                <text class="errorChildList" x="20" y="88"> • User not authorized</text>
                <text class="errorChildList" x="20" y="108"> • Internal Server Error</text>
                <text class="errorChildList" x="20" y="128"> • Something went wrong please check the link above and try
                    again</text>
        
                <text class="linkText" x="10" y="150">
                    → Raise Issue:
                </text>
                <a href="https://github.com/hirishu10/github-readme-design/issues" target="_blank" rel="noopener noreferrer">
                    <text class="linkChild" x="90" y="150" fill="${
                      req?.query?.dark === "true" ? "#b7b7b7 " : "#303b59"
                    }">
                        https://github.com/hirishu10/github-readme-design/issues
                    </text>
                </a>
        
                <text class="linkText" x="10" y="170">
                    → Contribute:
                </text>
                <a href="https://github.com/hirishu10/github-readme-design/pulls" target="_blank" rel="noopener noreferrer">
                    <text class="linkChild" x="90" y="170" fill="${
                      req?.query?.dark === "true" ? "#b7b7b7 " : "#303b59"
                    }">
                        https://github.com/hirishu10/github-readme-design/pulls
                    </text>
                </a>
        
                <text class="sideExtra" x="10" y="188">
                    Please help us to improve this for everyone need Thank You!
                </text>
        
            </g>
            <!-- **************************************************************** -->
        
            <!-- Regards -->
            <g>
                <text class="regards" x="430" y="190">Github-Readme-Design</text>
            </g>
            <!-- Regards -->
            
            </svg>
        
        `;
              res.setHeader("Content-Type", "image/svg+xml");
              res.setHeader(
                "Cache-Control",
                "public, s-maxage=10, stale-while-revalidate=59"
              );
              res.status(404).send(errorData);
            }
          } catch (error) {
            res.status(404).send({
              access: "Something Went Wrong!",
              message:
                "Please kindly check your internet connection and try again.",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      res.status(404).send({
        access: "Error",
        message:
          "Sorry for the inconvenience, Please add user to fetch the details and try again.",
      });
    }
  }
}
