import { ArrRender } from "@/interface/page/Authentication";
import ListArr from "./ListArr";
interface CheckInfoUserProps {
  icon: any;
  social: string;
  src: string;
  name: string;
  username: string;
  iconJoin: any;
  textJoin: string;
  arrRender: ArrRender[];
  col: number;
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
}: CheckInfoUserProps) {
  const handleError = (e: any) => {
    e.target.src =
      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
  };
  return (
    <div className="bg-background border-2 flex py-6 flex-col items-center justify-center w-full rounded-lg">
      <div className="w-full mb-4 flex items-center gap-2 justify-center text-sky-600">
        {icon}
        <span className="text-center text-base font-normal">{social}</span>
      </div>
      <div className="w-full">
        <div className="border-b-2 w-full"></div>
        <div className="grid grid-cols-12 gap-5 mt-5 p-4">
          <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
            <div className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative bg-inherit flex gap-2 justify-start items-center">
              <picture>
                <img
                  className="rounded-full"
                  src={src}
                  width={80}
                  height={80}
                  alt="avatar"
                  onError={handleError}
                />
              </picture>
              <div>
                <h4 className="text-xl font-medium text-black-500 mb-2">
                  <span className="block text-2xl">{name}</span>
                  <span className="block font-normal text-blue-500 text-base">
                    @{username}
                  </span>
                </h4>
                <p className="text-base font-normal flex gap-2 items-center">
                  {iconJoin} {textJoin}
                </p>
              </div>
            </div>
          </div>
          <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
            <ListArr arrRender={arrRender} col={col} />
          </div>
        </div>
      </div>
    </div>
  );
}
