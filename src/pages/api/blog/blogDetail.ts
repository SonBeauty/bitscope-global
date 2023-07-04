import data from "./blog.json";
export const getBlog = async ({ link }: any) => {
  return await data.filter((sp) => link?.includes(sp?.link));
};