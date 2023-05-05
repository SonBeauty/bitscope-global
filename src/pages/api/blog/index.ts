// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "@/constant/data";
import { Data } from "@/interface/PostBlog";
import type { NextApiRequest, NextApiResponse } from "next";

export default function Blog(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(data);
}
