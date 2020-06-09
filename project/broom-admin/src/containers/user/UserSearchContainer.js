import React from "react";
import UserSearch from "../../components/user/UserSearch";

import { useSelector, useDispatch } from "react-redux";
import { changeUserInput } from "../../modules/usersearch";

function UserSearchContainer() {
  const { value } = useSelector((state) => state.usersearch);
  const dispatch = useDispatch();

  const onChangeUserInput = (value) => dispatch(changeUserInput(value));

  return <UserSearch value={value} onChange={onChangeUserInput} />;
}

export default UserSearchContainer;
