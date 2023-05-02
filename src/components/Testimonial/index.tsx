import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function Testimonial() {
  const testimonial_slider = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <section className="row_am testimonial_section">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <h2>
            The ability to analyze natural language <br /> from around the web
            and social media <br /> is a valuable opportunity.
          </h2>
        </div>
        <div
          className="testimonial_block"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <OwlCarousel
            id="testimonial_slider"
            {...testimonial_slider}
            className="owl-carousel owl-theme owl-loaded owl-drag"
          >
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="testimonial_img">
                  <Image
                    width={230}
                    height={230}
                    alt="anim_line"
                    src="/image/testimonial_user1_1.png"
                  />
                </div>
                <h3 className="text-white">Shayna John</h3>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="testimonial_img">
                  <Image
                    width={230}
                    height={230}
                    alt="anim_line"
                    src="/image/testimonial_user2.png"
                  />
                </div>
                <h3 className="text-white">Willium Den</h3>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="testimonial_img">
                  <Image
                    width={230}
                    height={230}
                    alt="anim_line"
                    src="/image/testimonial_user3.png"
                  />
                </div>
                <h3 className="text-white">Cyrus Stephen</h3>
              </div>
            </div>
          </OwlCarousel>
          <div className="flex flex-col items-center justify-center py-2 mt-4">
            <Link
              href="https://discord.com/invite/ZvRrQ8Y3uM"
              target="_blank"
              className="bg-purple-700 px-4 py-3 rounded-3xl cursor-pointer text-white font-bold text-lg"
            >
              Join our Discord
            </Link>
          </div>
          <div className="avtar_faces">
            <Image
              width={1140}
              height={470}
              alt="anim_line"
              src="/image/avtar_testimonial_1.png"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
