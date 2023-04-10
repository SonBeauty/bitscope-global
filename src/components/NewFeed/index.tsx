import { Button, Timeline } from "flowbite-react";
import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { NewFeedProps } from "@/pages/forgot-pass/interface";
const FakeNew = [
  {
    title: "Dope Bears",
    content:
      "Dope Bears is an NFT project that aims to create a unique and valuable collection of digital bear NFTs.",
    timeLine: "February 2023",
    link: "#",
  },
  {
    title: "Rogues Genesis",
    content:
      "Rogues Studio is creating post-apocalyptic social games on the blockchain.",
    timeLine: "March 2023",
  },
  {
    title: "Hocus Pocus Finance",
    content: "The Hocus Pocus sacrifice collection.",
    timeLine: "April 2023",
  },
];
export default function NewFeed({ className }: NewFeedProps) {
  return (
    <Timeline className={className}>
      {FakeNew.map((news, index) => {
        return (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>{news.timeLine}</Timeline.Time>
              <Timeline.Title>{news.title}</Timeline.Title>
              <Timeline.Body>{news.content}</Timeline.Body>
              {news.link && (
                <Button href={news.link} color="gray" className="h-3 ml-1 w-36">
                  Learn More
                  <ArrowLongRightIcon className="w-3 h-3 ml-2" />
                </Button>
              )}
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}