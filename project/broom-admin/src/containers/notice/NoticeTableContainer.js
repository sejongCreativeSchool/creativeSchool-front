import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNoticesRequest } from "../../modules/noticetable";
import Loader from "../../components/Common/Loader";
import NoticeTable from "../../components/notice/NoticeTable";

function ErrandTableContainer() {
  const { notices_loading, notices, notices_error } = useSelector(
    (state) => state.noticetable
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticesRequest());
  }, []);

  if (notices_error) {
    return <div>에러 났습니다</div>;
  }

  if (notices_loading) {
    return <Loader />;
  }

  return <NoticeTable notices={notices} />;
}

export default ErrandTableContainer;
