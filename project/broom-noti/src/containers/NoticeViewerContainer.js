import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../components/Loader";
import NoticeViewer from "../components/NoticeViewer";

import { getNoticeAndHTML } from "../modules/noticeviewer";
function NoticeViewerContainer({ match }) {
  const { id } = match.params;
  const { notice, html, loading, error } = useSelector(
    (state) => state.noticeviewer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    dispatch(getNoticeAndHTML(id));
  }, []);

  if (!notice) {
    return <div>NOT FOUND!</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다. 잠시 기다렸다 새로고침 해주세요.</div>;
  }

  if (loading) {
    return <Loader />;
  }

  if (notice) {
    return <NoticeViewer notice={notice} html={html} />;
  }
}

export default NoticeViewerContainer;
