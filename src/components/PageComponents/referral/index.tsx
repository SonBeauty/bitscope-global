import LayoutDashBoard from "@/components/layout/Layout"
import BackLeftSVG from "@/components/svg/BackLeftSVG"
import NoreferralSVG from "@/components/svg/NoreferralSVG"
import { Player } from "@lottiefiles/react-lottie-player"
import { Card, CardBody, CardHeader } from "@material-tailwind/react"
import { useRouter } from "next/router"

interface ReferralMobileProps {
    data: any
    isLoading: boolean
}

export default function ReferralMobile({ data, isLoading }: ReferralMobileProps) {
    const router = useRouter()
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
                                <div onClick={() => router.push("/dashboard")}>
                                    <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px]" />
                                </div>
                                <span className="font-Inter text-white text-lg leading-5 font-bold">
                                    Referral
                                </span>
                            </span>
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
                    ) : !data || data.length <= 0 ? (
                        <div className="bg-[#F6FBFF] w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
                            <div className="flex flex-col justify-center items-center gap-7">
                                <NoreferralSVG />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-[6px] bg-[#F5F5F5] px-[6px]">
                            {data?.map((item: any, index: any) => {
                                const time = new Date(item?.userId?.createdAt).toLocaleTimeString(('en-us'), { hour12: false })
                                return (
                                    <div
                                        key={index}
                                        className="flex gap-[10px] items-center bg-white py-[14px] px-[10px] rounded-md"
                                    >
                                        <div className="w-full">
                                            <div className="flex font-semibold text-2xl leading-5 font-Inter mb-[6px]">
                                                {item?.userId?.name}
                                            </div>
                                            <div className="flex font-Inter text-base font-medium text-[#1C1C1C] mb-[6px]">
                                                {item?.userId?.email}
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="flex flex-col place-items-start gap-[6px]">
                                                    <div className="flex justify-start w-full items-center gap-[6px]">
                                                        <div className={`w-2 h-2 ml-[7px] ${item?.userId?.isActive ? "bg-[#00A72F]" : "bg-[#FFB006]"} visible rounded-full`} ></div>
                                                        <span className={`text-[#1C1C1C] text-base leading-5 font-Inter font-medium`}>
                                                            {item?.userId?.isActive ? "Confirmed" : "Registered"}
                                                        </span>
                                                    </div>
                                                    <div className="font-medium text-base font-Inter">
                                                        <span>Bonus Reward</span>
                                                    </div>
                                                    <div className="font-medium text-base font-Inter">
                                                        <span>Pre-sale Reward</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col h-full">
                                                    <div className="relative justify-around ">
                                                        <div className=" flex justify-start w-full justify-items-end">
                                                            <span className={`font-normal text-base text-[#585858] leading-5 font-Inter mb-[8px]`}>
                                                                {item?.userId?.createdAt?.slice(0, 10).split('-').map((part: any) => part.padStart(2, '0')).join('.') + " at " + time}
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-end w-full">
                                                            <span
                                                                className={`text-[#1C1C1C] font-bold text-base leading-5 font-Inter mb-[8px]`}
                                                            >
                                                                {item?.userId?.isActive ? '$0.5' : '$0.0'}
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-end w-full">
                                                            <span
                                                                className={`text-[#1C1C1C] text-base font-Inter font-bold pb-[7px]`}
                                                            >
                                                                {item?.userId?.isActive ? '$0.5' : '$0.0'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
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
        </LayoutDashBoard >
    )
}