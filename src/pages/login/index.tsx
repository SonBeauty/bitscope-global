import LayoutForm from "@/components/LayoutForm";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../../components/PageComponents/Login/schema";
import InputGroup from "@/components/InputGroup";
import { Button, Checkbox, Label } from "flowbite-react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import SpanText from "@/components/SpanText";
import Image from "next/image";
export default function Login() {
  const [remember, setRemember] = useState<Boolean>(false);
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
    <LayoutForm newsFeed={true} handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <div className="flex flex-col items-center w-full gap-4">
        <h2 className="text-xl font-black">Login</h2>
        <div className="flex flex-col w-full gap-2">
          <InputGroup
            id="email"
            type="email"
            placeholder="Your Email"
            register={register}
            className="w-full"
            errors={errors.email}
            icon={EnvelopeIcon}
          />
          <InputGroup
            id="password"
            type="password"
            placeholder="Your password"
            register={register}
            className="w-full"
            errors={errors.password}
            icon={LockClosedIcon}
          />
          <div className="flex flex-col items-center justify-between gap-4 mt-2 ml-1 md:flex-row">
            <div className="flex items-center justify-center float-left gap-2">
              <Checkbox id="remember" onClick={() => setRemember(!remember)} />
              <Label htmlFor="remember">Remember me on this device</Label>
            </div>
            <SpanText content="Forgot password?" redirectLink="/forgot-pass" />
          </div>
        </div>
        <Button type="submit" className="w-[90%] m-4">
          Login
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

        <p>
          You don&apos;t have an account yet?{" "}
          <SpanText content="Create one now!" redirectLink="/register" />
        </p>
      </div>
    </LayoutForm>
  );
}