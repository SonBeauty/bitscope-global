import {
  ArrowTrendingUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  GiftIcon,
  GlobeAltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
const SlectRegister = [
  {
    name: "Brand monitoring",
    des: "Find out what your audience thinks of your brand and join in",
    image: <GiftIcon />,
  },
  {
    name: "Influencers search",
    des: "Find relevant influencers who use your brand name, competirors name or any other keywords in their content",
    image: <HeartIcon />,
  },
  {
    name: "Competitive analysis",
    des: "Track your competitors activity",
    image: <ArrowTrendingUpIcon />,
  },
  {
    name: "Project Analysis",
    des: "Obtain an overview of the community members involved in a project",
    image: <GlobeAltIcon />,
  },
  {
    name: "Investment Trends",
    des: "Get reports on investment trends of the majority, verified investors",
    image: <GlobeAltIcon />,
  },
];
interface SlectProps {
  value: string;
  setValues: (value: string) => void;
  errors?: any;
}
export default function Select({ value, setValues, errors }: SlectProps) {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = (item: string) => {
    setValues(item);
    setShow(!show);
  };
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full">
        <div className="w-full">
          <div className="relative flex flex-col items-center">
            <div className="w-full" onClick={() => setShow(!show)}>
              <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
                <div className="flex flex-wrap flex-auto" />
                <input
                  placeholder="Choose the most suitable target"
                  value={value}
                  disabled={true}
                  className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"
                />
                <div className="flex items-center w-8 py-1 pl-2 pr-1 text-gray-300 border-l border-gray-200">
                  <div className="w-6 h-6 text-gray-600 outline-none cursor-pointer">
                    {show ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </div>
                </div>
              </div>
            </div>
            {show && (
              <div className="absolute z-40 w-full overflow-y-auto bg-white rounded shadow top-[100%] lef-0 max-h-[300px]">
                <div className="flex flex-col w-full">
                  {SlectRegister.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        onClick={(e) => handleClick(item.name)}
                        className="w-full border-b border-gray-100 rounded-t cursor-pointer hover:bg-primary-light-50"
                      >
                        <div className="relative flex items-center w-full p-2 pl-2 border-l-2 border-transparent hover:border-primary-light-100">
                          <div className="flex flex-col items-center w-6">
                            <div className="relative flex items-center justify-center w-6 h-4 m-2 mt-1 mr-2 rounded-full ">
                              {item.image}
                            </div>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <div className="mx-2 mt-1">
                              {item.name}
                              <span className="block mt-1 text-xs font-normal text-gray-500 normal-case ">
                                {item.des}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <span className="p-1 pl-1 text-red-500">{errors?.message}</span>
        </div>
      </div>
    </div>
  );
}
