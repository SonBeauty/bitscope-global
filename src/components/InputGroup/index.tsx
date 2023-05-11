import { Label, TextInput } from "flowbite-react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
interface InputGroupProps {
  id: string;
  label?: string;
  type: string;
  placeholder: string;
  icon?: any;
  register: UseFormRegister<FieldValues>;
  className: string;
  errors: FieldError | any;
  value?: string;
  defaultValue?: string;
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
}: InputGroupProps) {
  return (
    <div className={className}>
      <div className="mb-2 block text-left mt-1">
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput
        id={id}
        type={type}
        icon={icon}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        {...register(id)}
        color={errors ? "failure" : "white"}
      />
      {errors && (
        <span className="block p-1 pl-1 text-sm text-red-500">
          {errors?.message}
        </span>
      )}
    </div>
  );
}
