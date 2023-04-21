import Image from "next/image";
import React from "react";
export default function Design() {
  return (
    <section className="row_am modern_ui_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ui_text">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <h2>
                  Beautiful design with <span>modern UI</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and.
                </p>
              </div>
              <ul className="design_block">
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Carefully designed</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    esetting industry lorem Ipsum has.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Seamless Sync</h4>
                  <p>
                    Simply dummy text of the printing and typesetting inustry
                    lorem Ipsum has Lorem dollar summit.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Access Drive</h4>
                  <p>
                    Printing and typesetting industry lorem Ipsum has been the
                    industrys standard dummy text of type setting.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="ui_images"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div className="left_img">
                <Image
                  width={332}
                  height={475}
                  alt="app"
                  src="/image/modern01.png"
                  className="moving_position_animatin"
                />
              </div>
              <div className="right_img ml-6">
                <Image
                  width={120}
                  height={120}
                  alt="app"
                  src="/image/secure_data.png"
                  className="moving_position_animatin mb-4"
                />
                <Image
                  width={330}
                  height={236}
                  alt="app"
                  src="/image/modern02.png"
                  className="moving_position_animatin"
                />
                <Image
                  width={330}
                  height={97}
                  alt="app"
                  src="/image/modern03.png"
                  className="moving_position_animatin -ml-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}