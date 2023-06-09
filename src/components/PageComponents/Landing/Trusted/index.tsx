import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import TitleDescribeLayout from "../TitleDescribeLayout";
import { company_slider } from "@/constant/landing";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function Trusted() {
  return (
    <>
      <section className="row_am trusted_section">
        <div className="container">
          <TitleDescribeLayout
            aos="fade-up"
            title={
              <>
                Trusted by <span>6000+</span> companies
              </>
            }
            describe={
              <>
                Customer insight listening and analysis is considered <br />
                business-critical and is used by industry leaders.
              </>
            }
          />
          <div id="features"></div>
          <div className="company_logos">
            <OwlCarousel
              id="company_slider"
              {...company_slider}
              className="owl-carousel owl-theme owl-loaded owl-drag"
            >
              <div className="item">
                <div className="logo">
                  <Image
                    width={160}
                    height={80}
                    alt="trust"
                    src="/image/coinbase.svg"
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="item">
                <div className="logo">
                  <Image
                    width={160}
                    height={80}
                    alt="trust"
                    src="/image/binance.svg"
                    className="!mt-[10px]"
                  />
                </div>
              </div>
              <div className="item">
                <div className="logo">
                  <Image
                    width={160}
                    height={80}
                    alt="trust"
                    src="/image/coinmarketcap.svg"
                    className="!mt-[14px]"
                  />
                </div>
              </div>
              <div className="item">
                <div className="logo">
                  <Image
                    width={130}
                    height={80}
                    alt="trust"
                    src="/image/glx.png"
                    className=""
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
