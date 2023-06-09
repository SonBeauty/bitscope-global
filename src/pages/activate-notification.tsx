import SpanText from "@/components/SpanText";
import PageContainer from "@/container/PageContainer";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { Button, Footer } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitter,
} from "react-icons/bs";
interface ActivateNotificationProps {
  status: boolean;
  isLoading: boolean;
}
export default function ActivateNotification({
  status,
  isLoading,
}: ActivateNotificationProps) {
  const router = useRouter();
  if (isLoading) {
    return (
      <PageContainer>
        <div className="relative w-full h-screen bg-[url('/image/signup-bg.jpg')] z-0 pt-32">
          <div className="flex flex-col items-center justify-center max-w-2xl gap-8 p-8 pt-24 m-auto md:pt-8 z-10">
            <div
              role="status"
              className="max-w-sm animate-pulse h-creen w-screen"
            >
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px]" />
              <h1 className="text-xl font-extrabold text-primary-dark-600">
                Please Wait
              </h1>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <div className="relative w-full h-screen py-8 bg-[url('/image/signup-bg.jpg')] z-0">
        <div className="flex flex-col items-center justify-center max-w-2xl gap-0 sm:gap-8 p-0 sm:p-8 pt-24 mx-auto md:pt-8 z-10">
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
            <Button onClick={() => router.push("/login")}>
              {" "}
              <span className="text-white"> Login Now</span>
            </Button>
            <div className="flex items-center">
              <DocumentTextIcon className="w-5 h-5 text-blue-600 " />
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
          Already a user?
          <SpanText
            content="Login"
            redirectLink="/login"
            color="text-green-400"
          />
        </span>
      </div>
    </PageContainer>
  );
}