import React from "react";
interface TitleDescribeLayout {
  title: React.ReactNode;
  describe: string | React.ReactNode;
  aos?: string;
}
export default function TitleDescribeLayout({
  title,
  describe,
  aos = "fade-up",
}: TitleDescribeLayout) {
  return (
    <div
      className="section_title"
      data-aos={aos}
      data-aos-duration="1000"
      data-aos-delay="50"
    >
      <h2>{title}</h2>
      <p className="py-4">{describe}</p>
    </div>
  );
}