import React from "react";
import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";

const LoginInputStyle = styled.div`
  display: flex;
  flex-direction: column;

  .container {
    width: 100%;
  }

  .inputs {
    width: 100%;
    height: 30px;
    margin-top: 5px;
  }

  .submitBtn {
    margin-top: 5px;
    width: 100%;
    height: 50px;

    &:hover {
      background-color: #f37274;
    }
  }
`;

function LoginInput({ onChangeInput, id, password }) {
  return (
    <LoginInputStyle>
      <div className="container">
        <Input
          className="inputs"
          placeholder="아이디"
          name="id"
          value={id}
          onChange={onChangeInput}
        />

        <Input
          className="inputs"
          placeholder="비밀번호"
          type="password"
          name="password"
          value={password}
          onChange={onChangeInput}
        />

        <Button
          className="submitBtn"
          onClick={() => {
            console.log(id, password);
          }}
        >
          로그인
        </Button>
      </div>
    </LoginInputStyle>
  );
}

export default LoginInput;
