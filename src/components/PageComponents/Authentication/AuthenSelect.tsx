import DownAuthen from "@/components/svg/DownAuthen";
import TelegramSVG from "@/components/svg/TelegramSVG";
import TwitterFooterSVG from "@/components/svg/TwitterFooterSVG";
import TwitterSVG from "@/components/svg/TwitterSVG";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface AuthenSelectProps {
  icon: string;
  setIcon: any;
  dropdown?: boolean;
}

export default function AuthenSelect({
  icon,
  setIcon,
  dropdown = true,
}: AuthenSelectProps) {
  const ref = useRef<any>(null);
  const [social, setSocial] = useState<boolean>(false);
  const handleChoise = (choise: string) => {
    setSocial(!social);
    setIcon(choise);
  };
  const handleClickOutside = () => {
    setSocial(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <div
      onClick={() => setSocial(!social)}
      className={`absolute bg-[#005AE2] rounded-md m-[5px] flex items-center justify-end ${
        dropdown ? "pr-[9px]" : "pr-6"
      } gap-[11px] h-[45px] w-[75px]`}
    >
      <div className="flex gap-[11px] ">
        <div className="w-6 h-5 ">
          {(icon === "TW" && <TwitterFooterSVG className="w-full h-full" fillOne="white"/>) ||
            (icon === "TE" && <TelegramSVG className="w-full h-full" />)}
        </div>
      </div>
      {dropdown && (
        <div className="cursor-pointer">
          <DownAuthen />
        </div>
      )}
      {dropdown && social && (
        <div
          ref={ref}
          onClick={handleClickOutside}
          className="py-[14px] pl-[6px] absolute top-[95%] z-10 left-[0px] bg-[#F1F5F9] flex flex-col items-start rounded-md w-[75px] h-[85px] shadow-[0_1px_2px_rgba(0,0,0,0.25)] gap-[9px]"
        >
          <span
            onClick={() => handleChoise("TW")}
            className="font-Inter cursor-pointer font-medium text-sm leading-6"
          >
            Twitter
          </span>
          <span
            onClick={() => handleChoise("TE")}
            className="font-Inter cursor-pointer font-medium text-sm leading-6"
          >
            Telegram
          </span>
        </div>
      )}
    </div>
  );
}