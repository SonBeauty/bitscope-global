import HomeBredCurbs from "@/components/PageComponents/Dashboard/HomeBredCurbs";
import LayoutDashBoard from "@/components/layout/Layout";
import ImageBlock1 from "@/components/partials/widget/block/image-block-2";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1";
import RadarChart from "@/components/partials/widget/chart/radar-chart";
import RadialsChart from "@/components/partials/widget/chart/radials";
import RevenueBarChart from "@/components/partials/widget/chart/revenue-bar-chart";
import MostSales from "@/components/partials/widget/most-sales";
import Card from "@/components/ui/Card";
import { useState } from "react";
const Dashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <LayoutDashBoard>
      <div className="">
        <HomeBredCurbs title="Dashboard" />
        <div className="grid grid-cols-12 gap-5 mb-5">
          <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
            <ImageBlock1 />
          </div>
          <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
            <Card bodyClass="p-4">
              <div className="grid md:grid-cols-3 col-span-1 gap-4">
                <GroupChart1 />
              </div>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-8 col-span-12">
            <Card>
              <div className="legend-ring">
                <RevenueBarChart />
              </div>
            </Card>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <Card className="h-full">
              <RadialsChart />
            </Card>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <Card
              title="Most Sales"
              className="h-full"
              headerslot={
                <div className="border border-slate-200 rounded p-1 flex items-center">
                  <span
                    className={` flex-1 text-sm font-normal px-3 py-1 transition-all duration-150 rounded cursor-pointer
                ${filterMap === "global" ? "bg-slate-900 text-white  " : ""}
                `}
                    onClick={() => setFilterMap("global")}
                  >
                    Global
                  </span>
                  <span
                    className={` flex-1 text-sm font-normal px-3 py-1 rounded transition-all duration-150 cursor-pointer
                  ${filterMap === "usa" ? "bg-slate-900 text-white  " : ""}
              `}
                    onClick={() => setFilterMap("usa")}
                  >
                    USA
                  </span>
                </div>
              }
            >
              <MostSales filterMap={filterMap} />
            </Card>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <Card>
              <RadarChart />
              <div className="bg-slate-50  rounded p-4 mt-8 flex justify-between flex-wrap">
                <div className="space-y-1">
                  <h4 className="text-slate-600  text-xs font-normal">
                    Invested amount
                  </h4>
                  <div className="text-sm font-medium text-slate-900 ">
                    $8264.35
                  </div>
                  <div className="text-slate-500  text-xs font-normal">
                    +0.001.23 (0.2%)
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-slate-600  text-xs font-normal">
                    Invested amount
                  </h4>
                  <div className="text-sm font-medium text-slate-900 ">
                    $8264.35
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-slate-600  text-xs font-normal">
                    Invested amount
                  </h4>
                  <div className="text-sm font-medium text-slate-900 ">
                    $8264.35
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </LayoutDashBoard>
  );
};
export default Dashboard;
