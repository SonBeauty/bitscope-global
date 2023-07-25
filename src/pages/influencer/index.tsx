"use client";

import Pagination from "@mui/material/Pagination";
import LayoutDashBoard from "@/components/layout/Layout";
import BackLeftSVG from "@/components/svg/BackLeftSVG";
import NoAccessHistorySVG from "@/components/svg/NoAccessHistorySVG";
import TrashAuthenSVG from "@/components/svg/TrashAuthenSVG";
import { TABLE_HEAD, TABLE_ROWS } from "@/constant/components/Influencer";
import {
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";
import { useStyles } from "@/components/Pagination/useStyles";
import { GetInfluencer } from "../api/influencer/getInfluencer";
import { DeleteInfluencer } from "../api/influencer/delete";

export default function Influencers() {
  const router = useRouter();
  const classes = useStyles();
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useQuery<any>({
    queryKey: ["influencer", page],
    queryFn: () => GetInfluencer({ page: page, limit: "10" }),
  });
  const realData = data?.data;

  const mutate = useMutation(DeleteInfluencer, {
    onSuccess: () => {
      toast.success("Delete Influencers Success!");
    },
    onError: () => {
      toast.error("Delete Failed!");
    },
  });

  const handleDelete = (id: any) => {
    if (window.confirm("Are You Sure DELETE Influencers ?")) {
      mutate.mutate(id);
    }
  };

  return (
    <LayoutDashBoard className="bg-white md:p-5 py-[15px]">
      <div className="flex flex-col gap-4">
        <Card className="h-full bg-[#f6fbff] w-full max-h-[795.08px] p-0 m-0 shadow-[0_1px_2px_rgba(0,0,0,0.25)] rounded-md">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none rounded-tl-[6px] rounded-tr-[6px] bg-[#0046B0] mt-0 mx-0  md:h-[54px]"
          >
            <div className="flex justify-between flex-row items-center">
              <span className="flex gap-[14px] items-center justify-center px-[1rem] md:px-0">
                <div
                  onClick={() => router.push("/authentication")}
                  className="md:hidden block"
                >
                  <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px]" />
                </div>
                <span className="font-Inter py-[1.06rem] md:px-[1.38rem] text-white text-lg leading-5 font-bold">
                  List Influencers
                </span>
              </span>

              {!isLoading && realData?.length > 0 && (
                <div
                  onClick={() => router.push("influencer/add")}
                  className="hidden hover:bg-[#00388D] duration-500 ease-linear md:block pt-[1.06rem] px-[1.81rem] pb-[0.94rem] font-Inter text-white text-lg leading-[21.78px] font-semibold cursor-pointer"
                >
                  Add Influencer
                </div>
              )}
            </div>
          </CardHeader>
          <CardBody className="px-0 p-0 md:bg-[#F6FBFF] bg-[#D3ECFF] w-full overflow-x-auto ">
            <div className="block">
              {isLoading ? (
                <div className="h-[65vh] flex items-center justify-center">
                  <Player
                    autoplay
                    loop
                    src="/assets/jsonGif/ManAndRobotWithComputers.json"
                    style={{ minHeight: "50vh", width: "75%" }}
                    className="p-0"
                  />
                </div>
              ) : (
                <table className="w-full table-auto text-left">
                  <thead className="w-full ">
                    <tr className="bg-[#D3ECFF] h-[55px] flex w-full justify-between px-2 md:pl-[22px] py-[17px] md:pr-[42px]">
                      {TABLE_HEAD.map((head, index) => (
                        <th
                          key={index}
                          className={`${head.class} flex items-center`}
                        >
                          <Typography
                            className={`font-Inter font-semibold text-start text-lg leading-[22px] text-[#181C32] `}
                          >
                            {head.title}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {realData?.length > 0 &&
                      realData?.map((item: any, index: number) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                          ? ""
                          : "border-b border-dashed border-[#e4e3e3]";
                        return (
                          <tr
                            className="flex hover:bg-[#EBF4FF] hover:shadow-sm duration-300 ease-in-out"
                            key={index}
                          >
                            <td
                              className={`${classes} py-[13px] px-[22px] h-[55px] basis-[20%]`}
                            >
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium text-[16.26px] leading-[28.69px] text-[#1C1C1C]"
                              >
                                {item?.rest_id}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start basis-[10%]`}
                            >
                              <Typography className="text-[#1C1C1C] px-3 font-medium text-base leading-5 text-center font-Inter ">
                                <img src={item.data?.avatar} />
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center  basis-[15%]`}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                {item.data?.userId}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center  basis-[17.5%]`}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                {item.data?.userName}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} lg:visible invisible pt-[12px] pb-[17px] px-[22px] h-[55px] basis-[25%]`}
                            >
                              <div className="flex justify-between items-center">
                                <Typography className="text-[#000000] font-Inter font-medium text-sm leading-[16px] text-center mt-2">
                                  {item.data?.createdAt
                                    ? item.data?.createdAt
                                        ?.slice(0, 10)
                                        .replaceAll("-", ".") +
                                      " at " +
                                      item.data?.createdAt
                                        ?.slice(11, 16)
                                        .replaceAll("-", ".")
                                    : "No data yet or account has no recent tweets"}
                                </Typography>
                              </div>
                            </td>

                            <td
                              className={`${classes} flex items-center justify-start pt-[18px] pb-[17px] px-[22px] pr-[42px] h-[55px] basis-[10%]`}
                            >
                              <div className="flex items-center gap-[19px] justify-center">
                                <div
                                  onClick={() => handleDelete(item._id)}
                                  className="cursor-pointer"
                                >
                                  <TrashAuthenSVG className="stroke-[#28303F] hover:stroke-[#E32626] duration-500 ease-in-out" />
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
            {!isLoading && (realData?.length === 0 || !realData) && (
              <div className="w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
                <div className="flex flex-col justify-center items-center gap-7">
                  <NoAccessHistorySVG />
                  <span className="font-Inter font-bold text-xl leading-[24.2px] text-[#697489]">
                    No Influencers
                  </span>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
        {!isLoading && data?.meta && (
          <CardFooter className="-mr-[9.5px]  flex items-center justify-end p-0 bg-white">
            <div className={classes.root}>
              <Pagination
                count={data?.meta?.totalPage}
                variant="text"
                shape="rounded"
                page={page}
                onChange={(e, page) => setPage(page)}
                sx={{
                  "& .MuiPaginationItem-page": {
                    color: "#000000",
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeigh: 20,
                    fontFamily: "Inter",
                    width: 32,
                    height: 32,
                  },
                  "& .MuiPaginationItem-page:hover": {
                    backgroundColor: "#e6f5fe",
                  },
                }}
              />
            </div>
          </CardFooter>
        )}
      </div>
    </LayoutDashBoard>
  );
}
