import { Typography } from "@mui/material";
import { TopbarWrapper } from "./style/topbar";
import { useLocation } from "react-router-dom";
const pathToTitleMap: Record<string, string> = {
  "/": "Dashboard",
  "/discover": "Discover",
  "/quizLibrary": "Quiz Library",
  "/leaderboard": "Leaderboard",
  "/settings": "Settings",
};
const Topbar = () => {
  const location = useLocation();
  const currentTitle = pathToTitleMap[location.pathname] || "";

  return (
    <TopbarWrapper>
      <Typography variant="h5" fontWeight={700} color="#000000">
        {currentTitle}
      </Typography>
    </TopbarWrapper>
  );
};

export default Topbar;
