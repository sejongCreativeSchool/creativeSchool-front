import React, { useEffect, useCallback, useState } from "react";
import ErrandsPage from "../../pages/ErrandsPage";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthRequest } from "../../modules/login";
import Loader from "../../components/Common/Loader";

function ErrandPageContainer({ history }) {
  const { check_loading, login, check } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthRequest());
  }, []);

  if (check_loading === "loading") {
    return <Loader />;
  }

  if (!check_loading && !login) {
    history.push("/login");
  }

  return <ErrandsPage />;
}

export default ErrandPageContainer;
