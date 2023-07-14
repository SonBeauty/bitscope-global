import axiosAuthen from "@/axios/axiosAuthen";

interface Change {
  name: string;
  tag?: string;
}
interface Changelogs {
  name: string;
  change: Change[];
}

export const listChangelogs = async () => {
  const response = await axiosAuthen.get("/changelogs");
  return response.data.data.data;
};
export const changelogsDetail = async (id: string) => {
  const response = await axiosAuthen.get(`/changelogs/${id}`);
  return response.data;
};
export const addChangelogs = async (formdata: Changelogs) => {
  const response = await axiosAuthen.post("/changelogs", formdata);
  return response.data;
};
export const editChangelogs = async (obj: any) => {
  const { id, formdata } = obj;
  const response = await axiosAuthen.put(`/changelogs/${id}`, formdata);
  return response.data;
};
export const deleteChangelogs = async (id: string) => {
  const response = await axiosAuthen.delete(`/changelogs/${id}`);
  return response.data;
};
