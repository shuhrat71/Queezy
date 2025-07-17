import { Box, Typography } from "@mui/material";
import {
  CategoryCard,
  CategoryQuizWrapper,
  IconBox,
  LiveQuizes,
} from "./CategoryStyles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { quizCategories, quizList } from "../QuizLibrary/components/mocData";
import { QuizCardBox, QuizCardIconBox, QuizCardWrapper } from "../QuizLibrary";
const categoryQuizData = quizCategories;
type Props = {};
const quizData = quizList;
function Discover({}: Props) {
  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight={600}>
          Category
        </Typography>
      </Box>
      <CategoryQuizWrapper>
        {categoryQuizData.map((quizData) => {
          const IconComponent = quizData.icon;
          return (
            <CategoryCard>
              <Box>
                <IconBox>
                  <IconComponent fontSize="large" />
                </IconBox>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600} color="#6a5ae0">
                  {quizData.name}
                </Typography>
                <Typography variant="body1" color="#9087E5" fontSize={14}>
                  {quizData.quizzes} Quizes
                </Typography>
              </Box>
            </CategoryCard>
          );
        })}
      </CategoryQuizWrapper>

      <LiveQuizes>
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Live Quiz
          </Typography>
        </Box>
        <QuizCardWrapper>
          {quizData.map((item) => {
            const IconComponent = item.icon;
            return (
              <QuizCardBox>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <QuizCardIconBox>
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        background: "#fff",
                        borderRadius: "9.14px",
                        position: "relative",
                      }}
                    >
                      <IconComponent className="quizIcon" />
                    </Box>
                  </QuizCardIconBox>
                  <Box>
                    <MoreHorizIcon />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" fontSize={"16px"} fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography fontSize={15} color="#858494">
                    {item.category} • {item.quizzesCount} Quizzes
                  </Typography>
                </Box>
              </QuizCardBox>
            );
          })}
        </QuizCardWrapper>
      </LiveQuizes>
    </>
  );
}

export default Discover;
