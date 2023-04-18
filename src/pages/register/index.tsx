import InputGroup from "@/components/InputGroup";
import LayoutForm from "@/components/LayoutForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { schema } from "../../components/PageComponents/Register/schema";
import Select from "../../components/PageComponents/Register/SelectRegister";
import { useEffect, useState } from "react";
export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const [value, setValues] = useState<string>("");
  const onSubmit = (data: any) => {
    console.log(data);
  };
  useEffect(() => {
    if (value) {
      setValue("target", value);
    }
  }, [setValue, value]);

  return (
    <LayoutForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      newsFeed={false}
      customNews={
        <div className="relative flex h-full">
          <Image
            width="100"
            height="100"
            src="/image/background.png"
            alt="bgc"
            className="absolute z-0 w-full h-full bg-slate-100"
          />
          <div className="relative z-10 flex flex-col items-center justify-center gap-16">
            <Image
              width={100}
              height={100}
              src="/image/quote-start.svg"
              alt="quote"
              className="absolute top-0 left-0 z-0"
            />
            <span className="z-10 w-10/12 p-6 mt-16 bg-white rounded-md">
              BitScope is a powerful social media listening gauge wrapped in a
              user-friendly interface. To access useful visual information,
              simply go to the relevant service page and click a button.
            </span>
            <span className="z-10 w-10/12 p-6 mb-4 bg-white rounded-md">
              Service recognized by global marketing experts.
            </span>
            <Image
              width={100}
              height={100}
              src="/image/quote-end.svg"
              alt="quote"
              className="absolute z-0 right-3 bottom-20"
            />
          </div>
        </div>
      }
    >
      <div className="flex flex-col items-center w-full gap-2">
        <h2 className="text-xl font-black">Register</h2>
        <div className="flex flex-col w-full gap-2">
          <InputGroup
            id="email"
            type="email"
            placeholder="Your Email"
            register={register}
            className="w-full"
            errors={errors.email}
          />
          <div className="flex gap-4">
            <InputGroup
              id="first_name"
              type="text"
              placeholder="Your First Name"
              register={register}
              className="w-full"
              errors={errors.first_name}
            />
            <InputGroup
              id="last_name"
              type="text"
              placeholder="Your Last Name"
              register={register}
              className="w-full"
              errors={errors.last_name}
            />
          </div>
          <InputGroup
            id="password"
            type="password"
            placeholder="Your Password"
            register={register}
            className="w-full"
            errors={errors.password}
          />
          <InputGroup
            id="rePassword"
            type="password"
            placeholder="Re Enter You Pasword"
            register={register}
            className="w-full"
            errors={errors.rePassword}
          />
          <span className="pt-2 px-2 text-xs font-black">
            What are the problems you&apos;re looking to solve with BitScope?
          </span>
          <Select value={value} setValues={setValues} errors={errors.target} />
        </div>
        <Button type="submit" className="w-[90%]">
          Create My Account
        </Button>
        <span>OR</span>
        <Button outline={true} className="w-full text-sm">
          <Image
            alt="meta"
            src="/image/metamask-icon.png"
            width={30}
            height={30}
            className="mr-4"
          />
          Login with Metamask
        </Button>
      </div>
    </LayoutForm>
  );
}
