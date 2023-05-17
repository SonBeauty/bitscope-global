import { Data } from "@/interface/PostBlog";
import Link from "next/link";
import { useRouter } from "next/router";
import { Panigation } from "./Panigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export const BlogList = () => {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["blogList"],
    queryFn: () => fetch("/api/blog").then((res) => res.json()),
  });
  return (
    <section className="row_am latest_story blog_list_story" id="blog">
      <div className="container">
        <div className="row">
          {data?.map((item: Data, index: number) => {
            return (
              <div className="col-md-4" key={index}>
                <div
                  className="story_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="story_img">
                    <Image
                      width={360}
                      height={176}
                      src={item.imgStory}
                      alt="image"
                      className="h-44 w-full"
                    />
                  </div>
                  <div className="story_text">
                    <h3
                      className="cursor-pointer leading-normal"
                      onClick={() => router.push(`/blog/${item.link}`)}
                    >
                      {item.title}
                    </h3>
                    <p className="">{item.highlight.slice(0, 230)}...</p>
                    <Link href={`/blog/${item.link}`}>READ MORE</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Panigation />
      </div>
    </section>
  );
};
