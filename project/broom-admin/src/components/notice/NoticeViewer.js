import React, { useEffect } from "react";
import PageTemplate from "../Common/PageTemplate";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import { changeDataFormat } from "../../lib/changeDataFormat";
import { Link } from "react-router-dom";

const IframeWrapper = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 40px;

  .noticehtml {
    width: 100%;
    height: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const TitleDiv = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

function NoticeViewer({ notice, html, history, deletePost, id }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <TitleDiv>{notice.title}</TitleDiv>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginRight: "15px",
            }}
          >
            {changeDataFormat(notice.updateAt)[0]}
          </div>
          <ButtonWrapper>
            <Link to={`/notice/edit/${id}`}>
              <div>
                <Icon circular inverted name="pencil" color="blue" />
              </div>
            </Link>

            <Icon
              circular
              inverted
              name="delete"
              color="red"
              onClick={async () => {
                if (window.confirm("정말 삭제하시겠습니까?")) {
                  await deletePost();
                  await alert("삭제가 완료 되었습니다.");
                  await history.push("/notice");
                }
              }}
            />
          </ButtonWrapper>
        </div>
      </div>

      <IframeWrapper>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </IframeWrapper>
    </>
  );
}

export default NoticeViewer;
