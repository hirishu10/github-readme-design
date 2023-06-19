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
  getCustomFullDateAndTimeWithAmPmIncludingSeconds,
} from "@hirishu10/simple-date-time";
import NextCors from "nextjs-cors";
//

type Data = any;

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

  const toDate = getCustomDate();
  const fullDay = getCustomDayNameFull();
  const shortMonth = getCustomMonthNameShort();
  const runnableClock = getCustomFullDateAndTimeWithAmPmIncludingSeconds();
  const year = "2022";

  try {
    res.status(200).send({
      access: "Success",
      message: {
        toDate: toDate ? toDate : "Error!",
        toDay: fullDay ? fullDay : "Error!",
        tomonth: shortMonth ? shortMonth : "Error!",
        toYear: year ? year : "Error!",
        toTimeStamp: runnableClock ? runnableClock : "Error!",
      },
    });
  } catch (error) {
    res.status(404).send({
      access: "Denied",
      message: "Sorry for the inconvenience",
      errorMessage: error,
    });
  }
}
