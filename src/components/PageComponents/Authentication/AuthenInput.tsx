import clsx from "clsx";
import React from "react";
interface AuthenInputProps {
  social: string;
  error: any;
  placeholder: string;
  register: any;
  id: string;
  className?: string;
}
export default function AuthenInput({
  social,
  error,
  placeholder,
  register,
  id,
  className,
}: AuthenInputProps) {
  return (
    <div className={className + "flex gap-2 w-full"}>
      <div
        className={clsx(
          "flex w-full border-green-400 border-2 rounded-[26px]",
          error && "border-red-400 mb-2"
        )}
      >
        <div className="leading-10 basis-4/12 md:basis-3/12 bg-[#349FDE] text-white rounded-tl-3xl rounded-bl-3xl px-0 py-3 sm:p-4">
          {social}
        </div>
        <input
          id={id}
          className="leading-10 basis-8/12 px-4 py-4 text-xl w-full focus:outline-none flex-1 rounded-tr-3xl rounded-br-3xl"
          placeholder={placeholder}
          {...register(id)}
        ></input>
      </div>
      <span
        className={clsx(
          "ml-8 text-green-400 text-lg mt-8",
          error && "text-red-400"
        )}
      >
        {error?.message}
      </span>
    </div>
  );
}