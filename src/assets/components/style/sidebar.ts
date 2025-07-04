import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const SidebarLogo = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 0;
    color: white;
  }
  img {
    width: 40px;
  }
`;

export const SidebarButton = styled(Button)<{ active?: boolean }>(
  ({ active }) => ({
    justifyContent: "flex-start",
    color: "white",
    textTransform: "none",
    borderRadius: 12,
    padding: "12px 16px",
    width: "100%",
    backgroundColor: active ? "rgba(255, 255, 255, 0.2)" : "transparent",
    border: "none",
    outline: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "&:focus": {
      outline: "none",
      border: "none",
      boxShadow: "none",
    },
  })
);
