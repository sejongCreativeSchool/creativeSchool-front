import React, { useEffect, useCallback, useState } from "react";
import ErrandsPage from "../../pages/ErrandsPage";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthRequest } from "../../modules/login";
import Loader from "../../components/Common/Loader";

function ErrandPageContainer({ history }) {
  const { check, check_loading, login } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthRequest());
  }, []);

  if (check_loading) {
    return <Loader />;
  }

  if (check !== null) {
    if (check_loading === false && check !== "root") {
      console.log("check_loading : ", check_loading, "check : ", check);
      history.push("/login");
    }
  }
  return <ErrandsPage />;
}

export default ErrandPageContainer;
