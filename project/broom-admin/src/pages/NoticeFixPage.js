import React from "react";
import PageTemplate from "../components/Common/PageTemplate";
import styled from "styled-components";

import WritingNoticeContainer from "../containers/notice/WritingNoticeContainer";
import NoticeFixContainer from "../containers/notice/NoticeFixContainer";
import HeaderAndNavPage from "./HeaderAndNavPage";

const Headerstyle = styled.h3`
  font-family: "S-CoreDream-6Bold";
  font-size: 2rem;
  margin-bottom: 15px;
`;

function NoticeFixPage({ match, history }) {
  return (
    <>
      <HeaderAndNavPage />
      <PageTemplate>
        <Headerstyle>| 공지 수정</Headerstyle>
        <NoticeFixContainer match={match} history={history} />
      </PageTemplate>
    </>
  );
}
export default NoticeFixPage;
