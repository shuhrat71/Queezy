import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import {
  Typography,
  Button,
  Box,
  Breadcrumbs,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  DragAndDrop,
  QuestionListWrapper,
  QuizSettingWrapper,
  SectionHeader,
  SetQuestionType,
  SetUpQuestionWrapper,
} from "../../Settings";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddCoverImage from "../../../../assets/img/Add Cover.svg";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import { AddImage } from "../../QuizLibrary";

type QuestionType = {
  question: string;
  description: string;
  id: number;
};

export default function QuizeSetting() {
  const [image, setImage] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const {
    questions = [],
  }: { id?: QuestionType[]; questions?: QuestionType[] } = location.state || {};
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
  const handleChangeTypeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate("/quizLibrary")}
          sx={{ cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
        >
          Quiz Library
        </Link>
        <Typography color="text.primary" fontSize="14px" fontWeight={600}>
          Quiz Settings
        </Typography>
      </Breadcrumbs>
      <QuizSettingWrapper>
        <SectionHeader>
          <Typography variant="h5" fontWeight={600}>
            Quiz Settings
          </Typography>
          <Button variant="contained" sx={{ border: "none", outline: "none" }}>
            Continue
          </Button>
        </SectionHeader>

        <QuestionListWrapper>
          <Box
            sx={{
              maxWidth: "800px",
              height: "100%",
              width: "100%",
              borderRight: "1px solid #EFEEFC",
              paddingRight: "20px",
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              sx={{
                mb: 3,
                padding: "15px 20px",
                border: "none",
                outline: "none",
              }}
            >
              Add question
            </Button>
            {questions.map((q, index) => (
              <Box
                key={index}
                mb={2}
                sx={{
                  width: "100%",
                  border: "2px solid  #efeefc",
                  borderRadius: "20px",
                  display: "flex",
                }}
              >
                <DragAndDrop>
                  <DragIndicatorOutlinedIcon />
                </DragAndDrop>
                <Box sx={{ padding: "25px", width: "100%" }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} mb={2}>
                      Question {q.id}
                    </Typography>
                    <MoreHorizIcon />
                  </Box>
                  <Typography variant="h6" color="text.secondary">
                    {q.description}
                  </Typography>

                  <Typography
                    variant="body1"
                    fontWeight={600}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      marginTop: 2,
                    }}
                  >
                    <AccessTimeIcon sx={{ color: "#6a5ae0" }} /> 10 sec
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <SetUpQuestionWrapper>
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
            <SetQuestionType>
              <Button
                variant="outlined"
                sx={{
                  padding: "11px 25px",
                  border: "2px solid #EFEEFC",
                  background: "#fff",
                  outline: "none",
                  color: "#333",
                }}
              >
                <AccessTimeIcon /> 10 sec
              </Button>
              <FormControl sx={{ minWidth: 160 }}>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={category}
                  variant="outlined"
                  onChange={handleChangeTypeCategory}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SetQuestionType>
          </SetUpQuestionWrapper>
        </QuestionListWrapper>
      </QuizSettingWrapper>
    </>
  );
}
