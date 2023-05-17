import React from "react";
import Author from "./Author";
import MainBlog from "./MainBlog";
interface BlogContainerProps {
  title: string;
  image: string;
  children: React.ReactNode;
}
export default function BlogContainer({
  title,
  image,
  children,
}: BlogContainerProps) {
  return (
    <MainBlog>
      <section className="blog_detail_section">
        <div className="container">
          <div className="blog_inner_pannel">
            <div className="section_title">
              <h2 className="leading-normal">{title}</h2>
            </div>
            <div className="main_img">
              <picture>
                <img src={image} alt="image" />
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
