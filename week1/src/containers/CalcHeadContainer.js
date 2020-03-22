import React from "react";
import { useSelector } from "react-redux";
import CalcHead from "../componenets/CalcHead";

function getAverageGrade(subjects) {
  if (subjects.length === 0) return 0;
  let sum = 0;
  subjects.map(subject => (sum += subject.grade));
  return sum / subjects.length;
}

const getTotalCredits = subjects => {
  let sum = 0;
  subjects.map(subject => (sum += subject.credits));
  return sum;
};

function CalcHeadContainer() {
  const state = useSelector(state => state.subject);
  const { subjects } = state;

  return (
    <CalcHead
      totalCredits={getTotalCredits(subjects)}
      averageGrade={getAverageGrade(subjects)}
    />
  );
}

export default CalcHeadContainer;
