import { ArrRender } from "@/interface/page/Authentication";
import ListArr from "./ListArr";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Player } from "@lottiefiles/react-lottie-player";
import { convertDate } from "@/services/Authentication";

interface CheckInfoUserProps {
  icon: any;
  social: string;
  src: string | null | undefined;
  name: string | null | undefined;
  username: string | null | undefined;
  iconJoin?: any;
  textJoin?: string | null | undefined;
  arrRender: ArrRender[];
  col: number;
  link: string;
  dataFourStart?: any;
  arrThree?: any;
}

export default function CheckInfoUser({
  icon,
  social,
  src,
  name,
  username,
  iconJoin,
  textJoin,
  arrRender,
  col,
  dataFourStart,
  link,
  arrThree,
}: CheckInfoUserProps) {
  const isFake = useSelector(
    (state: RootState) => state.authentication.isFakeData
  );
  const handleError = (e: any) => {
    e.target.src =
      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
  };
  return (
    <div className="bg-background flex flex-col items-center justify-center w-full rounded-md shadow-md overflow-hidden md:mt-[6px]">
      <div className="w-full h-full py-[13px] flex items-center gap-2 justify-center text-white bg-[#0680EB]">
        {icon}
        <span className="font-Inter text-center font-semibold text-2xl leading-[29px] text-inherit">
          {social}
        </span>
      </div>
      <div className="w-full bg-[#F7F9FB]">
        <div className="w-full"></div>
        <div className="grid grid-cols-12 gap-5 md:p-5 px-[14px] py-[25px] items-center">
          <div className="2xl:col-span-4 lg:col-span-4 col-span-12">
            {isFake ? (
              <Player
                autoplay
                loop
                src="/assets/jsonGif/searchingForProfile.json"
                style={{ height: "130px", width: "200px" }}
                className="p-0"
              ></Player>
            ) : (
              <div className="bg-no-repeat bg-cover bg-center md:p-5 p-0 rounded-[6px] relative bg-inherit flex gap-2 justify-start items-center">
                <picture>
                  <img
                    className="rounded-full"
                    src={src ?? "/image/used01.png"}
                    width={80}
                    height={80}
                    alt="avatar"
                    onError={handleError}
                  />
                </picture>
                <div className="">
                  <h4 className="text-xl font-medium mb-2">
                    <span className="font-Inter text-start block md:text-2xl text-[16px] leading-[21.78px] md:leading-7 text-[#1C1C1C]">
                      {name}
                    </span>
                    <Link
                      href={link}
                      target="_blank"
                      className="block font-normal text-[#0087B2] text-base text-start leading-5 py-1"
                    >
                      {username && "@" + username.split("/").pop()}
                    </Link>
                  </h4>
                  {textJoin && (
                    <p className="font-Inter text-base font-normal flex gap-1 items-center -ml-[5.5px]">
                      {iconJoin} {convertDate(textJoin)}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="2xl:col-span-8 lg:col-span-8 col-span-12">
            <ListArr
              arrRender={arrRender}
              col={col}
              cols={3}
              dataFourStart={dataFourStart}
              arrThree={arrThree}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
