// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

// type Data = {
//   name: string;
// };

// res: NextApiResponse<Data>
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = "Rishu Chowdhary";
  // const r = useRouter();
  // console.log("r", req?.query?.name);
  // req?.headers
  const head =
    // '<svg width="200" height="200" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/>';
    '<svg width="1280" height="200" viewBox="0 0 1280 200" xmlns="http://www.w3.org/2000/svg" style="box-shadow:0px 0px 5px 1px #acacac;"><g><rect width="1280" height="200" fill="#ffffff" stroke-width="1" /> <text x="20" y="70" text-anchor="start" font-size="50">Rishu Chowdhary</text></g></svg>';
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
//           <text
//             className={sCode.textLayout}
//             x="20"
//             y="70"
//             textAnchor="start"
//             fontSize={50}
//           >
//             {testGit?.name}
//           </text>
//           <text
//             className={sCode.textLayout}
//             x="20"
//             y="100"
//             textAnchor="start"
//             fontSize={20}
//           >
//             {`👨🏻‍💻 ${title}`}
//           </text>
//           <text
//             className={sCode.textLayout}
//             x="20"
//             y="130"
//             textAnchor="start"
//             fontSize={20}
//           >
//             {`📧 ${testGit?.email}`}
//           </text>
//           <text
//             className={sCode.textLayout}
//             x="1050"
//             y="80"
//             textAnchor="start"
//             fontSize={60}
//             fill={"#f82020"}
//           >
//             {toDate}
//           </text>
//           <text
//             className={sCode.textLayout}
//             x="1110"
//             y="80"
//             textAnchor="start"
//             fontSize={40}
//           >
//             {shortMonth}
//           </text>
//           <text
//             className={sCode.textLayout}
//             x="1050"
//             y="150"
//             textAnchor="start"
//             fontSize={70}
//           >
//             {year}
//           </text>
//         </g>
//         {/* footer */}
//         <text
//           className={sCode.textLayout}
//           x="1150"
//           y="190"
//           textAnchor="start"
//           fontSize={10}
//           fill={"#e3e3e3"}
//         >
//           {"Github-Readme-Design"}
//         </text>
//       </svg>
// '
