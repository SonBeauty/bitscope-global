import LayoutDashBoard from "@/components/layout/Layout";
import AuthenTelegram from "@/container/page/AuthenTelegram";
import AuthenTwitter from "@/container/page/AuthenTwitter";
import { RootState } from "@/store";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoAuthen } from "../api/authentication/AuthenTwiterAndTele";
import { TelegramProps, TwitterProps } from "@/interface/page/Authentication";
import {
  dataTelegramLoading,
  dataTwitterLoading,
} from "@/constant/components/Authentication";
import { setIsFakeData } from "@/store/authentication";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
export default function Authentication() {
  const route = useRouter();
  const router = route.query.id;
  const user = useSelector((state: RootState) => state.users.user);
  const dispath = useDispatch();
  const [progressTw, setProgressTw] = useState<number>(0);
  const [progressTe, setProgressTe] = useState<number>(0);
  const [progressStartTw, setProgressStartTw] = useState<number>(0);
  const [progressStartTe, setProgressStartTe] = useState<number>(0);
  const authenID = typeof router === "string" ? router : "";
  const { data } = useQuery(
    ["authenticationUser", router],
    () => getInfoAuthen(authenID),
    {
      refetchInterval: (data) =>
        (data?.telegram?.status === "4" || data?.telegram === null) &&
        (data?.twitter?.data?.status === "2" || data?.twitter === null)
          ? false
          : 5000,
    }
  );
  const [twitter, setTwitter] = useState<TwitterProps | null>(null);
  const [telegram, setTelegram] = useState<TelegramProps | null>(null);
  useEffect(() => {
    if (data === undefined || data === null || !data) {
      dispath(setIsFakeData(true));
      setTwitter(dataTwitterLoading);
      setTelegram(dataTelegramLoading);
    } else {
      dispath(setIsFakeData(false));
      if (data?.twitter && data.twitter !== null) {
        setTwitter(data?.twitter);
        if (data.twitter.status === "2") {
          setProgressStartTw(100);
          setProgressTw(100);
        } else {
          setProgressStartTw(progressTw);
          setProgressTw(data?.twitter?.data?.processBar || progressTw);
        }
      } else {
        setTwitter(null);
      }
      if (data?.telegram && data?.telegram !== null) {
        setTelegram(data.telegram);
        if (data.telegram.status === "4") {
          setProgressStartTe(100);
          setProgressTe(100);
        } else {
          setProgressStartTe(progressTe);
          setProgressTe(
            data?.telegram?.overview?.percent > 100
              ? 99
              : data?.telegram?.overview?.percent || progressTe
          );
        }
      } else {
        setTelegram(null);
      }
    }
  }, [data, dispath, progressTe, progressTw]);
  return (
    <LayoutDashBoard className="bg-white">
      <div className="p-1 sm:pt-8 flex flex-col gap-6 w-full m-auto">
        <div className="rounded-2xl bg-[#0B81E9] flex flex-col-reverse lg:flex-row relative justify-between items-center px-2 sm:px-8 overflow-hidden ">
          <div className="lg:basis-1/3 z-30">
            <Player
              autoplay
              loop
              src="/assets/jsonGif/development.json"
              style={{ height: "400px", width: "600px" }}
              className="pb-4 w-[600px] lg:w-[600px]"
            ></Player>
          </div>
          <div className="flex p-4 basis-2/3 z-20">
            <div className="flex flex-col items-start justify-center gap-4 md:p-8 float-right">
              <div className=" font-normal text-5xl flex flex-col md:flex-row items-center gap-2">
                <Image
                  src="/image/icons8-raised-hand-96.png"
                  width={53}
                  height={53}
                  alt="hand"
                />
                <h2 className="text-white">Hello {user?.name}</h2>
              </div>
              <span className="text-white font-normal text-2xl">
                Welcome to Authentication.
              </span>
              <p className="text-slate-200 font-normal text-base text-center">
                We offer a comprehensive view of members who follow or join the
                requested social platforms. The results are approximate, and
                BitScope is optimizing the algorithm to provide the most
                accurate results.
              </p>
            </div>
          </div>
        </div>
        {twitter && (
          <AuthenTwitter
            twitter={twitter}
            progress={progressStartTw >= 100 ? 100 : progressStartTw}
          />
        )}
        {telegram && (
          <AuthenTelegram
            telegram={telegram}
            progress={progressStartTe >= 100 ? 100 : progressStartTe}
          />
        )}
      </div>
    </LayoutDashBoard>
  );
}
