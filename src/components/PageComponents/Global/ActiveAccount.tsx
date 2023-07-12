import InputGroup from "@/components/InputGroup";
import LayoutForm from "@/components/LayoutForm";
import { reSendEmail } from "@/pages/api/auth/reSendEmail";
import { logout } from "@/store/users";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { activeSchema } from "../Global/activeSchema";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ActivatedProps {
  user: any;
}
export default function ActiveAccount({ user }: ActivatedProps) {
  const dispatch = useDispatch();
  const { mutate, isLoading } = useMutation(reSendEmail, {
    onSuccess: async () => {
      setTimeout(() => {
        toast.success("Resend successful. Please check your email");
      }, 100);
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(activeSchema),
    mode: "all",
  });
  const onSubmit = (data: any) => {
    if (user && data.email === user.email) {
      return mutate(data.email);
    }
    toast.error(
      "The email you entered is not correct with the registered email."
    );
  };
  return (
    <LayoutForm
      page="Account Has Not Been Activated"
      content="Please Active Account To Login"
      button="Resend Active Email"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isLoading={isLoading}
      social={false}
      childrenTwo={
        <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 mt-5 uppercase text-sm">
          Back to{" "}
          <Link
            onClick={() => dispatch(logout())}
            href="/login"
            className="text-slate-900 font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      }
    >
      <>
        <div className="font-normal text-base text-slate-500 text-center px-2 bg-slate-100 rounded py-3 mb-4 mt-10">
          Activate your account at{" "}
          <Link
            href="https://mail.google.com/mail"
            target="_blank"
            className="underline text-[#005AE2] hover:text-blue-900"
          >
            mailbox
          </Link>
          . If you do not receive the email, please request again
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
      <ToastContainer />
    </LayoutForm>
  );
}