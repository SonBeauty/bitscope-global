import { RootState } from "@/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Loading() {
  const router = useRouter();
  const isLogin = useSelector((state: RootState) => state.users.isLogin);
  useEffect(() => {
    if (!isLogin) {
      const timeoutID = setTimeout(() => {
        router.push("/login");
      }, 5000);
      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [isLogin, router]);
  return (
    <div className="relative w-full h-screen bg-[url('/image/signup-bg.jpg')] z-0 pt-32">
      <div className="flex flex-col items-center justify-center max-w-2xl gap-8 p-8 pt-24 m-auto md:pt-8 z-10">
        <div role="status" className="max-w-sm animate-pulse h-creen w-screen">
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4" />
          <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full max-w-[360px]" />
          <h1 className="text-xl font-extrabold text-primary-dark-600">
            Please Wait
          </h1>
        </div>
      </div>
    </div>
  );
}
