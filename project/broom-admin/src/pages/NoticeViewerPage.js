import React from "react";
import styled from "styled-components";
import PageTemplate from "../components/Common/PageTemplate";
import NoticeViewerContainer from "../containers/notice/NoticeViewerContainer";

const Headerstyle = styled.h3`
  font-family: "S-CoreDream-6Bold";
  font-size: 2rem;
  margin-bottom: 15px;
`;

function NoticeViewerPage({ match, history }) {
  return (
    <PageTemplate>
      <Headerstyle>| 공지사항</Headerstyle>
      <NoticeViewerContainer match={match} history={history} />
    </PageTemplate>
  );
}

export default NoticeViewerPage;
