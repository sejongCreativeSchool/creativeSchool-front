import React from "react";
import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";

const LoginInputStyle = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "S-CoreDream-6Bold";

  .container {
    width: 100%;
  }

  .inputs {
    width: 100%;
    height: 30px;
    margin-top: 5px;
  }

  .submitBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 50px;

    border-radius: 15px;

    background: #0105ac;
    font-size: 1.5rem;
    color: white;

    &:hover {
      background-color: #f37274;
    }
  }
`;

function LoginInput({ onChangeInput, id, password, onLogin }) {
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

        <div
          className="submitBtn"
          onClick={() => {
            console.log(id, password);
            onLogin();
          }}
        >
          <span>로그인</span>
        </div>
      </div>
    </LoginInputStyle>
  );
}

export default LoginInput;
