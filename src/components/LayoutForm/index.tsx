import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Social from "../PageComponents/Login/Social";
import LoadingSVG from "../svg/LoadingSVG";
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
            <h4 className="font-medium text-2xl leading-10 text-black-500">
              {page}
            </h4>
            <div className="text-slate-500 text-base mt-1">{content}</div>
          </div>
          <div className="flex flex-col w-full gap-2">
            {children}
            <Button color="dark" type="submit" className="w-full py-1 mt-1">
              {isLoading && <LoadingSVG />}
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
  );
}
