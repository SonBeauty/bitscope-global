import React, { useEffect, useState } from "react";
import Author from "./Author";
import MainBlog from "./MainBlog";
import { useRouter } from "next/router";
import { Data } from "@/interface/PostBlog";
import { useMutation } from "@tanstack/react-query";
import { getBlog } from "@/pages/api/blog/blogDetail";
import Loading from "@/components/Loading";
interface BlogContainerProps {
  children: React.ReactNode;
}
export default function BlogContainer({ children }: BlogContainerProps) {
  const router = useRouter();
  const [blog, setBlog] = useState<Data>();
  const { mutate } = useMutation(getBlog, {
    onSuccess: (data) => {
      setBlog(data[0]);
    },
  });
  useEffect(() => {
    mutate({ link: router.pathname.replace("/blog/", "") });
  }, [mutate, router.pathname]);
  if (!blog) {
    return <Loading />;
  }
  return (
    <MainBlog>
      <section className="blog_detail_section">
        <div className="container">
          <div className="blog_inner_pannel">
            <div className="section_title">
              <h2 className="leading-normal">{blog.title}</h2>
            </div>
            <div className="main_img">
              <picture>
                <img src={blog.imgStory} alt="image" />
              </picture>
            </div>
            {children}
            <Author />
          </div>
        </div>
      </section>
    </MainBlog>
  );
}