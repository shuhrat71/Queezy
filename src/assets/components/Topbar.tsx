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
const pathToTitleMap: Record<string, string> = {
  "/": "Dashboard",
  "/discover": "Discover",
  "/quizLibrary": "Quiz Library",
  "/leaderboard": "Leaderboard",
  "/settings": "Settings",
};
const Topbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const currentTitle = pathToTitleMap[location.pathname] || "";

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
            <img src={SearchIcon} alt="" />
          </SearchBox>
        </TopLeftBar>
      </Box>
    </TopbarWrapper>
  );
};

export default Topbar;
