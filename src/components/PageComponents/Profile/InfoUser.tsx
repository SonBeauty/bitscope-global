import Card from "@/components/ui/Card";
import { arrSocial, userOverview } from "@/constant/components/Profile";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Social from "../Login/Social";

interface InfoUserProps {
  email: string;
  phone?: string;
}
export default function InfoUser({ email, phone }: InfoUserProps) {
  return (
    <div className="grid grid-cols-12 gap-6 p-4">
      <div className="lg:col-span-4 col-span-12">
        <Card title="Info" className="">
          <ul className="list space-y-8">
            <li className="flex space-x-3 items-center">
              <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                <div className="p-3 bg-[#005AE2] rounded-full">
                  <Image
                    src="/image/Mails.svg"
                    alt="mail"
                    width={24}
                    height={24}
                    className=""
                  />
                </div>
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
            {!phone && (
              <li className="flex space-x-3 items-center">
                <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                  <div className="p-3 bg-[#005AE2] rounded-full">
                    <Image
                      src="/image/Calls.svg"
                      alt="phone"
                      width={24}
                      height={24}
                      className=""
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                    PHONE
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className="text-base text-slate-600 dark:text-slate-50"
                  >
                    {phone || "0000000000"}
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
                  <Card bodyClass="p-[4px]" key={index}>
                    <div className="space-y-6 py-6 px-4">
                      <div className="flex space-x-3 items-center">
                        <div
                          className={`${
                            `bg-[${item.bg}]` || "bg-slate-800"
                          } "flex-none h-9 w-9 rounded-full dark:bg-slate-700 text-slate-300 flex flex-col items-center justify-center text-lg"`}
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
