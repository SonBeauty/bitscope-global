import InputGroup from "@/components/InputGroup";
import LayoutForm from "@/components/LayoutForm";
import SpanText from "@/components/SpanText";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Checkbox, Label } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { schema } from "../components/PageComponents/Login/schema";
import { loginUser } from "./api/auth/login";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/users";
export default function Login() {
  const route = useRouter();
  const [remember, setRemember] = useState<Boolean>(false);
  const dispath = useDispatch();
  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: (data) => {
      console.log(data);
      toast.success("Login Success!");
      if (remember) {
        localStorage.setItem("token", data.token);
      } else {
        sessionStorage.setItem("token", data.token);
      }
      dispath(setUser(data));
      setTimeout(() => {
        route.push("/dashboard");
      }, 300);
    },
    onError: () => {
      toast.error("Login Failed!");
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const onSubmit = (data: any) => {
    mutate({
      email: data.email,
      password: data.password,
    });
  };
  return (
    <LayoutForm
      page="Sign in"
      content="Sign in to your account to start using BitScope"
      button="Sign In"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isLoading={isLoading}
      childrenTwo={
        <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 mt-5 uppercase text-sm">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-slate-900 font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>
      }
    >
      <>
        <InputGroup
          id="email"
          type="email"
          placeholder="Your Email"
          register={register as any}
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
          register={register as any}
          className="w-full"
          errors={errors.password}
          icon={LockClosedIcon}
        />
        <div className="flex flex-row items-center justify-between gap-4 mt-2 ml-1 md:flex-row">
          <div className="flex items-center justify-center float-left gap-2 py-1">
            <Checkbox id="remember" onClick={() => setRemember(!remember)} />
            <Label htmlFor="remember" className="font-normal text-slate-500">
              <span className="text-xs sm:text-sm text-slate-500 font-nomal">
                Keep Me Signed In
              </span>
            </Label>
          </div>
          <SpanText content="Forgot password?" redirectLink="/forgot-pass" />
        </div>
      </>
    </LayoutForm>
  );
}
