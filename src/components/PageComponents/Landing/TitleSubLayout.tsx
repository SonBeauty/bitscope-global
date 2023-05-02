import React from "react";
interface TitleSubLayoutProps {
  title: string;
  sub: string;
  des: string;
}
export default function TitleSubLayout({
  title,
  sub,
  des,
}: TitleSubLayoutProps) {
  return (
    <div
      className="section_title"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="100"
    >
      <h2 className="">
        <span>{title}</span>
      </h2>
      <p className="font-bold text-xl pb-2">{des}</p>
      <p className="pb-3 sm:pb-0">{sub}</p>
    </div>
  );
}