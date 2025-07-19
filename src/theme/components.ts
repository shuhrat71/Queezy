import type { Components } from "@mui/material";

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "20px",
        textTransform: "none",
      },
      contained: {
        backgroundColor: "#6a5ae0",
        color: "#fff",
        outline: "none",
        border: "none",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#5b00d1",
          boxShadow: "none",
        },
      },
      outlined: {
        background: "#efeefc",
        color: "#6a5ae0",
        outline: "none",
        border: "none",
      },
    },
  },
};
export default components;
// padding: 15px 16px;
//     border-radius: 20px;
//     outline: none;
//     background-color: #6a5ae0;
