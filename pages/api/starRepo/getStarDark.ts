// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  getCustomDayNameFull,
  getCustomMonthNameShort,
  getCustomDate,
} from "@hirishu10/simple-date-time";
//

import fs from "fs";
import path from "path";

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

  if (req.method === "GET") {
    try {
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
            href="data:image/png;base64,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
         MJjqiFkAAAAASUVORK5CYII="
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
              stroke-opacity="1"
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
              ${
                req?.query?.name !== ""
                  ? req?.query?.name
                  : "Select Repo First :)"
              }
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
              ${req?.query?.license !== "" ? req?.query?.license : ":)"}
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
              fill="${colorForCircle}"
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
              ${req?.query?.language !== "" ? req?.query?.language : ";)"}
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
              ${req?.query?.star !== "" ? req?.query?.star : ";)"}
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
              ${req?.query?.fork !== "" ? req?.query?.fork : ":)"}
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
  }
}
