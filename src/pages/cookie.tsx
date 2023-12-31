"use client";

import { Label, TextInput } from "flowbite-react";
import Pagination from "@mui/material/Pagination";
import LayoutDashBoard from "@/components/layout/Layout";
import BackLeftSVG from "@/components/svg/BackLeftSVG";
import NoAccessHistorySVG from "@/components/svg/NoAccessHistorySVG";
import TrashAuthenSVG from "@/components/svg/TrashAuthenSVG";
import { TABLE_HEAD, TABLE_ROWS } from "@/constant/components/Cookie";
import {
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";
import DismissableModal from "@/components/Modal";
import { FaEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useStyles } from "@/components/Pagination/useStyles";
import {
  CreateCookie,
  DeleteCookie,
  UpdateCookie,
  GetCookie,
} from "./api/cookie/GetCookie";

export default function Cookie() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const classes = useStyles();
  const [page, setPage] = useState<number>(1);
  const [valueCookie, setValueCookie] = useState<string>();
  const [valueCsrfToken, setValueCsrfToken] = useState<string>();
  const [csrfTokenUpdate, setCsrfTokenUpdate] = useState<string>();
  const [tokenUpdate, setTokenUpdate] = useState<string>();
  const [cookieUpdate, setCookieUpdate] = useState<string>();
  const [statusUpdate, setStatusUpdate] = useState<number>();
  const [idupdate, setIdUpdate] = useState<string>("");
  const [createInput, setCreateInput] = useState<boolean>(false);
  const [updateInput, setUpdateInput] = useState<boolean>(false);
  const [modelCsrfToken, setModelCsrfToken] = useState<boolean>(false);
  const [valueModelCsrfToken, setValueModelCsrfToken] = useState<string>();
  const { data, isLoading } = useQuery<any>({
    queryKey: ["cookie", page],
    queryFn: () =>
      GetCookie({
        status: "0",
        page: page,
        limit: "10",
      }),
    staleTime: Infinity,
  });
  const realData = data?.data;

  const convertDate = (date: any) => {
    const { format } = require("date-fns");
    const { vi } = require("date-fns/locale");
    const dateString = new Date(date);
    const formattedDate = format(dateString, "dd mm yyyy hh:mm:ss", {
      locale: vi,
    });
    return formattedDate;
  };
  const mutate = useMutation(DeleteCookie, {
    onSuccess: () => {
      toast.success("Delete Cookie Success!");
    },
    onError: () => {
      toast.error("Delete Failed!");
    },
  });
  const mutation = useMutation(CreateCookie, {
    onSuccess: () => {
      toast.success("Create Cookie Success!");
    },
    onError: () => {
      toast.error("Create Failed!");
    },
  });
  const mutateUpdate = useMutation(UpdateCookie, {
    onSuccess: (data) => {
      queryClient.setQueryData(["cookie", { id: data._id }], data);
      toast.success("Update Cookie Success!");
    },
    onError: () => {
      toast.error("Update Failed!");
    },
  });

  const handleDelete = (id: any) => {
    if (window.confirm("Are You Sure DELETE Cookie ?")) {
      mutate.mutate(id);
    }
  };

  const ToggleCreate = () => {
    setCreateInput(!createInput);
  };

  const SaveCookie = async (cookie: any) => {
    setValueCookie(cookie);
  };
  const SaveCsrfToken = async (csrfToken: any) => {
    setValueCsrfToken(csrfToken);
  };
  const handleSubmit = async () => {
    mutation.mutate({ cookie: valueCookie, csrfToken: valueCsrfToken });
    ToggleCreate();
  };

  const modelUpdate = (id: string) => {
    setUpdateInput(!updateInput);
    setIdUpdate(id);
  };
  const toggleUpdate = () => {
    setUpdateInput(!updateInput);
  };
  const handleUpdate = (data: any, action: any) => {
    if (action === "cookie") {
      setCookieUpdate(data);
    }
    if (action === "token") {
      setTokenUpdate(data);
    }
    if (action === "csrfToken") {
      setCsrfTokenUpdate(data);
    }
    if (action === "status") {
      setStatusUpdate(data);
    }
  };
  const handleSubmitUpdate = async () => {
    mutateUpdate.mutate({
      id: idupdate,
      cookie: cookieUpdate,
      token: tokenUpdate,
      csrfToken: csrfTokenUpdate,
      status: statusUpdate,
    });

    toggleUpdate();
  };

  const toggleCsrfToken = (data: string) => {
    setValueModelCsrfToken(data);
    setModelCsrfToken(!modelCsrfToken);
  };

  return (
    <LayoutDashBoard className="bg-white md:p-5 py-[15px]">
      <div className="flex flex-col gap-4">
        <Card className="h-full bg-[#f6fbff] w-full max-h-[795.08px] p-0 m-0 shadow-[0_1px_2px_rgba(0,0,0,0.25)] rounded-md">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none rounded-tl-[6px] rounded-tr-[6px] bg-[#0046B0] mt-0 mx-0  md:h-[54px]"
          >
            <div className="flex justify-between flex-row items-center">
              <span className="flex gap-[14px] items-center justify-center px-[1rem] md:px-0">
                <div
                  onClick={() => router.push("/authentication")}
                  className="md:hidden block"
                >
                  <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px]" />
                </div>
                <span className="font-Inter py-[1.06rem] md:px-[1.38rem] text-white text-lg leading-5 font-bold">
                  List Cookie
                </span>
              </span>

              <DismissableModal
                open={createInput}
                setOpen={ToggleCreate}
                className="w-[388px] h-[280px] mx-auto self-center"
              >
                <div className="flex max-w-md flex-col gap-4 p-4">
                  <div>
                    <div className="px-2 py-2 flex justify-between">
                      <Label
                        htmlFor="small"
                        value="Enter the value to create"
                      />
                      <button>
                        <AiOutlineClose
                          className="text-lg"
                          onClick={ToggleCreate}
                        />
                      </button>
                    </div>
                    <div className="pt-2">
                      <Label htmlFor="small" value="Cookie" />
                      <TextInput
                        id="small"
                        sizing="md"
                        placeholder="Least 100 characters"
                        type="text"
                        value={valueCookie}
                        minLength={100}
                        onChange={(e) => SaveCookie(e.target.value)}
                      />
                      <Label htmlFor="small" value="CsfrToken" />
                      <TextInput
                        id="small"
                        sizing="md"
                        type="text"
                        placeholder="Least 70 characters"
                        minLength={70}
                        value={valueCsrfToken}
                        onChange={(e) => SaveCsrfToken(e.target.value)}
                      />
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className=" ml-[115px] mt-[25px] text-[#fff] bg-blue-600 rounded-lg font-medium text-center p-[0.125rem] hover:bg-[rgb(30 66 159)] text-sm px-5 py-3"
                      >
                        Create Cookie
                      </button>
                    </div>
                  </div>
                </div>
              </DismissableModal>

              <DismissableModal
                open={updateInput}
                setOpen={toggleUpdate}
                className="w-[388px] h-[410px] mx-auto self-center"
              >
                <div className="flex max-w-md flex-col gap-4 p-4">
                  <div>
                    <div className="px-2 py-2 flex justify-between">
                      <Label
                        htmlFor="small"
                        value="Enter the value to be edited"
                      />
                      <button>
                        <AiOutlineClose
                          className="text-lg"
                          onClick={toggleUpdate}
                        />
                      </button>
                    </div>
                    <div className="pt-2">
                      <Label htmlFor="small" value="Cookie" />
                      <TextInput
                        id="small"
                        sizing="md"
                        type="text"
                        placeholder="Least 100 characters"
                        minLength={100}
                        value={cookieUpdate}
                        onChange={(e) => handleUpdate(e.target.value, "cookie")}
                      />

                      <Label htmlFor="small" value="Token" />
                      <TextInput
                        id="small"
                        sizing="md"
                        placeholder="Least 20 characters"
                        type="text"
                        value={tokenUpdate}
                        minLength={25}
                        onChange={(e) => handleUpdate(e.target.value, "token")}
                      />

                      <Label htmlFor="small" value="CsrfToken" />
                      <TextInput
                        id="small"
                        sizing="md"
                        type="text"
                        placeholder="Least 75 characters"
                        value={csrfTokenUpdate}
                        minLength={70}
                        onChange={(e) =>
                          handleUpdate(e.target.value, "csrfToken")
                        }
                      />

                      <Label htmlFor="small" value="Status" />
                      <TextInput
                        id="small"
                        sizing="md"
                        type="text"
                        value={statusUpdate}
                        onChange={(e) => handleUpdate(e.target.value, "status")}
                      />
                      <button
                        type="submit"
                        onClick={handleSubmitUpdate}
                        className=" ml-[115px] mt-[25px] text-[#fff] bg-blue-600 rounded-lg font-medium text-center p-[0.125rem] hover:bg-[rgb(30 66 159)] text-sm px-5 py-3"
                      >
                        Update Cookie
                      </button>
                    </div>
                  </div>
                </div>
              </DismissableModal>

              <DismissableModal
                open={modelCsrfToken}
                setOpen={toggleCsrfToken}
                className="w-full mx-auto self-center text-center py-5"
              >
                <Label value={valueModelCsrfToken} />
              </DismissableModal>

              {!isLoading && realData?.data?.length > 0 && (
                <div
                  onClick={() => ToggleCreate()}
                  className="hidden hover:bg-[#00388D] duration-500 ease-linear md:block pt-[1.06rem] px-[1.81rem] pb-[0.94rem] font-Inter text-white text-lg leading-[21.78px] font-semibold cursor-pointer"
                >
                  Create Cookie
                </div>
              )}
            </div>
          </CardHeader>
          <CardBody className="px-0 p-0 md:bg-[#F6FBFF] bg-[#D3ECFF] w-full overflow-x-auto ">
            <div className="block">
              {isLoading ? (
                <div className="h-[65vh] flex items-center justify-center">
                  <Player
                    autoplay
                    loop
                    src="/assets/jsonGif/ManAndRobotWithComputers.json"
                    style={{ minHeight: "50vh", width: "75%" }}
                    className="p-0"
                  />
                </div>
              ) : (
                <table className="w-full table-auto text-left">
                  <thead className="w-full ">
                    <tr className="bg-[#D3ECFF] h-[55px] flex w-full justify-between px-2 md:pl-[22px] py-[17px] md:pr-[42px]">
                      {TABLE_HEAD.map((head, index) => (
                        <th
                          key={index}
                          className={`${head.class} flex items-center`}
                        >
                          <Typography
                            className={`font-Inter font-semibold text-start text-lg leading-[22px] text-[#181C32] `}
                          >
                            {head.title}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {realData?.data?.length > 0 &&
                      realData?.data?.map((item: any, index: number) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                          ? ""
                          : "border-b border-dashed border-[#e4e3e3]";
                        return (
                          <tr
                            className="flex hover:bg-[#EBF4FF] hover:shadow-sm duration-300 ease-in-out"
                            key={index}
                          >
                            <td
                              className={`${classes} py-[13px] px-[22px] h-[55px] basis-[7%]`}
                            >
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium text-[16.26px] leading-[28.69px] text-[#1C1C1C]"
                              >
                                {index + 1}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} w-[250px] h-[55px] flex items-center justify-start basis-[34.5%]`}
                              onClick={() => toggleCsrfToken(item.csrfToken)}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 text-center font-Inter ">
                                {item.csrfToken?.slice(0, 35)}...
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center  basis-[13%]`}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                {item.status}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} lg:visible invisible pt-[12px] pb-[17px] px-[22px] h-[55px] basis-[13%]`}
                            >
                              <div className="flex justify-between items-center">
                                <Typography className="text-[#000000] font-Inter font-medium text-sm leading-[16px] text-center mt-2">
                                  {item.requestCount}
                                </Typography>
                              </div>
                            </td>

                            <td
                              className={`${classes} lg:visible invisible pt-[12px] pb-[17px] px-[22px] h-[55px] basis-[23.5%]`}
                            >
                              <div className="flex justify-between">
                                <Typography className="text-[#000000] mt-2 font-Inter font-medium text-sm leading-[15px]">
                                  {convertDate(item.updatedAt)}
                                </Typography>
                              </div>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start pt-[18px] pb-[17px] px-[22px] pr-[42px] h-[55px] basis-0`}
                            >
                              <div className="flex items-center gap-[19px] justify-center">
                                <div
                                  onClick={() => modelUpdate(item._id)}
                                  className="cursor-pointer"
                                >
                                  <FaEdit className="stroke-[#28303F] hover:stroke-[#E32626] duration-500 ease-in-out" />
                                </div>
                                <div
                                  onClick={() => handleDelete(item._id)}
                                  className="cursor-pointer"
                                >
                                  <TrashAuthenSVG className="stroke-[#28303F] hover:stroke-[#E32626] duration-500 ease-in-out" />
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
            {!isLoading &&
              (realData?.data?.length === 0 || !realData?.data) && (
                <div className="w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
                  <div className="flex flex-col justify-center items-center gap-7">
                    <NoAccessHistorySVG />
                    <span className="font-Inter font-bold text-xl leading-[24.2px] text-[#697489]">
                      No Cookie
                    </span>
                  </div>
                </div>
              )}
          </CardBody>
        </Card>
        {!isLoading && realData?.data?.length > 0 && (
          <CardFooter className="-mr-[9.5px]  flex items-center justify-end p-0 bg-white">
            <div className={classes.root}>
              <Pagination
                count={realData?.totalPage}
                variant="text"
                shape="rounded"
                page={page}
                onChange={(e, page) => setPage(page)}
                sx={{
                  "& .MuiPaginationItem-page": {
                    color: "#000000",
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeigh: 20,
                    fontFamily: "Inter",
                    width: 32,
                    height: 32,
                  },
                  "& .MuiPaginationItem-page:hover": {
                    backgroundColor: "#e6f5fe",
                  },
                }}
              />
            </div>
          </CardFooter>
        )}
      </div>
    </LayoutDashBoard>
  );
}
