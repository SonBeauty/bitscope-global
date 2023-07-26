import { schema } from "@/components/PageComponents/Subscribe/schema";
import FacebookFooterSVG from "@/components/svg/FacebookFooterSVG";
import GlobalFooterSVG from "@/components/svg/GlobalFooterSVG";
import LoadingSVG from "@/components/svg/LoadingSVG";
import DashboardMobile, {
  AuthenMobile,
  SettingMobile,
} from "@/components/svg/NavMenuMobile/NavMenuMobile";
import TwitterFooterSVG from "@/components/svg/TwitterFooterSVG";
import useFooterType from "@/hooks/useFooterType";
import useWidth from "@/hooks/useWidth";
import { Subscribe } from "@/pages/api/subscribe";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Footer = ({ className = "custom-class", mobile = false }) => {
  const [footerType] = useFooterType();
  const { width } = useWidth();
  const router = useRouter();
  const [isColor, setIsColor] = useState<number>();
  useEffect(() => {
    router.pathname === "/dashboard"
      ? setIsColor(1)
      : router.pathname === "/authentication"
      ? setIsColor(2)
      : router.pathname === "/user"
      ? setIsColor(3)
      : setIsColor(0);
  }, []);

  const footerclassName = () => {
    switch (footerType) {
      case "sticky":
        return "sticky bottom-0 z-[999]";
      case "static":
        return "static";
      default:
        break;
    }
  };
  const { mutate, isLoading } = useMutation(Subscribe, {
    onSuccess: () => {
      toast.success("Subscribe Successfully!");
      reset();
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message.toString().replace("Collection", "Email")
      );
      reset();
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const onSubmit = (data: any) => {
    mutate(data.email);
  };
  return (
    <>
      <footer
        className={
          className + " border-t-2 border-slate-200 " + footerclassName()
        }
      >
        <div
          className={`flex md:px-10 md:py-[30px] p-5 flex-col-reverse ${
            !mobile && "md:flex-row"
          } gap-6`}
        >
          <div className="flex flex-col gap-5 basis-2/5">
            <div className="flex gap-[15px] justify-start items-center flex-wrap">
              <span className="font-Inter font-semibold text-base leading-[46px] text-[#1C1C1C]">
                Follow us on:
              </span>
              <div className="flex gap-[15px] justify-start items-center ">
                <Link
                  href="https://twitter.com/BitscopeAI"
                  target="_blank"
                  className="py-0.5 px-2 bg-white rounded-full flex justify-center items-center w-8 h-8 border-[1px] border-[#E5E9EE]"
                >
                  <TwitterFooterSVG className="w-[14px] h-[14px]" />
                </Link>
                <Link
                  href="https://discord.com/invite/Bv8YNdVD2Y"
                  target="_blank"
                >
                  <Image
                    src="/image/Discord4x.png"
                    width={32}
                    height={32}
                    alt="Discord"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/BitScopeAI"
                  target="_blank"
                  className="py-0.5 px-2 bg-white rounded-full flex justify-center items-center w-8 h-8 border-[1px] border-[#E5E9EE]"
                >
                  <FacebookFooterSVG />
                </Link>
                <Link href="https://bitscope.global/" target="_blank">
                  <GlobalFooterSVG />
                </Link>
              </div>
            </div>
            <div className="flex justify-start gap-20">
              <div className="flex flex-col items-start ">
                <span className="text-base leading-[37px] font-Inter font-semibold text-[#1C1C1C]">
                  Information
                </span>
                <Link
                  className="text-base hover:text-black-500 leading-[37px] font-normal font-Inter text-[#626264]"
                  href="https://docs.bitscope.global/"
                  target="_blank"
                >
                  <span className="text-inherit font-medium">About</span>
                </Link>
                <Link
                  className="text-base hover:text-black-500 leading-[37px] font-normal font-Inter text-[#626264]"
                  href="https://bitscope.global/#features"
                  target="_blank"
                >
                  <span className="text-inherit font-medium">Services</span>
                </Link>
                <Link
                  className="text-base hover:text-black-500 leading-[37px] font-normal font-Inter text-[#626264]"
                  href="https://bitscope.global/blog"
                  target="_blank"
                >
                  <span className="text-inherit font-medium">Blog</span>
                </Link>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-base leading-[37px] font-Inter font-semibold text-[#1C1C1C]">
                  Help
                </span>
                <Link
                  className="text-base hover:text-black-500 leading-[37px] font-normal font-Inter text-[#626264]"
                  href="https://discord.com/channels/1093829979399274527/1094824816156098600"
                  target="_blank"
                >
                  <span className="text-inherit font-medium">
                    Customer Support
                  </span>
                </Link>
                <Link
                  className="text-base hover:text-black-500 leading-[37px] font-normal font-Inter text-[#626264]"
                  href="https://docs.bitscope.global/development-team-and-partners/legal/private-policy"
                  target="_blank"
                >
                  <span className="text-inherit font-medium">
                    Privacy Policy
                  </span>
                </Link>
                <Link
                  className="text-base hover:text-black-500 leading-[37px] font-normal font-Inter text-[#626264]"
                  href="https://docs.bitscope.global/development-team-and-partners/legal/terms-of-service-and-risk-waring"
                  target="_blank"
                >
                  <span className="text-inherit font-medium">
                    Terms & Conditions
                  </span>
                </Link>
              </div>
            </div>
            <div className="font-Inter font-normal text-sm text-[#1C1C1C]">
              Copyright 2023, All Rights Reserved by Bitscope
            </div>
          </div>
          <div className="flex flex-col gap-[14px] basis-3/5">
            <Image
              src="/image/400X200.png"
              width={164}
              height={44}
              alt="Logo"
              className="-ml-6 -mt-6"
            />
            <p className=" font-Inter font-normal text-base leading-[26px] text-[#626264] text-start">
              BitScope&apos;s goal is to incorporate Artificial Intelligence
              (AI) into a &quot;Social Listening&quot; platform. Our focus is on
              developing a one-of-a-kind Social Database for Blockchain and Web3
            </p>
            <form
              className="flex items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                id="email"
                placeholder="Enter email address"
                type="email"
                className="h-[45px] rounded-tl-md rounded-bl-md border-none md:w-[50%] w-full font-Inter text-sm font-normal"
                {...register("email")}
              />

              <button
                className="bg-[#0341A3] w-[119px] h-[45px] rounded-tr-md rounded-br-md"
                type="submit"
                disabled={isLoading}
              >
                {isLoading && <LoadingSVG />}
                <span className="text-white font-Inter font-medium text-base">
                  Subscribe
                </span>
              </button>
            </form>
            <span className="text-sm text-red-400 text-start visible">
              {errors["email"]?.message?.toString()}
            </span>
          </div>
        </div>
      </footer>
      {width < 1024 ? (
        <div className="pt-[88px]">
          <div className="fixed shadow-base3 bottom-0 left-0 z-50 w-full h-[88px] bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
              <Link
                href={"/dashboard"}
                type="button"
                className="inline-flex py-4 flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <DashboardMobile
                  className={`w-[28px] h-[28px] ${
                    isColor === 1 ? "fill-navMobile-1" : "fill-navMobile-2"
                  }`}
                />
                <div className="text-sm leading-5 pt-[6px] text-[#1C1C1C] dark:text-white font-Inter font-medium text-center">
                  Dashboard
                </div>
              </Link>

              <Link
                href={"/authentication"}
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <AuthenMobile
                  className={`w-[28px] h-[28px] ${
                    isColor === 2 ? "fill-navMobile-1" : "fill-navMobile-2"
                  }`}
                />
                <div className="text-sm leading-5 pt-[6px] text-[#1C1C1C] dark:text-white font-Inter font-medium text-center">
                  Authen
                </div>
              </Link>
              <Link
                href={
                  "https://discord.com/channels/1093829979399274527/1094824816156098600"
                }
                target="_blank"
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <img
                  src="/image/SupportNavMobile.png"
                  className={`w-[28px] h-[28px] fill-[#626264]`}
                />
                <div className="text-sm leading-5 pt-[6px] text-[#1C1C1C] dark:text-white font-Inter font-medium text-center">
                  Support
                </div>
              </Link>
              <Link
                href={"/user"}
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <SettingMobile
                  className={`w-[28px] h-[28px] ${
                    isColor === 3 ? "fill-navMobile-1" : "fill-navMobile-2"
                  }`}
                />
                <div className="text-sm leading-5 pt-[6px] text-[#1C1C1C] dark:text-white font-Inter font-medium text-center">
                  Setting
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Footer;
