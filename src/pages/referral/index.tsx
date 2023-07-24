import LayoutDashBoard from "@/components/layout/Layout";
import {
  TABLE_RULES,
  TABLE_RULES_ROW,
  RANK,
} from "@/constant/components/Referral";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { Card, CardBody } from "@material-tailwind/react";
import OverviewReferral from "@/components/svg/OverviewReferral";
import { useQuery } from "@tanstack/react-query";
import { getReferral } from "../api/referral/GetReferral";
import Subtract from "@/components/svg/Subtract";
import { Tooltip } from "flowbite-react";
import { InviteRule, ShareRule } from "@/components/svg/RankSVG";
import { LuCopy } from "react-icons/lu";
import router from "next/router";
import { toast } from "react-toastify";
import useWidth from "@/hooks/useWidth";
import RefferalInfoMobile from "@/components/PageComponents/referral";

export default function Info() {
  const { width } = useWidth();
  const { data, isLoading } = useQuery<any>({
    queryKey: ["referral"],
    queryFn: () => getReferral(),
  });
  const realData = data?.data;

  const converRank = (rank: string) => {
    return rank?.replace(/_/g, " ");
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
    return `https://www...${text?.slice(4, 8)}`;
  };

  if (width < 1024) {
    return <RefferalInfoMobile data={realData} isLoading={isLoading} />;
  }

  return (
    <LayoutDashBoard className="bg-white md:p-5 py-[15px] text-[#1C1C1C]">
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
                  View referral rules
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
              <div className="w-auto bg-white rounded-md">
                <div className="p-4">
                  <div className="flex py-1 justify-between bg-[#F8F8F8] rounded-md">
                    <div className="py-3 pl-5 pr-10  font-Inter text-[#1C1C1C] font-medium text-base leading-[19.36px]">
                      Referral ID
                    </div>
                    <div className="py-3 pr-5 pl-10 flex font-Inter font-normal text-base leading-[19.36px]">
                      {realData?.referralCode}
                      <LuCopy
                        className="ml-2 hover:text-blue-600 text-base"
                        onClick={() => {
                          copyToClipboard(realData?.referralCode);
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
                      {referralUI(realData?.referralCode)}
                      <LuCopy
                        className="ml-2 hover:text-blue-600 text-base"
                        onClick={() => {
                          copyToClipboard(referralLink(realData?.referralCode));
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
        <Card className="h-full bg-[#f6f8fa] w-full shadow-base">
          <div className="bg-[#f6f8fa] border-b-[1.5px] border-b-[#E5E9EE] p-3">
            <div className="flex justify-between flex-row items-center">
              <div className="flex font-Inter text-lg leading-[21.78px] font-semibold">
                <div className="pl-4 pr-3">
                  <OverviewReferral className="w-[24px] h-[24px]" />
                </div>
                <div className=" pt-[2px] font-Inter text-[#000] text-[18px] leading-[21.78px] font-bold">
                  Overview
                </div>
              </div>

              <button
                className="flex font-Inter text-[#005ae2] text-lg leading-[21.78px] font-semibold"
                onClick={() => router.push("/referral/history")}
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
                          content="To prevent fraud minimum 1% of invitees must participate in Pre-sale to unlock Bonus Reward."
                          placement="right"
                          className="w-[235px] h-[75px] font-Inter font-normal leading-[20px] text-xs"
                        >
                          <Subtract className="w-[16px] h-[16px] ml-2" />
                        </Tooltip>
                      </div>
                      <span className="py-5 font-medium text-[36px] leading-[36px] text-[#1C1C1C]">
                        {realData ? realData?.bonusReward : 0}
                      </span>
                    </div>

                    <div className="px-5 pt-3 py-5 basis-[25%]">
                      <div className="py-5 font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                        Pre-sale Bonus
                      </div>
                      <span className="py-5 font-medium text-[36px] leading-[36px] text-[#1C1C1C]">
                        {realData ? realData?.preSaleBonus : 0}
                      </span>
                    </div>

                    <div className="px-5 pt-3 py-5 basis-[25%]">
                      <div className="py-5 font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                        Total Referrals
                      </div>
                      <span className="py-5 font-medium text-[36px] leading-[36px] text-[#1C1C1C]">
                        {realData ? realData?.totalReferral : 0}
                      </span>
                    </div>

                    <div className="px-5 pt-3 py-5 basis-[25%]">
                      <div className="py-5 font-Inter font-normal text-start text-[16px] leading-[19.36px] text-[#1C1C1C]">
                        Successful Referrals
                      </div>
                      <span className="py-5 font-medium text-[36px] leading-[36px] text-[#1C1C1C]">
                        {realData ? realData?.successfulReferral : 0}
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
          <div className="col-span-3 text-left bg-[#F7F9FB] rounded-md shadow-base ">
            <div className=" border-b-[1px] border-b-[#DADADA] p-4 text-lg font-bold font-Inter leading-[21.78px]  ">
              Your medal
            </div>
            <div className="px-2 py-2 xl:px-0">
              <div className="rounded-2xl flex justify-center">
                <div className=" max-w-[320px] max-h-[500px] w-full flex flex-col font-Inter bg-center bg-cover bg-[url('/image/BackGroundRank.svg')]">
                  <div className="text-center text-white text-[30px] font-bold leading-[36.31px] pt-10 pb-3">
                    {realData?.userName}
                  </div>
                  <div className="text-center text-white uppercase text-[17.6px] leading-[21.3px] font-bold py-5">
                    {converRank(realData?.rank)}
                  </div>
                  <div className="flex justify-center pt-[85px]">
                    <img src={getRankSrc(realData?.rank)} className="w-1/4 " />
                  </div>
                  <div className="w-full pt-[100px] pb-[20px]">
                    <div className="flex justify-evenly rounded-b-[17px] rounded-t-[5px] text-white py-3">
                      <div className="text-center">
                        <div className="text-[22.01px] font-bold leading-[30.81px] font-Inter">
                          {realData?.forNextLevel}
                        </div>
                        <div className="text-[15.4px] font-normal leading-[21.56px] font-Inter">
                          For Next Level
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-[22.01px] font-bold leading-[30.81px] font-Inter">
                          {realData?.percentPreSaleReward}%
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

        <div className="bg-[#f6f8fa] col-span-6 rounded-md shadow-base">
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
                  Share the invite link to your friends who don&apos;t know
                  BitScope yet.
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
                  <tr className="bg-[#0680EB] rounded-t-md grid grid-cols-9 w-full place-items-center">
                    {TABLE_RULES.map((head, index) => (
                      <th
                        key={index}
                        className={`${head.class} py-3 items-center text-center`}
                      >
                        <div className=" text-white 3xl:px-3 p-0 font-Inter font-semibold text-center text-base leading-[19.36px] ">
                          {head.title}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="w-full">
                  {TABLE_RULES_ROW.map((head, index) => (
                    <tr
                      className=" grid grid-cols-9 text-center w-full"
                      key={index}
                    >
                      <td
                        className="bg-[#DADADAD9] py-3 3xl:px-9 px-5 border-b-[1px] border-r-[1px] border-[#E5E9EE] col-span-2 items-center
                      "
                      >
                        <div className="text-left font-Inter font-semibold text-lg leading-[22px] text-[#181C32]">
                          {head.partner}
                        </div>
                      </td>
                      <td
                        className="bg-white p-3 border-b-[1px] border-r-[1px] border-[#E5E9EE] col-span-1 items-center flex justify-center
                      "
                      >
                        <div className="font-Inter font-normal text-base leading-[19.36px] text-[#1C1C1C]">
                          {head.invited}
                        </div>
                      </td>
                      <td className="bg-white p-3 border-b-[1px] border-r-[1px] border-[#E5E9EE] col-span-1 items-center flex justify-center">
                        <div className="font-Inter font-normal text-base leading-[19.36px] text-[#1C1C1C]">
                          {head.bonus}
                        </div>
                      </td>
                      <td className="bg-white p-3 border-b-[1px] border-r-[1px] border-[#E5E9EE] col-span-1 items-center flex justify-center">
                        <div className="font-Inter font-normal text-base leading-[19.36px] text-[#1C1C1C]">
                          {head.total}
                        </div>
                      </td>
                      <td className="bg-white p-3 border-b-[1px] border-[#E5E9EE] col-span-4 items-center flex justify-center">
                        <div className="">
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
        </div>
      </div>
    </LayoutDashBoard>
  );
}
