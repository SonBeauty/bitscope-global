import { convertDate } from "@/services/Authentication";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import React, { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

interface itemChangeProps {
  name: string;
  tag?: string;
}

interface ItemPorps {
  _id: string;
  name: string;
  createdAt: string;
  change: itemChangeProps[];
}

interface DiclosureComponentProps {
  item: ItemPorps;
  isEdit?: boolean;
  handleClick?: any;
  openDefault?: boolean;
}
export default function DiclosureComponent({
  item,
  isEdit = false,
  handleClick,
  openDefault = false,
}: DiclosureComponentProps) {
  const [click, setClick] = useState<boolean>(false);

  return (
    <Disclosure defaultOpen={openDefault ? openDefault : click}>
      <Disclosure.Button className="bg-slate-50  rounded-t-md flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600  px-8 py-4">
        <span>
          {item?.name}
          <span className="font-semibold text-xs text-slate-400">
            - Published on {convertDate(item?.createdAt)}
          </span>
        </span>

        <div className="flex gap-2">
          {isEdit && (
            <>
              <AiTwotoneEdit
                className="w-6 h-6"
                onClick={() => handleClick("Edit", item._id)}
              />
              <MdDelete
                className="w-6 h-6"
                onClick={() => handleClick("Delete", item._id)}
              />
            </>
          )}
          <span
            onClick={() => setClick(!click)}
            className={` ${
              click && "rotate-180 transform"
            }  transition-all duration-150 text-xl`}
          >
            <HiChevronDown className="w-6 h-6" />
          </span>
        </div>
      </Disclosure.Button>
      <Disclosure.Panel>
        <div className="text-sm text-slate-600 font-normal bg-white   rounded-b-md border border-slate-100 border-t-0">
          <div className="px-8 py-4">
            {item?.change?.map((data: any, j: number) => (
              <div key={j}>
                <div className="flex space-x-3 items-center mt-2 text-slate-600  text-sm">
                  <span className="h-2 w-2 bg-primary-500 rounded-full"></span>
                  <span>{data?.name}</span>

                  <span
                    className={clsx("px-2 rounded-full text-xs capitalize", {
                      "bg-indigo-100 text-indigo-500": data?.tag === "added",
                      "bg-yellow-100 text-yellow-500": data?.tag === "updated",
                      "bg-red-100 text-red-500": data?.tag === "fixed",
                    })}
                  >
                    {data?.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
