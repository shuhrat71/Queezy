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
          backgroundColor: "#dcdcf2",
        },
      },
    },
  },
};
export default components;
