import React from "react";
import LandingWithHeaderAndFooter from "../Landing/LandingWithHeaderAndFooter";
import { BreadCrumb } from "./BreadCrumb";
interface MainBlog {
  children: React.ReactNode;
}
export default function MainBlog({ children }: MainBlog) {
  return (
    <LandingWithHeaderAndFooter>
      <BreadCrumb />
      <div className="max-w-[1170px] mx-auto ">{children}</div>
    </LandingWithHeaderAndFooter>
  );
}
