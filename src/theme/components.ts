import type { Components } from "@mui/material";

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "20px",
        textTransform: "none",
        border: "none",
        boxShadow: "none",
      },
      contained: {
        backgroundColor: "#6a5ae0",
        color: "#fff",
        outline: "none",
        border: "none",
        boxShadow: "none",
        padding: "15px 26px",
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "#5b00d1",
          boxShadow: "none",
        },
      },
      outlined: {
        backgroundColor: "#efeefc",
        color: "#6a5ae0",
        outline: "none",
        border: "none",
        fontWeight: 600,
        fontSize: "17px",
        "&:hover": {
          borderC: "2px solid #6a5ae0",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "20px",
        paddingRight: "10px",
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#D1CFFF",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#6C47FF",
        },
      },
      notchedOutline: {
        // borderColor: "#E9E5FF",
      },
      input: {
        fontWeight: 600,
        color: "#3B3553",
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      icon: {
        color: "#6C47FF", // Pastga ikon rangi
      },
    },
  },
};
export default components;
