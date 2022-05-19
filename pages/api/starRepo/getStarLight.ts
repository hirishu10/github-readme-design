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
  const year = "2022";

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

  const data = `
    <svg width="495" height="195" viewBox="0 0 495 195" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 495 195" xmlSpace="preserve" 
    fill="none"
    style="border:1px solid silver; margin:10px 0px 0px 10px;"
    >

    <image id="image0" width="495" height="195" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAADDCAMAAACcTmkGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABLFBMVEXx8vXv8PPw8fT3+Pn/
///+/v7z9Pbx8vT9/v3v8PT6+/vw8PP09ff7+/v+///8/P35+fr19vfy8/Xw8PT29/j+//77+/zu
8PP8/Pz19vj//v76+vv+/v/8/f3w8fP///729vj7/Pz9/f3u7/Lw8vTv8fP4+fr4+fn//v/39/nu
7/P39/j5+vr19ff6+/z5+vv9/v709vfv8fT09Pb9/f74+Pnx8/X5+fvy9Pby8vXz8/bz9PX09fb2
9/n6+vr4+Pry8/bz9fbz9Pfx8fT5+fnl5eXi4uLz8/Px8fHr6+v4+Pjk5OTj4+P19fXm5uby8vLt
7e3w8PDs7Ozq6urY2Nju7u7f39/g4ODo6Oje3t7p6end3d3h4eHv7+/n5+f09PTc3Nzb29v39/f2
9vY4zDp/AAAAAWJLR0QEj2jZUQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+YFEhQoFRWW
A7YAABMjSURBVHja7Z0JYxq5FcfRIEHBYE5zGIxhEkjw2sF1cLbr7nrT1nbitZM4dmMnaa5tv/93
qK65YADNjBgY0D/ZbJzh1G/e09OT9BSLAU2egAbiECGotKzCuOUBx6+VgFDhXmLF5OJO/gXjVsCX
VzGZzjwF0gr3cksi7w3aeavue6kljzf25hkCW+FeZknjjXHHkPLmyy5ZvEnnnVW4l17yeKvOOwqS
xJuOvDeVeS+95PAmSZuc8uYRkDR/nle4oyApvLF5F3DXrTrv5ZcM3hh3UQ3FoiEp9l1SedSoSAJv
bN5liLaUN4+CgvNW3jxKCsx7QwOgonBHRYF5A60aV7gjo6C8jSUtinc0FJB3CQOvKdzRUUDexjTJ
or+GkqCC8eaxuRqKRUaB+28Vm0dKgXhj865DtK1wR0dBeKslTNFTwP67oXBHSwF48wWpKliLkoL5
c7WmJWryz1sNvaMo37z50LupeEdKQfpvFaxFT355G8Haoj+/kjcF8Oc7yryjJ5+81ax3ROWP9wbL
rCl3Hjn5491S+wsiKl+8yaIWtTcwkvLbf6u9v9GUH95qLBZd+fPnLbVmLSQhySVSfPA2dgcuuinW
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
RU5ErkJggg==" />

      <g>
        <rect
          x="0"
          y="0"
          width="495"
          height="195"
        style="fill:none;"
        />

        <text x="10" y="50" fill="black">Hello World</text>


        <g>
  
        <svg x="10" y="10" width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 50 50" fill="orange">
        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" fill="#57606a"/>
        </svg>
        </g>
        <text x="10" y="50" fill="black">react-login-register-ui-with-CRUD-Functionality</text>
    
        </g>
</svg>
`;

  fs.writeFile("getStartLight.svg", data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
  const filePath = path.join(process.cwd(), "/getStartLight.svg");
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