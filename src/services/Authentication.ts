import { Authentication } from "@/interface/page/Authentication";
export const inputTeleOrTwitter = (data: Authentication) => {
  if (
    data.twitter?.startsWith("https://twitter.com/") ||
    data.twitter?.startsWith("@") ||
    data.telegram?.startsWith("https://t.me/") ||
    data.telegram?.startsWith("@")
  ) {
    return true;
  }
  return false;
};
export const combineLinkAndAddress = (link: string, name: any) => {
  if (name.length === 0) {
    return "";
  }
  return `${link}/${name.split("/").pop().split("@").pop()}`;
};
