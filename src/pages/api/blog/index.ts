// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Data } from "@/interface/PostBlog";
import data from "./blog.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default function Blog(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(data);
}