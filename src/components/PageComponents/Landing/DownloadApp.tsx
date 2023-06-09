import AnimLine from "./AnimLine";
import Testimonial from "./Testimonial";
export default function DownloadApp() {
  return (
    <>
      <section
        className="row_am free_app_section review_freeapp mt-16"
        id="getstarted"
      >
        <div className="container">
          <div
            className="free_app_inner aos-init"
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <div className="anim_line dark_bg">
              <AnimLine number={9} />
            </div>
            <div className="row">
              <div className="col">
                <div className="free_text">
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
