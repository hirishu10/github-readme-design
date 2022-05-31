// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  getCustomDayNameFull,
  getCustomMonthNameShort,
  getCustomDate,
  getCustomFullDateAndTimeWithAmPmIncludingSeconds,
} from "@hirishu10/simple-date-time";
//

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
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
