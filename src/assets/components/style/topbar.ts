import styled from "@emotion/styled";
import { Box } from "@mui/material";

// export const Topbar = styled("div")`
//   width: 400px;
//   padding: 0;
// `;
export const TopbarWrapper = styled(Box)({
  width: "100%",
  height: "100px",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  boxSizing: "border-box",
});
