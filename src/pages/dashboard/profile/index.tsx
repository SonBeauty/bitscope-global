import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import InputGroup from "@/components/InputGroup";
import { schema } from "@/components/PageComponents/UpdateProfile/schema";
import LayoutDashBoard from "@/components/layout/Layout";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "flowbite-react";
import { useForm } from "react-hook-form";
export default function UpdateProfile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <LayoutDashBoard>
      <div className="mx-auto max-w-[1170px]">
        <Breadcrumb pageName="Update Profile" />
        <div className="grid gap-8">
          <div className="col-div-5 xl:col-div-3">
            <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                <div>
                  <div className="text-base font-bold">Names</div>
                  <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <InputGroup
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        register={register}
                        className="w-full"
                        errors={errors.firstName}
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <InputGroup
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        register={register}
                        className="w-full"
                        errors={errors.lastName}
                      />
                    </div>
                  </div>
                  <div className="text-base font-bold">Email</div>
                  <div className="mb-5">
                    <InputGroup
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      register={register}
                      className="w-full"
                      errors={errors.email}
                      icon={EnvelopeIcon}
                    />
                  </div>
                  <div className="text-base font-bold">Password</div>
                  <div className="mb-5.5">
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
                      placeholder="Re Enter You Password"
                      register={register}
                      className="w-full"
                      errors={errors.rePassword}
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-3">
                    <Button className="w-[full" outline={true}>
                      Cancel
                    </Button>
                    <Button type="submit" className="w-[full]">
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashBoard>
  );
}
