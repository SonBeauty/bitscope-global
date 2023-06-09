import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const arrSocial = [
  {
    image: <AiOutlineTwitter className="w-10 h-10 p-[6px] text-[#4095FB]" />,
    bg: "",
  },
  {
    image: <FaDiscord className="w-10 h-10 p-[6px] text-blue-500" />,
    bg: "",
  },
  {
    image: <FcGoogle className="w-10 h-10 p-[6px] text-blue-500" />,
    bg: "0",
  },
  {
    image: (
      <Image
        src="/image/metamask-icon.png"
        width={40}
        height={40}
        alt="image"
        className="w-10 h-10 p-[6px]"
      />
    ),
    bg: "",
  },
];
interface SocialProps {
  className?: string;
  classItem?: string;
  arrRender?: any;
}
const Social = ({ className, classItem, arrRender }: SocialProps) => {
  if (arrRender) {
    return (
      <ul className={`flex ${className}`}>
        {arrRender.map((item: any, index: number) => {
          return (
            <li className="flex-1" key={index}>
              <a
                href="#"
                className={`inline-flex ${item.bg} ${classItem} text-2xl flex-col border-2 border-slate-300 items-center justify-center rounded-full`}
              >
                {item.image}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <ul className={`flex ${className}`}>
      {arrSocial.map((item, index) => {
        return (
          <li className="flex-1" key={index}>
            <a
              href="#"
              className={`inline-flex h-10 w-10 ${item.bg} ${classItem}  border-2 border-slate-300 text-2xl flex-col items-center justify-center rounded-full`}
            >
              {item.image}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Social;
