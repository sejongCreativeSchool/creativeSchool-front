import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTitleInput,
  updateEditorState,
  postNoticeRequest,
} from "../../modules/writingnotice";
import WritingNotice from "../../components/notice/WritingNotice";

import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { convertToRaw } from "draft-js";

function WritingNoticeContainer({ match, history }) {
  const { title, editorState } = useSelector((state) => state.writingnotice);
  const dispatch = useDispatch();

  const onUpdateTitleInput = (e) => dispatch(updateTitleInput(e));
  const onUpdateEditorState = (editorState) =>
    dispatch(updateEditorState(editorState));

  const onPostNoticeRequest = () => {
    let html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(html);
    html = new Blob([html], { type: "text/html" });
    console.log(html);
    let file = new File([html], "ddakDae", { type: html.type });
    console.log(file);
    return dispatch(postNoticeRequest(file, title));
  };

  return (
    <WritingNotice
      title={title}
      editorState={editorState}
      onUpdateTitleInput={onUpdateTitleInput}
      onUpdateEditorState={onUpdateEditorState}
      onPost={onPostNoticeRequest}
      match={match}
      history={history}
    />
  );
}

export default WritingNoticeContainer;
