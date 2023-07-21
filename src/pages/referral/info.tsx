import LayoutDashBoard from "@/components/layout/Layout";
import {
  TABLE_RULES,
  TABLE_RULES_ROW,
  RANK,
} from "@/constant/components/Referral";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import BannerReferral from "@/components/svg/BannerReferral";
import OverviewReferral from "@/components/svg/OverviewReferral";
import { useQuery } from "@tanstack/react-query";
import { getReferral } from "../api/referral/GetReferral";
import Subtract from "@/components/svg/Subtract";
import { Tooltip } from "flowbite-react";
import { InviteRule, ShareRule } from "@/components/svg/RankSVG";
import { LuCopy } from "react-icons/lu";
import router from "next/router";
import { toast } from "react-toastify";

export default function Info() {
  const { data, isLoading } = useQuery<any>({
    queryKey: ["referral"],
    queryFn: () => getReferral(),
  });
  const realData = data?.data;

  const converRank = (rank: string) => {
    return rank.replace(/_/g, " ");
  };

  const getRankSrc = (rankUser: string) => {
    return RANK.find((item) => item.name === rankUser)?.src;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copy successful !!!");
  };
  const referralLink = (text: string) => {
    return `https://bitscope.global/register?ref=${text}`;
  };
  const referralUI = (text: string) => {
    return `https://www...${text.slice(4, 8)}`;
  };

  return (
    <LayoutDashBoard className="bg-white md:p-5 py-[15px]">
      <div className="w-full text-center">
        <div className="flex justify-between bg-cover bg-[url('/image/BannerReferral.svg')]">
          <div className="px-14 py-20 text-left">
            <div className="text-white text-[32px] leading-[40px] font-Inter font-bold">
              Refer Friends,
            </div>
            <div className="text-white text-[32px] leading-[40px] font-Inter font-bold">
              <span className="text-[#0AE0FF]">Get 250 USDT</span> Bonus Reward
            </div>
            <div className="text-white text-[32px] leading-[40px] font-Inter font-normal">
              15% commission.
            </div>
            <button className="pt-4">
              <a
                className="flex "
                href="https://docs.bitscope.global/development-team-and-partners/cooperation-mechanism"
                target="_blank"
              >
                <span className=" text-white font-Inter text-base leading-[19.36px] font-medium">
                  View View referral rules
                </span>
                <span>
                  <ChevronRightIcon className="h-4 w-4 ml-[2px] mt-[2px] text-white font-Inter text-base leading-[19.36px] font-medium" />
                </span>
              </a>
            </button>
          </div>
          {isLoading ? (
            <></>
          ) : (
            <div className="px-14 py-20">
              <div className="w-auto h-[150px] bg-white rounded-md">
                <div className="p-4">
                  <div className="flex py-1 justify-between bg-[#F8F8F8] rounded-md">
                    <div className="py-3 pl-5 pr-10  font-Inter text-[#1C1C1C] font-medium text-base leading-[19.36px]">
                      Referral ID
                    </div>
                    <div className="py-3 pr-5 pl-10 flex font-Inter font-normal text-base leading-[19.36px]">
                      {realData.referralCode}
                      <LuCopy
                        className="ml-2 hover:text-blue-600 text-base"
                        onClick={() => {
                          copyToClipboard(realData.referralCode);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 ">
                  <div className="flex py-1 justify-between bg-[#F8F8F8] rounded-md">
                    <div className="py-3 pl-5 pr-10 font-Inter text-[#1C1C1C] font-medium text-base leading-[19.36px]">
                      Referral Link
                    </div>
                    <div className="py-3 pr-5 pl-10 flex font-Inter font-normal text-base leading-[19.36px]">
                      {referralUI(realData.referralCode)}
                      <LuCopy
                        className="ml-2 hover:text-blue-600 text-base"
                        onClick={() => {
                          copyToClipboard(referralLink(realData.referralCode));
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
      <div className="flex flex-col w-full h-[200px] justify-center items-center gap-7 rounded-md pt-4">
        <Card className="h-full bg-[#f6f8fa] w-full shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
          <div className="bg-[#f6f8fa] border-b-[1.5px] border-b-[#E5E9EE] p-3">
            <div className="flex justify-between flex-row items-center">
              <div className="flex font-Inter text-lg leading-[21.78px] font-semibold">
                <div className="pl-4 pr-3">
                  <OverviewReferral className="w-[24px] h-[24px]" />
                </div>
                <span className="font-Inter text-[#000] text-[18px] leading-[21.78px] font-bold">
                  Overview
                </span>
              </div>

              <button
                className="flex font-Inter text-[#005ae2] text-lg leading-[21.78px] font-semibold"
                onClick={() => router.push("/referral")}
              >
                <span className="text-[#005ae2]">View Activity & Overview</span>
                <span>
                  <ChevronRightIcon className="h-6 w-6 text-[#005ae2] ml-1" />
                </span>
              </button>
            </div>
          </div>
          <CardBody className="w-full h-full px-0 p-0 overflow-x-auto ">
            <div className="block">
              {isLoading ? (
                <></>
              ) : (
                <>
                  <div className="flex px-[10px]">
                    <div className="px-5 pt-3 py-5 basis-[25%]">
                      <div className="flex py-5">
                        <div className="font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                          Bonus Reward (USDT)
                        </div>
                        <Tooltip
                          content="To prevent fraud, minimum 1% of invitees must participate in Pre-sale to unlock Bonus Reward."
                          placement="right"
                          className="w-[235px] h-[75px] font-Inter font-normal leading-[20px] text-xs"
                        >
                          <Subtract className="w-[16px] h-[16px] ml-2" />
                        </Tooltip>
                      </div>
                      <span className="py-5 font-medium text-[36px] leading-[36px] text-[#1C1C1C]">
                        {realData ? realData.bonusReward : 0}
                      </span>
                    </div>

                    <div className="px-5 pt-3 py-5 basis-[25%]">
                      <div className="py-5 font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                        Pre-sale Bonus
                      </div>
                      <span className="py-5 font-medium text-[36px] leading-[36px] text-[#1C1C1C]">
                        {realData ? realData.preSaleBonus : 0}
                      </span>
                    </div>

                    <div className="px-5 pt-3 py-5 basis-[25%]">
                      <div className="py-5 font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                        Total Referrals
                      </div>
                      <span className="py-5 font-medium text-[36px] leading-[36px] text-[#1C1C1C]">
                        {realData ? realData.totalReferral : 0}
                      </span>
                    </div>

                    <div className="px-5 pt-3 py-5 basis-[25%]">
                      <div className="py-5 font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                        Successful Referrals
                      </div>
                      <span className="py-5 font-medium text-[36px] leading-[36px] text-[#1C1C1C]">
                        {realData ? realData.successfulReferral : 0}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="w-full grid grid-cols-9 gap-4 pt-4 rounded-md">
        {isLoading ? (
          <></>
        ) : (
          <span className="bg-[#f6f8fa] col-span-3 rounded-md shadow-base">
            <div className="border-b-[1px] border-b-[#E5E9EE] p-4 text-lg font-bold font-Inter leading-[21.78px]  ">
              Your medal
            </div>
            <div className="p-4 ">
              <div className=" w-full 2xlmax:h-full h-[615px] font-Inter bg-cover bg-[url('/image/BackGroundRank.svg')]">
                <div className="text-center text-white text-[30px] font-bold leading-[36.31px] 2xlmax:pt-12 pt-16">
                  {realData.userName}
                </div>
                <div className="text-center text-white uppercase text-[17.6px] leading-[21.3px] font-bold pt-10">
                  {converRank(realData.rank)}
                </div>
                <div className="2xlmax:pt-[100px] pt-[130px] flex justify-center">
                  <img src={getRankSrc(realData?.rank)} />
                </div>
                <div className="w-full 2xlmax:px-[8px] 2xlmax:pt-[95px] px-0 pt-[120px] ">
                  <div className="flex justify-evenly rounded-b-[17px] rounded-t-[5px] text-white py-3">
                    <div className="text-center">
                      <div className="text-[22.01px] font-bold leading-[30.81px] font-Inter">
                        {realData.forNextLevel}
                      </div>
                      <div className="text-[15.4px] font-normal leading-[21.56px] font-Inter">
                        For Next Level
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[22.01px] font-bold leading-[30.81px] font-Inter">
                        {realData.percentPreSaleReward}%
                      </div>
                      <div className="text-[15.4px] font-normal leading-[21.56px] font-Inter">
                        Pre-sale COM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        )}
        <span className="bg-[#f6f8fa] col-span-6 rounded-md shadow-base">
          <div className="border-b-[1px] border-b-[#E5E9EE] p-4 text-lg font-bold font-Inter leading-[21.78px]">
            Rules
          </div>
          <div>
            <div className="flex justify-between">
              <div className="px-5 py-10 flex">
                <div className="py-2 px-4">
                  <ShareRule />
                </div>
                <div className="text-base leading-[19.36px] text-[#1C1C1C] font-normal font-Inter">
                  Share the invite link to your friends who don't know BitScope
                  yet.
                </div>
              </div>
              <div className="px-5 py-10 flex">
                <div className="py-2 px-4">
                  <InviteRule />
                </div>
                <div className="text-base leading-[19.36px] text-[#1C1C1C] font-normal font-Inter">
                  Invitees must register and verify email to be counted
                  successfully.
                </div>
              </div>
            </div>
            <div className="px-4">
              <table className="w-full table-auto text-left">
                <thead className="w-full">
                  <tr className="bg-[#0680EB] rounded-t-md flex w-full justify-stretch">
                    {TABLE_RULES.map((head, index) => (
                      <th
                        key={index}
                        className={`${head.class} grid grid-rows-9 grid-flow-col gap-4 items-center p-3`}
                      >
                        <div>
                          <Typography className=" text-white font-Inter font-semibold text-center text-base leading-[19.36px] ">
                            {head.title}
                          </Typography>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="w-full">
                  {TABLE_RULES_ROW.map((head, index) => (
                    <tr
                      className="flex justify-stretch text-center"
                      key={index}
                    >
                      <td className="bg-[#DADADAD9] border-b-[1px] border-r-[1px] border-[#E5E9EE] 2xlmax:basis-[19%] basis-[20%] items-center">
                        <div className="text-left font-Inter font-semibold text-lg leading-[22px] p-3 text-[#181C32] ">
                          {head.partner}
                        </div>
                      </td>
                      <td
                        className="bg-white border-b-[1px] border-r-[1px] border-[#E5E9EE] 2xlmax:basis-[11.5%] basis-[10%] items-center flex justify-center
                      "
                      >
                        <div className="font-Inter font-normal text-base leading-[19.36px] p-4 text-[#1C1C1C]">
                          {head.invited}
                        </div>
                      </td>
                      <td className="bg-white border-b-[1px] border-r-[1px] border-[#E5E9EE] 2xlmax:basis-[10.5%] basis-[10%] items-center flex justify-center">
                        <div className="font-Inter font-normal text-base leading-[19.36px] p-4 text-[#1C1C1C]">
                          {head.bonus}
                        </div>
                      </td>
                      <td className="bg-white border-b-[1px] border-r-[1px] border-[#E5E9EE] 2xlmax:basis-[12%] basis-[10%] items-center flex justify-center">
                        <div className="font-Inter font-normal text-base leading-[19.36px] p-4 text-[#1C1C1C]">
                          {head.total}
                        </div>
                      </td>
                      <td className="bg-white border-b-[1px] border-[#E5E9EE] 2xlmax:basis-[47%] basis-[50%] items-center">
                        <div className="p-4">
                          <div className="font-Inter font-normal text-base leading-[19.36px] text-[#1C1C1C]">
                            {head.benefits}
                          </div>
                          <div className="font-Inter font-bold text-base leading-[19.36px] text-[#1C1C1C]">
                            {head.special}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </span>
      </div>
    </LayoutDashBoard>
  );
}
