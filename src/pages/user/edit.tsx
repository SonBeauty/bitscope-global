import InputGroup from "@/components/InputGroup";
import LayoutProfile from "@/components/PageComponents/Profile/LayoutProfile";
import { schema } from "@/components/PageComponents/Profile/schema";
import Card from "@/components/ui/Card";
import { editUser } from "@/pages/api/auth/edit";
import { RootState } from "@/store";
import {
  CheckBadgeIcon,
  Cog6ToothIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const steps = [
  {
    id: 1,
    title: "Account Detail",
    icon: <Cog6ToothIcon className="h-8 w-8 text-inherit" />,
  },
  {
    id: 2,
    title: "Social Link",
    icon: <GlobeAsiaAustraliaIcon className="h-8 w-8 text-inherit" />,
  },
  {
    id: 3,
    title: "Verify",
    icon: <CheckBadgeIcon className="h-8 w-8 text-inherit" />,
  },
];
const Profile = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const user = useSelector((state: RootState) => state.users.user);

  const route = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const { mutate } = useMutation(editUser, {
    onSuccess: () => {
      setTimeout(() => {
        toast.success("Edit Success!");
        route.push("/user");
      }, 500);
    },
    onError: () => {
      setTimeout(() => {
        toast.error("Edit Failed!");
      }, 300);
    },
  });
  const onSubmit = (data: any) => {
    mutate({
      id: user?._id,
      formData: {
        email: data.email,
        name: data.name,
      },
    });
  };
  return (
    <>
      <LayoutProfile
        title="Edit Your Profile"
        name={user?.name || ""}
        username={user?.username}
      >
        <Card title="Profile Setting">
          <div className="grid gap-5 grid-cols-12">
            <div className="lg:col-span-3 col-span-12">
              <div className="flex justify-between z-[5] items-start relative flex-col lg:min-h-full md:min-h-[300px] min-h-[250px] gap-4">
                {steps.map((item, i) => (
                  <div
                    className="relative z-[1] last:flex-none cursor-pointer"
                    key={i}
                    onClick={() => setStepNumber(i)}
                  >
                    <div className={`${stepNumber === i && ""} p-3 `}>
                      <div
                        className={`${
                          stepNumber === i
                            ? "bg-[#005AE2] text-white ring-[#005AE2] ring-offset-2"
                            : "bg-white ring-slate-900 ring-opacity-70  text-slate-900 text-opacity-70"
                        } 
                        transition duration-150 icon-box md:h-12 md:w-12 cursor-pointer h-8 w-8 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium
            `}
                      >
                        {stepNumber === i ? (
                          <div className="bg-[#005AE2] rounded-full">
                            <span className="text-white"> {item.icon}</span>
                          </div>
                        ) : (
                          <div className="bg-white">
                            <span> {item.icon}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={` ${
                        stepNumber === i ? " text-white" : "text-white"
                      } absolute top-0 left-full pl-4 text-base leading-6 md:mt-6 mt-4 transition duration-150 w-full`}
                    >
                      <span
                        className={
                          stepNumber === i
                            ? "w-max block text-[#005AE2] text-xl font-semibold "
                            : "w-max block text-base font-medium text-black-500"
                        }
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="conten-box lg:col-span-9 col-span-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                {stepNumber === 0 && (
                  <div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                      <div className="lg:col-span-3 md:col-span-2 col-span-1">
                        <h4 className="text-base text-slate-800  mb-6">
                          Enter Your Account Details
                        </h4>
                      </div>
                      <InputGroup
                        label="Username"
                        type="text"
                        defaultValue={user?.username}
                        placeholder="Type your User Name"
                        id="username"
                        errors={errors.username}
                        register={register}
                      />
                      <InputGroup
                        label="Full name"
                        type="text"
                        defaultValue={user?.name}
                        placeholder="Full name"
                        id="name"
                        errors={errors.name}
                        register={register}
                      />
                      <InputGroup
                        label="Email"
                        type="email"
                        defaultValue={user?.email}
                        placeholder="Enter Your email"
                        id="email"
                        disabled={user?.isActive}
                        errors={errors.email}
                        register={register}
                      />
                      <InputGroup
                        label="Phone Number"
                        type="text"
                        defaultValue={user?.phone}
                        placeholder="Phone Number"
                        id="phone"
                        errors={errors.phone}
                        register={register}
                      />
                      <InputGroup
                        label="New Password"
                        type="password"
                        placeholder="8+ characters, 1 capitat letter "
                        id="password"
                        errors={errors.password}
                        register={register}
                      />
                      <InputGroup
                        label="Confirm New Password"
                        type="password"
                        placeholder="Password"
                        id="rePassword"
                        errors={errors.rePassword}
                        register={register}
                      />
                    </div>
                  </div>
                )}

                {stepNumber === 1 && (
                  <div className="w-[50%] mx-auto py-8 relative">
                    <Image
                      width={150}
                      height={150}
                      alt="comingsoon"
                      src="/image/cms2.svg"
                      className="w-full h-full"
                    />
                    <span className="font-bold text-2xl absolute bottom-[20%] left-[40%] text-[#005AE2]">
                      Social Link
                    </span>
                  </div>
                )}
                {stepNumber === 2 && (
                  <div className="w-[50%] mx-auto py-8 relative">
                    <Image
                      width={150}
                      height={150}
                      alt="comingsoon"
                      src="/image/cms2.svg"
                      className="w-full h-full"
                    />
                    <span className="font-bold text-2xl absolute bottom-[20%] left-[40%] text-[#005AE2]">
                      Verify
                    </span>
                  </div>
                )}
                {stepNumber === 0 && (
                  <div className="float-right mt-10">
                    <Button className="btn-dark" type="submit">
                      <span className="text-white">Save</span>
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </Card>
      </LayoutProfile>
    </>
  );
};
export default Profile;
