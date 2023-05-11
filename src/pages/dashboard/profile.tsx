import InputGroup from "@/components/InputGroup";
import HomeBredCurbs from "@/components/PageComponents/Dashboard/HomeBredCurbs";
import { schema } from "@/components/PageComponents/UpdateProfile/schema";
import LayoutDashBoard from "@/components/layout/Layout";
import { RootState } from "@/store";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
export default function UpdateProfile() {
  const user = useSelector((state: RootState) => state.users.user);
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
        <HomeBredCurbs title="Profile" />
        <div className="grid gap-8">
          <div className="col-div-5 xl:col-div-3">
            <div className=" rounded-3xl border p-4 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke p-1 py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                <div>
                  <div className="text-base font-bold">Name</div>
                  <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                    <div className="w-full">
                      <InputGroup
                        id="name"
                        type="text"
                        defaultValue={user?.name}
                        placeholder="Your Name"
                        register={register}
                        className="w-full"
                        errors={errors.name}
                      />
                    </div>
                  </div>
                  <div className="text-base font-bold">Email</div>
                  <div className="mb-5">
                    <InputGroup
                      id="email"
                      type="email"
                      defaultValue={user?.email}
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
                      className="w-full mt-4"
                      errors={errors.password}
                    />
                    <InputGroup
                      id="rePassword"
                      type="password"
                      placeholder="Re Enter You Password"
                      register={register}
                      className="w-full mt-4"
                      errors={errors.rePassword}
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-3">
                    <Button className="w-[full" outline={true}>
                      Cancel
                    </Button>
                    <Button type="submit" className="w-[full]">
                      <span className="text-white">Save</span>
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
