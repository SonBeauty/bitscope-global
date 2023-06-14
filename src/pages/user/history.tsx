import LayoutDashBoard from "@/components/layout/Layout";
import AuthenticationSVG from "@/components/svg/Authentication";

export default function History() {
  return (
    <LayoutDashBoard className="bg-white h-[80vh]">
      <div className="relative h-[80vh] flex items-center md:py-8 justify-bottom w-full bg-[#f2f9ff] rounded-2xl shadow-md">
        <div className="relative h-full w-full flex flex-col items-center justify-center p-1">
          <AuthenticationSVG
            className="bg-[#f2f9ff] w-[330px] h-[400px] md:w-[630px] md:w-485px md:mr-24"
            classNameRect="w-[685px] h-[485px]"
          />
          <span className="text-xl font-semibold text-slate-500 text-center block">
            No access history
          </span>
        </div>
      </div>
    </LayoutDashBoard>
  );
}
