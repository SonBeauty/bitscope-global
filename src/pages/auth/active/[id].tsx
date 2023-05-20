import axiosInstance from "@/axios";
import ActivateNotification from "@/pages/activate-notification";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Activate() {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const res = await axiosInstance.get(`/auth/active/${id}`);
        const data = await res.data;
        setData(data);
        setLoading(false);
      };
      fetchUser();
    }
  }, [id]);
  setTimeout(() => {
    setLoading(false);
  }, 5000);
  return (
    <ActivateNotification
      status={data === "ok" ? true : false}
      isLoading={loading}
    />
  );
}
