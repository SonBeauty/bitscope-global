import { Button, Timeline } from "flowbite-react";
import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { NewFeedMapProps, NewFeedProps } from "@/pages/forgot-pass/interface";

export default function NewFeed({ news, className }: NewFeedProps) {
  return (
    <Timeline className={className}>
      {news.map((news: NewFeedMapProps, index) => {
        return (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>{news.timeLine}</Timeline.Time>
              <Timeline.Title>{news.title}</Timeline.Title>
              <Timeline.Body>{news.content}</Timeline.Body>
              {news.link && (
                <Button
                  href={news.link}
                  color="gray"
                  className="ml-1  h-3 w-36"
                >
                  Learn More
                  <ArrowLongRightIcon className="ml-2 h-3 w-3" />
                </Button>
              )}
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}
