import TwitterAuthentication from "@/components/PageComponents/Authentication/TwitterAuthentication";
import LayoutDashBoard from "@/components/layout/Layout";
import { RootState } from "@/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Authentication() {
  const user = useSelector((state: RootState) => state.users.user);
  const data = useSelector((state: RootState) => state.twitter.twitter);
  const [twitter, setTwitter] = useState(false);
  const [dataFolower, setDataFolower] = useState<any>([]);
  const [dataTwitter, setDataTwitter] = useState<any>([]);
  const [detailTwitter, setDetailTwitter] = useState<any>([]);
  const [series, setSeries] = useState<any>([]);
  useEffect(() => {
    if (data) {
      setTwitter(true);
    }
  }, [data]);
  useEffect(() => {
    const dataFollowers = data?.quality?.map((item: any, index: number) => {
      return { category: index, value: item };
    });
    const dataTwiters = [
      {
        title: "Tweet",
        count: data?.tweetsp,
        bg: "bg-[#C6C7F8]",
      },
      {
        title: "Like",
        count: data?.likesp,
        bg: "bg-[#B8E6FF]",
      },
      {
        title: "Follower",
        count: data?.fowerp,
        bg: "bg-[#BAEDBD]",
      },
      {
        title: "Following",
        count: data?.foingp,
        bg: "bg-[#FEEDD7]",
      },
    ];
    const ArrInfoUser = [
      {
        icon: (
          <Image
            src="/image/icons8-toggle-off.png"
            alt="icon"
            width={29}
            height={29}
          />
        ),
        info: "Inactive for a long time",
        numberInfo: data?.inact_val,
      },
      {
        icon: (
          <Image
            src="/image/icons8-worse.png"
            alt="icon"
            width={29}
            height={29}
          />
        ),
        info: "Very less tweets",
        numberInfo: data?.les_tw_val,
      },
      {
        icon: (
          <Image
            src="/image/icons8-three-user.png"
            alt="icon"
            width={29}
            height={29}
          />
        ),
        info: "Very less followers",
        numberInfo: data?.les_fo_val,
      },
      {
        icon: (
          <Image
            src="/image/icons8-user-perso.png"
            alt="icon"
            width={29}
            height={29}
          />
        ),
        info: "Without profile avatar",
        numberInfo: data?.de_img_val,
      },
      {
        icon: (
          <Image
            src="/image/icons8-user-find.png"
            alt="icon"
            width={29}
            height={29}
          />
        ),
        info: "Spamy name/ username",
        numberInfo: data?.fake_u_val,
      },
      {
        icon: (
          <Image
            src="/image/icons8-bright.png"
            alt="icon"
            width={29}
            height={29}
          />
        ),
        info: "Uneven followers following ratio",
        numberInfo: data?.unev_val,
      },
      {
        icon: (
          <Image
            src="/image/icons8-list.png"
            alt="icon"
            width={29}
            height={29}
          />
        ),
        info: "Without Bios",
        numberInfo: data?.no_loc_val,
      },
      {
        icon: (
          <Image
            src="/image/icons8-notmap.png"
            alt="icon"
            width={29}
            height={29}
          />
        ),
        info: "Without location information",
        numberInfo: data?.no_loc_val,
      },
      {
        icon: (
          <Image
            src="/image/icons8-notlink.png"
            alt="icon"
            width={29}
            height={29}
          />
        ),
        info: "Followers without URL",
        numberInfo: data?.no_url_val,
      },
    ];
    setDataTwitter(dataTwiters);
    setDataFolower(dataFollowers);
    setDetailTwitter(ArrInfoUser);
    setSeries([
      parseInt(data?.verified_p),
      parseInt(data?.act_p),
      parseInt(data?.inact_p),
      parseInt(data?.fake_p),
    ]);
  }, [
    data?.act_p,
    data?.de_img_val,
    data?.fake_p,
    data?.fake_u_val,
    data?.foingp,
    data?.fowerp,
    data?.inact_p,
    data?.inact_val,
    data?.les_fo_val,
    data?.les_tw_val,
    data?.likesp,
    data?.no_loc_val,
    data?.no_url_val,
    data?.quality,
    data?.tweetsp,
    data?.unev_val,
    data?.verified_p,
  ]);
  return (
    <LayoutDashBoard>
      <div className="p-1 sm:pt-8 flex flex-col gap-8 w-full m-auto ">
        <div className="bg-[url('/image/bg-cover-1.svg')] bg-no-repeat bg-cover rounded-2xl">
          <div className="max-w-[585px] float-right p-8">
            <div className="flex flex-col items-start justify-center gap-4 p-8">
              <div className=" font-normal text-5xl flex gap-2">
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
              <p className="text-slate-50 font-normal text-base">
                Authentication is currently in development, so the results are
                relative and not 100% accurate for user quality. We are working
                hard everyday to deliver the most complete product. Below is an
                overview of two specified Twitter/ Telegram links.
              </p>
            </div>
          </div>
        </div>
        {twitter && (
          <TwitterAuthentication
            arrInfoUser={detailTwitter}
            arrRender={dataTwitter}
            content={`This Twitter account has ${
              parseFloat(data?.verified_p) + parseFloat(data?.act_p)
            }% of followers identified as real people, ${parseFloat(
              data?.inact_p
            )}% of average accounts, and ${parseFloat(
              data?.fake_p
            )}% of BOT followers.`}
            corlor={`${
              parseFloat(data?.verified_p) + parseFloat(data?.act_p) > 50
                ? "bg-green-200"
                : "bg-red-200"
            }`}
            data={dataFolower}
            image={data?.profile_image}
            name={data?.name}
            series={series}
            src={
              <Image
                src={`${
                  parseFloat(data?.verified_p) + parseFloat(data?.act_p) > 50
                    ? "/image/checkOke.png"
                    : "/image/icons8-dislike.png"
                }`}
                alt="quality"
                width={76}
                height={76}
              />
            }
            textJoin={data?.join}
            title={`${
              parseFloat(data?.verified_p) + parseFloat(data?.act_p) > 50
                ? "This is a quality Twitter account"
                : "This is a bad Twitter account"
            }`}
            username={data?.s_name}
          />
        )}
        {/* <InstagramAuthentication /> */}
      </div>
    </LayoutDashBoard>
  );
}
