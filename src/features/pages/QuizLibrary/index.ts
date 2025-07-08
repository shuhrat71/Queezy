import styled from "@emotion/styled";

export const QuizLibraryWrapper = styled.div`
  padding: 32px 32px;
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
  border-radius: 20px;
  background-color: #efeefc;
  border-style: dashed;
  border-color: #6a5ae0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
