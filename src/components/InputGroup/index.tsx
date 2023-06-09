import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
interface InputGroupProps {
  id: string;
  label?: string;
  type: string;
  placeholder: string;
  icon?: any;
  register: UseFormRegister<FieldValues>;
  className?: string;
  errors: FieldError | any;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
}
export default function InputGroup({
  id,
  label,
  type,
  placeholder,
  icon,
  register,
  className,
  errors,
  value,
  defaultValue,
  disabled,
}: InputGroupProps) {
  const [eyes, setEyes] = useState<string>("password");
  const handleClick = () => {
    setEyes(eyes === "password" ? "text" : "password");
  };
  return (
    <div className={className}>
      <div className="mb-2 block text-left mt-1 ">
        <Label htmlFor={id}>
          <span className="text-black-500 dark:text-white"> {label}</span>
        </Label>
      </div>
      <div className="relative">
        <TextInput
          id={id}
          type={type === "password" ? eyes : type}
          icon={icon}
          disabled={disabled}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          {...register(id)}
          className="text-black-500 "
          color={errors ? "failure" : "white"}
        />
        {type === "password" && (
          <>
            {eyes === "password" ? (
              <EyeSlashIcon
                className="h-6 w-6 text-gray-500 absolute right-2 -top-1 translate-y-1/2 cursor-pointer"
                onClick={() => handleClick()}
              />
            ) : (
              <EyeIcon
                className="h-6 w-6 text-gray-500 absolute right-2 -top-1 translate-y-1/2 cursor-pointer"
                onClick={() => handleClick()}
              />
            )}
          </>
        )}
      </div>
      {errors && (
        <span className="block p-1 pl-1 text-sm text-red-500">
          {errors?.message}
        </span>
      )}
    </div>
  );
}
