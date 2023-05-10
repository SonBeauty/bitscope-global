import { Data } from "@/interface/PostBlog";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function LatestStory() {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["blogList"],
    queryFn: () => fetch("/api/blog").then((res) => res.json()),
  });
  return (
    <section className="row_am latest_story" id="blog">
      <div className="container">
        <div
          className="section_title mb-8"
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2>
            Read latest <span>story</span>
          </h2>
          <p>
            Get the latest news and stories about Bítcope products, technology
            and innovation on the Keyword, BitScope official blog.
          </p>
        </div>
        <div className="row">
          {data?.slice(-3).map((item: Data, index: number) => {
            return (
              <div className="col-md-4" key={index}>
                <div
                  className="story_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="story_img">
                    <Image
                      src={item.imgStory}
                      width={176}
                      height={176}
                      alt="image"
                      className="h-44 w-full"
                    />
                  </div>
                  <div className="story_text sm:h-96 h-80">
                    <h3
                      className="cursor-pointer leading-normal"
                      onClick={() => router.push(`/blog/${item.link}`)}
                    >
                      {item.title}...
                    </h3>
                    <p className="">{item.highlight.slice(0, 230)}</p>
                    <Link href={`/blog/${item.link}`}>READ MORE</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}