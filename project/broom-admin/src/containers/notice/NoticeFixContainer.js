import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";

import Loader from "../../components/Common/Loader";

import {
  changeTitle,
  getNoticeById,
  updateEditorState,
  updateNoticeById,
} from "../../modules/noticefix";

import FixingNotice from "../../components/notice/FixingNotice";

function NoticeFixContainer({ match, history }) {
  const { id } = match.params;

  const { title, get_loading, get_error, draft } = useSelector(
    (state) => state.noticefix
  );

  const dispatch = useDispatch();

  const onChangeTitle = (e) => {
    dispatch(changeTitle(e.target.value));
  };

  const onChangeDraft = (editorState) => {
    dispatch(updateEditorState(editorState));
  };

  const onUpdateById = () => {
    let html = draftToHtml(convertToRaw(draft.getCurrentContent()));
    console.log(html);
    html = new Blob([html], { type: "text/html" });
    let file = new File([html], "ddakDae", { type: html.type });
    return dispatch(updateNoticeById(file, title, id));
  };

  useEffect(() => {
    console.log(id);
    dispatch(getNoticeById(id));
  }, []);

  if (get_error) {
    return <div>에러가 발생했습니다. 잠시 기다렸다 새로고침 해주세요.</div>;
  }

  if (get_loading) {
    return <Loader />;
  }

  if (title !== null) {
    return (
      <FixingNotice
        history={history}
        id={id}
        title={title}
        draft={draft}
        onChangeTitle={onChangeTitle}
        onChangeDraft={onChangeDraft}
        onUpdate={onUpdateById}
      />
    );
  }

  return <div></div>;
}

export default NoticeFixContainer;
