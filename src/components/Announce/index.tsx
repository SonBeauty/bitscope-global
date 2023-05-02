import { Button } from "flowbite-react";
import React from "react";
interface AnnounceProps {
  className?: string;
}
export default function Announce({ className }: AnnounceProps) {
  return (
    <div
      className={`${className} bg-black-500 w-full md:h-12 px-2 h-22 flex gap-8 justify-center items-center`}
    >
      <h3 className="text-lg font-semibold text-white">
        Join Now for Free OG-Badge NFT and share BitScope Treasure
      </h3>
      <Button className="bg-purple-600">Join Discord</Button>
    </div>
  );
}