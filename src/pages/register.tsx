import InputGroup from "@/components/InputGroup";
import LayoutForm from "@/components/LayoutForm";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Checkbox, Label } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { schema } from "../components/PageComponents/Register/schema";
import { registerUser } from "./api/auth/register";
import { useRouter } from "next/router";

export default function Register() {
  const [accept, setAccept] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const { mutate, isLoading } = useMutation(registerUser, {
    onSuccess: (data) => {
      if (data.status === 400) {
        if (data.message.includes("Please enter correct email")) {
          return toast.error("Please enter correct email!");
        }
        return toast.error("Email already exists!");
      }
      if (data.status === 409) {
        return toast.error(data.message);
      }
      toast.success("Register Success!");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    },
    onError: (err) => {
      toast.error("Register Failed, Please try again!");
    },
  });
  const onSubmit = (data: any) => {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      referralCode: data.referral,
    });
  };
  const handleChange = (e: any) => {
    setValue("referral", e.target.value);
  };
  useEffect(() => {
    setValue("check", accept);
  }, [accept, setValue]);
  useEffect(() => {
    setValue("check", accept);
  }, [accept, setValue]);
  useEffect(() => {
    setValue("referral", router.query["ref"]?.toString());
  }, [router, setValue]);

  return (
    <LayoutForm
      page="Sign up"
      content="Create an account to start using BitScope"
      button="Create An Account"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isLoading={isLoading}
      childrenTwo={
        <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 mt-5 uppercase text-sm">
          Have an account?{" "}
          <Link
            href="/login"
            className="text-slate-900  font-medium hover:underline"
          >
            Sign in
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
        <InputGroup
          id="rePassword"
          type="password"
          label="Enter The Password"
          placeholder="Enter The Password"
          register={register}
          className="w-full"
          errors={errors.rePassword}
          icon={LockClosedIcon}
        />
        <InputGroup
          id="referral"
          type="text"
          label="Referral"
          placeholder="Your referral code"
          register={register}
          className="w-full"
          icon={LockClosedIcon}
          onChange={handleChange}
        />
        <div className="flex flex-row items-center justify-between gap-4 mt-2 ml-1 md:flex-row">
          <div className="flex items-center justify-center float-left gap-2 py-2">
            <Checkbox
              id="remember"
              onClick={() => {
                setAccept(!accept);
              }}
            />
            <Label htmlFor="remember" className="font-normal">
              <span className="text-slate-500">
                You Accept Our Terms And Conditions And Privacy Policy
              </span>
            </Label>
          </div>
        </div>
        {errors["check"] && (
          <span className="block p-1 pl-1 text-sm text-red-500">
            {errors["check"]?.message?.toString()}
          </span>
        )}
      </>
    </LayoutForm>
  );
}
