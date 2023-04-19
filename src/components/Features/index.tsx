import Image from "next/image";
import React from "react";
export default function Features() {
  return (
    <section className="row_am features_section" id="features">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2>
            <span>Features</span> that makes app different!
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
            <br /> indus orem Ipsum has beenthe standard dummy.
          </p>
        </div>
        <div className="feature_detail">
          <div className="left_data feature_box">
            <div
              className="data_block"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="icon flex justify-end">
                <Image
                  width={120}
                  height={120}
                  alt="icon4"
                  src="/image/secure_data.png"
                  className="icon"
                />
              </div>
              <div className="text">
                <h4>Secure data</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting indus ideas.
                </p>
              </div>
            </div>
            <div
              className="data_block"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="icon flex justify-end">
                <Image
                  width={120}
                  height={120}
                  alt="icon4"
                  src="/image/functional.png"
                  className="icon"
                />
              </div>
              <div className="text">
                <h4>Fully functional</h4>
                <p>
                  Simply dummy text of the printing and typesetting indus lorem
                  Ipsum is dummy.
                </p>
              </div>
            </div>
          </div>
          <div className="right_data feature_box">
            <div
              className="data_block"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <Image
                width={120}
                height={120}
                alt="icon4"
                src="/image/live-chat.png"
                className="icon"
              />

              <div className="text">
                <h4>Live chat</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting indus ideas.
                </p>
              </div>
            </div>
            <div
              className="data_block"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <Image
                width={120}
                height={120}
                alt="icon4"
                className="icon"
                src="/image/support.png"
              />
              <div className="text">
                <h4>24-7 Support</h4>
                <p>
                  Simply dummy text of the printing and typesetting indus lorem
                  Ipsum is dummy.
                </p>
              </div>
            </div>
          </div>
          <Image
            width={333}
            height={678}
            alt="icon4"
            src="/image/features_frame.png"
            className="feature_img"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
          />
        </div>
      </div>
    </section>
  );
}