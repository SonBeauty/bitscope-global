import InputGroup from "@/components/InputGroup";
import LayoutForm from "@/components/LayoutForm";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
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
      newsFeed={true}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      content="Don't panic! Enter your email address and we'll send you a
      password reset link!"
    >
      <InputGroup
        id="email"
        type="email"
        placeholder="Your Email"
        register={register}
        className="w-full mt-4 sm:mt-20"
        errors={errors.email}
        icon={EnvelopeIcon}
      />
      <Button type="submit" className="w-[90%] m-4">
        Reset Password
      </Button>
      {submit && (
        <div className="p-8 rounded-md bg-slate-50">
          <span>
            We&apos;ll send you an activation link to your registered email so
            you can come back to us. We miss you!.{" "}
          </span>
        </div>
      )}
    </LayoutForm>
  );
}