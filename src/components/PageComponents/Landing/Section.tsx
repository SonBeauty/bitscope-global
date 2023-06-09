import WaveSVG from "@/components/svg/WaveSVG";
import Image from "next/image";
import Link from "next/link";
export default function Section() {
  return (
    <section className="banner_section home-wave">
      <div className="container">
        <div className="row pt-40 max-w-[1170px] mx-auto">
          <div
            className="col-lg-5 col-md-12"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="banner_text">
              <h1 className="leading-normal">
                {" "}
                Using{" "}
                <span className="text-white font-semibold underline decoration-[#FFFFFF]">
                  AI
                </span>{" "}
                for <br /> Social Listening
              </h1>
              <p className="py-2">
                BitScope provides everything you need to understand your
                customers, and offers investors a new method of market analysis.
              </p>
            </div>
            <ul className="app_btn">
              <li>
                <Link
                  href="/register"
                  className="blue_img -ml-6 border-white"
                >
                  <span className="text-xs text-purple-500">
                    {" "}
                    No Wallet/No Credit
                  </span>{" "}
                  <br />
                  <span className="text-xl font-bold text-purple-500 ">
                    Try Free now
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="banner_image col-lg-7 col-md-12 mt-4 sm:mt-0"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <Image
              width={415}
              height={642}
              alt="app"
              className="w-full h-full moving_position_animatin"
              src="/image/cover_picture.svg"
            />
          </div>

          <span className="banner_shape1">
            {" "}
            <Image
              width={25}
              height={15}
              src="/image/banner-shape1.png"
              alt="image"
            />{" "}
          </span>
          <span className="banner_shape2">
            {" "}
            <Image
              width={25}
              height={15}
              src="/image/banner-shape2.png"
              alt="image"
            />{" "}
          </span>
          <span className="banner_shape3">
            {" "}
            <Image
              width={25}
              height={15}
              src="/image/banner-shape3.png"
              alt="image"
            />{" "}
          </span>
        </div>
      </div>
      <div className="home-wave-bottom">
        <WaveSVG />
      </div>
    </section>
  );
}
