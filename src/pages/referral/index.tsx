import RefferalMobile from "@/components/PageComponents/referral/index";
import LayoutDashBoard from "@/components/layout/Layout";
import BackLeftSVG from "@/components/svg/BackLeftSVG";
import useWidth from "@/hooks/useWidth";
import { TABLE_HEAD } from "@/constant/components/Referral";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { RootState } from "@/store";
import NoreferralSVG from "@/components/svg/NoreferralSVG"
import Link from "next/link";

export default function History() {
  const router = useRouter();
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  const { width } = useWidth();
  const [data, setData] = useState<any>(null)
  const [totalPage, setTotalPage] = useState<number>()
  const [currentPage, setCurrentPage] = useState<any>(1)
  const [isLoading, setIsLoading] = useState(true)
  const user = useSelector((state: RootState) => state.users.user);
  useEffect(() => {
    fetch(`${process.env.SERVER}/users/${user?._id}/referral?page=${currentPage}&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setTotalPage(data?.data?.totalPage)
        setData(data?.data?.data);
        setIsLoading(false);
      });
  }, [user?._id, width, currentPage]);

  if (width < 1024) {
    return <RefferalMobile data={data} isLoading={isLoading} />;
  }

  return (
    <LayoutDashBoard className="bg-white md:p-5 py-[15px]">
      <div className="flex flex-col gap-4 ">
        <Card className="h-full bg-[#f6fbff] w-full max-h-[795.08px] p-0 m-0 shadow-[0_1px_2px_rgba(0,0,0,0.25)] rounded-md">
          <CardHeader
            floated={false}
            shadow={false}
            className={`rounded-none rounded-tl-[6px] rounded-tr-[6px] mt-0 mx-0 duration-200 md:h-[54px] ${isHover ? "bg-[#00388D]" : 'bg-[#0046B0]'} `}
          >
            <div className="flex justify-between flex-row items-center ">
              <span className="flex gap-[14px] items-center justify-center px-[1rem] md:px-0">
                <div ref={hoverRef} className=""
                  onClick={() => router.push("/dashboard")}
                >
                  <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px] ml-[25px] mr-[-10px] cursor-pointer" />
                </div>
                <span className="font-Inter py-[1.06rem] md:px-[1.38rem] text-white text-lg leading-5 font-bold">
                  REFERRAL HISTORY
                </span>
              </span>
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
                    style={{ minHeight: "40vh", width: "40%" }}
                    className="p-0"
                  />
                </div>
              ) : (
                <table className="w-full table-auto text-left">
                  <thead className="w-full ">
                    <tr className="bg-[#D3ECFF] h-[55px] flex w-full justify-between px-2 md:pl-[35px] py-[17px] md:pr-[42px]">
                      {TABLE_HEAD.map((head, index) => (
                        <th
                          key={index}
                          className={`${head.class} flex items-center`}
                        >
                          <Typography
                            className={`font-Inter font-semibold text-center text-lg leading-[22px] text-[#181C32] `}
                          >
                            {head.title}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {
                      data?.map((item: any, index: number) => {
                        const isLast = index === data?.length - 1;
                        const time = new Date(item?.userId?.createdAt).toLocaleTimeString(('en-us'), { hour12: false })
                        const classes = isLast
                          ? ""
                          : "border-b border-dashed border-[#e4e3e3]";
                        return (
                          <tr
                            className="flex hover:bg-[#EBF4FF] hover:shadow-sm duration-300 ease-in-out"
                            key={index}
                          >
                            <td
                              className={`${classes} py-[13px] px-[40px] h-[55px] md:basis-[10%] 2xl:basis-[9.5%]`}
                            >
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium text-[16.26px] leading-[28.69px] text-[#1C1C1C]"
                              >
                                {index + 1}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[1vh] h-[55px] basis-[14%] mx-[-2.5vh] 2xl:basis-[15%]`}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                {item?.userId?.name}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[22px] h-[55px] basis-[25.5%] 2xl:basis-[20.5%]`}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                {item?.userId?.email}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[22px] h-[55px] basis-[21%] 2xl:basis-[22.5%]`}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                {item?.userId?.createdAt?.slice(0, 10).split('-').map((part: any) => part.padStart(2, '0')).join('.') + " at " + time}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[22px] h-[55px] basis-[13%] 2xl:basis-[11.5%]`}
                            ><Typography className={`text-[#1C1C1C] font-medium text-base leading-5 font-Inter ${item?.userId?.isActive ? 'text-[#00A72F]' : 'text-yellow-300'}`}>
                                {item?.userId?.isActive ? 'Confirm' : 'Register'}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[22px] h-[55px] basis-[10.5%] 2xl:basis-[13%]`}
                            ><Typography className='text-[#1C1C1C] font-medium text-base leading-5 font-Inter'>
                                {item?.userId?.isActive ? '$0.5' : '$0.0'}
                              </Typography></td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[22px] h-[55px] basis-[12.5%] 2xl:basis-[17%]`}
                            ><Typography className='text-[#1C1C1C] font-medium text-base leading-5 font-Inter'>
                                {item?.userId?.isActive ? '$0.5' : '$0.0'}
                              </Typography></td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
            {!isLoading &&
              (data?.length === 0 || !data) && (
                <div className="w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
                  <div className="flex flex-col justify-center items-center gap-7">
                    <NoreferralSVG />
                  </div>
                </div>
              )}
          </CardBody>
        </Card>
        {!isLoading && data?.length > 0 && (
          <CardFooter className="-mr-[9.5px] flex items-center justify-end p-0 bg-white">
            <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
              <span className="font-Inter cursor-pointer text-white font-bold text-[16px] leading-[19.36px]">
                <ChevronLeftIcon className="h-4 w-4 text-[#000000] cursor-pointer" />
              </span>
            </div>
            <div className="flex items-center px-[6px]">
              {Array(totalPage).fill('').map((_, index) => {
                return <Link href={`?page=${index + 1}`} onClick={() => setCurrentPage(index + 1)} key={index} className={`flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px] ${index + 1 == currentPage ? 'bg-[#009EF7]' : 'bg-[#fff]'}`}>
                  <span className={`font-Inter cursor-pointer  ${index + 1 == currentPage ? 'text-white' : 'text-[#000]'} font-medium text-[16px] leading-[19.36px]`}>
                    {index + 1}
                  </span>
                </Link>
              })
              }
            </div>
            <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
              <span className="font-Inter cursor-pointer text-white font-bold text-[16px] leading-[19.36px]">
                <ChevronRightIcon className="h-4 w-4 text-[#000000] cursor-pointer" />
              </span>
            </div>
          </CardFooter>
        )}
      </div>
    </LayoutDashBoard>
  );
}
