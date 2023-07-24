import { canvasPreview } from "@/components/PageComponents/Profile/CanvasPreview";
import { useDebounceEffect } from "@/components/PageComponents/Profile/useDebouceEffect";
import LayoutDashBoard from "@/components/layout/Layout";
import LoadingSVG from "@/components/svg/LoadingSVG";
import Card from "@/components/ui/Card";
import { uploadAvatar } from "@/pages/api/auth/edit";
import { RootState } from "@/store";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

import {
  Crop,
  PixelCrop,
  ReactCrop,
  centerCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useOnClickOutside } from "usehooks-ts";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 50,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    512,
    512
  );
}

interface LayoutProfileProps {
  title: string;
  name: string;
  username?: string;
  children: React.ReactNode;
}
const LayoutProfile = ({
  title,
  name,
  username,
  children,
}: LayoutProfileProps) => {
  const user = useSelector((state: RootState) => state.users.user);
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const ref = useRef<any>(null);
  const inputFile = useRef<any>(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const { mutate, isLoading } = useMutation(uploadAvatar, {
    onSuccess: () => {
      toast.success("Upload Avatar Successfully!");
      setOpen(false);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() ?? "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }

    setOpen(true);
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 1));
  }

  async function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = URL.createObjectURL(blob);
      fetch(blobUrlRef.current)
        .then((response) => response.blob())
        .then(async (blob) => {
          const myFile = new File([blob], "image.png", {
            type: blob.type,
          });
          const formData = new FormData();
          formData.append("avatar", myFile);
          mutate(formData);
        })
        .catch((error) => {
          console.error("Error fetching cropped image:", error);
        });
    });
  }

  useDebounceEffect(
    () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          1,
          0
        );
      }
    },
    100,
    [completedCrop]
  );
  const onButtonClick = () => {
    inputFile?.current?.click();
  };
  const handleClickOutside = () => {
    setOpen(false);
    setCompletedCrop(undefined);
  };
  useOnClickOutside(ref, handleClickOutside);

  const handleError = (e: any) => {
    e.target.src =
      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
  };
  return (
    <LayoutDashBoard className="">
      <Card title={title} bodyClass="p-0">
        <div className="">
          <div className="space-y-5 profile-page">
            <div className="profiel-wrap px-[35px] pb-10 md:pt-[84px] z-10 pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative ">
              <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
              <div className="profile-box flex-none md:text-start text-center z-10">
                <div className="md:flex items-end md:space-x-6">
                  <div className="flex-none">
                    <div className="relative md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100">
                      {completedCrop && (
                        <canvas
                          ref={previewCanvasRef}
                          style={{
                            border: "1px solid black",
                            objectFit: "contain",
                            borderRadius: "100%",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      )}
                      {!completedCrop && (
                        <picture>
                          <img
                            src={`${
                              user?.avatar
                                ? `${user?.avatar}?${Math.floor(
                                    Math.random() * 1000 + 1
                                  )}`
                                : "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                            }`}
                            alt="avatar"
                            className="w-full h-full object-cover rounded-full"
                            onError={handleError}
                          />
                        </picture>
                      )}
                      <Link
                        onClick={onButtonClick}
                        href="#"
                        className="absolute right-2 rounded-tr-md h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-md flex flex-col items-center justify-center md:top-[140px] top-[100px] cursor-pointer"
                      >
                        <PencilIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
                      </Link>
                      {open && (
                        <div
                          ref={ref}
                          className="flex flex-col z-10 items-end justify-start gap-8 absolute -left-[76%] md:left-[110%] md:-top-[44%] top-[110%] bg-white shadow-2xl min-h-[200px] min-w-[350px] p-8 rounded-3xl"
                        >
                          {!!imgSrc && (
                            <ReactCrop
                              crop={crop}
                              onChange={(_, percentCrop) =>
                                setCrop(percentCrop)
                              }
                              onComplete={(c) => setCompletedCrop(c)}
                              aspect={1}
                            >
                              <Image
                                ref={imgRef}
                                alt="Crop me"
                                width={1024}
                                height={1024}
                                src={imgSrc}
                                onLoad={onImageLoad}
                                className="max-w-full max-h-full"
                              />
                            </ReactCrop>
                          )}
                          <div className="flex gap-6">
                            <Button
                              onClick={() => handleClickOutside()}
                              outline
                            >
                              <span className="text-black-500 text-Inter">
                                Cancel
                              </span>
                            </Button>
                            <Button
                              onClick={onDownloadCropClick}
                              disabled={isLoading}
                            >
                              {isLoading && <LoadingSVG />}
                              <span className="text-white text-Inter">
                                Save
                              </span>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
                      {name}
                    </div>
                    {username && (
                      <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                        @{username}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </Card>
      <input
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        className="hidden"
        ref={inputFile}
      />
    </LayoutDashBoard>
  );
};
export default LayoutProfile;
