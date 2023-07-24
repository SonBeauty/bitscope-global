import FacebookFooterSVG from "@/components/svg/FacebookFooterSVG";
import GlobalFooterSVG from "@/components/svg/GlobalFooterSVG";
import useFooterType from "@/hooks/useFooterType";
import Image from "next/image";
import Link from "next/link";
const Footer = ({ className = "custom-class", mobile = false }) => {
  const [footerType] = useFooterType();
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
  return (
    <footer
      className={
        className + " border-t-2 border-slate-200 " + footerclassName()
      }
    >
      <div
        className={`flex md:px-10 md:py-[30px] p-5 flex-col-reverse ${!mobile && "md:flex-row"
          } gap-6`}
      >
        <div className="flex flex-col gap-5 basis-2/5">
          <div className="flex gap-[15px] justify-start items-center flex-wrap">
            <span className="font-Inter font-semibold text-base leading-[46px] text-[#1C1C1C]">
              Follow us on:
            </span>
            <div className="flex gap-[15px] justify-start items-center ">
              <Link href="https://twitter.com/BitscopeAI" target="_blank">
                <Image
                  src="/image/Twitter4x.png"
                  width={32}
                  height={32}
                  alt="Twitter"
                />
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
                <span className="text-inherit font-medium">Privacy Policy</span>
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
            BitScope&apos;s goal is to incorporate Artificial Intelligence (AI)
            into a &quot;Social Listening&quot; platform. Our focus is on
            developing a one-of-a-kind Social Database for Blockchain and Web3
          </p>
          <div className="flex items-center">
            <input
              id="email"
              placeholder="Enter email address"
              type="email"
              className="h-[45px] rounded-tl-md rounded-bl-md border-none md:w-[50%] w-full font-Inter text-sm font-normal"
            />
            <button className="bg-[#0341A3] w-[119px] h-[45px] rounded-tr-md rounded-br-md">
              <span className="text-white font-Inter font-medium text-base">
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
