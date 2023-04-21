import InputGroup from "@/components/InputGroup";
import LayoutForm from "@/components/LayoutForm";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, Label } from "flowbite-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { schema } from "../../components/PageComponents/Register/schema";

export default function Register() {
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

  return (
    <LayoutForm
      page="Sign up"
      content="Create an account to start using ZenUI"
      button="Create An Account"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      childrenTwo={
        <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-5 uppercase text-sm">
          Don’t have an account?{" "}
          <Link
            href="/login"
            className="text-slate-900 dark:text-white font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>
      }
    >
      <>
        <InputGroup
          id="name"
          type="text"
          placeholder="Your Name"
          register={register}
          label="Name"
          className="w-full"
          errors={errors.name}
        />

        <InputGroup
          id="email"
          type="email"
          placeholder="Your Email"
          register={register}
          label="Email"
          className="w-full"
          errors={errors.email}
          icon={EnvelopeIcon}
        />
        <InputGroup
          id="password"
          type="password"
          label="Password"
          placeholder="Your password"
          register={register}
          className="w-full"
          errors={errors.password}
          icon={LockClosedIcon}
        />
        <div className="flex flex-row items-center justify-between gap-4 mt-2 ml-1 md:flex-row">
          <div className="flex items-center justify-center float-left gap-2 py-2">
            <Checkbox id="remember" onClick={() => {}} />
            <Label htmlFor="remember" className="font-normal text-slate-500">
              You Accept Our Terms And Conditions And Privacy Policy
            </Label>
          </div>
        </div>
      </>
    </LayoutForm>
  );
}
