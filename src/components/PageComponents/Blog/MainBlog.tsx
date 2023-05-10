import React from "react";
import LandingWithHeaderAndFooter from "../Landing/LandingWithHeaderAndFooter";
import { BreadCrumb } from "./BreadCrumb";
import LatestStory from "./LatestStory";
import PageContainer from "@/container/PageContainer";
interface MainBlog {
  children: React.ReactNode;
  lastest?: boolean;
}
export default function MainBlog({ children, lastest = true }: MainBlog) {
  return (
    <PageContainer>
      <LandingWithHeaderAndFooter>
        <BreadCrumb />
        <div className="max-w-[1170px] mx-auto ">
          {children}
          {lastest && <LatestStory />}
        </div>
      </LandingWithHeaderAndFooter>
    </PageContainer>
  );
}