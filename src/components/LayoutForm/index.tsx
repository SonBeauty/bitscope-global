import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Social from "../PageComponents/Login/Social";

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
}: LayoutFormProps) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full min-h-screen w-full flex bg-white overflow-x-hidden"
    >
      <div className="md:flex-1 md:basis-1/2 md:bg-slate-100 md:block hidden relative">
        <Image
          height={980}
          width={1024}
          alt="Background"
          src="/image/ils1.svg"
          className="w-full h-full"
        />
        <div className="max-w-[520px] absolute top-[-1%] left-[10%]">
          <Link href="/">
            <Image
              height={80}
              width={250}
              alt="Logo"
              src="/image/1200X628-SVG-NONBACKGROUND.png"
              className="mb-12"
            />
          </Link>
          <h4 className="text-[40px] leading-[48px] text-slate-600 dark:text-slate-400">
            Unlock your{" "}
            <span className="text-slate-800 dark:text-slate-400 font-bold">
              World
            </span>
          </h4>
        </div>
      </div>
      <div className="md:flex-1 md:basis-1/2 md:bg-white w-full">
        <Link href="/" className="flex items-center justify-center md:hidden">
          <Image
            height={10}
            width={250}
            alt="Logo"
            src="/image/1200X628-SVG-NONBACKGROUND.png"
            className=""
          />
        </Link>
        <div className="md:py-14 pb-14 md:px-[124px] px-8">
          <div className="text-center 2xl:mb-10 mb-4 ">
            <h4 className="font-medium text-2xl leading-10">{page}</h4>
            <div className="text-slate-500 text-base mt-1">{content}</div>
          </div>
          <div className="flex flex-col w-full gap-2">
            {children}
            <Button color="dark" type="submit" className="w-full py-1 mt-1">
              {button}
            </Button>
            {social && (
              <>
                <div className="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                  <div className="absolute inline-block bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 font-normal">
                    Or continue with
                  </div>
                </div>
                <div className="max-w-[242px] mx-auto mt-8 w-full">
                  <Social />
                </div>
              </>
            )}
            {childrenTwo}
            <div className="text-xs font-normal text-slate-500 dark:text-slate-400 z-[999] pt-10 text-center">
              Copyright 2021, ZenUI All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
