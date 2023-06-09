import AuthenInput from "@/components/PageComponents/Authentication/AuthenInput";
import { schema } from "@/components/PageComponents/Authentication/schema";
import LayoutDashBoard from "@/components/layout/Layout";
import LoadingSVG from "@/components/svg/LoadingSVG";
import { getUserAuthen } from "@/pages/api/authentication/AuthenTwiterAndTele";
import {
  combineLinkAndAddress,
  inputTeleOrTwitter,
} from "@/services/Authentication";
import { RootState } from "@/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function Authentication() {
  const user = useSelector((state: RootState) => state.users.user);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const { mutate, isLoading } = useMutation(getUserAuthen, {
    onSuccess: (data) => {
      toast.success("Authentication Success!");
      router.push(`/authentication/${data._id}`);
    },
    onError: () => {
      toast.error("Authentication Failed. Please try again!");
    },
  });
  const onSubmit = (data: any) => {
    if (data.twitter.length === 0 && data.telegram.length === 0) {
      return toast.error("* Require Twitter or Telegram");
    }
    if (inputTeleOrTwitter(data)) {
      mutate({
        telegram: combineLinkAndAddress("https://t.me", data.telegram),
        twitter: combineLinkAndAddress("https://twitter.com", data.twitter),
      });
    } else {
      return toast.error(
        "* Error Authentication. Please check again. Ex:https://twitter.com/BitscopeAI  @BitscopeAI"
      );
    }
  };
  return (
    <LayoutDashBoard className="bg-white">
      <div className="w-full h-full bg-white flex items-center justify-center rounded-3xl">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center sm:rounded-3xl rounded-none">
          <Image
            width={336}
            height={473}
            src="/image/authentication.svg"
            alt="Authen"
            className="lg:basis-1/3 xl:basis-1/2 w-full h-full sm:mt-0 bg-white p-4"
          />
          <div className="w-full lg:basis-2/3 xl:basis-1/2 bg-[#D3ECFF] sm:px-4 sm:py-60 py-4 rounded-3xl ">
            <div className="">
              <h3 className="text-black-500 text-center">
                Hello {user?.name} - Welcome to Authenticaiton
              </h3>
              <p className="py-4 text-black-500 text-center">
                We offer a comprehensive view of members who follow or join the
                requested social platforms. The results are approximate, and
                BitScope is optimizing the algorithm to provide the most
                accurate results.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="py-6 flex flex-col gap-3 items-end px-2"
            >
              <AuthenInput
                social="Twitter Link"
                iconSocial={
                  <BsTwitter className="text-center -ml-0.5 -mt-0.5 text-[#349FDE]" />
                }
                placeholder="@BitScopeAI"
                error={errors.twitter}
                register={register}
                id="twitter"
                className="py-4"
              />
              <AuthenInput
                iconSocial={
                  <FaTelegramPlane className="text-center -ml-[3px] -mt-[2px] text-[#349FDE]" />
                }
                social="Telegram Link"
                placeholder="https://t.me/..."
                error={errors.telegram}
                register={register}
                id="telegram"
              />
              <div className="mr-2">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center"
                >
                  {isLoading && <LoadingSVG />}
                  {isLoading ? "Loading..." : "Authenticate"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutDashBoard>
  );
}
