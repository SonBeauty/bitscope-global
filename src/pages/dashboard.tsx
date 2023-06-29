import HomeBredCurbs from "@/components/PageComponents/Dashboard/HomeBredCurbs";
import Rating from "@/components/PageComponents/MainBoard/Rating";
import LayoutDashBoard from "@/components/layout/Layout";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import { rowss, Trending, customers2, post, rows } from "@/constant/mainBoard";
import { RootState } from "@/store";
import {
  ChartBarIcon,
  ChatBubbleLeftIcon,
  GlobeAltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRetweet } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function MainBoard() {
  const user = useSelector((state: RootState) => state.users.user);
  return (
    <LayoutDashBoard>
      <HomeBredCurbs title="Main Board" />
      <div className="grid md:grid-cols-4 gap-3 sm:grid-cols-2 grid-cols-1">
        <div className="p-6 relative z-[1] rounded-lg text-white bg-[#005AE2] flex justify-between items-center flex-col shadow-md">
          <picture>
            <img
              src="https://dashboard.zen-s.com/assets/user-1.ad58ce72.jpg"
              alt="avatar"
              className="w-24 h-24 object-cover rounded-full"
            />
          </picture>
          <div className="text-white flex flex-col items-center justify-center">
            <h6 className="text-inherit font-normal mt-1">Good Evening</h6>
            <h5 className="text-inherit">{user?.name}</h5>
          </div>
          <h6 className="text-white font-normal">Welcome to BitScope</h6>
        </div>
        <Rating src="/image/wchar.svg" rows={rowss} title="Biggest Gainers" />
        <Rating
          rows={rowss}
          src="/image/groupstar.svg"
          title="Potential Tokens"
        />
        <Rating
          src="/image/trend.svg"
          rows={Trending}
          title="Trending Topic"
          reset={true}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-3 grid-cols-1 mt-3">
        <Card
          title="TOP TRENDING CRYPTOCURRENCIES"
          className=" bg-white rounded-lg shadow-md"
        >
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {rows.map((item, i) => (
              <div
                key={item.id}
                className={` relative z-[1] text-center p-4 rounded-xl before:w-full before:h-[calc(100%-60px)] before:absolute before:left-0 before:top-[60px] before:rounded-xl before:z-[-1] before:bg-opacity-[0.1] ${item.bg}`}
              >
                <div
                  className={`${"ring-4 ring-[#FFFFFF]"} h-[70px] w-[70px] rounded-full mx-auto mb-4 relative`}
                >
                  {item.active && (
                    <span className="crown absolute -top-[20px] left-1/2 -translate-x-1/2">
                      <picture>
                        <Image
                          width={50}
                          height={50}
                          src="/image/corona.svg"
                          alt=""
                        />
                      </picture>
                    </span>
                  )}
                  <picture>
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </picture>
                  <span className="h-[27px] w-[27px] absolute right-0 bottom-0 rounded-full bg-[#FFC155] border border-white flex flex-col items-center justify-center text-white text-xs font-medium">
                    {item.number}
                  </span>
                </div>
                <h4 className="text-sm text-slate-600 font-semibold mb-4">
                  {item.name}
                </h4>
                <div className="inline-block bg-slate-900 text-white px-[10px] py-[6px] text-xs font-medium rounded-full min-w-[60px]">
                  {item.value}
                </div>
                <div>
                  <div className="flex justify-between text-sm font-normal dark:text-slate-300 mb-3 mt-4">
                    <span>Progress</span>
                    <span className="font-normal">{item.value}%</span>
                  </div>
                  <ProgressBar value={item.value} className={item.barColor} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 mt-10">
            {customers2.map((item, i) => (
              <div
                key={i}
                className="relative z-[1] p-4 rounded md:flex items-center bg-gray-5003 dark:bg-slate-900 md:space-x-10 md:space-y-0 space-y-3 rtl:space-x-reverse"
              >
                <h4 className="text-base text-slate-600 dark:text-white text-center font-semibold">
                  {item.number}
                </h4>
                <div
                  className={`${
                    item.active ? "ring-2 ring-[#FFC155]" : ""
                  } h-10 w-10 mx-auto sm:mx-1 rounded-full relative`}
                >
                  {item.active && (
                    <span className="crown absolute -top-[14px] left-1/2 -translate-x-1/2">
                      <picture>
                        <img
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          alt=""
                        />
                      </picture>
                    </span>
                  )}
                  <picture>
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </picture>
                  <span className="h-4 w-4 absolute right-0 bottom-0  rounded-full bg-[#FFC155] border border-white flex flex-col items-center justify-center text-white text-[10px] font-medium">
                    {item.number}
                  </span>
                </div>
                <h4 className="text-sm text-slate-600 text-center font-semibold flex-1 dark:text-white">
                  {item.title}
                </h4>
                <div className="inline-block text-center bg-slate-900 text-white px-[10px] py-[6px] text-xs font-medium rounded-full min-w-[60px]">
                  {item.value}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm font-normal dark:text-white mb-3">
                    <span className="dark:text-white">Progress</span>
                    <span className="font-normal dark:text-white">
                      {item.value}%
                    </span>
                  </div>
                  <ProgressBar value={item.value} className={item.barColor} />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card
          title="Influencer saying"
          className="border-none rounded-lg shadow-md max-h-[1050px] scrollOver overflow-y-auto"
        >
          <div className="flex flex-col gap-1">
            {post.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-background flex px-8 py-4 flex-col gap-4 rounded-md"
                >
                  <div className="flex gap-2 items-center">
                    <picture>
                      <img
                        src={item.image}
                        alt="alt"
                        className="w-16 h-16 rounded-full"
                      />
                    </picture>
                    <div className="">
                      <h6 className="mb-1 text-black-500">{item.name}</h6>
                      <span className="text-[#005AE2]">
                        {item.status}
                        <GlobeAltIcon
                          className={`h-3 w-3 ${item.bg} inline ml-1`}
                        />
                      </span>
                    </div>
                  </div>
                  <p className="text-start line-clamp-2">{item.post}</p>
                  <div className="flex gap-6 flex-col sm:flex-row">
                    <div className="flex justify-between items-center basis-8/12">
                      <div className="bg-blue-200 p-2 rounded-full">
                        <ChatBubbleLeftIcon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <AiOutlineRetweet className="h-8 w-8 text-[#536471]" />
                        <span className="text-lg text-[#536471]">
                          {item.retwit}
                        </span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <HeartIcon className="h-8 w-8 text-[#536471]" />
                        <span className="text-lg text-[#536471]">
                          {item.hurt}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <ChartBarIcon className="h-8 w-8 text-[#536471]" />
                        <span className="text-lg text-[#536471]">
                          {item.ana}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={item.link}
                      className="text-[#005AE2] py-2 cursor-pointer rounded-3xl basis-4/12 text-center text-md font-medium"
                    >
                      View More &gt;&gt;&gt;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </LayoutDashBoard>
  );
}
