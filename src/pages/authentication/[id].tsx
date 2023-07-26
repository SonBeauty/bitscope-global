import LayoutDashBoard from "@/components/layout/Layout";
import {
  dataTelegramLoading,
  dataTwitterLoading,
} from "@/constant/components/Authentication";
import AuthenTelegram from "@/container/page/AuthenTelegram";
import AuthenTwitter from "@/container/page/AuthenTwitter";
import { TelegramProps, TwitterProps } from "@/interface/page/Authentication";
import { RootState } from "@/store";
import { setIsFakeData } from "@/store/authentication";
import { Player } from "@lottiefiles/react-lottie-player";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoAuthen } from "../api/authentication/AuthenTwiterAndTele";
import BackLeftSVG from "@/components/svg/BackLeftSVG";
import Loading from "@/components/Loading";

export default function Authentication() {
  const route = useRouter();
  const router = route.query.id;
  const numberShow = parseInt(route.asPath.slice(-1));
  const user = useSelector((state: RootState) => state.users.user);
  const dispath = useDispatch();
  const [progressTw, setProgressTw] = useState<number>(0);
  const [progressTe, setProgressTe] = useState<number>(0);
  const [progressStartTw, setProgressStartTw] = useState<number>(0);
  const [progressStartTe, setProgressStartTe] = useState<number>(0);
  const authenID = typeof router === "string" ? router : "";
  const [twitter, setTwitter] = useState<TwitterProps | null>(null);
  const [telegram, setTelegram] = useState<TelegramProps | null>(null);
  const { data } = useQuery(
    ["authenticationUser", router],
    () => getInfoAuthen(authenID),
    {
      refetchInterval: () =>
        (telegram?.status === "4" || telegram === null || !telegram) &&
        (twitter?.status === "2" || twitter === null || !twitter)
          ? false
          : 5000,
    }
  );
  useEffect(() => {
    if (
      data === undefined ||
      data === null ||
      !data ||
      (!data?.twitter?._id && !data?.telegram?._id)
    ) {
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
          setProgressTw(
            data?.twitter?.overview?.processBar >= 100
              ? 100
              : data?.twitter?.overview?.processBar || progressTw
          );
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
  if (!Number.isInteger(numberShow)) {
    return <Loading />;
  }
  return (
    <LayoutDashBoard className="bg-white">
      <div className="flex flex-col md:gap-[18px] md:gap:6 gap-[10px] w-full m-auto mt-[15px] md:mt-0">
        <div>
          <div className="md:hidden w-full rounded-tl-md rounded-tr-md h-full flex items-center gap-[14px] justify-start text-white bg-[#0046B0] px-4 py-[18px]">
            <div onClick={() => route.push("/authentication")}>
              <BackLeftSVG className="w-[11px] h-[18px]" />
            </div>
            <span className="font-Inter text-center font-bold text-lg leading-5 text-inherit uppercase">
              Authentication
            </span>
          </div>
          <div className="md:rounded-md rounded-none bg-[#0193E7] flex flex-col-reverse lg:flex-row relative justify-between items-center px-2 sm:px-8 overflow-hidden">
            <div className="lg:basis-2/5 z-30">
              <Player
                autoplay
                loop
                src="/assets/jsonGif/development.json"
                style={{ height: "292px", width: "550px" }}
                className="pb-4 w-[550px]"
              />
            </div>
            <div className="flex px-2 py-[27px] basis-3/5 z-20">
              <div className="flex flex-col md:items-start items-center justify-center gap-4 md:p-[18px] float-right">
                <div className=" font-normal text-5xl flex flex-row md:flex-row items-center gap-2">
                  <Image
                    src="/image/icons8-raised-hand-96.png"
                    width={53}
                    height={53}
                    alt="hand"
                  />
                  <h2
                    className={`text-white text-center md:text-start font-semibold md:text-[47px] md:leading-[56.88px] text-4xl text-Inter leading-[43.57px]`}
                  >
                    Hello {user?.name}
                  </h2>
                </div>
                <span className="text-white md:text-start text-center font-Inter text-[20px] leading-[26px] md:font-normal md:text-2xl">
                  Welcome to Authentication.
                </span>
                <p className="text-[#BDDDF9] font-Inter font-normal text-base md:leading-[26px] leading-5 text-center md:text-start">
                  We offer a comprehensive view of members who follow or join
                  the requested social platforms. The results are approximate,
                  and BitScope is optimizing the algorithm to provide the most
                  accurate results.
                </p>
              </div>
            </div>
          </div>
        </div>
        {twitter && numberShow !== 1 && (
          <AuthenTwitter
            twitter={twitter}
            progress={progressStartTw >= 100 ? 100 : progressTw}
          />
        )}
        {telegram && numberShow !== 2 && (
          <AuthenTelegram
            telegram={telegram}
            progress={progressStartTe >= 100 ? 100 : progressTe}
          />
        )}
      </div>
    </LayoutDashBoard>
  );
}
