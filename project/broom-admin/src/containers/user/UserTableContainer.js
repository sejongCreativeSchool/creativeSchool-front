import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersRequest } from "../../modules/usertable";
import UserTable from "../../components/user/UserTable";
import Loader from "../../components/Common/Loader";

function UserTableContainer() {
  const { users_loading, users, users_error } = useSelector(
    (state) => state.usertable
  );

  const { value } = useSelector((state) => state.usersearch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  if (users_error) {
    return <div>에러 났습니다</div>;
  }

  if (users_loading) {
    return <Loader />;
  }

  return users && <UserTable users={users} inputvalue={value} />;
}

export default UserTableContainer;
