import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

import { Input, Button, Icon } from "semantic-ui-react";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const gradeAndCreditStyle = {
  display: "flex",
  marginTop: "5px"
};

function isInvalidGrade(gradeInput) {
  let checkValidInput = (gradeInput * 10) % 10;

  console.log(checkValidInput, gradeInput);

  if (checkValidInput !== 0 && checkValidInput !== 5) return true;
  console.log("소숫점통과");
  if (gradeInput < 0 && gradeInput === 0.5 && gradeInput > 4.5) return true;
  console.log("숫자범위통과");
  return false;
}

function SubjectCreate({
  subjectInput,
  gradeInput,
  creditInput,
  changeInput,
  add,
  clearInput
}) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  const onChange = e => {
    changeInput(e.target);
  };

  const onClear = () => {
    clearInput();
  };

  const onClick = e => {
    e.preventDefault();

    if (isInvalidGrade(Number(gradeInput))) {
      alert("평점 입력이 잘못되었습니다.");
    } else {
      const subject = {
        name: subjectInput,
        credits: Number(creditInput),
        grade: Number(gradeInput)
      };
      add(subject);
      onClear();
    }
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              placeholder="과목명"
              style={{ width: "100%" }}
              name="subjectInput"
              value={subjectInput}
              onChange={onChange}
            />

            <div className="gradeAndCredit" style={gradeAndCreditStyle}>
              <Input
                placeholder="평점(숫자)"
                type="number"
                name="gradeInput"
                value={gradeInput}
                onChange={onChange}
              />

              <Input
                placeholder="학점"
                type="number"
                name="creditInput"
                value={creditInput}
                onChange={onChange}
              />

              <Button icon onClick={onClick}>
                <Icon name="add" />
              </Button>
            </div>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default SubjectCreate;
