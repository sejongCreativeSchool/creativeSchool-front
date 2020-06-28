import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersRequest } from "../../modules/usertable";
import UserTable from "../../components/user/UserTable";
import Loader from "../../components/Common/Loader";

function UserTableContainer() {
  const { value } = useSelector((state) => state.usersearch);
  const { users_loading, users, users_error } = useSelector(
    (state) => state.usertable
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  if (users_error) {
    return <div>에러가 발생했습니다. 다시 시도해 주세요.</div>;
  }

  if (users_loading) {
    return <Loader />;
  }

  return users && <UserTable users={users} inputvalue={value} />;
}

export default UserTableContainer;
