import React, { useEffect } from "react";
import LoginInput from "../../components/Login/LoginInput";
import { useSelector, useDispatch } from "react-redux";
import { changeInput } from "../../modules/login";
import { postLoginRequest } from "../../modules/login";
import Loader from "../../components/Common/Loader";

function LoginInputContainer({ history }) {
  const { id, password, login, login_loading } = useSelector(
    (state) => state.login
  );

  const dispatch = useDispatch();

  const onChangeInput = (e) =>
    dispatch(changeInput(e.target.name, e.target.value));

  const onLogin = () => dispatch(postLoginRequest(id, password));

  if (login) {
    history.push("/errands");
  }

  if (login_loading) {
    return <Loader />;
  }

  return (
    <div>
      <LoginInput
        onChangeInput={onChangeInput}
        id={id}
        password={password}
        onLogin={() => {
          onLogin();
        }}
      />
    </div>
  );
}

export default LoginInputContainer;
