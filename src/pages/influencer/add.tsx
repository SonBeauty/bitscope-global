import AuthenInput from "@/components/PageComponents/Authentication/AuthenInput";
import LayoutDashBoard from "@/components/layout/Layout";
import AuthenticationSVG from "@/components/svg/Authentication";
import ClockSVG from "@/components/svg/ClockSVG";
import LoadingSVG from "@/components/svg/LoadingSVG";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addInfluencer } from "../api/influencer/add";
import { schema } from "@/components/PageComponents/Influencer/schema";

export default function AddInfluencer() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const { mutate, isLoading } = useMutation(addInfluencer, {
    onSuccess: () => {
      toast.success("Add Influencer Success!");
      router.push("/dashboard");
    },
    onError: () => {
      toast.error("Add Influencer Failed. Please try again!");
    },
  });
  const onSubmit = (data: any) => {
    mutate(data.username);
  };
  return (
    <LayoutDashBoard className="bg-white h-[88vh] md:h-[85px] relative overflow-hidden">
      <div className="grid grid-cols-1 px-2 md:flex items-center justify-center h-[81vh] bg-[#f2f9ff] rounded-md shadow-md">
        <div className="relative max-w-[687px] max-h-[860px] md:pt-[105px] md:pb-[165px]">
          <AuthenticationSVG
            className="bg-[#f2f9ff] md:w-[720px] md:h-[450px] w-[340px] h-[340px] md:-ml-16 md:mt-9 mt-2"
            classNameRect="w-[687px] h-[450px] "
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="absolute -bottom-[13%] md:bottom-[27%] max-w-[687px] left-0 h-[247px] mx-auto right-0"
          >
            <div
              className={`font-Inter text-white rounded-tl-md rounded-tr-md bg-[#0046B0] text-center pt-[16px] pb-[16px] text-xl font-bold leading-5`}
            >
              Please enter influencer username
            </div>
            <div
              className={`bg-[#D3ECFF] pt-[25px] shadow-[0_1px_2px_rgba(0,0,0,0.25)] px-3 md:px-[34px] pb-[25px] rounded-bl-md rounded-br-md flex flex-col gap-5`}
            >
              <div className="flex items-center gap-2 justify-center relative">
                <AuthenInput
                  icon={"TW"}
                  setIcon={null}
                  placeholder="@BitscopeAI"
                  error={errors.username}
                  register={register}
                  id="username"
                  className=""
                  disable={isLoading}
                  dropdown={false}
                />
              </div>
              <div className={`text-center`}>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="text-[#1C1C1C] bg-[#FFB800] hover:bg-[#cc9300] duration-500 ease-in-out rounded-md px-[18px] py-[13px] text-center inline-flex items-center "
                >
                  {isLoading && <LoadingSVG />}
                  <span className="text-inherit font-semibold text-base leading-5 font-Inter">
                    {isLoading ? "Loading..." : "Submit"}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`absolute hover:bg-[#017a4c] duration-500 ease-in-out flex gap-[9.23px] items-center justify-center top-[15px] left-[15px] md:top-[45px] md:left-[45px] py-[14.58px] px-[16.58px] text-white rounded-md bg-[#01985F] cursor-pointer shadow-[0_3.25146px_3.25146px_rgba(0,0,0,0.25)]`}
        onClick={() => router.push("/influencer/history")}
      >
        <ClockSVG className="w-[15.83px] h-[15.83px]" />
        <span className="text-white font-semibold text-[13.01px] leading-[16.26px] font-Inter">
          View Influencer
        </span>
      </div>
    </LayoutDashBoard>
  );
}