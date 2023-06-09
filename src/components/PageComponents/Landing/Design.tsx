import Image from "next/image";
import React from "react";
import TitleSubLayout from "./TitleSubLayout";
export default function Design() {
  return (
    <section className="modern_ui_section mt-6">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="col-lg-5 mt-12">
            <div className="ui_text">
              <TitleSubLayout
                title="BITbase"
                des="Blockchain's Social Data Center."
                sub="The heart of the BitScope, the beginning and the end of data operations. This contains data about: Social Account Authentication, Social Listening Reports or Behavior Patterns. Over time, social data will become increasingly valuable."
              />
              <ul className="design_block">
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Data Stream</h4>
                  <p className="text-">
                    Input data is processed with 7 steps, raw data is processed
                    into data packets and stored at BITbase.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Service classification</h4>
                  <p className="text-">
                    BitScope introduces an optimal service group for three
                    groups of customers: Blockchain companies/projects,
                    individual investors and Expert customers.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Data Restructuring</h4>
                  <p className="text-">
                    When the services are used, the data goes back to the
                    BITbase and is re-analyzed to make it pure.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="" data-aos="fade-in" data-aos-duration="1500">
              <div className="left_img">
                <Image
                  width={650}
                  height={775}
                  alt="app"
                  src="/image/Bit_Tracking.svg"
                  className="moving_position_animatin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
