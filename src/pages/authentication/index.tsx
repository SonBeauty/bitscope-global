import AuthenInput from "@/components/PageComponents/Authentication/AuthenInput";
import {
  schema,
  schemaConditions,
} from "@/components/PageComponents/Authentication/schema";
import LayoutDashBoard from "@/components/layout/Layout";
import AuthenticationSVG from "@/components/svg/Authentication";
import ClockSVG from "@/components/svg/ClockSVG";
import LoadingSVG from "@/components/svg/LoadingSVG";
import { getUserAuthen } from "@/pages/api/authentication/AuthenTwiterAndTele";
import { combineLinkAndAddress } from "@/services/Authentication";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillDashCircleFill, BsFillPlusCircleFill } from "react-icons/bs";
import { toast } from "react-toastify";
export default function Authentication() {
  const [schemaCondition, setSchemaCondition] = useState<boolean>(true);
  const [addLink, setAddLink] = useState<boolean>(true);
  const [iconTW, setIconTW] = useState<string>("TW");
  const [iconTE, setIconTE] = useState<string>("TE");
  const [textTW, setTextTW] = useState<string>("");
  const [textTE, setTextTE] = useState<string>("");
  const [del, setDel] = useState<string | null>(null);

  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
    trigger,
  } = useForm({
    resolver: yupResolver(schemaCondition ? schema : schemaConditions),
    mode: "all",
  });
  const { mutate, isLoading } = useMutation(getUserAuthen, {
    onSuccess: (data) => {
      toast.success("Authentication Success!");
      router.push(`/authentication/${data._id}`);
    },
    onError: () => {
      toast.error("Authentication Failed. Please try again!");
    },
  });
  const onSubmit = (data: any) => {
    const datas = {
      twitter: iconTW === "TW" ? data.twitter : data.telegram,
      telegram: iconTE === "TE" ? data.telegram : data.twitter,
    };
    mutate({
      twitter: combineLinkAndAddress("https://twitter.com", datas.twitter),
      telegram: combineLinkAndAddress("https://t.me", datas.telegram),
    });
  };
  const handleAppend = (name: string) => {
    setAddLink(true);
    setDel(name);
  };
  const handleSetIconTW = (value: string) => {
    textTW.length > 1 &&
      setTimeout(() => {
        trigger();
      }, 150);

    if (iconTE === "TW" && value === "TW") {
      setIconTE("TE");
      setIconTW(value);
    } else if (iconTE === "TE" && value === "TE") {
      setIconTE("TW");
      setIconTW(value);
    } else {
      setIconTW(value);
    }
  };
  const handleSetIconTE = (value: string) => {
    textTE.length > 1 &&
      setTimeout(() => {
        trigger();
      }, 150);

    if (iconTW === "TW" && value === "TW") {
      setIconTW("TE");
      setIconTE(value);
    } else if (iconTW === "TE" && value === "TE") {
      setIconTW("TW");
      setIconTE(value);
    } else {
      setIconTE(value);
    }
  };
  const addNewLink = () => {
    setAddLink(false);
    if (iconTW === "TW") {
      setIconTE("TE");
    } else {
      setIconTE("TW");
    }
  };
  const handleChange = (e: any) => {
    const name = e.target.id;
    const value = e.target.value;
    if (name === "twitter") setTextTW(value);
    if (name === "telegram") setTextTE(value);
  };
  useEffect(() => {
    if (del === "TE") {
      if (iconTE === "TE") {
        clearErrors("telegram");
        setValue("telegram", "");
        textTW.length > 1 &&
          setTimeout(() => {
            trigger();
          }, 150);
      }
      if (iconTE === "TW") {
        setIconTW("TE");
        setValue("twitter", textTW);
        setValue("telegram", "");
        clearErrors("telegram");
        textTW.length > 1 &&
          setTimeout(() => {
            trigger();
          }, 150);
      }
      setDel(null);
    }
    if (del === "TW") {
      if (iconTW === "TE") {
        clearErrors("twitter");
        textTE.length > 1 &&
          setTimeout(() => {
            trigger();
          }, 150);

        setIconTW("TW");
        setValue("twitter", textTE);
        setValue("telegram", "");
      }
      if (iconTW === "TW") {
        clearErrors("twitter");
        textTE.length > 1 &&
          setTimeout(() => {
            trigger();
          }, 150);

        setIconTW("TE");
        setValue("twitter", textTE);
        setValue("telegram", "");
      }
      setDel(null);
    }
  }, [
    del,
    iconTE,
    iconTW,
    setValue,
    textTW,
    textTE,
    errors.twitter,
    errors.telegram,
    clearErrors,
    trigger,
  ]);
  useEffect(() => {
    setValue("isTwitter", true);
    addLink ? setValue("isTelegram", false) : setValue("isTelegram", true);
  }, [addLink, clearErrors, setValue]);
  useEffect(() => {
    iconTW === "TE" ? setSchemaCondition(false) : setSchemaCondition(true);
  }, [iconTW]);
  return (
    <LayoutDashBoard className="bg-white h-[88vh] md:h-[85px] relative overflow-hidden">
      <div className="grid grid-cols-1 px-2 md:flex items-center justify-center h-[81vh] bg-[#f2f9ff] rounded-md shadow-md">
        <div className="relative max-w-[687px] max-h-[860px] pt-[90px] md:pt-[105px] pb-[255px] md:pb-[165px]">
          <AuthenticationSVG
            className="bg-[#f2f9ff] md:w-[720px] md:h-[485px] w-[340px] h-[340px] md:-ml-16 md:mt-9 mt-2"
            classNameRect="w-[687px] h-[485px] "
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            onChange={handleChange}
            className="absolute bottom-[32%] md:bottom-[27%] max-w-[687px] left-0 h-[247px] mx-auto right-0"
          >
            <div
              className={`font-Inter text-white rounded-tl-md rounded-tr-md bg-[#0046B0] text-center pt-[16px] pb-[16px] text-xl font-bold leading-5`}
            >
              Please enter the username
            </div>
            <div
              className={`bg-[#D3ECFF] pt-[25px] shadow-[0_1px_2px_rgba(0,0,0,0.25)] pr-7 pl-3 md:px-[34px] pb-[25px] rounded-bl-md rounded-br-md flex flex-col gap-5`}
            >
              <div className="flex items-center gap-2 justify-center relative">
                <AuthenInput
                  icon={iconTW}
                  setIcon={handleSetIconTW}
                  placeholder="@BitscopeAI"
                  error={errors.twitter}
                  register={register}
                  id="twitter"
                  className=""
                  disable={isLoading}
                />
                {!addLink && (
                  <BsFillDashCircleFill
                    onClick={() => handleAppend("TW")}
                    className={`absolute -right-6 md:-right-[26px] h-5 w-5 text-[#E32626] bg-white cursor-pointer rounded-full`}
                  />
                )}
              </div>
              {addLink && (
                <div
                  className="flex items-center gap-[12.25px] cursor-pointer"
                  onClick={() => addNewLink()}
                >
                  <BsFillPlusCircleFill className="h-[19.5px] w-[19.5px] text-[#005AE2] bg-white rounded-full" />
                  <span className="text-[#1C1C1C] font-medium text-sm font-Inter">
                    Add New Platform
                  </span>
                </div>
              )}
              {!addLink && (
                <div className="relative flex items-center gap-2 justify-center">
                  <AuthenInput
                    icon={iconTE}
                    setIcon={handleSetIconTE}
                    placeholder="@BitscopeAI"
                    error={errors.telegram}
                    register={register}
                    id="telegram"
                    className=""
                    disable={isLoading}
                  />
                  {!addLink && (
                    <BsFillDashCircleFill
                      onClick={() => handleAppend("TE")}
                      className={`absolute -right-6 md:-right-[26px] h-5 w-5 text-[#E32626] bg-white cursor-pointer rounded-full`}
                    />
                  )}
                </div>
              )}
              <div className={`text-center`}>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="text-[#1C1C1C] bg-[#FFB800] hover:bg-[#cc9300] duration-500 ease-in-out rounded-md px-[18px] py-[13px] text-center inline-flex items-center "
                >
                  {isLoading && <LoadingSVG />}
                  <span className="text-inherit font-semibold text-base leading-5 font-Inter">
                    {isLoading ? "Loading..." : "Authenticate"}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`absolute hover:bg-[#017a4c] duration-500 ease-in-out flex gap-[9.23px] items-center justify-center top-[15px] left-[15px] md:top-[45px] md:left-[45px] py-[14.58px] px-[16.58px] text-white rounded-md bg-[#01985F] cursor-pointer shadow-[0_3.25146px_3.25146px_rgba(0,0,0,0.25)]`}
        onClick={() => router.push("/authentication/history")}
      >
        <ClockSVG className="w-[15.83px] h-[15.83px]" />
        <span className="text-white font-semibold text-[13.01px] leading-[16.26px] font-Inter">
          View History
        </span>
      </div>
    </LayoutDashBoard>
  );
}
