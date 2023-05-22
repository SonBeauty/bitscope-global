import Image from "next/image";
import PaginationMainBoard from "./Pagination";
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
                {reset && (
                  <span className="dark:text-white text-blue-500 text-sm cursor-pointer basis-1/5 font-semibold text-center">
                    Refesh
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {rows.map((item: any, index: number) => {
                return (
                  <>
                    {reset ? (
                      <tbody key={item.id}>
                        <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="pl-4 py-2">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                              {item.id}
                            </span>
                          </td>
                          <td className="py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.tag}
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody key={item.id}>
                        <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="pl-4 py-2">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                              {item.number}
                            </span>
                          </td>
                          <th
                            scope="row"
                            className="flex items-center py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <picture>
                              <img
                                src={item.image}
                                alt="iMac Front Image"
                                className="w-8 h-8 rounded-full"
                              />
                            </picture>
                          </th>
                          <td className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.name}
                          </td>
                          <td className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.code}
                          </td>
                          <td className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.price}
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </>
                );
              })}
            </table>
          </div>
          <PaginationMainBoard />
        </div>
      </div>
    </section>
  );
}