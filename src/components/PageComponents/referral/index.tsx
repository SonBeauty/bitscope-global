import React from "react";
import LayoutDashBoard from "@/components/layout/Layout";
import OverviewReferral from "@/components/svg/OverviewReferral";
import { InviteRule, ShareRule } from "@/components/svg/RankSVG";
import Subtract from "@/components/svg/Subtract";
import { RANK } from "@/constant/components/Referral";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Tooltip } from "flowbite-react";
import { useRouter } from "next/router";
import { LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";

interface ReferralMobileProps {
  data: any;
  isLoading: boolean;
}

export default function ReferralInfoMobile({
  data,
  isLoading,
}: ReferralMobileProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };
  const converRank = (rank?: any) => {
    return rank.replace(/_/g, " ");
  };

  const getRankSrc = (rankUser?: string) => {
    return RANK.find((item) => item.name === rankUser)?.src;
  };

  const copyToClipboard = (text?: any) => {
    navigator.clipboard.writeText(text);
    toast("Copy successful !!!");
  };
  const referralLink = (text?: string) => {
    return `https://bitscope.global/register?ref=${text}`;
  };
  const referralUI = (text?: any) => {
    return `https://www...${text.slice(4, 8)}`;
  };

  return (
    <LayoutDashBoard className="p-0 m-0 bg-white">
      <Card className="py-4 h-full">
        <div className="">
          <div className=" text-center">
            <div className=" bg-cover bg-center bg-[url('/image/BannerReferral.svg')]">
              <div className="text-left p-7">
                <div className="text-white text-[32px] leading-[40px] font-Inter font-bold">
                  Refer Friends,
                </div>
                <div className="text-white text-[32px] leading-[40px] font-Inter font-bold">
                  <div className="text-[#0AE0FF]">Get 250 USDT</div> Bonus
                  Reward
                </div>
                <div className="text-white text-[32px] leading-[40px] font-Inter font-normal">
                  15% commission.
                </div>
                <button className="pt-4 py-[80px]">
                  <a
                    className="flex "
                    href="https://docs.bitscope.global/development-team-and-partners/cooperation-mechanism"
                    target="_blank"
                  >
                    <div className=" text-white font-Inter text-base leading-[19.36px] font-medium">
                      View referral rules
                    </div>
                    <div>
                      <ChevronRightIcon className="h-4 w-4 ml-[2px] mt-[2px] text-white font-Inter text-base leading-[19.36px] font-medium" />
                    </div>
                  </a>
                </button>
              </div>
              {isLoading ? (
                <></>
              ) : (
                <div className="px-1 absolute mt-[-80px] w-full">
                  <div className=" bg-white rounded-lg shadow-base">
                    <div className="p-4">
                      <div className="flex justify-between bg-[#F8F8F8] rounded-md">
                        <div className="px-3 py-4 font-Inter text-[#1C1C1C] font-medium text-base leading-[19.36px]">
                          Referral ID
                        </div>
                        <div className="px-3 py-4 flex font-Inter font-normal text-base leading-[19.36px]">
                          {data?.referralCode}
                          <LuCopy
                            className="ml-2 hover:text-blue-600 text-base"
                            onClick={() => {
                              copyToClipboard(data?.referralCode);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4">
                      <div className="flex justify-between bg-[#F8F8F8] rounded-md">
                        <div className="px-3 py-4 font-Inter text-[#1C1C1C] font-medium text-base leading-[19.36px]">
                          Referral Link
                        </div>
                        <div className="px-3 py-4 flex font-Inter font-normal text-base leading-[19.36px]">
                          {referralUI(data?.referralCode)}
                          <LuCopy
                            className="ml-2 hover:text-blue-600 text-base"
                            onClick={() => {
                              copyToClipboard(referralLink(data?.referralCode));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-[90px] mx-1 flex flex-col justify-center items-center gap-7 ">
          <div className="bg-[#F7F9FB] w-full shadow-[0_1px_2px_rgba(0,0,0,0.25)] rounded-lg">
            <div className="bg-[#F7F9FB] border-b-[1.5px] border-b-[#E5E9EE] p-3">
              <div className="flex justify-between flex-row items-center">
                <div className="flex font-Inter text-lg leading-[21.78px] font-semibold">
                  <div className="pl-1 pr-3">
                    <OverviewReferral className="w-[24px] h-[24px]" />
                  </div>
                  <div className="mt-[2px] font-Inter text-[#000] text-[18px] leading-[21.78px] font-bold">
                    Overview
                  </div>
                </div>

                <button
                  className="flex font-Inter text-[#005ae2] text-lg leading-[21.78px] font-semibold"
                  onClick={() => router.push("/referral/history")}
                >
                  <div className="text-[#005ae2]">History</div>
                  <div>
                    <ChevronRightIcon className="h-6 w-6 text-[#005ae2] ml-1" />
                  </div>
                </button>
              </div>
            </div>
            <div>
              {isLoading ? (
                <></>
              ) : (
                <>
                  <div className="text-left grid grid-cols-2 gap-[10px] place-content-around">
                    <div className="p-4 pb-0">
                      <div className="flex ">
                        <div className="font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                          Bonus Reward (USDT)
                        </div>
                        <Tooltip
                          content="To prevent fraud, minimum 1% of invitees must participate in Pre-sale to unlock Bonus Reward."
                          placement="top"
                          trigger="click"
                          className=" w-[255px] h-auto font-Inter font-normal leading-[20px] text-xs"
                        >
                          <Subtract className="w-[16px] h-[16px] mr-3" />
                        </Tooltip>
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <div className="font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                        Pre-sale Bonus
                      </div>
                    </div>
                    <div className="px-4 font-medium text-[26px] leading-[36px] text-[#1C1C1C]">
                      {data ? data?.bonusReward : 0}
                    </div>
                    <div className="px-4 font-medium text-[26px] leading-[36px] text-[#1C1C1C]">
                      {data ? data?.preSaleBonus : 0}
                    </div>
                    <div className="p-4 pb-0">
                      <div className="font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                        Total Referrals
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <div className="font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                        Successful Referrals
                      </div>
                    </div>
                    <div className="px-4 pb-5 font-medium text-[26px] leading-[36px] text-[#1C1C1C]">
                      {data ? data?.totalReferral : 0}
                    </div>
                    <div className="px-4 pb-5 font-medium text-[26px] leading-[36px] text-[#1C1C1C]">
                      {data ? data?.successfulReferral : 0}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {isLoading ? (
          <></>
        ) : (
          <div className="mt-3 mx-1 text-left bg-[#F7F9FB] rounded-md shadow-base ">
            <div className="border-b-[1px] border-b-[#DADADA] p-4 text-lg font-bold font-Inter leading-[21.78px]  ">
              Your medal
            </div>
            <div className="px-10 py-2 ">
              <div className="rounded-2xl flex justify-center">
                <div className=" max-w-[290px] max-h-[439px] w-full flex flex-col font-Inter bg-center bg-cover bg-[url('/image/BackGroundRank.svg')]">
                  <div className="text-center text-white text-[30px] font-bold leading-[36.31px] pt-[45px] pb-[20px]">
                    {data?.userName}
                  </div>
                  <div className="text-center text-white uppercase text-[17.6px] leading-[21.3px] font-bold pb-7">
                    {converRank(data?.rank)}
                  </div>
                  <div className="flex justify-center py-9">
                    <img src={getRankSrc(data?.rank)} className="w-1/3 " />
                  </div>
                  <div className="w-full pt-6 pb-2">
                    <div className="flex justify-evenly rounded-b-[17px] rounded-t-[5px] text-white py-3">
                      <div className="text-center">
                        <div className="text-[22.01px] font-bold leading-[30.81px] font-Inter">
                          {data?.forNextLevel}
                        </div>
                        <div className="text-[15.4px] font-normal leading-[21.56px] font-Inter">
                          For Next Level
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-[22.01px] font-bold leading-[30.81px] font-Inter">
                          {data?.percentPreSaleReward}%
                        </div>
                        <div className="text-[15.4px] font-normal leading-[21.56px] font-Inter">
                          Pre-sale COM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-[#F7F9FB] mx-1 mt-4 rounded-md text-left">
          <div className=" border-b-[1px] border-b-[#DADADA] p-3 text-lg font-bold font-Inter leading-[21.78px] ">
            Overview
          </div>
          <div>
            <div className="flex px-2 py-5">
              <div className="p-3">
                <ShareRule />
              </div>
              <div className="text-base leading-[19.36px] text-[#1C1C1C] font-normal font-Inter">
                Share the invite link to your friends who don&apos;t know
                BitScope yet.
              </div>
            </div>
            <div className="flex px-2 pb-5">
              <div className="p-3">
                <InviteRule />
              </div>
              <div className="text-base leading-[19.36px] text-[#1C1C1C] font-normal font-Inter">
                Invitees must register and verify email to be counted
                successfully.
              </div>
            </div>
          </div>
          <div className="">
            <div className="rounded-t-md uppercase p-4 bg-[#0680EB] text-white font-Inter font-semibold text-lg leading-[21.78px]">
              Partner rank
            </div>

            <Card className="p-0 m-0">
              <List className="m-0 p-0 gap-0">
                <Accordion
                  open={open === 1}
                  className="p-0 m-0"
                  icon={
                    <ChevronRightIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 1 ? "rotate-90" : ""
                      }`}
                    />
                  }
                >
                  <ListItem
                    className="p-0 m-0 rounded-none border-x-[1px] border-b-[1px] border-x-[#E5E9EE] border-b-[#E5E9EE] outline-[1px]"
                    selected={open === 1}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(1)}
                      className="px-3 mx-0 rounded-none bg-[#F7F9FB]"
                    >
                      <Typography
                        color="blue-gray"
                        className=" rounded-none font-semibold text-base leading-[19.36px]"
                      >
                        New Partner
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="p-0 m-0 bg-white">
                    <List className="p-0 m-0 rounded-none gap-0">
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        INVITED USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          0
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BONUS /USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $0.5
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        TOTAL REWARD
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $0
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BENEFITS
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          3% Pre-sale COM + bonus/user
                        </ListItemSuffix>
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 2}
                  className="p-0 m-0"
                  icon={
                    <ChevronRightIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 2 ? "rotate-90" : ""
                      }`}
                    />
                  }
                >
                  <ListItem
                    className="p-0 m-0 rounded-none border-x-[1px] border-b-[1px] border-x-[#E5E9EE] border-b-[#E5E9EE] outline-[1px]"
                    selected={open === 2}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(2)}
                      className="px-3 mx-0 rounded-none bg-[#F7F9FB]"
                    >
                      <Typography
                        color="blue-gray"
                        className=" rounded-none font-semibold text-base leading-[19.36px]"
                      >
                        Bronze Medal
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="p-0 m-0 bg-white">
                    <List className="p-0 m-0 rounded-none gap-0">
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        INVITED USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          50
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BONUS /USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $0.5
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        TOTAL REWARD
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $25
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BENEFITS
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          6% Pre-sale COM + bonus/user
                        </ListItemSuffix>
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 3}
                  className="p-0 m-0"
                  icon={
                    <ChevronRightIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 3 ? "rotate-90" : ""
                      }`}
                    />
                  }
                >
                  <ListItem
                    className="p-0 m-0 rounded-none border-x-[1px] border-b-[1px] border-x-[#E5E9EE] border-b-[#E5E9EE] outline-[1px]"
                    selected={open === 3}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(3)}
                      className="px-3 mx-0 rounded-none bg-[#F7F9FB]"
                    >
                      <Typography
                        color="blue-gray"
                        className=" rounded-none font-semibold text-base leading-[19.36px]"
                      >
                        Silver Medal
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="p-0 m-0 bg-white">
                    <List className="p-0 m-0 rounded-none gap-0">
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        INVITED USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          100
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BONUS /USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $0.75
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        TOTAL REWARD
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $75
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BENEFITS
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          9% Pre-sale COM + bonus/user
                        </ListItemSuffix>
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 4}
                  className="p-0 m-0"
                  icon={
                    <ChevronRightIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 4 ? "rotate-90" : ""
                      }`}
                    />
                  }
                >
                  <ListItem
                    className="p-0 m-0 rounded-none border-x-[1px] border-b-[1px] border-x-[#E5E9EE] border-b-[#E5E9EE] outline-[1px]"
                    selected={open === 4}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(4)}
                      className="px-3 mx-0 rounded-none bg-[#F7F9FB]"
                    >
                      <Typography
                        color="blue-gray"
                        className=" rounded-none font-semibold text-base leading-[19.36px]"
                      >
                        Gold Medal
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="p-0 m-0 bg-white">
                    <List className="p-0 m-0 rounded-none gap-0">
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        INVITED USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          250
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BONUS /USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $1.0
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        TOTAL REWARD
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $250
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BENEFITS
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          12% Pre-sale COM + bonus/user
                        </ListItemSuffix>
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 5}
                  className="p-0 m-0"
                  icon={
                    <ChevronRightIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 5 ? "rotate-90" : ""
                      }`}
                    />
                  }
                >
                  <ListItem
                    className="p-0 m-0 rounded-none border-x-[1px] border-b-[1px] border-x-[#E5E9EE] border-b-[#E5E9EE] outline-[1px]"
                    selected={open === 5}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(5)}
                      className="px-3 mx-0 rounded-none rounded-b-md bg-[#F7F9FB]"
                    >
                      <Typography
                        color="blue-gray"
                        className="rounded-none rounded-b-md font-semibold text-base leading-[19.36px]"
                      >
                        Platinum Medal
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="p-0 m-0 bg-white">
                    <List className="p-0 m-0 rounded-none gap-0">
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        INVITED USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          500
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BONUS /USER
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $1.0
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        TOTAL REWARD
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          $500
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem className="px-3 rounded-none font-Inter text-[#333333] font-medium text-base leading-[20px] border-x-[1px] border-b-[1px] border-b-[#E5E9EE]">
                        BENEFITS
                        <ListItemSuffix className="leading-[19.36px] font-normal text-right">
                          15% Pre-sale COM + bonus/user
                          <ListItemSuffix className="font-bold text-right">
                            Share 20% MKT pool
                          </ListItemSuffix>
                        </ListItemSuffix>
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
              </List>
            </Card>
          </div>
        </div>
      </Card>
    </LayoutDashBoard>
  );
}
