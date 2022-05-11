// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.setHeader("Content-Type", "image/svg+xml")
  // res.write("<h1>Hello World</h1>")
  res.status(200).json({ name: 'John Doe' })
}
