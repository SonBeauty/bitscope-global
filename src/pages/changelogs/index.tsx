"use client";
import InputGroup from "@/components/InputGroup";
import Loading from "@/components/Loading";
import DismissableModal from "@/components/Modal";
import ArrayField from "@/components/PageComponents/Changelogs/ArrayField";
import DiclosureComponent from "@/components/PageComponents/Changelogs/DiclosureComponent";
import { schema } from "@/components/PageComponents/Changelogs/schema";
import LayoutDashBoard from "@/components/layout/Layout";
import LoadingSVG from "@/components/svg/LoadingSVG";
import Card from "@/components/ui/Card";
import Icons from "@/components/ui/Icon";
import { convertDate } from "@/services/Authentication";
import { Disclosure } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button as But,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useOnClickOutside } from "usehooks-ts";
import {
  addChangelogs,
  changelogsDetail,
  deleteChangelogs,
  listChangelogs,
} from "../api/changelogs";
import EditChangelogs from "./edit";

const date = new Date();
export default function Changelogs() {
  const [id, setId] = useState<string>("");
  const [version, setVersion] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [editOrDelete, setEditOrDelete] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const ref = useRef<any>(null);
  const queryClient = useQueryClient();

  const { data: dataAPI } = useQuery(["changelogs"], listChangelogs);
  const { data: dataInfo, isLoading } = useQuery(["changelogs", id], () =>
    changelogsDetail(id)
  );
  const { mutate: addChangelog, isLoading: isLoadings } = useMutation(
    addChangelogs,
    {
      onSuccess: () => {
        toast.success("Add Changelog Successfully");
        reset();
        setVersion("");
        queryClient.invalidateQueries({ queryKey: ["changelogs"] });
      },
      onError: (err) => {
        toast.error("Content cannot be left blank");
      },
    }
  );

  const { mutate: deleteChangelog } = useMutation(deleteChangelogs, {
    onSuccess: async () => {
      toast.success("Delete Changelog Successfully");
      queryClient.invalidateQueries({ queryKey: ["changelogs"] });
      reset();
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      version: "",
      changelog: [{ content: "", tag: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "changelog",
  });

  const onSubmit = (data: any) => {
    const _data = {
      name: "Changelog " + data.version,
      change: data.changelog.map((item: any) => {
        if (item?.tag?.length === 0) {
          delete item.tag;
        }
        return { name: item.content, tag: item.tag };
      }),
    };
    addChangelog(_data);
  };

  const handleChanges = (name: string, _id: string) => {
    setEditOrDelete(name);
    setId(_id);
    setOpen(true);
  };

  const handleClickDelete = () => {
    if (editOrDelete === "Delete") {
      deleteChangelog(id);
    }
    setOpen(false);
  };

  const handleClickOutside = () => {
    setOpen(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  useEffect(() => {
    setData(dataAPI);
  }, [dataAPI]);
  return (
    <LayoutDashBoard className="p-1 md:p-5 h-screen overflow-y-auto">
      <div className="md:mb-6 mb-4 flex space-x-3 rtl:space-x-reverse">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 px-2">
          Changelog Managerment
        </h4>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-7 col-span-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4 justify-start items-center">
              <span className="font-semibold text-xl basis-3/5 text-start px-[10px]">
                Version
              </span>
              <InputGroup
                id="version"
                type="text"
                placeholder="Ex: 3.6"
                register={register as any}
                className="basis-2/5"
                errors={errors.version}
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                icon={null}
              />
            </div>
            <span className="font-semibold text-lg pt-4 block text-start px-[10px]">
              Content
            </span>
            {fields.map((item, index) => {
              return (
                <ArrayField
                  index={index}
                  control={control}
                  register={register}
                  remove={remove}
                  key={index}
                  name="changelog"
                />
              );
            })}
            <div
              className="bg-blue-500 cursor-pointer flex gap-4 py-2 px-1 my-4 mx-2 rounded-md"
              onClick={() => {
                append({ content: "", tag: "" });
              }}
            >
              <PlusCircleIcon className="h-6 w-6 text-white" />
              <span className="text-white">Add Content</span>
            </div>

            <div>
              <Button
                type="submit"
                className="hover:text-white float-right mr-2"
                outline
              >
                {isLoadings ? <LoadingSVG /> : "Submit"}
              </Button>
            </div>
          </form>
        </div>
        <div className="lg:col-span-5 col-span-12">
          <Card title="Pre View" className="h-full">
            {version.length > 0 && (
              <Disclosure defaultOpen={true}>
                <Disclosure.Button className="bg-slate-50  rounded-t-md flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600  px-8 py-4">
                  <span>
                    Changelogs {version}
                    <span className="font-semibold text-xs text-slate-400">
                      {" "}
                      {convertDate(date.toString())}
                    </span>
                  </span>
                  <span
                    className={` ${"rotate-180 transform"}  transition-all duration-150 text-xl`}
                  >
                    <Icons icon="heroicons:chevron-down-solid" />
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="text-sm text-slate-600 font-normal bg-white   rounded-b-md border border-slate-100 border-t-0">
                    <div className="px-8 py-4">
                      {watch("changelog").length > 0 &&
                        watch("changelog").map((item: any, index: number) => {
                          return (
                            <div key={index}>
                              <div className="flex space-x-3 items-center mt-2 text-slate-600  text-sm">
                                <span className="h-2 w-2 bg-primary-500 rounded-full"></span>
                                <span>{item?.content}</span>
                                <span
                                  className={clsx(
                                    "px-2 rounded-full text-xs capitalize",
                                    {
                                      "bg-indigo-100 text-indigo-500":
                                        item.tag === "added",
                                      "bg-yellow-100 text-yellow-500":
                                        item.tag === "updated",
                                      "bg-red-100 text-red-500":
                                        item.tag === "fixed",
                                    }
                                  )}
                                >
                                  {item.tag}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </Disclosure.Panel>
              </Disclosure>
            )}
          </Card>
        </div>
        <div className="lg:col-span-7 col-span-12">
          <Card title="Version's">
            <div className="mt-6 space-y-5">
              {data?.map((item: any, i: number) => (
                <div key={i} className="mb-3">
                  <DiclosureComponent
                    item={item}
                    isEdit={true}
                    handleClick={handleChanges}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      
      </div>
      <DismissableModal
        open={open}
        setOpen={setOpen}
        ref={ref}
        className={`flex items-start justify-center ${
          editOrDelete === "Delete" ? "w-[90vw] md:w-[35vw]" : "w-[80vw]"
        } max-w-screen mx-auto p-4`}
      >
        {editOrDelete === "Delete" && (
          <div className="">
            <DialogHeader>Are you sure you want to delete ?</DialogHeader>
            <DialogBody divider>
              <div className="mt-6 space-y-5">
                <div className="mb-3">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <DiclosureComponent
                      item={dataInfo?.data}
                      handleClick={handleChanges}
                      openDefault={true}
                    />
                  )}
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <But
                variant="text"
                color="red"
                onClick={() => setOpen(false)}
                className="mr-1"
              >
                <span>Cancel</span>
              </But>
              <But
                variant="gradient"
                color="red"
                className="bg-red-400 hover:bg-red-500 transition-all duration-200"
                onClick={() => handleClickDelete()}
              >
                <span className="text-white">Confirm</span>
              </But>
            </DialogFooter>
          </div>
        )}
        {editOrDelete === "Edit" && (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <EditChangelogs item={dataInfo?.data} id={id} setOpen={setOpen} />
            )}
          </>
        )}
      </DismissableModal>
    </LayoutDashBoard>
  );
}
