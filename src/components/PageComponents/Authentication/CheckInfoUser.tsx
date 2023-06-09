import { ArrRender } from "@/interface/page/Authentication";
import ListArr from "./ListArr";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Player } from "@lottiefiles/react-lottie-player";
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
  link,
}: CheckInfoUserProps) {
  const isFake = useSelector(
    (state: RootState) => state.authentication.isFakeData
  );
  const handleError = (e: any) => {
    e.target.src =
      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
  };
  return (
    <div className="bg-background flex flex-col items-center justify-center w-full rounded-2xl shadow-md overflow-hidden">
      <div className="w-full h-full py-4 flex items-center gap-2 justify-center text-white bg-[#0680EB]">
        {icon}
        <span className="text-center font-semibold text-xl text-inherit">
          {social}
        </span>
      </div>
      <div className="w-full bg-[#F7F9FB]">
        <div className="border-b-2 w-full"></div>
        <div className="grid grid-cols-12 gap-5 mt-5 p-4 items-center">
          <div className="2xl:col-span-4 lg:col-span-4 col-span-12">
            {isFake ? (
              <Player
                autoplay
                loop
                src="/assets/jsonGif/searchingForProfile.json"
                style={{ height: "200px", width: "200px" }}
                className="p-0"
              ></Player>
            ) : (
              <div className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative bg-inherit flex gap-2 justify-start items-center">
                <picture>
                  <img
                    className="rounded-full"
                    src={src || "/image/used01.png"}
                    width={80}
                    height={80}
                    alt="avatar"
                    onError={handleError}
                  />
                </picture>
                <div>
                  <h4 className="text-xl font-medium text-black-500 mb-2">
                    <span className="block text-2xl">{name}</span>
                    <Link
                      href={`${link}${username?.replace("@", "")}`}
                      target="_blank"
                      className="block font-normal text-blue-500 text-base"
                    >
                      {username?.startsWith("@") ? username : "@" + username}
                    </Link>
                  </h4>
                  {textJoin && (
                    <p className="text-base font-normal flex gap-2 items-center">
                      {iconJoin} {textJoin}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="2xl:col-span-8 lg:col-span-8 col-span-12">
            <ListArr arrRender={arrRender} col={col} cols={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
