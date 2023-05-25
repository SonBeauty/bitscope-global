import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";
import { BsFillStarFill } from "react-icons/bs";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const arrTes = [
  {
    image: (
      <Image
        width={230}
        height={230}
        alt="anim_line"
        src="/image/testimonial_user1_1.png"
      />
    ),
    comment:
      "Bitscope's Social Listening is a great tool that investors should try. It quickly and accurately reveals the market's current trend and identifies the emotions of the community",
    name: "Shayna John",
    position: "Careative inc",
  },
  {
    image: (
      <Image
        width={230}
        height={230}
        alt="anim_line"
        src="/image/testimonial_user2.png"
      />
    ),
    comment:
      "With BitScope's AI technology, we can better listen to the community and understand their problems and interests",
    name: "Willium Den",
    position: "Careative inc",
  },
  {
    image: (
      <Image
        width={230}
        height={230}
        alt="anim_line"
        src="/image/testimonial_user3.png"
      />
    ),
    comment:
      "Thanks to BitScope, it has solved problems that humans can't, and it's worth learning about!",
    name: "Cyrus Stephen",
    position: "Careative inc",
  },
];
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
            {arrTes.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="testimonial_slide_box">
                    <div className="testimonial_slide_box">
                      <div className="rating flex gap-1">
                        {Array(5)
                          .fill("")
                          .map((_, index: number) => {
                            return (
                              <span key={index}>
                                <BsFillStarFill className="h-6 w-6 text-yellow-200" />
                              </span>
                            );
                          })}
                      </div>
                      <p className="review text-white">“{item.comment}”</p>
                      <div className="testimonial_img">
                        <div className="testimonial_img">{item.image}</div>
                      </div>
                      <h3 className="text-white">{item.name}</h3>
                      {/* <span className="designation text-white">{item.position}</span> */}
                    </div>
                  </div>
                </div>
              );
            })}
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
        <div id="faq"></div>
        </div>
      </div>
    </section>
  );
}
