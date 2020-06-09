import React from "react";
import LoginInput from "../../components/Login/LoginInput";
import { useSelector, useDispatch } from "react-redux";
import { changeInput } from "../../modules/login";

function LoginInputContainer() {
  const { id, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const onChangeInput = (e) =>
    dispatch(changeInput(e.target.name, e.target.value));

  return (
    <div>
      <LoginInput onChangeInput={onChangeInput} id={id} password={password} />
    </div>
  );
}

export default LoginInputContainer;
