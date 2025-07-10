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
  noBorderTextFieldSx,
  QuizeForm,
  QuizeMenuBar,
  QuizLibraryWrapper,
  SearchBox,
} from ".";
import AddCoverImage from "../../../assets/img/Add Cover.svg";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearachIcon from "../../../assets/icons/SearchIcon.svg";
import { useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDropzone } from "react-dropzone";
import type { CategoryData } from "../types";
import { CreateQuizModal } from "./CategoryModal";

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
  color: "#000000",
  borderRadius: "32px",
};
function QuizLibrary({}: Props) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  // 🧠 HANDLERS
  const handleCreateQuiz = () => setCreateOpen(true);
  const handleCloseCreate = () => setCreateOpen(false);
  const handleCloseCategory = () => setCategoryOpen(false);

  const handleCategoryQuiz = (data: CategoryData) => {
    console.log("Yangi quiz:", data);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    if (file) reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });
  return (
    <QuizLibraryWrapper>
      <Box>
        <Typography variant="h3" fontSize={25} fontWeight={700}>
          Quiz Library
        </Typography>
      </Box>

      <QuizeMenuBar>
        <SearchBox>
          <img src={SearachIcon} alt="" />
          <TextField placeholder="Find quiz name or categories" />
        </SearchBox>

        <MenubarBtns>
          <Button
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={() => setCategoryOpen(true)}
          >
            Category (5)
          </Button>

          <Button variant="contained" onClick={handleCreateQuiz}>
            Create Quiz <AddIcon />
          </Button>
        </MenubarBtns>
      </QuizeMenuBar>

      {/* 🎯 CREATE QUIZ MODAL */}
      <Modal
        open={createOpen}
        onClose={handleCloseCreate}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={createOpen}>
          <Box sx={style}>
            <CreateQuizModalHeader>
              <Typography variant="h5" fontWeight={600}>
                Create Quiz
              </Typography>
              <Link onClick={handleCloseCreate}>
                <CloseIcon sx={{ color: "#000", cursor: "pointer" }} />
              </Link>
            </CreateQuizModalHeader>

            <AddImage {...getRootProps()}>
              <input {...getInputProps()} />
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              ) : (
                <img src={AddCoverImage} alt="Add Cover" />
              )}
            </AddImage>

            <QuizeForm>
              <Box>
                <Typography variant="h5">Title</Typography>
                <TextField
                  placeholder="Enter quiz title"
                  fullWidth
                  sx={noBorderTextFieldSx}
                />
              </Box>

              <Box>
                <Typography variant="h5">Quiz Category</Typography>
                <TextField
                  placeholder="Choose quiz category"
                  fullWidth
                  sx={noBorderTextFieldSx}
                />
              </Box>

              <Box>
                <Typography variant="h5">Description</Typography>
                <TextField
                  placeholder="Enter quiz description"
                  fullWidth
                  multiline
                  minRows={4}
                  sx={noBorderTextFieldSx}
                />
              </Box>

              <Button variant="contained">Next Step</Button>
            </QuizeForm>
          </Box>
        </Fade>
      </Modal>

      {/* 🎯 CATEGORY MODAL */}
      <CreateQuizModal
        open={categoryOpen}
        onClose={handleCloseCategory}
        onSubmit={handleCategoryQuiz}
      />
    </QuizLibraryWrapper>
  );
}

export default QuizLibrary;
