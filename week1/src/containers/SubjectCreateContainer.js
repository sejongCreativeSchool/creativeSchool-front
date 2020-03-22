import React from "react";
import SubjectCreate from "../componenets/SubjectCreate";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, add, clearInput } from "../modules/subject";

function SubjectCreateContainer() {
  const state = useSelector(state => state.subject);
  const { subjectInput, gradeInput, creditInput } = state;

  const dispatch = useDispatch();

  return (
    <SubjectCreate
      subjectInput={subjectInput}
      gradeInput={gradeInput}
      creditInput={creditInput}
      changeInput={input => dispatch(changeInput(input))}
      add={subject => dispatch(add(subject))}
      clearInput={() => dispatch(clearInput())}
    />
  );
}

export default SubjectCreateContainer;
