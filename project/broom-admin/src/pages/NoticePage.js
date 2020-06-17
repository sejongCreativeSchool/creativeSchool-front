import React from "react";
import styled from "styled-components";
import PageTemplate from "../components/Common/PageTemplate";
import NoticeTableContainer from "../containers/notice/NoticeTableContainer";
import WriteNoticeBtn from "../components/notice/WriteNoticeBtn";
import HeaderAndNavPage from "./HeaderAndNavPage";

const Headerstyle = styled.h3`
  font-family: "S-CoreDream-6Bold";
  font-size: 2rem;
  margin-bottom: 15px;
`;

function NoticePage() {
  return (
    <>
      <HeaderAndNavPage />
      <PageTemplate>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Headerstyle>| 공지사항</Headerstyle>
          <WriteNoticeBtn />
        </div>
        <NoticeTableContainer />
      </PageTemplate>
    </>
  );
}

export default NoticePage;
