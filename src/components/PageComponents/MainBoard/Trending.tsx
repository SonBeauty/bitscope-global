import Image from "next/image";
import Slider from "react-slick";

interface RatingProps {
    rows: any;
    src: string;
    title: string;
    reset?: boolean;
}

export default function Trending({
    rows,
    src,
    title,
}: RatingProps) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1500,
        cssEase: "linear",
        appendDots: (dots: any) => {
            return (
                <div style={{
                    borderRadius: "10px",
                    bottom: 0,
                }}>
                    <ul>{dots}</ul>
                </div>
            );
        },
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
                                <span className="dark:text-white basis-3/5 font-semibold text-center text-lg">
                                    {title}
                                </span>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings} className="overflow-hidden w-full custom-slider">
                        <table
                            className="flex-1 pb-6 text-sm text-left text-gray-500 dark:text-gray-400 w-1/2"
                        >
                            {rows?.slice(0, 3).map((item: any, index: any) => {
                                return (<div key={index} className="border-t border-b flex px-4 py-[9px] items-center justify-center dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div className="basis-2/12">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 h-9 2xl:text-sm">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="py-1 basis-10/12 font-medium text-gray-900 whitespace-nowrap dark:text-white h-9">
                                        <div className="h-full flex items-center align-middle">
                                            <span className="text-xs 2xl:text-sm">
                                                #{item?.label.slice(0, 13)}
                                            </span>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </table>
                        <table
                            className="flex-1 pb-6 text-sm text-left text-gray-500 dark:text-gray-400 w-1/2"
                        >
                            {rows?.slice(3, 6).map((item: any, index: any) => {
                                return (<div key={index} className="border-t border-b flex px-4 py-[9px] items-center justify-center dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div className="basis-2/12">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 h-9 2xl:text-sm">
                                            {index + 4}
                                        </span>
                                    </div>
                                    <div className="py-1 basis-10/12 font-medium text-gray-900 whitespace-nowrap dark:text-white h-9">
                                        <div className="h-full flex items-center align-middle">
                                            <span className="text-xs 2xl:text-sm">
                                                #{item?.label.slice(0, 13)}
                                            </span>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </table>

                        <table
                            className="w-full pb-6 text-sm text-left text-gray-500 dark:text-gray-400 w-1/2"
                        >
                            {rows?.slice(6, 9).map((item: any, index: any) => {
                                return (<div key={index} className="border-t border-b flex px-4 py-[9px] items-center justify-center dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div className="basis-2/12">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 h-9 2xl:text-sm">
                                            {index + 7}
                                        </span>
                                    </div>
                                    <div className="py-1 basis-10/12 font-medium text-gray-900 whitespace-nowrap dark:text-white h-9">
                                        <div className="h-full flex items-center align-middle">
                                            <span className="text-xs 2xl:text-sm">
                                                #{item?.label.slice(0, 13)}
                                            </span>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </table>
                    </Slider>
                </div>
            </div>
        </section>
    );
}
