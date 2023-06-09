import Image from "next/image";
import Slider from "react-slick";
interface RatingProps {
  rows: any;
  src: string;
  title: string;
  reset?: boolean;
}
export default function Rating({
  rows,
  src,
  reset = false,
  title,
}: RatingProps) {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          bottom: 0,
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 rounded-3xl">
      <div className="mx-auto max-w-screen-2xl">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <div className="flex gap-2 items-end w-full">
                <span className="text-gray-500 basis-1/5">
                  <Image width={30} height={30} src={src} alt="Image" />
                </span>
                <span className="dark:text-white basis-3/5 font-semibold text-center">
                  {title}
                </span>
              </div>
            </div>
          </div>
          <Slider {...settings} className="overflow-hidden w-full">
            {Array(3)
              .fill("")
              .map((_, index) => {
                return (
                  <table
                    key={index}
                    className="w-full pb-6 text-sm text-left text-gray-500 dark:text-gray-400"
                  >
                    {rows.map((item: any, index: number) => {
                      return (
                        <>
                          {reset ? (
                            <div key={item.id}>
                              <div className="border-t border-b flex px-4 py-[9px] items-center justify-center dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="basis-2/12">
                                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                    {item.id}
                                  </span>
                                </div>
                                <div className="py-1 basis-7/12 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.tag}
                                </div>
                                <div className="py-1 basis-3/12 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.price}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div key={item.id}>
                              <div className="border-b border-t flex px-4 py-1 pb-[6px] items-center justify-center dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="basis-2/12">
                                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                    {item.number}
                                  </span>
                                </div>
                                <div className="flex basis-2/12 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <picture>
                                    <img
                                      src={item.image}
                                      alt="iMac Front Image"
                                      className="w-8 h-8 rounded-full"
                                    />
                                  </picture>
                                </div>
                                <div className="py-2 basis-3/12 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.name}
                                </div>
                                <div className="py-2 basis-2/12 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.code}
                                </div>
                                <div className="py-2 basis-3/12 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.price}
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })}
                  </table>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
