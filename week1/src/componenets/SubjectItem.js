import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const SubjectItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const Credit = styled.div`
  flex: 1;
  font-size: 16px;
  color: #495057;
`;

const Grade = styled.div`
  flex: 1;
  font-size: 16px;
  color: #495057;
`;
const Text = styled.div`
  flex: 3;
  font-size: 19px;
  font-weight: bold;
  color: #495057;
`;

function SubjectItem({ text, credits, grade, id, remove }) {
  return (
    <SubjectItemBlock>
      <Credit>{credits}학점</Credit>
      <Grade>{grade}</Grade>
      <Text>{text}</Text>
      <Remove
        onClick={() => {
          remove(id);
        }}
      >
        <MdDelete />
      </Remove>
    </SubjectItemBlock>
  );
}

export default SubjectItem;
