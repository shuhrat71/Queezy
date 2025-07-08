import {
  Backdrop,
  Box,
  Button,
  Fade,
  Link,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import {
  AddImage,
  CreateQuizModalHeader,
  MenubarBtns,
  QuizeMenuBar,
  QuizLibraryWrapper,
  SearchBox,
} from ".";
import AddCoverImage from "../../../assets/img/Add Cover.svg";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearachIcon from "../../../assets/icons/SearchIcon.svg";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

type Props = {};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  outline: "none",
  width: "480px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "32px",
};
function QuizLibrary({}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleCreateQuiz = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <QuizLibraryWrapper>
      <Box>
        <Typography variant="h3" color="#000000" fontSize={25} fontWeight={700}>
          Quiz Library
        </Typography>
      </Box>
      <QuizeMenuBar>
        <Box>
          <SearchBox>
            <img src={SearachIcon} alt="" />
            <TextField placeholder="Find quiz name or categories" />
          </SearchBox>
        </Box>
        <MenubarBtns>
          <Button variant="contained" endIcon={<KeyboardArrowDownIcon />}>
            Category (5)
          </Button>
          <Button variant="contained" onClick={handleCreateQuiz}>
            Create Quiz <AddIcon />
          </Button>
        </MenubarBtns>
      </QuizeMenuBar>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <CreateQuizModalHeader>
                <Typography variant="h5" fontWeight={600}>
                  Create Quiz
                </Typography>
                <Link onClick={handleClose}>
                  <CloseIcon
                    sx={{
                      color: "#000",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </CreateQuizModalHeader>
              <AddImage>
                <img src={AddCoverImage} alt="" />
              </AddImage>
            </Box>
          </Fade>
        </Modal>
      </div>
    </QuizLibraryWrapper>
  );
}

export default QuizLibrary;
