import InputGroup from "@/components/InputGroup";
import LayoutForm from "@/components/LayoutForm";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
const FakeNew = [
  {
    title: "Dope Bears",
    content:
      "Dope Bears is an NFT project that aims to create a unique and valuable collection of digital bear NFTs.",
    timeLine: "February 2023",
    link: "#",
  },
  {
    title: "Rogues Genesis",
    content:
      "Rogues Studio is creating post-apocalyptic social games on the blockchain.",
    timeLine: "March 2023",
  },
  {
    title: "Hocus Pocus Finance",
    content: "The Hocus Pocus sacrifice collection.",
    timeLine: "April 2023",
  },
];
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
      news={FakeNew}
      content="Don't panic! Enter your email address and we'll send you a
      password reset link!"
    >
      <InputGroup
        id="email"
        type="email"
        placeholder="Your Email"
        register={register}
        className="w-full sm:mt-20 mt-4"
        errors={errors.email}
        icon={EnvelopeIcon}
      />
      <Button type="submit" className="w-[90%] m-4">
        Reset Password
      </Button>
      {submit && (
        <div className="bg-slate-50 p-8 rounded-md">
          <span>
            We&apos;ll send you an activation link to your registered email so
            you can come back to us. We miss you!.{" "}
          </span>
        </div>
      )}
    </LayoutForm>
  );
}
