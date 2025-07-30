import styled from "@emotion/styled";

export const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;
export const RecentQuizBox = styled.div`
  max-width: 580px;
  width: 100%;
  background: #fff;
  padding: 32px;
  border-radius: 32px;
  border: 2px solid #f4f4f6;
  .statisticsMathQuiz {
    width: 100%;
    padding: 16px;
    background: #ffd6dd;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    color: #660012;
    z-index: 2;
    img {
      width: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
    }
  }
`;
export const CelendarBox = styled.div`
  max-width: 580px;
  width: 100%;
  background: #fff;
  padding: 32px;
  border-radius: 32px;
  border: 2px solid #f4f4f6;
`;
