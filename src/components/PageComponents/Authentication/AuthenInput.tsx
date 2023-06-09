import clsx from "clsx";
import React from "react";
interface AuthenInputProps {
  social: string;
  iconSocial: React.ReactNode;
  error: any;
  placeholder: string;
  register: any;
  id: string;
  className?: string;
}
export default function AuthenInput({
  social,
  iconSocial,
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
          "flex w-full rounded-2xl",
          error && "border-red-400 mb-2 border-2"
        )}
      >
        <div className="leading-10 basis-4/12 bg-[#005AE2] text-white rounded-tl-lg rounded-bl-lg sm:p-4 p-1 px-2 flex items-center justify-center gap-2 sm:gap-3">
          <div className="p-2 rounded-full w-7 h-7 bg-white">{iconSocial}</div>
          {social}
        </div> 
        <input
          id={id}
          className="leading-10 basis-9/12 px-4 py-4 text-xl w-full focus:outline-none flex-1 rounded-tr-lg rounded-br-lg text-black-500"
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
