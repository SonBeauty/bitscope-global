import AuthenInput from "@/components/PageComponents/Authentication/AuthenInput";
import { schema } from "@/components/PageComponents/Authentication/schema";
import HomeBredCurbs from "@/components/PageComponents/Dashboard/HomeBredCurbs";
import LayoutDashBoard from "@/components/layout/Layout";
import { getUserTwitter } from "@/pages/api/authentication/twitter";
import { RootState } from "@/store";
import { setTwitter } from "@/store/twitter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function Authentication() {
  const user = useSelector((state: RootState) => state.users.user);
  const router = useRouter();
  const dispath = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const { mutate, isLoading } = useMutation(getUserTwitter, {
    onSuccess: (data) => {
      if (data.data !== null) {
        dispath(setTwitter(data.data));
        toast.success("Authentication Success!");
        setTimeout(() => {
          router.push("/authentication/info");
        }, 500);
      } else {
        toast.error("Authentication Failed!");
      }
    },
    onError: () => {
      toast.error("Authentication Failed!");
    },
  });
  const onSubmit = (data: any) => {
    if (data.twitter.length === 0 && data.telegram.length === 0) {
      return toast.error("* Require Twitter or Telegram");
    } else if (
      data.twitter &&
      (data.twitter.startsWith("https://twitter.com/") ||
        data.twitter.startsWith("@"))
    ) {
      mutate({
        twitterId: data.twitter.split("/").pop().split("@").pop(),
      });
    } else {
      return toast.error(
        "* Error Authentication. Please check again. Ex:https://twitter.com/BitscopeAI  @BitscopeAI"
      );
    }
  };
  return (
    <LayoutDashBoard>
      <HomeBredCurbs title="Authentication" />
      <div className="w-full h-full bg-white flex items-center justify-center rounded-3xl">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center sm:rounded-3xl rounded-none">
          <Image
            width={336}
            height={473}
            src="/image/authentication.svg"
            alt="Authen"
            className="basis-1/2 w-full h-full sm:mt-0 bg-white lg:p-28 p-2 "
          />
          <div className="w-full basis-1/2 bg-[#F2F8FF] sm:px-12 sm:py-28 py-12 rounded-tr-3xl rounded-br-3xl">
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
              className="sm:pr-10 py-6 flex flex-col gap-3 items-end"
            >
              <AuthenInput
                social="Twitter Link"
                iconSocial={
                  <BsTwitter className="text-center -ml-0.5 -mt-0.5 text-[#349FDE]" />
                }
                placeholder="https://twitter.com/BitscopeAI"
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
                placeholder="https://t.me/telegram"
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
                  {isLoading && (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
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