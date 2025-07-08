import { Box, Divider, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExtensionIcon from "@mui/icons-material/Extension";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";

import LogoQuuezy from "../../../public/Logo-Quezzy.svg";
import { SidebarButton, SidebarLogo } from "./style/sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: <HomeIcon />, path: "/" },
  { label: "Leaderboard", icon: <LeaderboardIcon />, path: "/leaderboard" },
  { label: "Discover", icon: <SearchIcon />, path: "/discover" },
  { label: "Quiz Library", icon: <ExtensionIcon />, path: "/quizLibrary" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(navItems[0].label);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "250px",
        height: "100%",
        bgcolor: "#6a5ae0",
        color: "#fff",
        padding: 2,
        boxSizing: "border-box",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 1000,
      }}
    >
      <SidebarLogo>
        <img src={LogoQuuezy} alt="" />
        <Typography variant="h4" fontWeight={700} mb={3}>
          Queezy
        </Typography>
      </SidebarLogo>

      <Stack spacing={2}>
        {navItems.map((item) => (
          <SidebarButton
            key={item.label}
            startIcon={item.icon}
            active={activeItem === item.label}
            onClick={() => {
              setActiveItem(item.label);
              navigate(item.path);
            }}
          >
            {item.label}
          </SidebarButton>
        ))}
      </Stack>

      <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.3)" }} />

      <SidebarButton
        startIcon={<SettingsIcon />}
        active={activeItem === "Settings"}
        onClick={() => {
          setActiveItem("Settings");
          navigate("/settings");
        }}
      >
        Settings
      </SidebarButton>
    </Box>
  );
};

export default Sidebar;
