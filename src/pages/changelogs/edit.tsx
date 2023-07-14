import InputGroup from "@/components/InputGroup";
import { schema } from "@/components/PageComponents/Changelogs/schemaEdit";
import useWidth from "@/hooks/useWidth";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { editChangelogs } from "../api/changelogs";
import { toast } from "react-toastify";
import LoadingSVG from "@/components/svg/LoadingSVG";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Inter", "sans-serif"].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
export default function EditChangelogs({ item, id, setOpen }: any) {
  const arrItem = item?.change?.map((item: any) => {
    return { content: item.name, tag: item.tag };
  });
  const { width } = useWidth();
  const queryClient = useQueryClient();
  const {
    register,
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      version: item?.name?.replace("Changelog ", ""),
      changelogs: arrItem,
    },
  });
  const { mutate, isLoading } = useMutation(editChangelogs, {
    onSuccess: () => {
      setOpen(false);
      reset();
      toast.success("Edit Changelog Successfully");
      queryClient.invalidateQueries({ queryKey: ["changelogs"] });
    },
    onError: () => {
      toast.error("Content cannot be left blank");
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "changelogs",
  });
  const onSubmit = (data: any) => {
    const _data = {
      name: "Changelog " + data.version,
      change: data.changelogs.map((item: any) => {
        if (item?.tag?.length === 0) {
          delete item.tag;
        }

        return { name: item.content, tag: item.tag };
      }),
    };
    mutate({
      id: id,
      formdata: _data,
    });
  };
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="overflow-y-auto h-[100vh] z-50"
      >
        <div className="flex justify-start items-center px-2">
          <span className="font-semibold text-xl basis-3/5 text-start ">
            Version
          </span>
          <InputGroup
            id="version"
            type="text"
            placeholder="Ex: 3.6"
            register={register as any}
            className="basis-2/5"
            errors={errors.version}
            icon={null}
          />
        </div>
        <span className="font-semibold text-lg pt-4 block text-start px-2">
          Content
        </span>
        {fields.map((item, index: number) => {
          return (
            <div
              className={` relative flex flex-col border-b-2 pb-2 border-slate-100 md:border-none md:pb-0 md:flex-row justify-start items-start md:items-center w-full`}
              key={item.id}
            >
              <FormControl
                sx={{
                  mx: 1,
                  width: `${width > 768 ? "60%" : "85%"}`,
                }}
                variant="standard"
                className="w-full"
              >
                <InputLabel htmlFor="demo-customized-textbox">
                  Content
                </InputLabel>
                <BootstrapInput
                  id="demo-customized-textbox"
                  placeholder="Ex: Update the interface of Bit.Authen.Input"
                  {...register(`changelogs.${index}.content`)}
                />
              </FormControl>
              <Controller
                render={({ field }) => (
                  <FormControl
                    sx={{ mx: 1, marginTop: 3, width: "200px" }}
                    variant="outlined"
                  >
                    <ToggleButtonGroup
                      color="primary"
                      exclusive
                      aria-label="Platform"
                      {...field}
                    >
                      <ToggleButton value="added">Added</ToggleButton>
                      <ToggleButton value="updated">Updated</ToggleButton>
                      <ToggleButton value="fixed">Fixed</ToggleButton>
                    </ToggleButtonGroup>
                  </FormControl>
                )}
                name={`changelogs.${index}.tag`}
                control={control}
              />
              <div className="absolute right-3">
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="flex items-center mt-8 justify-center"
                >
                  <MinusCircleIcon className="h-6 w-6 text-red-500" />
                </button>
              </div>
            </div>
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

        <Button
          type="submit"
          className="hover:text-white float-right transition-all duration-300"
          outline
        >
          {isLoading ? <LoadingSVG /> : "Submit"}
        </Button>

        <Button
          onClick={() => setOpen(false)}
          color="red"
          className="mr-1 float-right transition-all duration-200"
        >
          <span>Cancel</span>
        </Button>
        <div className="py-7 visible"></div>
      </form>
      <div className="py-7 visible"></div>
    </div>
  );
}
