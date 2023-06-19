export const combineLinkAndAddress = (link: string, name: any) => {
  if (!name || name.length === 0) {
    return "";
  }
  return `${link}/${name.split("/").pop().split("@").pop()}`;
};
export function convertDate(dateString: string) {
  const dateObject = new Date(dateString);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}