import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
const ArrFaq = [
  {
    id: 0,
    question: "How can i pay ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: 1,
    question: " How to setup account ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: 2,
    question: "What is process to get refund ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: 3,
    question: "What is process to get refund ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged",
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