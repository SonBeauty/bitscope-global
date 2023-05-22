import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
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
    image: <FaTelegramPlane className="w-10 h-10 p-[6px] text-blue-500" />,
    bg: "0",
  },
  {
    image: <GiWallet className="w-10 h-10 p-[6px] text-orange-400" />,
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
                className={`inline-flex ${item.bg} ${classItem} text-2xl flex-col items-center justify-center rounded-full`}
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
              className={`inline-flex h-10 w-10 ${item.bg} ${classItem} text-2xl flex-col items-center justify-center rounded-full`}
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