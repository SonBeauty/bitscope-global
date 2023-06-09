import {
  ComputerDesktopIcon,
  CreditCardIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaGoogle } from "react-icons/fa";

export const arrSocial = [
  {
    image: <AiOutlineTwitter className="w-10 h-10 p-[6px] text-[#4095FB]" />,
    bg: "",
  },
  {
    image: <FaDiscord className="w-10 h-10 p-[6px] text-[#7289DA]" />,
    bg: "",
  },
  {
    image: <FaGoogle className="w-10 h-10 p-[6px] text-slate-500" />,
    bg: "bg-slate-300",
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
    bg: "bg-slate-300",
  },
];
export const userOverview = [
  {
    title: "Profile Settings",
    icon: (
      <Image
        src="/image/userProfile.svg"
        width={24}
        height={24}
        alt="image"
        className="text-white"
      />
    ),
    des: "Set up your profile, add your profile photo, and more",
    href: "user/edit",
    bg: "#005AE2",
  },
  {
    title: "Company Settings",
    icon: (
      <Image
        src="/image/Buildings.svg"
        width={24}
        height={24}
        alt="image"
        className="text-white"
      />
    ),
    des: "Set up your company profile, add your company logo, and more",
    href: "#",
    bg: "#005AE2",
  },
  {
    title: "Payment Settings",
    icon: <CreditCardIcon className="h-6 w-6 text-white" />,
    des: "Connect your bank account to your company profile, and more",
    href: "#",
    bg: "#005AE2",
  },
];
