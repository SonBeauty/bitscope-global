import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    "& li .Mui-selected": {
      backgroundColor: "#009EF7",
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: 700,
      lineHeigh: 20,
      fontFamily: "Inter",
      width: 32,
      height: 32,
    },
    "& li .Mui-selected:hover": {
      backgroundColor: "#009EF7",
      color: "#FFFFFF",
    },
  },
});
