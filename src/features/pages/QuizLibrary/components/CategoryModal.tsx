import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import type { CategoryData } from "../../types";
import { quizCategories } from "../components/mocData";
import { BoxImg, CategoryQuizBox, ModalActionBtn } from "../index";
import CloseIcon from "@mui/icons-material/Close";
const data = quizCategories;

interface CategoryQuizModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CategoryData) => void;
}

export const CreateQuizModal = ({
  open,
  onClose,
  onSubmit,
}: CategoryQuizModalProps) => {
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    onSubmit({ category });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        variant="h5"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: "600",
          padding: "30px 30px",
        }}
      >
        Category Quiz
        <Link onClick={onClose}>
          <CloseIcon
            sx={{ color: "#000", cursor: "pointer", fontSize: "29px" }}
          />
        </Link>
      </DialogTitle>

      <DialogContent
        sx={{
          maxWidth: "480px",
          borderRadius: "32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {" "}
          {data.map((item: any) => {
            const IconComponent = item.icon;

            return (
              <CategoryQuizBox key={item.id}>
                <BoxImg className="BoxImg">
                  <IconComponent
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                </BoxImg>
                <Box>
                  <Typography variant="h6" m={0}>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="#9087e5">
                    {item.quizzes} Quizzes
                  </Typography>
                </Box>
              </CategoryQuizBox>
            );
          })}
        </Box>
      </DialogContent>
      <ModalActionBtn>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          Category
        </Button>
      </ModalActionBtn>
    </Dialog>
  );
};
