import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";

const EditorWrapper = styled.div`
  margin-bottom: 15px;
  color: black;
`;

const TotalWrapper = styled.div`
  .titleInput {
    width: 100%;
    margin-bottom: 15px;
    border: 1px solid #ccc;
  }
`;

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

function WritingNotice({
  title,
  editorState,
  onUpdateTitleInput,
  onUpdateEditorState,
  onPost,
  history,
  match,
}) {
  return (
    <TotalWrapper>
      <Input
        className="titleInput"
        placeholder="제목을 입력하세요..."
        onChange={onUpdateTitleInput}
        value={title}
      />
      <EditorWrapper>
        <Editor
          editorClassName="editor"
          toolbarClassName="toolbar"
          localization={{
            locale: "ko",
          }}
          editorState={editorState}
          onEditorStateChange={onUpdateEditorState}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },

            image: {
              uploadCallback: uploadImageCallBack,
              alt: { present: true, mandatory: true },
            },
          }}
        />
      </EditorWrapper>
      <Button
        onClick={async () => {
          if (window.confirm("업로드 하시겠습니까?")) {
            await onPost();
            await alert("업로드가 완료 되었습니다.");
            await history.goBack();
          }
        }}
      >
        업로드
      </Button>
    </TotalWrapper>
  );
}

export default WritingNotice;
