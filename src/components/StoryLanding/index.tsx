import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function StoryLanding() {
  return (
    <section className="row_am latest_story" id="blog">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2>
            Read latest <span>story</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
            <br /> indus orem Ipsum has beenthe standard dummy.
          </p>
        </div>
        <div className="row mt-2">
          <div className="col-md-4">
            <div
              className="story_box"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="story_img">
                <Image
                  width={290}
                  height={216}
                  alt="app"
                  src="/image/story01.png"
                  className="w-full"
                />
              </div>
              <div className="story_text">
                <h3>Cool features added!</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem Ipsum has.
                </p>
                <Link href="/blog/single">READ MORE</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="story_box"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="story_img">
                <Image
                  width={290}
                  height={216}
                  alt="app"
                  src="/image/story02.png"
                  className="w-full"
                />
              </div>
              <div className="story_text">
                <h3>Top rated app! Yupp.</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry
                  lorem Ipsum has Lorem Ipsum is.
                </p>
                <Link href="/blog/single">READ MORE</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="story_box"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="story_img">
                <Image
                  width={290}
                  height={216}
                  alt="app"
                  src="/image/story03.png"
                  className="w-full"
                />
              </div>
              <div className="story_text">
                <h3>Creative ideas on app.</h3>
                <p>
                  Printing and typesetting industry lorem Ipsum has Lorem simply
                  dummy text of the.
                </p>
                <Link href="/blog/single">READ MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
