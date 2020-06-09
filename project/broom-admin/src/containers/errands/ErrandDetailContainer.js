import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../../components/Common/Loader";

import ErrandDetail from "../../components/Errands/ErrandDetail";
import {
  getErrandRequestById,
  deleteErrandRequestById,
} from "../../modules/erranddetail";
function ErrandDetailContainer({ match, history }) {
  const { id } = match.params;
  const {
    errand_loading,
    errand,
    errand_error,
    errand_delete,
    errand_delete_loading,
    errand_delete_error,
  } = useSelector((state) => state.erranddetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getErrandRequestById(id));
  }, []);

  if (errand_error) {
    return <div>에러 났습니다</div>;
  }

  if (errand_loading) {
    return <Loader />;
  }

  return (
    errand && (
      <ErrandDetail
        errand={errand}
        history={history}
        deleteById={(id) => {
          dispatch(deleteErrandRequestById(id));
        }}
      />
    )
  );
}

export default ErrandDetailContainer;
