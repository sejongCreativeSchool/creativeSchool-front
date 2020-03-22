import React from "react";
import SubjectList from "../componenets/SubjectList";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../modules/subject";

function SubjectListContainer() {
  const state = useSelector(state => state.subject);
  const { subjects } = state;
  const dispatch = useDispatch();

  //향후, remove가 이리로 가야한다.
  return (
    <SubjectList subjects={subjects} remove={id => dispatch(remove(id))} />
  );
}

export default SubjectListContainer;
