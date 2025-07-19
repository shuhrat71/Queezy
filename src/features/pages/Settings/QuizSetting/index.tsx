import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Button, Box, Breadcrumbs, Link } from "@mui/material";
import { QuizSettingWrapper, SectionHeader } from "..";
// mos faylni belgilang

type QuestionType = {
  question: string;
  description: string;
};

export default function QuizeSetting() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    title,
    questions = [],
  }: { title?: string; questions?: QuestionType[] } = location.state || {};

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
        <Button variant="contained">Continue</Button>
      </SectionHeader>

      <div>
        {questions.map((q, index) => (
          <Box
            key={index}
            mb={2}
            p={2}
            sx={{ border: "1px solid #ccc", borderRadius: 2 }}
          >
            <Typography variant="h6" mb={2}>
              {title}
            </Typography>
            <Typography fontWeight={600}>{q.question}</Typography>
            <Typography variant="body2" color="text.secondary">
              {q.description}
            </Typography>
          </Box>
        ))}
      </div>
    </QuizSettingWrapper>
  );
}
