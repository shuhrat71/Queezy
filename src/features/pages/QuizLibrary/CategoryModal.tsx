import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import type { CategoryData } from "../types";

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
      <DialogTitle>Category Quiz</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          placeholder="Quiz title"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Category</Button>
      </DialogActions>
    </Dialog>
  );
};
