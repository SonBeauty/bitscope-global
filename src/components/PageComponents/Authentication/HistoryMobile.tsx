import DismissableModal from "@/components/Modal"
import LayoutDashBoard from "@/components/layout/Layout"
import BackLeftSVG from "@/components/svg/BackLeftSVG"
import DownloadAll from "@/components/svg/DownloadAll"
import DownloadAuthenSVG from "@/components/svg/DownloadAuthenSVG"
import NoAccessHistorySVG from "@/components/svg/NoAccessHistorySVG"
import TelegramHistorySVG from "@/components/svg/TelegramHistorySVG"
import TrashAuthenSVG from "@/components/svg/TrashAuthenSVG"
import TwitterHistorySVG from "@/components/svg/TwitterHistorySVG"
import { TABLE_ROWS_MB } from "@/constant/components/History"
import { Player } from "@lottiefiles/react-lottie-player"
import { Card, CardBody, CardHeader } from "@material-tailwind/react"
import { Button } from "flowbite-react"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"

interface HistoryMobileProps {
  data: any
  isLoading: boolean
}

export default function HistoryMobile({ data, isLoading }: HistoryMobileProps) {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const router = useRouter()
  const ref = useRef<any>(null)
  const handleClickOutside = () => {
    setOpenModal(false)
  }
  useOnClickOutside(ref, handleClickOutside)
  return (
    <LayoutDashBoard className="md:p-5 py-[15px] relative bg-[#F6FBFF]">
      <Card className="h-full bg-[#F6FBFF] flex flex-col gap-[6px] w-full max-h-[795.08px] p-0 m-0 shadow-none">
        <div className="relative">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none rounded-tl-[6px] rounded-tr-[6px] bg-[#0046B0] mt-0 mx-0 p-3 px-[16px] h-[54px]"
          >
            <div className="flex justify-between flex-row items-center h-full">
              <span className="flex gap-[14px] items-center justify-center">
                <div onClick={() => router.push("/authentication")}>
                  <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px]" />
                </div>
                <span className="font-Inter text-white text-lg leading-5 font-bold">
                  ACCESS HISTORY
                </span>
              </span>
              {!isLoading ||
                (data?.data?.length > 0 && (
                  <div
                    className="font-Inter text-white text-lg leading-[21.78px] font-bold cursor-pointer"
                    onClick={() => setOpenModal(true)}
                  >
                    Download all
                  </div>
                ))}
            </div>
          </CardHeader>
        </div>
        <CardBody className={`px-0 p-0 w-full overflow-auto `}>
          {isLoading ? (
            <div className="bg-white  flex items-center justify-center h-[75vh]">
              <Player
                autoplay
                loop
                src="/assets/jsonGif/ManAndRobotWithComputers.json"
                style={{
                  height: "11.13rem",
                  width: "20.3rem",
                  background: "#FFFFFF"
                }}
                className="p-0"
              />
            </div>
          ) : data.data.length <= 0 ? (
            <div className="bg-[#F6FBFF] w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
              <div className="flex flex-col justify-center items-center gap-7">
                <NoAccessHistorySVG />
                <span className="font-Inter font-bold text-xl leading-[24.2px] text-[#697489]">
                  No Access History
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[6px] bg-[#F5F5F5] items-center justify-center">
              {TABLE_ROWS_MB.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-full justify-between gap-[10px] items-center bg-white py-[12px] px-[10px]"
                  >
                    <div className="flex gap-[7px] items-center">
                      <picture className="rounded-full flex items-center justify-center">
                        <img
                          src={item.img}
                          alt=""
                          className="w-[48px] h-[48px] ring-[#f0f6fe] ring-4 rounded-full"
                        />
                      </picture>
                      <div className="flex flex-col gap-[7px] justify-center items-center">
                        <div className="flex gap-[6px]">
                          {item.tw ? (
                            <TwitterHistorySVG className="w-[21px] h-[21px] rounded-full" />
                          ) : (
                            <TelegramHistorySVG className="w-[21px] h-[21px] rounded-full" />
                          )}
                          <span className="font-Inter font-semibold text-lg leading-[22px]">
                            {item.social}
                          </span>
                        </div>
                        <div className=" flex justify-start w-full items-center gap-[12px]">
                          <div
                            className={`w-2 h-2 ml-[7px] ${
                              item.value >= 100
                                ? "bg-[#26D256]"
                                : item.value === -1
                                ? "bg-[#FF1010]"
                                : "bg-[#FFB006]"
                            } visible rounded-full`}
                          ></div>
                          <span
                            className={`text-[#1C1C1C] font-normal text-base leading-5 font-Inter`}
                          >
                            {item.value >= 100
                              ? "Completed"
                              : item.value === -1
                              ? "Failed"
                              : "In progress"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[89px] flex flex-col items-center h-full gap-[5px]">
                      <span className="font-Inter font-normal text-base leading-5 text-[#1C1C1C]">
                        {item.date.slice(0, 10).replaceAll(".", "/")}
                      </span>
                      <div className="relative flex justify-around items-center gap-1">
                        <span className="bg-[#f5f5f5] hover:bg-[#ECF2F9] active:bg-[#ECF2F9] rounded-tl-md rounded-bl-md cursor-pointer px-[0.63rem] py-[0.31rem] stroke-[#28303F] hover:stroke-[#005AE2] active:stroke-[#005AE2] duration-500 ease-in-out">
                          <DownloadAuthenSVG className="stroke-inherit" />
                        </span>

                        <span className="bg-[#f5f5f5] hover:bg-[#FCEBE8] active:bg-[#FCEBE8] rounded-tr-md rounded-br-md cursor-pointer px-[0.63rem] py-[0.31rem] stroke-[#28303F] hover:stroke-[#E32626] active:stroke-[#E32626] duration-500 ease-in-out">
                          <TrashAuthenSVG className="stroke-inherit" />
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div className="py-7 visible" />
            </div>
          )}
        </CardBody>
      </Card>
      <DismissableModal
        ref={ref}
        open={openModal}
        setOpen={setOpenModal}
        className="w-[300px] h-[280px] mx-auto self-center"
      >
        <div className="relative flex flex-col h-full items-center justify-center px-[58px] gap-5 ">
          <DownloadAll className="mt-[10px]" />
          <span className="font-Inter font-medium text-base leading-6">
            Are you sure want to download all data?
          </span>
          <Button className="" onClick={() => setOpenModal(false)}>
            <span className="text-white font-Inter font-semibold text-lg leading-[22px]">
              Download
            </span>
          </Button>
          <div onClick={() => setOpenModal(false)}>
            <div className="absolute w-1 h-5 bg-black-500 top-[10px] right-5 rotate-45" />
            <div className="absolute w-1 h-5 bg-black-500 top-[10px] right-5 rotate-[135deg]" />
          </div>
        </div>
      </DismissableModal>
    </LayoutDashBoard>
  )
}