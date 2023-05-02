import { Button, Footer } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsTiktok,
} from "react-icons/bs";
import { useRouter } from "next/router";
import SpanText from "@/components/SpanText";

export default function ActivateNotification() {
  const [status, setStatus] = useState(true);
  const router = useRouter();
  return (
    <div className="relative w-full h-full bg-[url('/image/signup-bg.jpg')] z-0">
      <div className="flex flex-col items-center justify-center max-w-2xl gap-8 p-8 pt-24 m-auto md:pt-8 z-10">
        <Image src="/image/400X300.png" width={206} height={113} alt="logo" />
        <h1 className="text-xl font-extrabold text-primary-dark-600">
          Beat of the Future
        </h1>
        <div className="flex flex-col items-center gap-8 px-8 py-12 shadow-lg">
          <span className="text-lg">
            {status
              ? "Your account has been successfully activated! Welcome to BitScope, an interesting social listening and market analysis service. Clickthe button below to experience our product immediately."
              : "Account activation failed, please contact Admin"}
          </span>
          <Button onClick={() => router.push("/login")}>Login Now</Button>
          <div className="flex items-center">
            <DocumentTextIcon className="w-5 h-5 text-blue-600 dark:text-blue-500" />
            <div className="pl-4 text-sm font-normal">
              By signing up I gree to the{" "}
              <SpanText
                content="tems & conditions"
                redirectLink="#"
                color="text-green-400"
              />{" "}
              and{" "}
              <SpanText
                content="privacy policy"
                redirectLink="#"
                color="text-green-400"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://facebook.com" icon={BsFacebook} />
            <Footer.Icon href="https://instagram.com" icon={BsInstagram} />
            <Footer.Icon href="https://tiktok.com" icon={BsTiktok} />
            <Footer.Icon href="https://twitter.com" icon={BsTwitter} />
            <Footer.Icon href="https://likedin.com" icon={BsLinkedin} />
          </div>
        </div>
      </div>
      <span className="absolute top-0 right-0 p-4 m-4 rounded-md shadow-lg">
        Already a user?{" "}
        <SpanText
          content="Login"
          redirectLink="/login"
          color="text-green-400"
        />
      </span>
    </div>
  );
}
