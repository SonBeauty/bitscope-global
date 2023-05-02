import LayoutDashBoard from "@/components/layout/Layout";

const AlertPage = () => {
  return (
    <LayoutDashBoard>
      <div className="md:mb-6 mb-4 flex space-x-3 rtl:space-x-reverse">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
          Spying Alerts
        </h4>
      </div>
    </LayoutDashBoard>
  );
};

export default AlertPage;
