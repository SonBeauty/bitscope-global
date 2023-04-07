import NewFeed from "@/components/NewFeed";
import { NewFeedProps } from "@/pages/forgot-pass/interface";
import { Footer } from "flowbite-react";
import Image from "next/image";

interface LayoutFormProps {
  handleSubmit: any;
  onSubmit: object;
  newsFeed: boolean;
  content: string;
  children: React.ReactNode;
  customNews?: React.ReactNode;
  className?: string;
  news?: NewFeedProps[];
}
export default function LayoutForm({
  handleSubmit,
  onSubmit,
  newsFeed,
  content,
  children,
  customNews,
  className,
  news,
}: LayoutFormProps) {
  return (
    <div
      className={`${className} flex h-[100%] bg-white max-w-4xl m-auto sm:flex-row flex-col items-start shadow-lg`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center flex-1 gap-2 p-8"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            alt="logo"
            width={114}
            height={114}
            src="/image/400X400-SVG-NONBACKGROUND.png"
          />
          <h1 className="text-lg font-bold">Beat of the Future</h1>
          {typeof content === "string" && (
            <span className="text-sm">{content}</span>
          )}
          <Footer.Divider />
        </div>
        {children}
      </form>
      <div className="flex-1 p-4">
        <div className="hidden overflow-hidden sm:flex">
          <Image alt="bgc" width={80} height={80} src="/image/shade-4.png" />
          <Image alt="bgc" width={80} height={80} src="/image/shade-3.png" />
          <Image alt="bgc" width={80} height={80} src="/image/shade-2.png" />
          <Image alt="bgc" width={80} height={80} src="/image/shade-1.png" />
        </div>
        <Image alt="avt" width={114} height={114} src="/image/400X200.png" />
        {newsFeed ? <NewFeed news={news} className="mt-4" /> : customNews}
      </div>
    </div>
  );
}
