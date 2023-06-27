import clsx from "clsx";
import AuthenSelect from "./AuthenSelect";

interface AuthenInputProps {
  error: any;
  placeholder: string;
  register: any;
  id: string;
  className?: string;
  icon: string;
  setIcon: any;
  onChange?: any;
  disable?: boolean;
  dropdown?: boolean;
}

export default function AuthenInput({
  error,
  placeholder,
  register,
  id,
  className,
  icon,
  setIcon,
  onChange,
  disable,
  dropdown,
}: AuthenInputProps) {
  return (
    <div className={className + " gap-2 w-full"}>
      <div className="flex w-full rounded-xl visible">
        <AuthenSelect icon={icon} setIcon={setIcon} dropdown={dropdown} />
        <input
          id={id}
          onChange={onChange}
          disabled={disable}
          className={`h-[55px] w-[613px] pl-[87px] basis-10/12 px-4 py-[19px] text-[15px] leading-[17.25px] font-normal focus:outline-none flex-1 rounded-md border-[1px] font-Inter ${
            error ? "border-red-400" : "border-[#005AE2]"
          } text-black-500`}
          placeholder={placeholder}
          {...register(id)}
        ></input>
      </div>

      {error?.message && (
        <span
          className={clsx(
            "absolute left-0 pt-[2px] text-xs font-normal font-Inter leading-[14.52px] text-[#E32626]",
            error && "text-[#E32626]"
          )}
        >
          {error?.message || ""}
        </span>
      )}
    </div>
  );
}