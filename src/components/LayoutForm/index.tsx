import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Social from "../PageComponents/Login/Social";
import PageContainer from "@/container/PageContainer";
interface LayoutFormProps {
  handleSubmit: any;
  onSubmit: object;
  children: React.ReactNode;
  className?: string;
  page: string;
  content: string;
  button: string;
  childrenTwo: React.ReactNode;
  social?: boolean;
  isLoading?: boolean;
}
export default function LayoutForm({
  handleSubmit,
  onSubmit,
  children,
  className,
  page,
  content,
  button,
  childrenTwo,
  social = true,
  isLoading,
}: LayoutFormProps) {
  return (
    <PageContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full min-h-screen w-full flex bg-white overflow-hidden relative px-10"
      >
        <div className="md:basis-3/5 lg:block hidden relative">
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
          <div className="md:py-28 pb-14 md:px-[118px] px-1">
            <div className="text-center 2xl:mb-10 mb-4 ">
              <h4 className="font-medium text-2xl leading-10 text-black-500">{page}</h4>
              <div className="text-slate-500 text-base mt-1">{content}</div>
            </div>
            <div className="flex flex-col w-full gap-2">
              {children}
              <Button color="dark" type="submit" className="w-full py-1 mt-1">
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
                <span className="text-white">
                  {isLoading ? "Please Wait" : button}
                </span>
              </Button>
              {social && (
                <>
                  <div className="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                    <div className="absolute inline-block bg-white left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 font-normal">
                      Or continue with
                    </div>
                  </div>
                  <div className="max-w-[242px] mx-auto mt-8 w-full">
                    <Social />
                  </div>
                </>
              )}
              {childrenTwo}
              <div className="text-xs font-normal text-slate-500 z-[999] pt-10 text-center">
                Copyright 2021, ZenUI All Rights Reserved.
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
      </form>
    </PageContainer>
  );
}
