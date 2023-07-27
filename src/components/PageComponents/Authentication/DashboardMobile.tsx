import React, { useState } from 'react'
import LayoutDashBoard from "@/components/layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import IconInfulencerSVG from "@/components/svg/IconInfluencer"
import { BiBarChart, BiMessageRounded } from "react-icons/bi";
import { HeartIcon } from "@heroicons/react/24/outline";
import { FaRetweet } from "react-icons/fa";
import IconYellowSVG from '@/components/svg/IconYellowSVG';

const DashboardMobile = (data: any) => {
    const user = useSelector((state: RootState) => state.users.user);
    const [display, setDisplay] = useState("")
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        appendDots: (dots: any) => (
            <div
                style={{
                    borderRadius: "10px",
                    bottom: 0,
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };

    const convertFormat = (number: any) => {
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        const suffixIndex = Math.floor(Math.log10(number) / 3);
        const shortNumber = (number / Math.pow(10, suffixIndex * 3)).toFixed(1).replace(".0", "")

        return `${shortNumber}${suffixes[suffixIndex]}`;
    }

    return (
        <LayoutDashBoard className="md:p-5 relative bg-[#F6FBFF]">
            <div className="grid gap-3 grid-cols-1 text-lg mb-3 ">
                <div className=" bg-[#005AE2] flex py-8 px-8 gap-5 md:px-[100px] md:gap-10">
                    <div className='mt-1.5'>
                        <picture>
                            <img src="https://i.imgur.com/nKqw1dW.png" alt="image" />
                        </picture>
                    </div>
                    <div className="font-Inter flex flex-col items-start justify-center font-normal text-lg">
                        <p className="text-white font-light">Good evening,</p>
                        <p className="text-white font-semibold text-xl">{user?.name}</p>
                        <p className="text-white font-light">Welcome to BitScope</p>
                    </div>
                </div>
            </div>
            <Slider {...settings} className="w-full rounded-md px-1 h-[270px] bg-[#fff] custom-slider">
                <Link href="https://bitscope.global/blog/building-a-web3-community-quantity-or-quality" target='_blank'>
                    <picture>
                        <img src="https://i.imgur.com/j1b6sF1.png" className='h-[242px] rounded-md w-full' alt="" />
                    </picture>
                </Link>
                <Link href="https://discord.com/channels/1093829979399274527/1093829979650928640/1121661893724082206" target='_blank'>
                    <picture>
                        <img src="https://i.imgur.com/Gv2kgMS.png" className='h-[242px] rounded-md w-full' alt="" />
                    </picture>
                </Link>
                <Link href="https://discord.com/channels/1093829979399274527/1093829979650928640/1107556222904844349" target='_blank'>
                    <picture>
                        <img src='https://i.imgur.com/5lopT2y.png' className='h-[242px] rounded-md w-full' alt=''></img>
                    </picture>
                </Link>
            </Slider>
            <div className='mt-1 bg-[#fff]'>
                <hr />
            </div>

            <div className='mb-2 bg-[#fff]'>
                <Slider {...settings} className='custom-slider mb-1'>
                    {data?.tweet?.map((item: any, index: any) => {
                        const render = item?.content.split('\n')
                        return (
                            <Link href={item?.link ? item?.link : 'https://twitter.com/BitscopeAI'} key={index} target="_blank">
                                <div className="flex bg-[#fff] hover:bg-[#F0F0F0] px-3 py-4 flex-col gap-2 2xl:gap-4 rounded-md h-[455px]">
                                    <div className="flex">
                                        <picture className="mr-2">
                                            <img src={item?.avatar} alt="" className="w-10 h-10 rounded-full" />
                                        </picture>
                                        <div>
                                            <div className="flex">
                                                <span className="font-Inter font-bold text-base">
                                                    {item?.userName}
                                                </span>
                                                {item?.isActive && item?.isActive === "blue" ?
                                                    <div className="ml-1 mt-[2px]">
                                                        <IconInfulencerSVG />
                                                    </div> : <div className='ml-1 mt-[2px]'>
                                                        <IconYellowSVG />
                                                    </div>}
                                            </div>
                                            <div className="flex">
                                                <span className="font-Inter text-xs font-normal mr-1">
                                                    @{item?.userId}
                                                </span>
                                                <div className='w-[3px] h-[3px] mr-1 bg-[#585858] rounded-full mt-[6px]' />
                                                <div className="text-[#536471] text-xs font-Inter font-normal">
                                                    {item.createdAt.slice(4, 10)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="break-words text-left">
                                        <div className="font-Inter text-sm font-normal h-[130px] overflow-hidden">{render.map((line: any, index: any) => {
                                            const format = index === 0 && line.length > 100 ? line.substr(0, 100) + '...' : line
                                            return (
                                                <p className={`${index === 0 ? 'font-bold mb-2' : ''}`} key={index}>
                                                    {format}
                                                </p>
                                            )
                                        }
                                        )}
                                        </div>
                                    </div>
                                    {item?.images && <div className="rounded-md">
                                        <Image width={174} height={100} src={item?.images[0]} alt="" className="rounded-md h-[190px] w-full" />
                                    </div>}
                                    {item?.video && <div className='rounded-md'>
                                        <video controls src={item?.video?.link} className='rounded-md h-[190px] w-full'></video>
                                    </div>}
                                    <div className="flex justify-between w-full pb-2 mt-2">
                                        <div className="flex gap-1 rounded-full">
                                            <div className="rounded-full hover:text-[#1D9BF0] hover:bg-[#E8F5FD] p-1">
                                                <BiMessageRounded className="h-6 w-6" />
                                            </div>
                                            <span className="text-sm text-[#536471] mt-[6px] ml-1">
                                                {item?.replyCount === 0 ? 0 : convertFormat(item?.replyCount)}
                                            </span>
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="rounded-full hover:text-[#00BA7C] hover:bg-[#E5F8F2] p-1">
                                                <FaRetweet className=" h-6 w-6" />
                                            </div>
                                            <span className="text-sm  mt-[6px] ml-1">
                                                {item?.retweetCount === 0 ? 0 : convertFormat(item.retweetCount)}
                                            </span>
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="rounded-full hover:bg-[#FEE7F2] hover:text-[#F91880] p-1">
                                                <HeartIcon className="h-6 w-6 text-sm" />
                                            </div>
                                            <span className="text-sm text-[#536471] mt-[6px] ml-1">
                                                {item?.favoriteCount === 0 ? 0 : convertFormat(item.favoriteCount)}
                                            </span>
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="rounded-full hover:text-[#1D9BF0] hover:bg-[#E8F5FD] p-1">
                                                <BiBarChart className="h-6 w-6" />
                                            </div>
                                            <div className="mt-[6px]">
                                                <span className="text-sm h-6 w-6 text-[#536471] ">
                                                    {item?.views === 0 ? 0 : convertFormat(item.views)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </Slider>
            </div>


            <div className='flex items-center bg-[#0680EB] h-[54px] rounded-t-md'>
                <div className={`font-Inter font-semibold text-xl ${display === '' ? 'text-[#fff]' : 'text-[#CFCFCF]'}  text-center w-1/2`} onClick={() => setDisplay("")}>Influencer saying</div>
                <div className='w-[1px] h-[29px] bg-[#fff]'></div>
                <div className={`font-Inter font-semibold text-xl ${display === 'trending' ? 'text-[#fff]' : 'text-[#CFCFCF]'}  text-center w-1/2`} onClick={() => setDisplay("trending")}>Market trending</div>
            </div>
            {display === "trending" ? <div className='max-h-[792px] overflow-y-auto'>
                <div className="w-full bg-[#f8f9fb] border-none rounded-lg shadow-md custom-card">
                    <div className='flex py-2 px-4 py-4 items-center'>
                        <span className="text-gray-500 basis-1/5 ">
                            <Image width={30} height={30} src={"/image/wchar.svg"} alt="Image" />
                        </span>
                        <span className="dark:text-white basis-3/5 font-semibold text-center text-lg">
                            Biggest Gainers
                        </span>
                    </div>
                    {data?.trending?.gainer?.map((item: any, index: any) => {
                        return (
                            <div key={index} className={`flex py-[9px] max-h-[792px] px-2 items-center hover:bg-gray-100 dark:hover:bg-gray-700 ${index === 8 ? 'mb-0' : 'mb-2'} bg-[#fff]`}>
                                <div className="font-Inter text-base font-normal color-[#1c1c1c] w-[8%]">
                                    <span>
                                        {index + 1}
                                    </span>
                                </div>
                                <div className="flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white w-[11%] ml-4">
                                    {item.image && <picture>
                                        <img
                                            src={item.image}
                                            alt="iMac Front Image"
                                            className="w-7 h-7 rounded-full"
                                        />
                                    </picture>}
                                </div>
                                <div className="py-1 flex font-medium text-gray-900 whitespace-nowrap dark:text-white md:text-xs xl:text-sm w-[25%]">
                                    <span className="text-base font-Inter text-[#1C1C1C] font-normal ">
                                        {item?.info?.name?.slice(0, 8)}
                                    </span>
                                </div>
                                <div className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:text-sm xl:text-sm w-[15%] ">
                                    <span className="text-base font-Inter text-[#1C1C1C] font-normal">
                                        {item?.info?.symbol}
                                    </span>
                                </div>
                                <div className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%] ml-[55px]">
                                    <span className="text-base font-Inter text-[#1C1C1C] font-normal">
                                        ${item?.info?.priceChange?.price.toString().slice(0, 6)}
                                    </span>
                                </div>
                            </div>)
                    })}
                </div>
                <div className="w-full bg-[#f8f9fb]">
                    <div className='flex py-4 px-3 items-center'>
                        <span className="text-gray-500 basis-1/5">
                            <Image width={30} height={30} src={"/image/groupstar.svg"} alt="Image" />
                        </span>
                        <span className="dark:text-white basis-3/5 font-semibold text-center text-lg">
                            Potential Tokens
                        </span>
                    </div>
                    {data?.trending?.potential?.map((item: any, index: any) => {
                        return (
                            <div key={index} className={`flex py-[9px] px-2  items-center hover:bg-gray-100 dark:hover:bg-gray-700 ${index === 8 ? 'mb-0' : 'mb-2'} bg-[#fff]`}>
                                <div className="font-Inter text-base font-normal color-[#1c1c1c] w-[8%]">
                                    <span>
                                        {index + 1}
                                    </span>
                                </div>
                                <div className="flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white w-[11%] ml-4">
                                    {item.image && <picture>
                                        <img
                                            src={item.image}
                                            alt="iMac Front Image"
                                            className="w-7 h-7 rounded-full"
                                        />
                                    </picture>}
                                </div>
                                <div className="py-1 flex font-medium text-gray-900 whitespace-nowrap dark:text-white md:text-xs xl:text-sm w-[25%]">
                                    <span className="text-base font-Inter text-[#1C1C1C] font-normal ">
                                        {item?.info?.name?.slice(0, 8)}
                                    </span>
                                </div>
                                <div className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:text-sm xl:text-sm w-[15%]">
                                    <span className="text-base font-Inter text-[#1C1C1C] font-normal">
                                        {item?.info?.symbol}
                                    </span>
                                </div>
                                <div className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%] ml-[55px]">
                                    <span className="text-base font-Inter text-[#1C1C1C] font-normal">
                                        ${item?.info?.priceChange?.price.toString().slice(0, 7)}
                                    </span>
                                </div>
                            </div>)
                    })}
                </div>
                <div className="w-full bg-[#f8f9fb]">
                    <div className='flex py-4 px-3 items-center'>
                        <span className="text-gray-500 basis-1/5">
                            <Image width={30} height={30} src={"/image/trend.svg"} alt="Image" />
                        </span>
                        <span className="dark:text-white basis-3/5 font-semibold text-center text-lg">
                            Trending Topic
                        </span>
                    </div>
                    <div className="gap-2 items-end w-full">
                        <div className='grid grid-cols-2'>
                            {data?.trending?.trending?.slice(0, 8).map((item: any, index: any) => {
                                return (
                                    <div key={index} className="mb-2 border-slate-100 bg-[#fff] px-2 flex py-[9px] items-center justify-center dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="basis-2/12 mr-2">
                                            <span className="font-Inter text-base font-normal color-[#1c1c1c]">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <div className="py-1 basis-10/12 font-medium text-gray-900 whitespace-nowrap dark:text-white h-9">
                                            <div className="h-full flex items-center align-middle">
                                                <span className="font-Inter text-base font-normal color-[#1c1c1c]">
                                                    #{item?.label?.slice(0, 13)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>)
                            })
                            }
                        </div>
                    </div>
                </div>
            </div> : <div className="border-none rounded-lg shadow-md max-h-[792px] overflow-y-auto custom-card">
                <div className="flex flex-col gap-3 bg-[#F7F9FB]">
                    {data?.influencer?.map((item: any, index: any) => {
                        return (
                            item?.data ?
                                <Link
                                    key={index}
                                    className=" flex px-4 py-4 2xl:px-8 flex-col gap-3 rounded-md bg-[#fff]"
                                    href={item?.data.link}
                                    target='_blank'
                                >
                                    <div className="flex gap-2">
                                        <picture className="mr-1">
                                            <img
                                                src={item?.data?.avatar}
                                                alt="alt"
                                                className="w-10 h-10 rounded-full"
                                            />
                                        </picture>
                                        <div className="w-3/4 mt-1">
                                            <div className="flex">
                                                <h6 className="text-black-500 mr-1 text-base font-Inter font-bold mt-[1px]">{item?.data?.userName?.length > 5 ? item?.data?.userName?.slice(0, 5) + "..." : item?.data?.userName}</h6>
                                                <div className="mr-1 mt-[3px]"><IconInfulencerSVG /></div>
                                                <div className="mb-2"><p className="font-Inter font-normal text-base text-[#585858] mr-1">{'@' + item?.data?.userId}</p></div>
                                                <div className='w-[3px] h-[3px] mr-1 bg-[#585858] rounded-full mt-[11px]' />
                                                <div className="flex">
                                                    <div className="text-[#585858]">
                                                        <span className="text-[#585858] text-base">{item?.data?.createdAt?.slice(4, 10)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-start line-clamp-2 font-Inter text-sm font-normal mb-2">{item?.data?.content}</p>
                                            {item?.data?.video &&
                                                <video controls width="100%" height="100%" src={item?.data?.video?.link} className="rounded-md max-h-[150px]"></video>
                                            }
                                            {item?.data?.images && item?.data?.images?.length !== 0 &&
                                                <div className={` grid w-auto ${item?.data?.images?.length > 1 ? ' grid-col-2 grid-flow-col gap-1' : 'grid-col-1 grid-flow-col'}`}>
                                                    {item?.data?.images?.slice(0, 3).map((image: any, index: any) => {
                                                        return (
                                                            <div key={index} className={`${index === 0 && item?.data?.images?.length > 2 ? 'row-span-2' : ''}`}>
                                                                <picture>
                                                                    <img
                                                                        src={image}
                                                                        alt=""
                                                                        className={`${item?.data?.images?.length > 1 ?
                                                                            item?.data?.images?.length > 2 ?
                                                                                ((index === 1 || index === 2) ? 'h-[75px]' : 'h-[150px]') : 'w-full h-[150px]' : 'w-auto max-h-[150px]'
                                                                            } rounded-md`}
                                                                    />
                                                                </picture>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            }
                                            <div className="flex gap-6 flex-col sm:flex-row mt-2">
                                                <div className="flex justify-between items-center basis-8/12">
                                                    <div className="flex gap-1 rounded-full">
                                                        <div className="rounded-full hover:text-[#1D9BF0] hover:bg-[#E8F5FD] p-1">
                                                            <BiMessageRounded className="h-6 w-6" />
                                                        </div>
                                                        <div className="mt-[5px]">
                                                            <span className="text-sm text-[#536471]">
                                                                {item?.data?.replyCount === 0 ? 0 : convertFormat(item?.data?.replyCount)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-1">
                                                        <div className="rounded-full hover:text-[#00BA7C] hover:bg-[#E5F8F2] p-1">
                                                            <FaRetweet className=" h-6 w-6" />
                                                        </div>
                                                        <div className="mt-[5px]">
                                                            <span className="text-sm text-[#536471]">
                                                                {item?.data?.retweetCount === 0 ? 0 : convertFormat(item.data?.retweetCount)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-1">
                                                        <div className="rounded-full hover:bg-[#FEE7F2] hover:text-[#F91880] p-1">
                                                            <HeartIcon className="h-6 w-6 text-sm" />
                                                        </div>
                                                        <div className="mt-[5px]">
                                                            <span className="text-sm text-[#536471]">
                                                                {item?.data?.favoriteCount === 0 ? 0 : convertFormat(item.data?.favoriteCount)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-1">
                                                        <div className="rounded-full hover:text-[#1D9BF0] hover:bg-[#E8F5FD] p-1">
                                                            <BiBarChart className="h-6 w-6  " />
                                                        </div>
                                                        <div className="mt-[5px]">
                                                            <span className="text-sm h-6 w-6 text-[#536471] ">
                                                                {item?.data?.views === 0 ? 0 : convertFormat(item.data?.views)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link> : null
                        );
                    })}
                </div>
            </div>}

        </LayoutDashBoard >
    )
}

export default DashboardMobile