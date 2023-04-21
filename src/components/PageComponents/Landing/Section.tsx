import Image from "next/image";
import Link from "next/link";
export default function Section() {
  return (
    <section className="banner_section home-banner mt-32 sm:mt-5">
      <div className="container">
        <div className="anim_line">
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
        </div>
        <div className="row">
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="banner_text">
              <h1>
                Using <span>artificial intelligence</span> for{" "}
                <span>social listening</span>
              </h1>
              <p className="py-3">
                BitScope provides everything you need to understand your
                customers, and offers investors a new method of market analysis.
              </p>
            </div>
            <Link href="#" className="w-2/4 btn px-8 py-2 puprple_btn">
              Try Now
            </Link>
          </div>
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <div className="">
              <Image
                width={415}
                height={642}
                alt="app"
                className="w-full h-full"
                src="/image/cover-landingpage.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}