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
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAABkCAMAAAAi9MAwAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
            AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEXw8fTv8PP7+/z////+
            /v719vf8/P329/jx8vT9/f3v8PT3+Pnx8vX9/v79/f709Pbv8fP+//74+Pn//v/u8PP29/n+/v/5
            +fr///729vj09ffw8fP8/Pzv8fTy8/b6+/vy8/Xz9Pb4+Pr6+vv39/nu7/P19vjx8/X7/Pz4+frw
            8PP09Pfw8vT//v75+vvy8vXw8PT+///09fb19ff8/f36+/z5+vru7/Lx8fTz8/bz9Pft7vL7+/vy
            9Pb4+fnz9fYqaCivAAAAAWJLR0QDEQxM8gAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+YF
            FRQFG0/TTOcAAAqGSURBVHja7Z15Y9o4E8Y1ljB2oOTADcEhwQ7H4rShtMmm3d2+737/b7U6LB+E
            QyKAhJ3pH00CIZZ+fkYz8niM0A4GyMEEf5gdthNAaGDygdAW202Ebp1ESNj5avF4dxJhE1s9pj2b
            QGjveHcRoefTEdk7pL0bwVafstoAzxC0rB7R3o0O1rV5xDuIsP3JZreyfyO4c26zJ9UFeMFFeGnt
            eA5gBPtwZbEMd1sJu6YP+4hG5edA22IZaq+Ewed6xTL4muAe2Lz+a0qQ/vNtHcqB7IbgVoD4sO0c
            uLYfpTnhjZ1DOZBRl9MPbM6FdQmyjZmu6YM+qlGEIfU+twNbGWoBvEMQ1mwl5GnhPSCLR66rwiEm
            16aP+bhGEXrAhu5YKkNNgpHFwfWBjOABD+MgtlSGmggfLB3G4YwOdwhi8CM7ZagZzPi186OYpYV8
            7BBdWumCNADeWrykH87oeMeTdPg9K2Wop8KRlafhQY0OeMqWQnaJxs5tNi0RelYO4bBGBxynayEK
            rNxm0xLhtH5+lDH7A+QEWHmxWwvh0L5T8OBGsI9ARnNWbrPpELRzKTiwETyTCGXh1+o54AU2xECl
            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"
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
                  fill="#57606a"
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
                fill="#0969da"
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
                  fill="#333333"
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
                  fill="#333333"
                ></rect>
                <rect
                  x="7"
                  y="23"
                  width="10"
                  height="1.6"
                  class="clr-i-outline clr-i-outline-path-4"
                  fill="#333333"
                ></rect>
  
                <path
                  d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z"
                  class="clr-i-outline clr-i-outline-path-5"
                  fill="#333333"
                ></path>
  
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  fill-opacity="0"
                  fill="#333333"
                />
              </svg>
  
              <text
                class="animationForAll"
                x="365"
                y="60"
                fill="#0969da"
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
                fill="#282d3d"
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
                  fill="#333333"
                />
              </svg>
              <text
                class="animationForAll"
                x="190"
                y="85"
                fill="#0969da"
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
                  fill="#333333"
                />
              </svg>
              <text
                class="animationForAll"
                x="285"
                y="85"
                fill="#0969da"
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
                fill="#a9bbd9"
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
