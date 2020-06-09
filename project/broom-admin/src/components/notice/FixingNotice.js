import React, { useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

function FixingNotice({
  history,
  match,
  title,
  onChangeTitle,
  draft,
  onChangeDraft,
  onUpdate,
}) {
  useEffect(() => {}, []);
  return (
    <TotalWrapper>
      <Input
        className="titleInput"
        placeholder="제목을 입력하세요..."
        value={title}
        onChange={onChangeTitle}
      />
      <EditorWrapper>
        <Editor
          editorClassName="editor"
          toolbarClassName="toolbar"
          editorState={draft}
          onEditorStateChange={onChangeDraft}
          localization={{
            locale: "ko",
          }}
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
          if (window.confirm("수정 하시겠습니까?")) {
            try {
              await onUpdate();
              await alert("수정이 완료 되었습니다.");
            } catch (e) {
              alert("에러가 발생했습니다.");
            }
            await history.goBack();
          }
        }}
      >
        업로드
      </Button>
    </TotalWrapper>
  );
}

export default FixingNotice;

/*
editorState={editorState}
          onEditorStateChange={onUpdateEditorState}
           */
