/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
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
  <svg xmlns="http://www.w3.org/2000/svg" width="450" height="100" viewBox="0 0 450 100" fill="none" >
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

  <image id="image0" 
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
      lDLAC1F6WDeEdMCjAsHVcyDp8VeOPkM6KuxZ50OOYAQnUJyEpW22Ijz2rWuxCkVeXzuGIi18zGX4
      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" />

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
        <svg class="animationForAll" x="15" y="15" width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 50 50" fill="none">
        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" fill="#57606a"/>
        </svg>

        <text class="animationForAll" x="35" y="28" fill="red" font-family="system-ui,sans-serif" font-size="28px">|</text>

        <text class="animationForAll" x="45" y="26" fill="#0969da" font-family="system-ui,sans-serif" font-size="14px">${
          req?.query?.name !== "" ? req?.query?.name : "Select Repo First :)"
        }</text>
  </g>




  <g>
  <svg class="animationForAll" x="340" y="45" width="20px" height="20px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14L20.41,28H4V8H32l0,8.56a8.41,8.41,0,0,1,2,1.81V8A2,2,0,0,0,32,6Z" class="clr-i-outline clr-i-outline-path-1" fill="#333333"></path>
    
    <rect x="7" y="12" width="17" height="1.6" class="clr-i-outline clr-i-outline-path-2"></rect><rect x="7" y="16" width="11" height="1.6" class="clr-i-outline clr-i-outline-path-3" fill="#272a2e"></rect>
    <rect x="7" y="23" width="10" height="1.6" class="clr-i-outline clr-i-outline-path-4" fill="#333333"></rect>
    
    <path d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z" class="clr-i-outline clr-i-outline-path-5" fill="#333333"></path>

    <rect x="0" y="0" width="36" height="36" fill-opacity="0" fill="#333333"/>

</svg>

<text class="animationForAll" x="365" y="60" fill="#0969da" font-family="system-ui,sans-serif" font-size="14px" letter-spacing="0.3px">${
        req?.query?.license !== "" ? req?.query?.license : ":)"
      }</text>
</g>



     
  <g>
  <circle class="animationForAll" cx="22" cy="80" r="6" stroke="none" stroke-width="0" fill="${colorForCircle}"  
  style="stroke:silver;stroke-width=1;stroke-opacity=1;"/>

  <text class="animationForAll" x="35" y="84" fill="#282d3d" font-family="system-ui,sans-serif" font-size="14px">${
    req?.query?.language !== "" ? req?.query?.language : ";)"
  }</text>
  </g>

  <g>

  <svg class="animationForAll" x="150" y="55" width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 16.5191L22.4994 19.5596C22.0625 20.445 21.2178 21.0587 20.2406 21.2007L16.8853 21.6882L19.3132 24.0549C20.0203 24.7441 20.3429 25.7371 20.176 26.7103L19.6028 30.0521L22.604 28.4744C23.478 28.0149 24.5221 28.0149 25.396 28.4744L28.3972 30.0521L27.824 26.7103C27.6571 25.7371 27.9797 24.7441 28.6868 24.0549L31.1148 21.6882L27.7594 21.2007C26.7823 21.0587 25.9376 20.445 25.5006 19.5596L24 16.5191ZM24.8967 13.817C24.5299 13.0737 23.4701 13.0737 23.1033 13.817L20.706 18.6744C20.5603 18.9696 20.2787 19.1741 19.953 19.2215L14.5925 20.0004C13.7723 20.1196 13.4448 21.1276 14.0383 21.7061L17.9172 25.4871C18.1529 25.7168 18.2604 26.0478 18.2048 26.3722L17.2891 31.7111C17.149 32.528 18.0064 33.151 18.7401 32.7653L23.5347 30.2446C23.826 30.0915 24.174 30.0915 24.4653 30.2446L29.26 32.7653C29.9936 33.151 30.851 32.528 30.7109 31.7111L29.7952 26.3722C29.7396 26.0478 29.8471 25.7168 30.0828 25.4871L33.9617 21.7061C34.5553 21.1276 34.2277 20.1196 33.4075 20.0004L28.047 19.2215C27.7213 19.1741 27.4397 18.9696 27.294 18.6744L24.8967 13.817Z" fill="#333333"/>
  </svg>
  <text class="animationForAll" x="190" y="85" fill="#0969da" font-family="system-ui,sans-serif" font-size="14px">${
    req?.query?.star !== "" ? req?.query?.star : ";)"
  }</text>
</g>



  <g>
  <svg class="animationForAll" x="260" y="68" width="33.627px" height="33.628px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M27.131,8.383c0-2.092-1.701-3.794-3.794-3.794s-3.793,1.702-3.793,3.794c0,0.99,0.39,1.885,1.013,2.561
   c-0.474,2.004-1.639,2.393-4.167,3.029c-1.279,0.322-2.753,0.7-4.099,1.501V7.003c1.072-0.671,1.793-1.854,1.793-3.209
   C14.084,1.702,12.382,0,10.292,0C8.199,0,6.497,1.702,6.497,3.794c0,1.356,0.722,2.539,1.795,3.21v19.62
   c-1.073,0.671-1.795,1.854-1.795,3.21c0,2.092,1.702,3.794,3.795,3.794c2.092,0,3.793-1.702,3.793-3.794
   c0-1.355-0.722-2.539-1.793-3.209v-3.846c0.496-3.768,2.321-4.232,5.075-4.926c2.527-0.637,5.955-1.513,7.048-5.852
   C25.981,11.535,27.131,10.099,27.131,8.383z M10.292,2.002c0.988,0,1.793,0.805,1.793,1.794c0,0.989-0.806,1.793-1.793,1.793
   c-0.989,0-1.795-0.805-1.795-1.793C8.498,2.806,9.302,2.002,10.292,2.002z M10.292,31.627c-0.989,0-1.795-0.807-1.795-1.794
   c0-0.989,0.806-1.793,1.795-1.793c0.988,0,1.793,0.806,1.793,1.793C12.085,30.824,11.28,31.627,10.292,31.627z M23.337,10.177
   c-0.989,0-1.793-0.805-1.793-1.793c0-0.989,0.806-1.794,1.793-1.794c0.988,0,1.794,0.805,1.794,1.794
   C25.131,9.373,24.327,10.177,23.337,10.177z" fill="#333333"/>
</svg>
<text class="animationForAll" x="285" y="85" fill="#0969da" font-family="system-ui,sans-serif" font-size="14px">${
        req?.query?.fork !== "" ? req?.query?.fork : ":)"
      }</text>
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

      // <g>
      // <svg x="10" y="10" width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 50 50" fill="none">
      // <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" fill="#57606a"/>
      // </svg>
      // </g>
      // <text  x="35" y="24" fill="#0969da" style="font-family: system-ui,sans-serif;">${
      //   req?.query?.name !== "" ? req?.query?.name : "Select Repo First :)"
      // }</text>
      // </g>
      // <g>
      // <text  width="30" height="80" x="30" y="80" fill="#0969da" font-family="system-ui,sans-serif" font-size="10px" overflow="hidden">${
      //   req?.query?.description !== ""
      //     ? req?.query?.description
      //     : "Select Repo First for it's description :)"
      // }</text>
      // </g>
      res.setHeader("Content-Type", "image/svg+xml");
      setTimeout(() => {
        res.status(200).send(data);
      }, 1000);
    } catch (error) {
      res.status(404).send({
        access: "Denied",
        message: "Sorry for the inconvenience",
        errorMessage: error,
      });
    }
  }
}

// <image id="image0"
// x="0.5"
// y="0.5"
//  rx="5"
//   height="99%"
//     width="490"
//      fill="none"
// href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAADDCAMAAACcTmkGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
// AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABLFBMVEXx8vXv8PPw8fT3+Pn/
// ///+/v7z9Pbx8vT9/v3v8PT6+/vw8PP09ff7+/v+///8/P35+fr19vfy8/Xw8PT29/j+//77+/zu
// 8PP8/Pz19vj//v76+vv+/v/8/f3w8fP///729vj7/Pz9/f3u7/Lw8vTv8fP4+fr4+fn//v/39/nu
// 7/P39/j5+vr19ff6+/z5+vv9/v709vfv8fT09Pb9/f74+Pnx8/X5+fvy9Pby8vXz8/bz9PX09fb2
// 9/n6+vr4+Pry8/bz9fbz9Pfx8fT5+fnl5eXi4uLz8/Px8fHr6+v4+Pjk5OTj4+P19fXm5uby8vLt
// 7e3w8PDs7Ozq6urY2Nju7u7f39/g4ODo6Oje3t7p6end3d3h4eHv7+/n5+f09PTc3Nzb29v39/f2
// 9vY4zDp/AAAAAWJLR0QEj2jZUQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+YFEhQoFRWW
// A7YAABMjSURBVHja7Z0JYxq5FcfRIEHBYE5zGIxhEkjw2sF1cLbr7nrT1nbitZM4dmMnaa5tv/93
// qK65YADNjBgY0D/ZbJzh1G/e09OT9BSLAU2egAbiECGotKzCuOUBx6+VgFDhXmLF5OJO/gXjVsCX
// VzGZzjwF0gr3cksi7w3aeavue6kljzf25hkCW+FeZknjjXHHkPLmyy5ZvEnnnVW4l17yeKvOOwqS
// xJuOvDeVeS+95PAmSZuc8uYRkDR/nle4oyApvLF5F3DXrTrv5ZcM3hh3UQ3FoiEp9l1SedSoSAJv
// bN5liLaUN4+CgvNW3jxKCsx7QwOgonBHRYF5A60aV7gjo6C8jSUtinc0FJB3CQOvKdzRUUDexjTJ
// or+GkqCC8eaxuRqKRUaB+28Vm0dKgXhj865DtK1wR0dBeKslTNFTwP67oXBHSwF48wWpKliLkoL5
// c7WmJWryz1sNvaMo37z50LupeEdKQfpvFaxFT355G8Haoj+/kjcF8Oc7yryjJ5+81ax3ROWP9wbL
// rCl3Hjn5491S+wsiKl+8yaIWtTcwkvLbf6u9v9GUH95qLBZd+fPnLbVmLSQhySVSfPA2dgcuuinW
// RVIjJX/+XM2LhSTURJtS29o7b7aISZl3KGoi2JDad/ry58q8w9IugmWpsbFn3mw3qDLvcITbuV3t
// SDQvP/5cV2tSwxLmnXkk08B98FbmHZ6wYReBzGoKPvx5TvEOTZjzYyAzee2RtwrOwxWCOdLm8ian
// vNq3Sq2FKWxYaaDxTXpSXtEb767KnIcrBHvkPALwRJaRebbvCkRPFe+QhC2rv0daPSlr35Yn3huk
// mIMy7/CEm7oAaNT00yJ443feV7xDFGrCBGBxsqTVoV54A5mBg5KA6PBbkzks8mbf9HQxxTs0Iajz
// 86NAS05W1RNv5lWUwhI2rY7G/bmkgZE33gfKvMMUbuuGeTycnMop3ng/U+YdqvjwW+N17iQYmzhv
// Fa2FLtzY5T2tawAYSDBwT/G5itbCFZkNBVpJprl54K2itbCF+SbM/rulgV5wAxfmrVLn4QvTtY7r
// TknZs+fFvvch2lp0E6yVENyxHd8spYCKh3gtpqK1cIVbuwJSjh418FIyUd4ttdAhdDURHAAHbtAO
// ysCDfTcg2lx0E6yVdhGM742EzEGXggvzBslD5c7DFV2MbOvAiYH/NaCBC/I+UnvGwhcbfo+YXcCs
// qrh9Y3e+u+gWWC8Zs6EOA38ezOxEeYPkULnzkEUXI7vZnaiB0+G6cz+xGG+1w38RYouRR0EIZVUR
// R00faX+0sH0fK/MOWXwxslOzKyU5UOMfc0Pv9s1PIVIKVdZsqMPAX0w0cCdpjHrQzyQzPvy5mgpd
// gNhi5KNx4McuBu5EvYU6+fLzpAbAowTy7s+BVq0r3GGLLUbeGGFRYqGzBXHUf+vPevUERl0FgNdN
// 82PfPyt3HrbMxchjBl7mDE3SHPVOI14oYqOmqOlj/4ZGyr+Ixuc5Zd9ha3z4bacx2lXv9zMvmFG3
// rBujOByt9iPIW3Xf4ctajDxm4AXr3JitYSVfJv57zzBqzVzS+os+VtxJhDd/g0V//zWTtRh5TKVu
// hz5CTx/XE4/BGGoOLbkzXstL0L7jinfYcixGHrW/jD6IH5CuGovPkLdSI49J5lxKtwnyTqtwLXS5
// Db9NmJoVlGkuXoA8ouJWqU9wPKaS56HLuRh5HMkk1FNxC/IuqpIOYYoPqa3FyK60wWReGugSj+xy
// eJQA7xLbR7ToRlgPObInCTCbjjtuOovmdlaYAO+uttdXvOev0SG1PnjsizfBvT+prLKYP99X7nye
// QmPZ7/0yyZ4AzQdwgjs/sYq22Pi7o+x7ThpNierpJ1b22x9uug9lUsAlxltX9i1f47OXbEg9daAl
// gjs+pUa+EO+YCs+lamxKq5JvW0ZN1S0JgHHH3Z92JIIQ7xPFW5bG/Def0toLYtQO3OWpJ2AI8c6o
// 7luSbBv+UK4RN6a0UhavICK469MPPJnNO6VmSySKTltj/11+HtOC9dTuuAtw+uq22bxb2l5Z8ZYk
// BPV+5u/JriT/7VCJbtmecbyNiD/fi6vuW5IwjHwRVG0WKU0loFV/RTNwC/GuqrXI0kTasZIBYIN6
// TpkyF6tNRSUUr/UUb0ni8Vol0yXu/GhDoPWl4hbmveiGWhUhTrxT0ACrlCkNd1EAtxjvvOItTwbx
// XJsR7woQEMI9FMCteC9ABvGd35KUeHCvjnHHdBHcivdCZBDX4zEZxCctVnORitcWI4M4evKCEj8K
// hlvrCB4rq3gvTAZxPCAnxFMCJCbirgjiFht/q3zLfIR2m5T4fiJA5IZxt4RxC/AGKp86P6Ems/FG
// wn8/DjSyWE3QJIX8udocOj8hbpnPMjSjfuSDt3O/6HQJ8VbLU+cp5Ey6eU3BeKvCJ8Q7IeotlHzJ
// IF7zl3RjxTck+nO13WDeGkm6HXmZSvFUTEmtV1wSIfSUpWD6PpJu4lX4xHjXVAc+f40k3cSdupez
// TdR+gyWSQfzw+IXHvQbCZ5uo/UTLJKMgIkS9pAfcHs42EdsvqBaohiDDutmfnvYKip9tIubP1dEG
// cxfNtOE2Huq0rZEX+/ZwtokY75baQDZXmaZdO02jbfLXnLdBOKDbSgQMXLCeB/YWTxfdKCsrw7RR
// 47e8DmFzG3PLel3oRAfNT+Wsd1A7DuYno5YDHoZl4jr7Gf/Ke8+qCp0vI2jfSdWBz0Vok28lq2SK
// ZUabTW3294TAOIiLZFVF62lW1AhcukzTPuwVtbpuzZXhP+pe9/oLZlUFeVd/U+XuJQttcdPu1HF/
// uWPRnlg5VcgoJaxHVkcDS5dp2sN8ogrqDtpTKqfOgCSQVRU+3yCtInRpMmDDTjv5iNPetlnmpMqp
// GsuqT7wVBLKqwrzV6YKSZG73P+wlwKNWO0f/adPWuFMqpwI6XdpKTbg22wuL8S6p84nkyPTjsNKO
// gUdaocbSp46mnVo5NVasTpouxVd/n2Xg4ueP9ZSBB5UJWz9OaNU9rcxs++lou06qnEprHqPj2ITV
// rDyrOhW4IO+uBl6qiC2QmGk3SRotQwoba4Wci23zR7pWTmX7CqbsURDIqno4LzYd/HT5tRVCu0aI
// Vo4BSrs2gbZxjmTJhSbZV2Dfo+ByfNFO0Hoe5kv9Qzl0nzL9+E4v0QWgZKM94eEnriWuW8+gsecX
// 7f/dxavPzqqK81YG7k8sHKd+/EBjC5Xq4zG54xlus6Gk5jHZV4Cf1NyevEch1epMpSQer7HDbpSF
// e5IVjzM/TqqstHMTPTl/EtwZ89RkIDYwSm2N7FFoOR42Pasqbt9d4TUUSkwWbJ36cY2Yd3kWbXKl
// AjbGcduL4LJ4wNyjYO/rp7thD/23t40r6y4L9nCfxOMpRntnFm3y1LHZUJciuOYehbpjxTrJqrJd
// iO7y0n/TjSvbyqMLyISNO+0kK7UGQPInXYA2uRqvjuE+HqubaO5RKDuTblMPlPXAm5T4Cni6/HrI
// gp2ux3hdPQBicX1KTG5/+uhs6MSaxyN7FFpsiDY1q+qFt1kDaNENusyyYFfKL0CVn+sIij1khOoz
// X2FkNnRaEVyXwiCY0pPJkDzZN9CqbSjykddVFuxOv2hWzATgZR7xzKnYixRHrLs+uSqqcQ+hnpmC
// oauRAtS7dyBvCJcSWDeZsGEt/rJrwC4BkGjsUi67Ys2G4NDmzQWK4KKtbWfSDfwkiTeJ0Q+VR3eR
// CXu3Fj9p2UwbZJ5BiLvZpqiROGdDrSK4U5/jLAzCD5R1e6RH+8bAn89897UTg70JiWUnNFvlY6AV
// OqLdtvlijtlQ3OCzi+DSZ7EbKv0cgNKUrKpnf87XJivghhjsJv5bzoJNrayqtWsiA7CxF7RmQwWr
// otKnOcpETMqqeuWdmnEeynrJSqo4YLeobcf6QsNtl9cs73GH7gE3tPxIp6A9mrTjzytvjaSA9xVw
// aIeNanbLPqK0i78Pp06KTHvZjNH7CxbBHflIJOnWHbg/yzNvY6JmzYFbh86gSv+l3Y2zkDwvPNwe
// e2WIEqZ1ixXBdXwuTnwfSvHn7GO01hu4uU0bonS5CCzYLG/azaShWCptwovH+OuJFsF1Pt+o6SaL
// NwWeXlfgyII9HBRiZgZNY7NUtpB821/zGIuRPRTBdf2IUsZjJnAtDT1HItGXxRrq+UzSGHlZ4TRI
// 8vlO1PTZNGQ2dCPlrQiu+weVZt+sD8/DzbUCbjNs1LENs+nc8wajXTzW3VecigvfJwPgsQiuB/nj
// Teff+7POPloh2Q17UP/F6LK7RmvQTNoJD9ICNcougvG9ueH2y5t8xWoGrYVPZ7OOhmH/UwOOYJzZ
// Nv4Xkjf1HaTZ3w22qxpfrCY/QvLLm0ajxdqqA0cTDNu5vox3280A3bb9HTPEe2Lc23MIiH3zxncg
// /tI9uMLEbaxRhfTYVadhs7+lrNyKjLU/bDZ0bikt/7xZJ545XE3gNsPeyuULMTfD5qPtXxsSum3r
// jSH6F5h2YnswBeFNfXqssXImbnfiw0aZZs9SY06cJckfkykRulFIUgsgWKPb/uaU3QjEmwIHhSHb
// vrwSxO2scXT2a9Jw4k7YJDAvYUfO16RJXPKDYLo6xwmpYLz58pm87C+9GDlY13qFWNc1OjMicpDY
// R/6mRKZ+CHhcn2PuMihvZuIZOs9LEjBRlZN1vlA0nfjowUFHGnPkdbpVU06QZv8gMDfPNaGBeTPi
// rbrIQvolFbJ5J5TL14samGDYpmkbibQ5gJk41SFFEnhrfKOMr9n9BQt5Ya3xqW0twyPy4KNtl080
// 34koGbw58cd8PQeKiFu3o8YD7B7x4dXJrDVj30CZR+SR3Gkjh7dp4znDyy13UzjMeldvxOlc1xTW
// /EsC8LJ3GKmbelSyeBvEC/zmX9rJceQ061y+zBJnU1lz09YO+EKGSJo2lTzedExKRim9IVxO5CZq
// Wkhud5iOZ2wufHr9ShKjxXfYF9uKLG2pvJlSACTrFUTX2C8PcoO0sX26k2/TGezZrA3TnmeMFqKk
// 8yatU8W2YPj1RfflyIl6i6JOamDPQN0tzfo6NtOOfE5JPm9uEK1EPAehyXwBX80EbfTVevq4zlGL
// uPBx014WbxVA87DvErcKLREnjh0+DdnOUXPXAZqEZQPaV1uB2cxq08aXME1batZ0YZoHb8s0cHPV
// Bzpr8jCgj5o0/jHX+L38PGkLwYVOcltF06aaE2+jyVLUzPsNfYs3P5qHf0eb2wiNmrReyfcPiPu2
// +W+xGvLGzWqatqy5ziXQ/HibrUu8qJZo/5xDu/Qtm0gSdps12+IoYtLH7USRgwbODyP4wckgI71i
// pk01V94jzJOJ9nFaNw3Qzkp8t6zjefZwGWGLbvT6BydJ3k/7IW0Gmz0drppph8NbIzX/DKMhuY0X
// iXp8ULOa8SnyrKb9BkCHucp+vJ05iWlHIybtXid8FmzwS3/Zk4TLzdtqTE6d7MEpZgr9XqMydC1C
// Y5ProQoY8k6nMej165lEjLzm3h6wg/Z6Yrp5g5CcqRWirRztEHk7MVA6NI4qJg7a8d6gUenkdNeE
// Bv03fSdXqaQb+Xwv3q8fJF7GKBtmzcAOd2b2ZMoHo8lg7sejOh+yXLxHqHPuVdMJJ2PF4knCqZNi
// LGk9lj94hLJvg3bAflGuwFX144vkzVVy1HLuglly6Yw9dtCun4LDZn68uap+fAl4m/JmmxtHEt/6
// iNHWVt6PLxPvRcnKq+TgCodoircddoxO3hLYuysPe215G7C1zIDVj1/lEG3deVuwzU57TWCvIW8T
// dqJnLGFYCz++lrwN2K2Ebb3KGsFeK97G/Gz3pX2t1aLbX/GeH+wSGXv1O1tLtpZSSAjZVlIbBbeQ
// LfhAjo0p1pWRmivrwJtPyVYJ7IiG42btTid05/SwYz2JdX9YHRf+vfK8eZ+NYZcrEYUNzR2EZ1kI
// 2fIwyHfrQbNIFoK6YejWFfK7dmbdMyvO2wzQiv0Iw2bosucXr16/vvzj6ox8jezVGfkeZ9fnb+Ap
// ZlpDsPb2DcziX+Q3uXL1DmZ1WNP/uMH/R3qWwl9h3l0OW0vEa9GGTW3z/PL95e3dvz/cP3y8ff36
// 7uHh+uz9q3cXd+e3nz6/evh0efnwnw8PX64fbr7en9MrZw9fv1y8vv/26u7m4R5f+rzC/pzNmxHY
// z4/NZfBRhc14X7/7cH99e5V9wDb99cO3h+zFzc2H7z/+fPPnx6svr28uHmoXd2//+3B2/+Pbl1e3
// H969hdc/rq8+v/32/urT6fnn69N7fUX9ubFkjmTQyDg7etG4C3D45uH65u791e159u37L/eXFxdf
// cBf+/ePdh8tPN+/uP93dfbm//Xz2Nnt1e/8RP+F/Py4uv99fvTl/+Prx9ur+8m32ekV5AzbyihUG
// Q7g642xE4i7SDeP/YDaL9FOdfDcd1SDuyU+zCJ7pOr6Gr57RK1ncrZ9m4Snuy75+u/8O8aVV5A0A
// neIsp40uexVgQ2MsbbDn/7NF4fY7A5rHCLMfzi5fG1dWjjcp82kNs1cmXTq2DpuPst1l2w/Lm8D4
// 5/8DUYQUbUqnG8EAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDUtMThUMTc6NDA6MjErMDM6MDBO
// sUFPAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA1LTE4VDE3OjQwOjIxKzAzOjAwP+z58wAAAABJ
// RU5ErkJggg==" />

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
//         stroke-dashoffset: 126.74981558023184;
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
// @keyframes fadeInAnimation {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }

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
//       <text class="stat" x="170" y="12.5" data-testid="commits">174</text>
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
