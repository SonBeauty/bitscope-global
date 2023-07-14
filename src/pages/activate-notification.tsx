import PageContainer from "@/container/PageContainer";
import { logout } from "@/store/users";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
interface ActivateNotificationProps {
  status: any;
  isLoading: boolean;
}
export default function ActivateNotification({
  status,
  isLoading,
}: ActivateNotificationProps) {

  const dispatch = useDispatch();
  if (isLoading) {
    return (
      <PageContainer>
        <div className="relative w-full h-screen bg-[url('/image/signup-bg.jpg')] z-0 pt-32">
          <div className="flex flex-col items-center justify-center max-w-2xl gap-8 p-8 pt-24 m-auto md:pt-8 z-10">
            <div
              role="status"
              className="max-w-sm animate-pulse h-creen w-screen"
            >
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px]" />
              <h1 className="text-xl font-extrabold text-primary-dark-600">
                Please Wait
              </h1>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
  return (
    <div className="h-full min-h-screen w-full flex bg-white overflow-hidden relative px-10">
      <div className="md:basis-3/5 lg:block hidden relative max-h-screen">
        <Image
          height={234}
          width={428}
          alt="Background"
          src="/image/Frame.svg"
          className="w-[110%] h-[90%] mt-16"
        />
        <div className="max-w-[520px] absolute top-[-1%] left-[25%]">
          <Link href="/">
            <Image
              height={80}
              width={250}
              alt="Logo"
              src="/image/1200X628-SVG-NONBACKGROUND.png"
              className="mb-12"
            />
          </Link>
        </div>
      </div>
      <div className="md:flex-1 md:min-w-[630px] md:basis-2/5 md:bg-white w-full">
        <Link href="/" className="flex items-center justify-center md:hidden">
          <Image
            height={10}
            width={250}
            alt="Logo"
            src="/image/1200X628-SVG-NONBACKGROUND.png"
            className=""
          />
        </Link>
        <div className="h-full flex justify-center items-center pb-20 md:px-[118px] px-1">
          <div>
            <div className="text-center 2xl:mb-10 mb-4 ">
              <h4 className="font-medium text-2xl leading-10 text-black-500">
                {status?.status === 409 && "Your account has been verify"}
                {((status !== "ok" && status?.status !== 409) || !status) &&
                  "Account activation failed, please contact Admin"}
              </h4>
              <div className="text-slate-500 text-base mt-1">
                <h4 className="font-medium text-2xl leading-10 text-black-500">
                  {status === "ok" &&
                    "Your account has been successfully activated!"}
                </h4>
                <br />
                {status === "ok" &&
                  "Welcome to BitScope, an interesting social listening and market analysis service. Please login below to experience our product immediately."}
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="font-Inter font-normal text-base text-slate-500 text-center px-2 bg-slate-100 rounded py-3 my-4">
                If registration fails, please contact{" "}
                <a
                  href="mailto:Contact@bitscope.global"
                  target="_blank"
                  className="underline text-[#005AE2] hover:text-blue-900"
                >
                  Contact@bitscope.global
                </a>
              </div>

              <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 mt-5 uppercase text-sm">
                Back to{" "}
                <Link
                  onClick={() => dispatch(logout())}
                  href="/login"
                  className="text-slate-900 font-medium hover:underline"
                >
                  Login
                </Link>
              </div>
              <div className="text-xs font-normal text-slate-500 z-[999] pt-10 text-center">
                Copyright 2023, BitScope All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        height={40}
        width={300}
        alt="Logo"
        src="/image/Footer.svg"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}
