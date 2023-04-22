import { Button } from "flowbite-react";
import React from "react";
export default function Announce() {
  return (
    <div className="bg-black w-full h-16 flex gap-8 justify-center items-center">
      <h3 className="text-lg font-semibold text-white">
        Join Now for Free OG-Badge NFT and share BitScope Treasure
      </h3>
      <Button className="bg-purple-600">Join Discord</Button>
    </div>
  );
}