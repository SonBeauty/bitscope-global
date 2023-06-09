import InputGroup from "@/components/InputGroup";
import LayoutForm from "@/components/LayoutForm";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../components/PageComponents/ForgotPass/schema";
export default function ForgotPass() {
  const [submit, setSubmit] = useState<Boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const onSubmit = (data: any) => {
    setSubmit(true);
  };
  return (
    <LayoutForm
      page="Forgot Your Password?"
      content="Reset Password with BitScope."
      button="Send Recovery Email"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      social={false}
      childrenTwo={
        <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 mt-5 uppercase text-sm">
          FORGET IT,
          <Link
            href="/register"
            className="text-slate-900 font-medium hover:underline"
          >
            Sign up
          </Link>{" "}
          TO THE SIGN IN
        </div>
      }
    >
      <>
        <div className="font-normal text-base text-slate-500 text-center px-2 bg-slate-100 rounded py-3 mb-4 mt-10">
          Don&apos;t worry, we will help you recover your password quickly
        </div>
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
      </>
    </LayoutForm>
  );
}
