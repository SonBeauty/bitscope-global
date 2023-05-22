import InstagramAuthentication from "@/components/PageComponents/Authentication/InstagramAuthentication";
import TwitterAuthentication from "@/components/PageComponents/Authentication/TwitterAuthentication";
import LayoutDashBoard from "@/components/layout/Layout";
import { RootState } from "@/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const ArrTelegram = [
  {
    title: "Number of samples",
    count: "3,564",
    bg: "bg-[#C6C7F8] 	",
  },
  {
    title: "Conversation",
    count: "564",
    bg: "bg-[#B8E6FF] 	",
  },
  {
    title: "Admin Messenges",
    count: "1,834",
    bg: "bg-[#BAEDBD] 	",
  },
];
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
        <div className="rounded-2xl bg-[#0094E8] flex flex-col-reverse lg:flex-row relative justify-between items-end px-2 sm:px-8 overflow-hidden ">
          <div className="lg:px-16 lg:pt-24 lg:basis-1/2 z-30">
            <Image
              src="/image/FrameAuthen.svg"
              width={400}
              height={100}
              alt="authen"
              className="lg:ml-20 pb-4 w-[200px] lg:w-[400px]"
            />
          </div>
          <div className="flex p-4 basis-1/2 z-20">
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
              <p className="text-slate-50 font-normal text-base">
                Authentication is currently in development, so the results are
                relative and not 100% accurate for user quality. We are working
                hard everyday to deliver the most complete product. Below is an
                overview of two specified Twitter/ Telegram links.
              </p>
            </div>
          </div>
          <div className="w-[300px] h-[300px] p-8 rounded-full z-[10] bg-[#005ECE] absolute lg:w-[700px] lg:h-[700px] lg:top-[15%] lg:left-[1%] bottom-[-25%] right-[-5%]"></div>
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
        <InstagramAuthentication
          arrRender={ArrTelegram}
          content="Bitscope discovered that 22% of the members of this community are BOT-Net, the number of active user account for 18% (186 members), the rest are in the medium group. Group [xxxx] ranked 6/16 groups of similar size."
          corlor="bg-yellow-100"
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
          title="That Telegram Group don’t seem so good"
          username={data?.s_name}
        />
      </div>
    </LayoutDashBoard>
  );
}