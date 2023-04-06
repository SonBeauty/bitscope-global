import { Label, TextInput } from "flowbite-react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
interface InputGroupProps {
  id: string;
  label?: string;
  type: string;
  placeholder: string;
  icon: any;
  register: UseFormRegister<FieldValues>;
  className: string;
  errors: FieldError | any;
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
}: InputGroupProps) {
  return (
    <div className={className}>
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput
        id={id}
        type={type}
        icon={icon}
        placeholder={placeholder}
        {...register(id)}
        color={errors ? "failure" : "white"}
      />
      {errors && (
        <span className="text-red-500 block text-sm pl-1 p-1">
          {errors?.message}
        </span>
      )}
    </div>
  );
}
