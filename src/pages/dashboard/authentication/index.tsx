import AuthenInput from "@/components/PageComponents/Authentication/AuthenInput";
import { schema } from "@/components/PageComponents/Authentication/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Authentication() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleAuthen = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard/authentication/info");
    }, 2000);
  };
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-8 justify-center items-center bg-black-200 rounded-3xl">
        <Image
          width={336}
          height={473}
          src="/image/authen.svg"
          alt="Authen"
          className="basis-1/3 mt-[100px] sm:mt-0"
        />
        <div className="w-full">
          <div className="">
            <h3 className="text-black-500 text-center">
              Hello Albert - Welcome to Authenticaiton
            </h3>
            <p className="py-4 text-black-500 text-center">
              We offer a comprehensive view of members who follow or join the
              requested social platforms. The results are approximate, and
              BitScope is optimizing the algorithm to provide the most accurate
              results.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="sm:pr-10 py-6 flex flex-col gap-3 items-end">
            <AuthenInput
              social="Twitter Link"
              placeholder="https://twitter.com/xxxx"
              error={errors.twitter}
              register={register}
              id="twitter"
              className="py-4"
            />
            <AuthenInput
              social="Telegram Link"
              placeholder="https://t.me/xxxx"
              error={errors.telegram}
              register={register}
              id="telegram"
            />
            <div className="mr-2">
              <button
                disabled={loading}
                type="button"
                onClick={() => handleAuthen()}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
              >
                {loading && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                {loading ? "Loading..." : "Authenticate"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
