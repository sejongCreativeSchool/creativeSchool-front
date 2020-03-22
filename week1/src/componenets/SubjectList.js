import React from "react";
import styled from "styled-components";
import SubjectItem from "./SubjectItem";

function makeNumberGradeToStringGrade(numberGrade) {
  switch (numberGrade) {
    case 4.5:
      return "A+";
    case 4.0:
      return "A0";
    case 3.5:
      return "B+";
    case 3.0:
      return "B0";
    case 2.5:
      return "C+";
    case 2.0:
      return "C0";
    case 1.5:
      return "D+";
    case 1.0:
      return "D0";
    case 0:
      return "F";
    default:
      throw new Error("unhandled Error!");
  }
}

const SubjectListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function SubjectList({ subjects, remove }) {
  return (
    <SubjectListBlock>
      <div>
        {subjects.map(subject => (
          <SubjectItem
            text={subject.name}
            credits={subject.credits}
            grade={makeNumberGradeToStringGrade(subject.grade)}
            done={false}
            id={subject.id}
            remove={remove}
          />
        ))}
      </div>
    </SubjectListBlock>
  );
}

export default SubjectList;
