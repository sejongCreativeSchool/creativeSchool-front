import React from "react";
import styled from "styled-components";

const CalcHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .grade {
    color: #20c997;
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
  }
  .credits {
    color: #000000;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function CalcHead({ totalCredits, averageGrade }) {
  return (
    <CalcHeadBlock>
      <h1>학점 계산기</h1>
      <div>
        <div className="credits">이수 학점 : {totalCredits}</div>
        <div className="grade">평균 평점 : {averageGrade.toFixed(1)}</div>
      </div>
    </CalcHeadBlock>
  );
}

export default CalcHead;
