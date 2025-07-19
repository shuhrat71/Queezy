import React from "react";
import { useLocation } from "react-router-dom";
import {
  SearchBox,
  SearchModal,
  TopbarWrapper,
  TopLeftBar,
} from "./style/topbar";
import { Box, Modal, Typography } from "@mui/material";
import SearchIcon from "../icons/SearchIcon.svg";

const Topbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const path = location.pathname;

  // ✅ dynamic path bilan ishlash
  let currentTitle = "";
  if (path === "/") currentTitle = "Dashboard";
  else if (path === "/discover") currentTitle = "Discover";
  else if (path === "/quizLibrary") currentTitle = "Quiz Library";
  else if (path.startsWith("/quiz/"))
    currentTitle = "Quiz Library"; // 👈 dinamik ID bo‘lsa ham
  else if (path === "/leaderboard") currentTitle = "Leaderboard";
  else if (path === "/settings") currentTitle = "Settings";

  return (
    <TopbarWrapper>
      <Box>
        <Typography
          variant="h4"
          fontSize={"33px"}
          fontWeight={700}
          color="#000000"
        >
          {currentTitle}
        </Typography>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={SearchModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      <Box>
        <TopLeftBar>
          <SearchBox onClick={handleOpen}>
            <img src={SearchIcon} alt="search" />
          </SearchBox>
        </TopLeftBar>
      </Box>
    </TopbarWrapper>
  );
};

export default Topbar;
