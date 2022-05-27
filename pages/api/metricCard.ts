// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { metricConfigValues, totalStar } from "../../utils/metricConfigValues";

// type Data = {
//   name: string;
// };
// res: NextApiResponse<Data>

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const BASH = "#272a2e";
  const JS = "#f8ff2e";
  const TS = "#3870ba";
  const JAVA = "#d40d2e";
  const HTML = "#d40d2e";
  const CSS = "#384fff";
  const PY = "#7dab1b";

  // Changing the color of the circle regarding the current language!
  const colorForCircle =
    req?.query?.language === "Bash"
      ? BASH
      : req?.query?.language === "TypeScript"
      ? TS
      : req?.query?.language === "JavaScript"
      ? JS
      : req?.query?.language === "Java"
      ? JAVA
      : req?.query?.language === "HTML"
      ? HTML
      : req?.query?.language === "CSS"
      ? CSS
      : req?.query?.language === "Python"
      ? PY
      : "#1a1f29";

  //
  if (req.method === "GET") {
    if (req?.query?.user && req?.query?.user !== "") {
      const rawData = metricConfigValues(req?.query?.user);
      rawData
        .then((raw: any) => {
          console.log("raw", raw); //::Debug
          //
          if (raw !== null) {
            try {
              const data = `
          <svg xmlns="http://www.w3.org/2000/svg" width="495" height="195" viewBox="0 0 495 195" fill="black">
    
        <style>
            .animationForAll {
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
    
            .gradeTitle {
                text-anchor: start;
                font-size: 30px;
                font-weight: 500;
                font-family: system-ui, sans-serif;
                fill: white;
                animation-delay: 800s;
                opacity: 0;
                animation: gradeAnimation 0.8s ease-in-out forwards;
            }
    
            .headerTitle {
                text-anchor: start;
                font-size: 15px;
                font-weight: 500;
                font-family: system-ui, sans-serif;
                fill: #072130;
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
    
            .languageTitle {
                text-anchor: start;
                font-size: 9px;
                font-weight: 500;
                font-family: system-ui, sans-serif;
                fill: #072130;
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
    
            .childTitle {
                text-anchor: start;
                font-size: 15px;
                font-weight: 500;
                font-family: system-ui, sans-serif;
                fill: #072130;
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
    
            .noteTitle {
                text-anchor: start;
                font-size: 7px;
                font-weight: 500;
                font-family: system-ui, sans-serif;
                fill: #072130;
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
    
            .languageColorCircle {
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
    
            .regards {
                text-anchor: start;
                font-size: 5px;
                font-weight: 500;
                font-family: system-ui, sans-serif;
                fill: silver;
            }
    
            .circleAnimated {
                fill: #f7f9fa;
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
                fill: #072130;
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
    
            @keyframes circleBigBang {
                0% {
                    cx: 0;
                    cy: 0;
                }
    
                10% {
                    cx: 50;
                    cy: 50;
                }
    
                20% {
                    cx: 150;
                    cy: 150;
                }
    
                30% {
                    cx: 180;
                    cy: 120;
                }
    
                40% {
                    cx: 200;
                    cy: 100;
                }
    
                50% {
                    cx: 250;
                    cy: 50;
                }
    
                60% {
                    cx: 280;
                    cy: 0;
                }
    
                70% {
                    cx: 320;
                    cy: 50;
                }
    
                80% {
                    cx: 400;
                    cy: 100;
                }
    
                90% {
                    cx: 450;
                    cy: 150;
                }
    
                100% {
                    cx: 550;
                    cy: 200;
                }
            }
        </style>
    
    
    
        <!-- Container Start -->
        <g>
            <rect x="320" y="50" width="100" height="100" rx="0" ry="0" stroke="#072130" fill="none" stroke-opacity="1" />
            <ellipse cx="370" cy="50" rx="50" ry="10" fill="#072130" />
            <!-- Top -->
    
            <!-- bottom -->
            <ellipse cx="370" cy="150" rx="50" ry="8" fill="#072130" />
            <!-- bottom -->
    
            <!-- All Disc -->
            <ellipse cx="370" cy="147" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="146" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="144" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="142" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="140" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="138" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="136" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="134" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="132" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="130" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="128" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="126" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="124" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="122" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="120" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="118" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="116" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="114" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="112" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="110" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="108" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="106" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="104" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="102" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="100" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="98" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="96" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="94" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="92" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="90" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="88" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="86" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="84" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="82" rx="50" ry="10" fill="#129b67" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <ellipse cx="370" cy="80" rx="50" ry="10" fill="#61cb8b" stroke="#161b1e2e" stroke-opacity="1"
                class="fillingAnimation" />
            <!-- All Disc -->
    
    
    
            <!-- Inside Text -->
            <text class="gradeTitle" x="352" y="130">A+</text>
            <!-- Inside Text -->
        </g>
        <!-- Container End -->
        <!-- **************************************************************** -->
    
        <!-- Some_Metric -->
        <g>
            <text class="sideExtra" x="425 " y="150">↑</text>
            <text class="sideExtra" x="435 " y="155">85%</text>
        </g>
        <!-- Some_Metric -->
        <!-- **************************************************************** -->
    
        <!-- below for line design -->
        <g>
            <rect x="1" y="1" width="4" height="98.5%" fill="#f50747" rx="4" ry="4" />
        </g>
        <!-- below for line design -->
        <!-- **************************************************************** -->
    
        <rect x="0.5" y="0.5" rx="3" height="99%" stroke="silver" width="494" fill="none" stroke-opacity="1" />
    
        <!-- Header Title -->
        <g>
            <text class="headerTitle" x="130" y="25">${raw?.owner_name}'s Statistics</text>
        </g>
        <!-- Header Title -->
    
        <!-- **************************************************************** -->
    
        <!-- Star Row start -->
        <g>
            <svg class="animationForAll" x="9" y="33" width="40" height="40" viewBox="0 0 50 45" fill="none"
                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 50 50">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24 16.5191L22.4994 19.5596C22.0625 20.445 21.2178 21.0587 20.2406 21.2007L16.8853 21.6882L19.3132 24.0549C20.0203 24.7441 20.3429 25.7371 20.176 26.7103L19.6028 30.0521L22.604 28.4744C23.478 28.0149 24.5221 28.0149 25.396 28.4744L28.3972 30.0521L27.824 26.7103C27.6571 25.7371 27.9797 24.7441 28.6868 24.0549L31.1148 21.6882L27.7594 21.2007C26.7823 21.0587 25.9376 20.445 25.5006 19.5596L24 16.5191ZM24.8967 13.817C24.5299 13.0737 23.4701 13.0737 23.1033 13.817L20.706 18.6744C20.5603 18.9696 20.2787 19.1741 19.953 19.2215L14.5925 20.0004C13.7723 20.1196 13.4448 21.1276 14.0383 21.7061L17.9172 25.4871C18.1529 25.7168 18.2604 26.0478 18.2048 26.3722L17.2891 31.7111C17.149 32.528 18.0064 33.151 18.7401 32.7653L23.5347 30.2446C23.826 30.0915 24.174 30.0915 24.4653 30.2446L29.26 32.7653C29.9936 33.151 30.851 32.528 30.7109 31.7111L29.7952 26.3722C29.7396 26.0478 29.8471 25.7168 30.0828 25.4871L33.9617 21.7061C34.5553 21.1276 34.2277 20.1196 33.4075 20.0004L28.047 19.2215C27.7213 19.1741 27.4397 18.9696 27.294 18.6744L24.8967 13.817Z"
                    fill="#57606a" />
            </svg>
    
            <text class="childTitle" x="45" y="60">Total Stars:</text>
            <text class="childTitle" x="210" y="60">${raw?.total_star}</text>
        </g>
        <!-- Star Row end -->
    
        <!-- **************************************************************** -->
    
        <!-- Repo Row start -->
        <g>
            <svg class="animationForAll" x="20" y="72" width="50" height="50" viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 50 50" fill="none">
                <path fill-rule="evenodd"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                    fill="#57606a" />
            </svg>
            <text class="childTitle" x="45" y="85">Total Repo:</text>
            <text class="childTitle" x="210" y="85">${raw?.total_repo}</text>
        </g>
        <!-- Repo Row end -->
    
        <!-- **************************************************************** -->
    
        <!-- Gist Row start -->
        <g>
            <svg aria-hidden="true" class="animationForAll" x="20" y="97" width="50" height="50" viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 50 50" fill="none">
                <path fill-rule="evenodd"
                    d="M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z"
                    fill="#57606a"></path>
            </svg>
            <text class="childTitle" x="45" y="110">Total Gist:</text>
            <text class="childTitle" x="210" y="110">${raw?.total_gist}</text>
        </g>
        <!-- Gist Row end -->
    
        <!-- **************************************************************** -->
    
        <!-- PRs Row start -->
        <g>
            <svg class="animationForAll" x="18" y="121" enableBackground="new 0 0 50 50" fill="none" width="33.627px"
                height="33.628px" viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.131,8.383c0-2.092-1.701-3.794-3.794-3.794s-3.793,1.702-3.793,3.794c0,0.99,0.39,1.885,1.013,2.561
            c-0.474,2.004-1.639,2.393-4.167,3.029c-1.279,0.322-2.753,0.7-4.099,1.501V7.003c1.072-0.671,1.793-1.854,1.793-3.209
            C14.084,1.702,12.382,0,10.292,0C8.199,0,6.497,1.702,6.497,3.794c0,1.356,0.722,2.539,1.795,3.21v19.62
            c-1.073,0.671-1.795,1.854-1.795,3.21c0,2.092,1.702,3.794,3.795,3.794c2.092,0,3.793-1.702,3.793-3.794
            c0-1.355-0.722-2.539-1.793-3.209v-3.846c0.496-3.768,2.321-4.232,5.075-4.926c2.527-0.637,5.955-1.513,7.048-5.852
            C25.981,11.535,27.131,10.099,27.131,8.383z M10.292,2.002c0.988,0,1.793,0.805,1.793,1.794c0,0.989-0.806,1.793-1.793,1.793
            c-0.989,0-1.795-0.805-1.795-1.793C8.498,2.806,9.302,2.002,10.292,2.002z M10.292,31.627c-0.989,0-1.795-0.807-1.795-1.794
            c0-0.989,0.806-1.793,1.795-1.793c0.988,0,1.793,0.806,1.793,1.793C12.085,30.824,11.28,31.627,10.292,31.627z M23.337,10.177
            c-0.989,0-1.793-0.805-1.793-1.793c0-0.989,0.806-1.794,1.793-1.794c0.988,0,1.794,0.805,1.794,1.794
            C25.131,9.373,24.327,10.177,23.337,10.177z" fill="#57606a" />
            </svg>
            <text class="childTitle" x="45" y="135">Total PRs:</text>
            <text class="childTitle" x="210" y="135">${raw?.total_prs}</text>
        </g>
        <!-- PRs Row end -->
    
        <!-- Commit Row start -->
        <g>
            <svg class="animationForAll" aria-hidden="true" x="21" y="147" width="50" height="50" viewBox="0 0 50 50">
                <path fill-rule="evenodd"
                    d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z"
                    fill="#57606a"></path>
            </svg>
    
            <text class="childTitle" x="45" y="160">Total Commits(2022):</text>
            <text class="childTitle" x="210" y="160">${raw?.total_commit}</text>
        </g>
        <!-- Commit Row end -->
    
        <!-- **************************************************************** -->
    
        <!-- Note: -->
        <g>
            <text class="noteTitle" x="20" y="185">Note:</text>
            <text class="noteTitle" x="40" y="185">This is only Public Data / Private Repo Data are not included.</text>
        </g>
        <!-- Note: -->
        <!-- **************************************************************** -->
    
        <!-- LanguageUsed -->
        <g>
            <text class="languageTitle" x="280" y="175">Most Language Used:</text>
    
            <circle class="languageColorCircle" cx="388" cy="172" r="3" fill="#f8ff2e" />
    
            <text class="languageTitle" x="395" y="175">JavaScript</text>
        </g>
        <!-- LanguageUsed -->
    
        <!-- **************************************************************** -->
    
        <!-- Regards -->
        <g>
            <text class="regards" x="430" y="190">Github-Readme-Design</text>
        </g>
        <!-- Regards -->
    
    </svg>
    
    `;
              res.setHeader("Content-Type", "image/svg+xml");
              setTimeout(() => {
                res.status(200).send(data);
              }, 500);
            } catch (error) {
              res.status(404).send({
                access: "Denied",
                message: "Sorry for the inconvenience",
                errorMessage: error,
              });
            }
          } else {
            res.status(404).send({
              access: "Denied",
              message: "User not authorised",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      res.status(404).send({
        access: "Denied",
        message:
          "Sorry for the inconvenience, Please add user to fetch the details.",
      });
    }
  }
}
