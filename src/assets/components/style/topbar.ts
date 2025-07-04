import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SearchModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const TopbarWrapper = styled(Box)({
  width: "100%",
  height: "100px",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 25px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  boxSizing: "border-box",
});

export const TopLeftBar = styled("div")`
  padding: 0;
`;
export const SearchBox = styled("div")`
  width: 56px;
  height: 56px;
  border: 2px solid #efeefc;
  border-radius: 20px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
