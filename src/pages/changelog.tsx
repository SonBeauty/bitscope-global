"use client";
import DiclosureComponent from "@/components/PageComponents/Changelogs/DiclosureComponent";
import LayoutDashBoard from "@/components/layout/Layout";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { convertDate } from "@/services/Authentication";
import { useQuery } from "@tanstack/react-query";
import { listChangelogs } from "./api/changelogs";

const ChangelogPage = () => {
  const { data } = useQuery(["changelogs"], listChangelogs);
  return (
    <LayoutDashBoard>
      <div className="md:mb-6 mb-4 flex space-x-3 rtl:space-x-reverse">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
          changelog
        </h4>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-8 col-span-12">
          <Card title="Version's">
            <div>
              <Badge label="new " className="bg-primary-500  text-white" />
            </div>
            <div className="mt-6 space-y-5">
              {data?.map((item: any, i: number) => (
                <div key={i} className="mb-3">
                  <DiclosureComponent item={item} />
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <Card title="CHANGELOG">
            <h5 className="text-xs font-medium">VERSION HISTORY</h5>
            <ul className="space-y-3 mt-6 divide-y divide-slate-100">
              {data?.map((item: any, i: number) => (
                <li
                  className="flex justify-between items-center text-xs text-slate-600 dark:text-white  pt-3"
                  key={i}
                >
                  <span className="text-inherit">{item.name} </span>
                  <span className="text-inherit">
                    {convertDate(item.createdAt)}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="py-7 visible"></div>
      </div>
    </LayoutDashBoard>
  );
};
export default ChangelogPage;
