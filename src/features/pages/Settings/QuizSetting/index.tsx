import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Box,
  Breadcrumbs,
  Link,
  Divider,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  DragAndDrop,
  QuestionListWrapper,
  QuizSettingWrapper,
  SectionHeader,
} from "..";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
// mos faylni belgilang

type QuestionType = {
  question: string;
  description: string;
  id: number;
};

export default function QuizeSetting() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    id,
    questions = [],
  }: { id?: QuestionType[]; questions?: QuestionType[] } = location.state || {};

  return (
    <QuizSettingWrapper>
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
      <SectionHeader>
        <Typography variant="h5" fontWeight={600}>
          Quiz Settings
        </Typography>
        <Button variant="contained" sx={{ border: "none", outline: "none" }}>
          Continue
        </Button>
      </SectionHeader>

      <QuestionListWrapper>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mb: 3, padding: "15px 20px", border: "none", outline: "none" }}
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
        <Divider orientation="vertical" />
      </QuestionListWrapper>
    </QuizSettingWrapper>
  );
}
