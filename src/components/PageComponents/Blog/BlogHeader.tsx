import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export const BlogHeader = () => {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["blogList"],
    queryFn: () => fetch("/api/blog").then((res) => res.json()),
  });
  let blogHeaderData: any = [];
  if (data) {
    blogHeaderData = data[0];
  }
  return (
    <section className="row_am blog_list_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-in" data-aos-duration="1500">
            <div className="blog_img">
              <Image
                width={555}
                height={316}
                src={blogHeaderData?.imgStory}
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog_text">
              <span className="choice_badge">EDITOR CHOICE</span>
              <div className="section_title">
                <h2
                  onClick={() => router.push(`/blog/${blogHeaderData?.link}`)}
                  className="cursor-pointer leading-normal"
                >
                  {blogHeaderData?.title}
                </h2>
                <p>{blogHeaderData?.highlight}</p>
                <Link href={`/blog/${blogHeaderData?.link}`}>READ MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};