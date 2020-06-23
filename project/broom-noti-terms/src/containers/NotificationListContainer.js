import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNoticesRequest } from "../modules/noticeList";
import Loader from "../components/Loader";
import NotificationList from "../components/NotificationList";

function NotificationListContainer() {
  const { notices_loading, notices, notices_error } = useSelector(
    (state) => state.noticeList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticesRequest());
  }, []);

  if (notices_loading) {
    return <Loader />;
  }

  if (notices_error) {
    return (
      <>
        <div>에러가 발생했습니다</div>
        <div>다시 실행해주세요.</div>
      </>
    );
  }
  return <NotificationList notices={notices} />;
}

export default NotificationListContainer;
