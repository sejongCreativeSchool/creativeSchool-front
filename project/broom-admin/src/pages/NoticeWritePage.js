import React from "react";

import PageTemplate from "../components/Common/PageTemplate";
import styled from "styled-components";

import WritingNoticeContainer from "../containers/notice/WritingNoticeContainer";

const Headerstyle = styled.h3`
  font-family: "S-CoreDream-6Bold";
  font-size: 2rem;
  margin-bottom: 15px;
`;

function NoticeWritePage({ match, history }) {
  return (
    <PageTemplate>
      <Headerstyle>| 공지 작성</Headerstyle>
      <WritingNoticeContainer match={match} history={history} />
    </PageTemplate>
  );
}

export default NoticeWritePage;
