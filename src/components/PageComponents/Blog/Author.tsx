import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Author() {
  return (
    <div className="blog_authore">
      <div className="authore_info">
        <div className="avtar">
          <Image
            width={60}
            height={60}
            src="/image/Artboard_22.png"
            alt="image"
            className="rounded-full"
          />
        </div>
        <div className="text">
          <h3>By: BitScope</h3>
          <span>July 25, 2022</span>
        </div>
      </div>
      <div className="social_media">
        <ul>
          <li>
            <Link href="#">
              <FaFacebook className="w-full h-full p-2" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaTwitter className="w-full h-full p-2" />
            </Link>
          </li>
          <li>
            <Link href="https://discord.com/invite/ZvRrQ8Y3uM" target="_blank">
              <FaDiscord className="w-full h-full p-2" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
