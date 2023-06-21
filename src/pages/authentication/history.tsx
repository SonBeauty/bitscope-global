import LayoutDashBoard from "@/components/layout/Layout";
import BackLeftSVG from "@/components/svg/BackLeftSVG";
import NoAccessHistorySVG from "@/components/svg/NoAccessHistorySVG";
import { TABLE_HEAD } from "@/constant/components/History";
import {
  Card,
  CardBody,
  CardHeader,
  Typography
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function History() {
  const router = useRouter();
  return (
    <LayoutDashBoard className="bg-white md:p-5 py-[15px]">
      <div className="flex flex-col gap-4">
        <Link
          href="/authentication"
          className="bg-[#005AE2] rounded-md hidden md:inline-block h-[45px] w-[188px]"
        >
          <div className="flex gap-[9.31px] items-center justify-center h-full">
            <div onClick={() => router.push("/authentication")}>
              <BackLeftSVG className="w-[8.69px] h-[15px]" />
            </div>
            <span className="font-Inter text-white font-semibold text-base leading-4">
              Bit Authentication
            </span>
          </div>
        </Link>
        <Card className="h-full bg-[#f6fbff] w-full max-h-[795.08px] p-0 m-0 shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none rounded-tl-[6px] rounded-tr-[6px] bg-[#0046B0] mt-0 mx-0 md:py-[17px] p-3 px-[16px] md:px-[22px] md:h-[54px]"
          >
            <div className="flex justify-between flex-row items-center">
              <span className="flex gap-[14px] items-center justify-center">
                <div
                  onClick={() => router.push("/authentication")}
                  className="md:hidden block"
                >
                  <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px]" />
                </div>
                <span className="font-Inter text-white text-lg leading-5 font-bold">
                  ACCESS HISTORY
                </span>
              </span>
              <div className="hidden md:block font-Inter text-white text-lg leading-[21.78px] font-semibold md:mr-[20px] cursor-pointer">
                Download all
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-0 p-0 md:bg-[#F6FBFF] bg-[#D3ECFF] w-full overflow-x-auto ">
            <div className="md:block hidden">
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
                <tbody className="w-full"></tbody>
              </table>
            </div>

            <div className="w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
              <div className="flex flex-col justify-center items-center gap-7">
                <NoAccessHistorySVG />
                <span className="font-Inter font-bold text-xl leading-[24.2px] text-[#697489]">
                  No Access History
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </LayoutDashBoard>
  );
}