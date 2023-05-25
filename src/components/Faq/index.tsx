import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import TitleDescribeLayout from "../PageComponents/Landing/TitleDescribeLayout";
const ArrFaq = [
  {
    id: 0,
    question: "What is BitScope?",
    answer:
      "BitScope is a social listening service that helps businesses understand their customers and gain a competitive edge. We listen to any customer feedback or direct mention of your brand from discussions about keywords, topics, customer insights, or competitor strategies.",
  },
  {
    id: 1,
    question: "Companies have been doing this for a long time?",
    answer:
      "Businesses often face challenges when accessing data from their servers. By leveraging the endless potential of AI, BitScope offers a much wider scope of data.",
  },
  {
    id: 2,
    question: "Is BitScope for investors?",
    answer:
      "Over 200 crypto investors surveyed agree that investing in trends is more profitable, but they cannot identify the source of the trend. BitScope's big data analysis allows you to stay on top of trends.",
  },
  {
    id: 3,
    question: "How do we know the result isn't your own?",
    answer:
      "BitScope does not independently monitor the market. Instead, it allows investors to choose a selection of information sources that it listens to and continuously updates for them.",
  },
];
export default function Faq() {
  const [activeFaq, setActiveFaq] = useState<number>(1);
  return (
    <>
      <section className="mb-4 faq_section popupOpen mt-16">
        <div className="container">
          <TitleDescribeLayout
            title={
              <>
                <span>FAQ</span> - Frequently Asked Questions
              </>
            }
            describe={
              <>
                Combined with the endless potential of &quot;Artificial
                Intelligence&quot; (AI),
                <br /> Bitscope offers completely new perspectives on the data
                discovery process.
                <br /> Explore to find prompt answers to your inquiries
              </>
            }
          />
          <div className="faq_panel">
            <div className="accordion" id="accordionExample">
              {ArrFaq.map((item: any, index: number) => {
                return (
                  <div
                    className="card"
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="card-header" id="headingOne">
                      <div className="mb-0 w-full">
                        <div
                          className={`btn ${
                            activeFaq === index + 1 && "active"
                          } flex justify-between`}
                          onClick={() => setActiveFaq(index + 1)}
                          data-toggle="collapse"
                          data-target="#collapseOne"
                        >
                          <span
                            className={`${
                              activeFaq === index + 1
                                ? "text-purple-500"
                                : "text-[#32236f]"
                            } `}
                          >
                            {item.question}
                          </span>
                          <div>
                            {index + 1 === activeFaq ? (
                              <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                            ) : (
                              <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                            )}{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    {activeFaq === index + 1 && (
                      <div className="show">
                        <div className="card-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}