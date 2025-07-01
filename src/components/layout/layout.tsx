import { Box } from "@mui/material";
import Sidebar from "../../assets/components/Sidebar";
import { Outlet } from "react-router-dom";

type Props = {};

function Layout({}: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
