import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";

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

interface ArrayFieldProps {
  register: any;
  index: number;
  control: any;
  remove: any;
  name: string;
}

export default function ArrayField({
  register,
  index,
  control,
  remove,
  name,
}: ArrayFieldProps) {
  return (
    <div className="flex">
      <FormControl sx={{ mx: 1, flexBasis: "70%" }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Content</InputLabel>
        <BootstrapInput
          id="demo-customized-textbox"
          placeholder="Ex: Update the interface of Bit.Authen.Input"
          {...register(`${name}.${index}.content`)}
        />
      </FormControl>
      <Controller
        render={({ field }) => (
          <FormControl sx={{ mx: 1, flexBasis: "30%" }} variant="standard">
            <InputLabel
              id="demo-customized-select-label"
              sx={{ width: "100%" }}
            >
              Status
            </InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              input={<BootstrapInput />}
              {...field}
            >
              <MenuItem value="added">Added</MenuItem>
              <MenuItem value="updated">Updated</MenuItem>
              <MenuItem value="fixed">Fixed</MenuItem>
            </Select>
          </FormControl>
        )}
        name={`${name}.${index}.tag`}
        control={control}
      />
      <button
        type="button"
        onClick={() => remove(index)}
        className="flex items-center mt-6 justify-center"
      >
        <MinusCircleIcon className="h-6 w-6 text-red-500" />
      </button>
    </div>
  );
}
