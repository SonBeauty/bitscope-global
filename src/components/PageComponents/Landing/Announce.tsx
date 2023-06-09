import Link from "next/link";

export default function Announce() {
  return (
    <div className="header-top gap-2 py-2 md:gap-6">
      <h3 className="text-lg font-semibold text-white">
        Join Now for Free OG-Badge NFT and share BitScope Treasure
      </h3>
      <Link
        type="button"
        className="btn puprple_btn aos-init aos-animate bg-[#6A49F2] rounded-3xl"
        href="https://discord.com/invite/ZvRrQ8Y3uM"
        target="_blank"
      >
        <span className="flex items-center rounded-md text-sm text-white hover:!text-[#6A49F2]">
          Join Discord
        </span>
      </Link>
    </div>
  );
}