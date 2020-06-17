import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../modules/login";
import LogoutButton from "../../components/Login/LogoutButton";

function LogoutButtonContainer() {
  const dispatch = useDispatch();
  let history = useHistory();
  const onLogout = async () => {
    if (window.confirm("정말 로그아웃 하시겠습니까?")) {
      localStorage.clear();
      dispatch(logout());
      await window.alert("로그아웃 되었습니다.");
      history.push("/login");
    }
  };
  return <LogoutButton logout={onLogout} />;
}

export default LogoutButtonContainer;
