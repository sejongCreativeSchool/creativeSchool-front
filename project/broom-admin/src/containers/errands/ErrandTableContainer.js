import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getErrandsRequest } from "../../modules/errandtable";
import ErrandsTable from "../../components/Errands/ErrandsTable";
import Loader from "../../components/Common/Loader";

function ErrandTableContainer() {
  const { errands_loading, errands, errands_error } = useSelector(
    (state) => state.errandtable
  );

  const { value } = useSelector((state) => state.errandsearch);

  const { category, progress } = useSelector((state) => state.errandFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getErrandsRequest());
  }, []);

  if (errands_error) {
    return <div>에러 났습니다</div>;
  }

  if (errands_loading) {
    return <Loader />;
  }

  return (
    <ErrandsTable
      errands={errands}
      input={value}
      category={category}
      progress={progress}
    />
  );
}

export default ErrandTableContainer;
