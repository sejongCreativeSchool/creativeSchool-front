import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../../components/Common/Loader";

import UserDetail from "../../components/user/UserDetail";
import {
  getUserRequestById,
  deleteUserRequestById,
} from "../../modules/userdetail";
function UserDetailContainer({ match, history }) {
  const { accessToken } = match.params;
  const {
    user_loading,
    user,
    user_error,
    user_delete,
    user_delete_loading,
    user_delete_error,
  } = useSelector((state) => state.userdetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserRequestById(accessToken));
  }, []);

  if (user_error) {
    return <div>에러 났습니다</div>;
  }

  if (user_loading) {
    return <Loader />;
  }

  return (
    user && (
      <UserDetail
        user={user}
        history={history}
        deleteById={(accessToken) => {
          dispatch(deleteUserRequestById(accessToken));
        }}
      />
    )
  );
}

export default UserDetailContainer;
