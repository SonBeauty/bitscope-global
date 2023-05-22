import HomeBredCurbs from "@/components/PageComponents/Dashboard/HomeBredCurbs";
import Rating from "@/components/PageComponents/MainBoard/Rating";
import LayoutDashBoard from "@/components/layout/Layout";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
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
const customers2 = [
  {
    title: "Binance",
    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    value: 60,
    bg: "before:bg-info-500",
    barColor: "bg-info-500",
    active: false,
    number: 4,
  },
  {
    title: "Tether",
    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
    value: 50,
    bg: "before:bg-warning-500",
    barColor: "bg-warning-500",
    active: false,
    number: 5,
  },
  {
    title: "USD Coin",
    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    value: 40,
    bg: "before:bg-warning-400",
    barColor: "bg-warning-500",
    active: false,
    number: 6,
  },
  {
    title: "XRP",
    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
    value: 30,
    bg: "before:bg-warning-300",
    barColor: "bg-warning-500",
    active: false,
    number: 7,
  },
  {
    title: "Cadano",
    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
    value: 20,
    bg: "before:bg-warning-200",
    barColor: "bg-warning-500",
    active: false,
    number: 8,
  },
];
const rows = [
  {
    id: 1,
    age: 2,
    name: "Bitcoin",
    code: "BTC",
    price: "$26,785.68",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    tag: "#TruthGPT",
    value: 70,
    bg: "before:bg-warning-500",
    barColor: "bg-warning-500",
    number: 2,
  },
  {
    id: 2,
    age: 1,
    name: "BitScope",
    code: "BTS",
    price: "$311.17",
    image: "https://i.imgur.com/gaIDZDP.png",
    tag: "#GaryGensler",
    value: 80,
    bg: "before:bg-info-500",
    barColor: "bg-info-500",
    number: 1,
    active: true,
  },
  {
    id: 3,
    age: 3,
    name: "Ethererum",
    code: "ETH",
    price: "$1,806.35",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    tag: "#SEC",
    value: 65,
    bg: "before:bg-success-500",
    barColor: "bg-success-500",
    number: 3,
  },
];
const Trending = [
  {
    id: 1,
    tag: "#TruthGPT",
  },
  {
    id: 2,
    tag: "#GaryGensler",
  },
  {
    id: 3,
    tag: "#SEC",
  },
];
const post = [
  {
    image:
      "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
    name: "Elon Musk",
    status: "Just now",
    post: "Lorem ipsum dolor sit amet, Khánh Hoà consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .....",
    retwit: "3",
    hurt: "7",
    ana: "166",
    link: "#",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1651846384377577472/6JLb6sMF_x96.jpg",
    name: "CZ",
    status: "April, 23",
    post: "Lorem ipsum dolor sit amet, Khánh Hoà consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .....",
    retwit: "3",
    hurt: "7",
    ana: "166",
    link: "#",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_x96.jpg",
    name: "vitalik.eth",
    status: "April, 23",
    post: "Lorem ipsum dolor sit amet, Khánh Hoà consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .....",
    retwit: "3",
    hurt: "7",
    ana: "166",
    link: "#",
  },
];
export default function MainBoard() {
  const user = useSelector((state: RootState) => state.users.user);
  return (
    <LayoutDashBoard>
      <HomeBredCurbs title="Main Board" />
      <div className="grid md:grid-cols-4 gap-2 sm:grid-cols-2 grid-cols-1">
        <div className="p-6 relative z-[1] rounded-2xl text-white bg-primary-500 flex justify-between items-center flex-col">
          <picture>
            <img
              src="https://dashboard.zen-s.com/assets/user-1.ad58ce72.jpg"
              alt="avatar"
              className="w-24 h-24 object-cover rounded-full"
            />
          </picture>
          <div className="text-white flex flex-col items-center justify-center">
            <h6 className="text-inherit">Good Evening</h6>
            <h5 className="text-inherit">{user?.name}</h5>
          </div>
          <h6 className="text-white">Welcome to BitScope</h6>
        </div>
        <Rating src="/image/wchar.svg" rows={rows} title="Biggest Gainers" />
        <Rating
          rows={rows}
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
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1 mt-12">
        <div className=" bg-white p-4 rounded-2xl">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {rows.map((item, i) => (
              <div
                key={item.id}
                className={` relative z-[1] text-center p-4 rounded before:w-full before:h-[calc(100%-60px)] before:absolute before:left-0 before:top-[60px] before:rounded before:z-[-1] before:bg-opacity-[0.1] ${item.bg}`}
              >
                <div
                  className={`${
                    item.active ? "ring-2 ring-[#FFC155]" : ""
                  } h-[70px] w-[70px] rounded-full mx-auto mb-4 relative`}
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
        </div>
        <Card title="Influencer saying" className="">
          <div className="flex flex-col gap-4">
            {post.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-background flex p-8 flex-col gap-4 rounded-2xl"
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
                        <GlobeAltIcon className="h-3 w-3 text-[#005AE2] inline ml-1" />
                      </span>
                    </div>
                  </div>
                  <p className="text-start">{item.post}</p>
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
                      className="text-lg bg-yellow-200 py-2 px-3 text-black-500 cursor-pointer rounded-3xl basis-4/12 text-center"
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