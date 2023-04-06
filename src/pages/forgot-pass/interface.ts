export interface NewFeedMapProps {
  title: string;
  content: string;
  link?: string;
  timeLine: string;
}
export interface NewFeedProps {
  news: NewFeedMapProps[];
  className: string;
}
