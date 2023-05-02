import Link from "next/link";

export const BlogHeader = () => {
  return (
    <section className="row_am blog_list_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-in" data-aos-duration="1500">
            <div className="blog_img">
              <img src="https://i.imgur.com/ckBqWfy.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog_text">
              <span className="choice_badge">EDITOR CHOICE</span>
              <div className="section_title">
                <h2>Invest crypto by Social listening!!</h2>
                <p>
                  Social listening is an invaluable tool for cryptocurrency
                  investors. By understanding the psychology of the crowd and
                  their reactions to news, events, and price changes, investors
                  can gain a deeper understanding of market psychology, enabling
                  them to make informed investment decisions.
                </p>
                <Link href="/blog/investing-in-crypto-with-social-listening">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
