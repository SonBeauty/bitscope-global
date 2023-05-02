import React from "react";
import { Panigation } from "./Panigation";
import Link from "next/link";

export const BlogList = () => {
  const storyList = [
    {
      id: 0,
      title: "Investing in crypto with social listening.",
      highlight:
        "Social listening is an invaluable tool for cryptocurrency investors. By understanding the psychology of the crowd and their reactions to news, events, and price changes, investors can gain a deeper understanding of market psychology, enabling them to make informed investment decisions.",
      timeUpload: 45,
      imgStory: "https://i.imgur.com/EyEvgDt.png",
      link: "investing-in-crypto-with-social-listening",
    },
    {
      id: 1,
      title: "Using social data is key to the success of the project.",
      highlight:
        "Social Data offers an unprecedented level of insight into consumer behavior, allowing businesses to better understand their target audience and tailor their offerings accordingly. Companies can use this data to identify trends in customer sentiment, track brand loyalty and engagement, as well as measure customer satisfaction with products or services. By leveraging Social Data, companies can make more informed decisions about how to best serve their customers and increase overall profitability.",
      timeUpload: 45,
      imgStory: "https://i.imgur.com/esFP920.png",
      link: "using-social-data-is-key-to-the-success-of-the-project",
    },
    {
      id: 2,
      title: "Guide to building a Blockchain community.",
      highlight:
        "A loyal community decides that a cryptocurrency project has a 70% chance of winning. However, the constant fluctuations of the blockchain require developers in the community to constantly change to meet the diverse needs of customers. All of this is to answer the question: 'How to create FOMO psychology for my project?'",
      timeUpload: 45,
      imgStory: "https://i.imgur.com/0LTbS7S.png",
      link: "guide-to-building-a-blockchain-community",
    },
  ];
  return (
    <section className="row_am latest_story blog_list_story" id="blog">
      <div className="container">
        <div className="row">
          {storyList.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div
                  className="story_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="story_img">
                    <img src={item.imgStory} alt="image" />
                  </div>
                  <div className="story_text">
                    <h3>{item.title}</h3>
                    <p>{item.highlight.slice(0, 270)}</p>
                    <Link href={`/blog/${item.link}`}>READ MORE</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Panigation />
      </div>
    </section>
  );
};
