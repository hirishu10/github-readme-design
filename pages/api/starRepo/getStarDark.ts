/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { getRepoDetails } from "../../../utils/getRepoDetails";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const BASH = "#272a2e";
  const JS = "#f8ff2e";
  const TS = "#3870ba";
  const JAVA = "#d40d2e";
  const HTML = "#d40d2e";
  const CSS = "#384fff";
  const PY = "#7dab1b";

  if (req.method === "GET") {
    const rawData = getRepoDetails(req?.query?.user, req?.query?.repo);
    rawData
      .then((raw) => {
        const data = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="450"
            height="100"
            viewBox="0 0 450 100"
            fill="none"
          >
          <style>
            .animationForAll{
              animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
            @keyframes fadeInAnimation {
              0%{
                opacity: 0;
              }
              25%{
                opacity: 0.2;
              }
              50%{
                opacity: 0.5;
              }
              75%{
                opacity: 0.7;
              }
              100%{
                opacity: 0.8;
              }
            }
            </style>
            <image
              id="image0"
              x="-22"
              y="0"
              height="99%"
              width="490"
              fill="none"
              style="animation: fadeInAnimation 0.8s ease-in-out forwards;"
              href="data:image/png;base64,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"
            />
  
            <g>
              <rect
                class="animationForAll"
                x="0.5"
                y="0.5"
                rx="2.5"
                height="99%"
                stroke="silver"
                stroke-width="1"
                width="99%"
                fill="none"
                stroke-opacity="0"
              />
              <svg
                class="animationForAll"
                x="15"
                y="15"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 50 50"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  fill="#e6ecf7"
                />
              </svg>
  
              <text
                class="animationForAll"
                x="35"
                y="28"
                fill="red"
                font-family="system-ui,sans-serif"
                font-size="28px"
              >
                |
              </text>
  
              <text
                class="animationForAll"
                x="45"
                y="26"
                fill="#dde1eb"
                font-family="system-ui,sans-serif"
                font-size="14px"
              >
                ${raw?.name !== "" ? raw?.name : "Select Repo First :)"}
              </text>
            </g>
  
            <g>
              <svg
                class="animationForAll"
                x="340"
                y="45"
                width="20px"
                height="20px"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14L20.41,28H4V8H32l0,8.56a8.41,8.41,0,0,1,2,1.81V8A2,2,0,0,0,32,6Z"
                  class="clr-i-outline clr-i-outline-path-1"
                  fill="#e6ecf7"
                ></path>
  
                <rect
                  x="7"
                  y="12"
                  width="17"
                  height="1.6"
                  class="clr-i-outline clr-i-outline-path-2"
                ></rect>
                <rect
                  x="7"
                  y="16"
                  width="11"
                  height="1.6"
                  class="clr-i-outline clr-i-outline-path-3"
                  fill="#e6ecf7"
                ></rect>
                <rect
                  x="7"
                  y="23"
                  width="10"
                  height="1.6"
                  class="clr-i-outline clr-i-outline-path-4"
                  fill="#e6ecf7"
                ></rect>
  
                <path
                  d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z"
                  class="clr-i-outline clr-i-outline-path-5"
                  fill="#e6ecf7"
                ></path>
  
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  fill-opacity="0"
                  fill="#e6ecf7"
                />
              </svg>
  
              <text
                class="animationForAll"
                x="365"
                y="60"
                fill="#0ce8e3"
                font-family="system-ui,sans-serif"
                font-size="14px"
                letter-spacing="0.3px"
              >
                ${
                  raw?.license !== null
                    ? raw?.license?.spdx_id
                    : req?.query?.license
                    ? req?.query?.license
                    : "Unlicense"
                }
              </text>
            </g>
  
            <g>
              <circle
                class="animationForAll"
                cx="22"
                cy="80"
                r="6"
                stroke="none"
                stroke-width="0"
                fill="${
                  raw?.language === "Bash"
                    ? BASH
                    : raw?.language === "TypeScript"
                    ? TS
                    : raw?.language === "JavaScript"
                    ? JS
                    : raw?.language === "Java"
                    ? JAVA
                    : raw?.language === "HTML"
                    ? HTML
                    : raw?.language === "CSS"
                    ? CSS
                    : raw?.language === "Python"
                    ? PY
                    : "#1a1f29"
                }"
                style="stroke:silver;stroke-width=1;stroke-opacity=1;"
              />
  
              <text
                class="animationForAll"
                x="35"
                y="84"
                fill="#0ce8e3"
                font-family="system-ui,sans-serif"
                font-size="14px"
              >
              ${raw?.language !== null ? raw?.language : ""}
              </text>
            </g>
  
            <g>
              <svg
                class="animationForAll"
                x="150"
                y="55"
                width="48px"
                height="48px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 16.5191L22.4994 19.5596C22.0625 20.445 21.2178 21.0587 20.2406 21.2007L16.8853 21.6882L19.3132 24.0549C20.0203 24.7441 20.3429 25.7371 20.176 26.7103L19.6028 30.0521L22.604 28.4744C23.478 28.0149 24.5221 28.0149 25.396 28.4744L28.3972 30.0521L27.824 26.7103C27.6571 25.7371 27.9797 24.7441 28.6868 24.0549L31.1148 21.6882L27.7594 21.2007C26.7823 21.0587 25.9376 20.445 25.5006 19.5596L24 16.5191ZM24.8967 13.817C24.5299 13.0737 23.4701 13.0737 23.1033 13.817L20.706 18.6744C20.5603 18.9696 20.2787 19.1741 19.953 19.2215L14.5925 20.0004C13.7723 20.1196 13.4448 21.1276 14.0383 21.7061L17.9172 25.4871C18.1529 25.7168 18.2604 26.0478 18.2048 26.3722L17.2891 31.7111C17.149 32.528 18.0064 33.151 18.7401 32.7653L23.5347 30.2446C23.826 30.0915 24.174 30.0915 24.4653 30.2446L29.26 32.7653C29.9936 33.151 30.851 32.528 30.7109 31.7111L29.7952 26.3722C29.7396 26.0478 29.8471 25.7168 30.0828 25.4871L33.9617 21.7061C34.5553 21.1276 34.2277 20.1196 33.4075 20.0004L28.047 19.2215C27.7213 19.1741 27.4397 18.9696 27.294 18.6744L24.8967 13.817Z"
                  fill="#e6ecf7"
                />
              </svg>
              <text
                class="animationForAll"
                x="190"
                y="85"
                fill="#0ce8e3"
                font-family="system-ui,sans-serif"
                font-size="14px"
              >
                ${raw?.stargazers_count !== null ? raw?.stargazers_count : 0}
              </text>
            </g>
  
            <g>
              <svg
                class="animationForAll"
                x="260"
                y="68"
                width="33.627px"
                height="33.628px"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.131,8.383c0-2.092-1.701-3.794-3.794-3.794s-3.793,1.702-3.793,3.794c0,0.99,0.39,1.885,1.013,2.561
   c-0.474,2.004-1.639,2.393-4.167,3.029c-1.279,0.322-2.753,0.7-4.099,1.501V7.003c1.072-0.671,1.793-1.854,1.793-3.209
   C14.084,1.702,12.382,0,10.292,0C8.199,0,6.497,1.702,6.497,3.794c0,1.356,0.722,2.539,1.795,3.21v19.62
   c-1.073,0.671-1.795,1.854-1.795,3.21c0,2.092,1.702,3.794,3.795,3.794c2.092,0,3.793-1.702,3.793-3.794
   c0-1.355-0.722-2.539-1.793-3.209v-3.846c0.496-3.768,2.321-4.232,5.075-4.926c2.527-0.637,5.955-1.513,7.048-5.852
   C25.981,11.535,27.131,10.099,27.131,8.383z M10.292,2.002c0.988,0,1.793,0.805,1.793,1.794c0,0.989-0.806,1.793-1.793,1.793
   c-0.989,0-1.795-0.805-1.795-1.793C8.498,2.806,9.302,2.002,10.292,2.002z M10.292,31.627c-0.989,0-1.795-0.807-1.795-1.794
   c0-0.989,0.806-1.793,1.795-1.793c0.988,0,1.793,0.806,1.793,1.793C12.085,30.824,11.28,31.627,10.292,31.627z M23.337,10.177
   c-0.989,0-1.793-0.805-1.793-1.793c0-0.989,0.806-1.794,1.793-1.794c0.988,0,1.794,0.805,1.794,1.794
   C25.131,9.373,24.327,10.177,23.337,10.177z"
                  fill="#e6ecf7"
                />
              </svg>
              <text
                class="animationForAll"
                x="285"
                y="85"
                fill="#0ce8e3"
                font-family="system-ui,sans-serif"
                font-size="14px"
              >
              ${raw?.forks_count !== null ? raw?.forks_count : 0}
              </text>
            </g>
  
            <g>
              <text
                class="animationForAll"
                x="345"
                y="95"
                text-anchor="start"
                font-size="8"
                fill="#667fa2"
                font-weight="500"
                font-family="system-ui,sans-serif"
              >
                Github-Readme-Design
              </text>
            </g>
          </svg>
  `;
        res.setHeader("Content-Type", "image/svg+xml");
        res.setHeader(
          "Cache-Control",
          "public, s-maxage=10, stale-while-revalidate=59"
        );
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send({
          access: "Denied",
          message: "Sorry for the inconvenience",
          errorMessage: err,
        });
      });
  }
}
