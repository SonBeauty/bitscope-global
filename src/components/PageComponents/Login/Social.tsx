import React from "react";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
const arrSocial = [
  {
    image: (
      <AiOutlineTwitter className="w-10 h-10 p-1 text-white bg-[#4095FB] rounded-full" />
    ),
    bg: "bg-[#1C9CEB]",
  },
  {
    image: (
      <FaDiscord className="w-10 h-10 p-1 text-white bg-purple-600 rounded-full" />
    ),
    bg: "bg-white",
  },
  {
    image: (
      <FaTelegramPlane className="w-10 h-10 p-1 text-white bg-blue-500 rounded-full" />
    ),
    bg: "bg-slate-500",
  },
  {
    image: (
      <GiWallet className="w-10 h-10 p-1 text-white bg-orange-400 rounded-full" />
    ),
    bg: "bg-slate-500",
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
                className={`inline-flex ${item.bg} ${classItem} text-white text-2xl flex-col items-center justify-center rounded-full`}
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
              className={`inline-flex h-10 w-10 ${item.bg} ${classItem} border-2 border-slate-300 text-white text-2xl flex-col items-center justify-center rounded-full`}
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
