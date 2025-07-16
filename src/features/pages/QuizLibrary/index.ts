import styled from "@emotion/styled";

export const noBorderTextFieldSx = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
  },
};

export const QuizLibraryWrapper = styled.div`
  padding: 32px 15px;
  border-radius: 32px;
  border: 2px solid #efeefc;
`;
export const QuizeMenuBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: 350px;
  width: 100%;
  display: flex;
  background-color: #efeefc;
  padding: 0 10px;
  border-radius: 32px;
  border: 2px solid #6a5ae0;
  input {
    width: 230px;
    height: 20px;
    outline: none;
    background-color: transparent;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;
export const MenubarBtns = styled.div`
  display: flex;
  gap: 14px;
  button {
    padding: 15px 25px;
    border-radius: 32px;
    font-weight: 600;
    border: none;
    outline: none;
  }
  button:first-child {
    background-color: #efeefc;
    border: 2px solid #7b61ff;
    color: #6a5ae0;
  }
  button:nth-child(2) {
    background-color: #6a5ae0;
    color: #fff;
  }
`;
export const CreateQuizModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #333;
`;
export const AddImage = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  border-radius: 20px;
  background-color: #efeefc;
  border-style: dashed;
  border-color: #6a5ae0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    max-width: 330px;
    height: auto;
  }
`;
export const QuizeForm = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  h5 {
    font-size: 15px;
    font-weight: 600;
  }
  input {
    border: 2px solid #efeefc;
    border-radius: 20px;
  }
  button {
    padding: 15px 16px;
    border-radius: 20px;
    outline: none;
    background-color: #6a5ae0;
  }
`;
export const CategoryQuizBox = styled.div`
  width: 200px;
  height: 170px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s;
  cursor: pointer;
  gap: 10px;
  background-color: #efeefc;
  text-align: center;
  h6 {
    color: #6a5ae0;
  }
  p {
    color: #9087e5;
  }
  :hover {
    background-color: #ff8fa2;
  }
  :hover h6,
  p {
    color: #fff;
  }
  :hover .BoxImg {
    background-color: rgba(245, 245, 245, 0.48);
  }
  :hover .BoxImg {
    color: #fff;
  }
`;
export const BoxImg = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6a5ae0;
`;
export const ModalActionBtn = styled.div`
  width: auto;
  display: flex;
  padding: 13px 25px;
  gap: 16px;
  justify-content: space-between;
  button {
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 18px;
    border-radius: 20px;
    background-color: #6a5ae0;
    outline: none;
    border: none;
    color: #fff;
    font-weight: 600;
  }
  button:first-child {
    background-color: #fff;
    border: 2px solid #6a5ae0;
    color: #6a5ae0;
  }
`;
export const QuizCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
`;
export const QuizCardBox = styled.div`
  max-width: 230px;
  height: auto;
  width: 100%;
  border-radius: 20px;
  border: 2px solid #efeefc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const QuizCardIconBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background-color: #c4d0fb;
  display: flex;
  justify-content: center;
  align-items: center;
  .quizIcon {
    font-size: 45px;
    color: #6a5ae0;
    position: absolute;
    bottom: 2px;
    left: 2px;
  }
`;
