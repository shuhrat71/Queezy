import { Box, Divider, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExtensionIcon from "@mui/icons-material/Extension";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";

import LogoQuuezy from "../../../public/Logo-Quezzy.svg";
import { SidebarButton, SidebarLogo } from "../../components/layout/style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: <HomeIcon />, path: "/" },
  { label: "Leaderboard", icon: <LeaderboardIcon />, path: "/leaderboard" },
  { label: "Discover", icon: <SearchIcon />, path: "/discover" },
  { label: "Quiz Library", icon: <ExtensionIcon />, path: "/quizLibrary" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 250,
        height: "100%",
        bgcolor: "#6a5ae0",
        color: "white",
        position: "absolute",
        padding: "0 20px 0 20px",
        left: 0,
        top: 0,
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
