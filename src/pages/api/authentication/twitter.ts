import axiosTwitter from "@/axios/axiosTwitter";
import { AuthenTwwitter } from "@/interface/page/Authentication";
export const getUserTwitter = async (twitterId: AuthenTwwitter) => {
  const response = await axiosTwitter.post(
    "/followeraudit/scrape_twitter",
    twitterId
  );
  return response.data;
};
