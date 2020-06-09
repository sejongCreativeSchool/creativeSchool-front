import React from "react";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyleDiv = styled.div`
  display: flex;
  .btn {
    background-color: white;
    border: 1px solid #ccc;
    color: black;
  }

  margin-bottom: 30px;
`;

function WriteNoticeBtn() {
  return (
    <ButtonStyleDiv>
      <Link to="/notice/write">
        <Button icon labelPosition="right" className="btn">
          공지 작성
          <Icon name="write" />
        </Button>
      </Link>
    </ButtonStyleDiv>
  );
}

export default WriteNoticeBtn;
