import dynamic from "next/dynamic";
import Image from "next/image";
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
                    width={130}
                    height={130}
                    alt="anim_line"
                    src="/image/testimonial_user1_1.png"
                  />
                </div>
                <h3 className="text-white">Shayna John</h3>
                <span className="designation text-white">Careative inc</span>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="testimonial_img">
                  <Image
                    width={130}
                    height={130}
                    alt="anim_line"
                    src="/image/testimonial_user1_1.png"
                  />
                </div>
                <h3 className="text-white">Willium Den</h3>
                <span className="designation text-white">Careative inc</span>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="testimonial_img">
                  <Image
                    width={130}
                    height={130}
                    alt="anim_line"
                    src="/image/testimonial_user1_1.png"
                  />
                </div>
                <h3 className="text-white">Cyrus Stephen</h3>
                <span className="designation text-white">Careative inc</span>
              </div>
            </div>
          </OwlCarousel>
          <div className="flex flex-col items-center justify-center py-2 mt-4">
            <div className="bg-purple-700 px-4 py-3 rounded-3xl cursor-pointer text-white font-bold text-lg">
              Join our Discord
            </div>
          </div>
          <Image
            width={930}
            height={385}
            alt="anim_line"
            src="/image/avtar_testimonial_1.png"
            className="avtar_faces w-[90vw]"
          />
        </div>
      </div>
    </section>
  );
}
