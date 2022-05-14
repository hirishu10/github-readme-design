// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // req.headers.name
  // console.log("process.cwd()", process?.cwd());
  // res.setHeader("Content-Type", "image/svg+xml")
  // res.write("<h1>Hello World</h1>")
  res.status(200).json({ name: "John Doe" });
}
