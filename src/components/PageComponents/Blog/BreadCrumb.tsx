import Image from "next/image";
import Link from "next/link";

export const BreadCrumb = () => {
  return (
    <div className="bred_crumb home-wave">
      <div className="container">
        <span className="banner_shape1">
          <Image
            width={10}
            height={25}
            src="/image/banner-shape1.png"
            alt="image"
          />{" "}
        </span>
        <span className="banner_shape2">
          <Image
            width={10}
            height={25}
            src="/image/banner-shape2.png"
            alt="image"
          />{" "}
        </span>
        <span className="banner_shape3">
          <Image
            width={10}
            height={25}
            src="/image/banner-shape3.png"
            alt="image"
          />{" "}
        </span>

        <div className="bred_text">
          <h1>Latest blog post</h1>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>»</span>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          {/* <div className="search_bar">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Search here"
                  className="form-control "
                />
                <button className="btn hover:!bg-white hover:border-2 hover:border-purple-500" type="submit">
                  <MagnifyingGlassIcon className="h-full w-full p-1 text-white hover:!text-purple-500" />
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};
