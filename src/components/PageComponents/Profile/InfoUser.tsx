import Card from "@/components/ui/Card";
import {
  ArrowLongRightIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import Social from "../Login/Social";
const arrSocial = [
  {
    image: <AiOutlineTwitter className="w-10 h-10 p-1 text-[#4095FB]" />,
    bg: "",
  },
  {
    image: <FaDiscord className="w-8 h-8 p-[6px] text-white " />,
    bg: "bg-[#737BE6]",
  },
  {
    image: <FaTelegramPlane className="w-10 h-10 p-[6px] text-slate-500" />,
    bg: "",
  },
  {
    image: <GiWallet className="w-10 h-10 p-[6px] text-slate-500" />,
    bg: "",
  },
];

interface InfoUserProps {
  email: string;
  phone?: string;
}
const userOverview = [
  {
    title: "Profile Settings",
    icon: <UserIcon className="h-6 w-6 text-white" />,
    des: "Set up your profile, add your profile photo, and more",
    href: "profile/edit",
    bg: "#005AE2",
  },
  {
    title: "Company Settings",
    icon: <ComputerDesktopIcon className="h-6 w-6 text-white" />,
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
export default function InfoUser({ email, phone }: InfoUserProps) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="lg:col-span-4 col-span-12">
        <Card title="Info">
          <ul className="list space-y-8">
            <li className="flex space-x-3 items-center">
              <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                <EnvelopeIcon className="h-6 w-6 text-gray-500" />
              </div>
              <div className="flex-1">
                <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                  EMAIL
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-base text-slate-600 dark:text-slate-50"
                >
                  {email}
                </a>
              </div>
            </li>
            {phone && (
              <li className="flex space-x-3 items-center">
                <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                  <PhoneIcon className="h-6 w-6 text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                    PHONE
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className="text-base text-slate-600 dark:text-slate-50"
                  >
                    {phone}
                  </a>
                </div>
              </li>
            )}
            <li className="flex space-x-3 gap-4 justify-around md:justify-start">
              <Social
                classItem=""
                arrRender={arrSocial}
                className="flex gap-3 items-center"
              />
            </li>
          </ul>
        </Card>
      </div>
      <div className="lg:col-span-8 col-span-12">
        <Card title="User Overview">
          <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {userOverview.map((item, index) => {
                return (
                  <Card bodyClass="p-0" key={index}>
                    <div className="space-y-6 py-6 px-4">
                      <div className="flex space-x-3 items-center">
                        <div
                          className={`${
                            `bg-[${item.bg}]` || "bg-slate-800"
                          } "flex-none h-8 w-8 rounded-full dark:bg-slate-700 text-slate-300 flex flex-col items-center justify-center text-lg"`}
                        >
                          {item.icon}
                        </div>
                        <div className="text-base text-slate-900 dark:text-white font-medium">
                          {item.title}
                        </div>
                      </div>
                      <div className="text-slate-600 dark:text-slate-300 text-sm">
                        {item.des}
                      </div>
                      <span className="inline-flex items-center space-x-3 text-sm capitalize font-medium text-slate-600 dark:text-slate-300">
                        <Link href={item.href}>Change Settings</Link>{" "}
                        <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}