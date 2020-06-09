import React from "react";
import styled from "styled-components";

const DarkBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 998;

  display: flex;

  justify-content: center;
  align-items: center;
`;

const ModalTemplate = styled.div`
  width: 60vw;
  height: 50vh;
  background-color: white;
  border-radius: 5px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  padding: 30px;
`;

const ModalContent = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DeleteBtn = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #cccccc;
  background-color: rgb(255, 0, 0);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
  }
`;

const CancleBtn = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #cccccc;
  background-color: #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ddd;
  }
`;

function Modal(props) {
  return (
    <DarkBackground>
      <ModalTemplate>
        <ModalContent>{props.content}</ModalContent>
        <ButtonWrapper>
          <DeleteBtn>확인</DeleteBtn>
          <CancleBtn>취소</CancleBtn>
        </ButtonWrapper>
      </ModalTemplate>
    </DarkBackground>
  );
}

export default Modal;
