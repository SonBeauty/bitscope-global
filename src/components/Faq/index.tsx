import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
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
      "BitScope does not monitor the market by itself. Instead, we allow investors to actively choose a list of information sources that we listen to and constantly update for you.",
  },
];
export default function Faq() {
  const [activeFaq, setActiveFaq] = useState<number>(1);
  return (
    <>
      <section className="row_am faq_section">
        <div className="container">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <h2>
              <span>FAQ</span> - Frequently Asked Questions
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
              <br /> indus orem Ipsum has beenthe standard dummy.
            </p>
          </div>
          <div className="faq_panel">
            <div className="accordion" id="accordionExample">
              {ArrFaq.map((item, index) => {
                return (
                  <div
                    className="card"
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="card-header" id="headingOne">
                      <div className="mb-0">
                        <div
                          className={`btn btn-link ${
                            activeFaq === index + 1 && "active"
                          } flex justify-between`}
                          onClick={() => setActiveFaq(index + 1)}
                          data-toggle="collapse"
                          data-target="#collapseOne"
                        >
                          <span>{item.question}</span>
                          <div>
                            {index === activeFaq ? (
                              <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                            ) : (
                              <ChevronUpIcon className="h-6 w-6 text-gray-500" />
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