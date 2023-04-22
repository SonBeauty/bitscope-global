import Image from "next/image";
import React from "react";
export default function Design() {
  return (
    <section className="row_am modern_ui_section">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="col-lg-6 mt-12">
            <div className="ui_text">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <h2>
                  <span>BIT TRACKING</span>
                </h2>
                <p className="font-bold">
                  A comprehensive social media listening program.
                </p>
                <p>
                  Listening is the best way to understand anyone&apos;s
                  feelings.
                  <br /> The cutting edge of Artificial Intelligence now enables
                  the listening to millions of lines of messages, providing
                  insight into customers or the flow of trends.
                </p>
              </div>
              <ul className="design_block">
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Watchlist</h4>
                  <p>
                    A list of quality signal groups but cannot track all
                    content.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Catch the trend</h4>
                  <p>
                    Large language model analysis allows identifying important
                    &quot;keywords&quot; that could be &quot;Trend&quot;
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Customer insights</h4>
                  <p>
                    The limitless potential of artificial intelligence (AI)
                    makes every customer conversation heard.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="" data-aos="fade-in" data-aos-duration="1500">
              <div className="left_img ml-16">
                <Image
                  width={450}
                  height={575}
                  alt="app"
                  src="/image/Artboard-17.pngedit.png"
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
