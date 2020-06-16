import React from "react";
import styled from "styled-components";

import NoticeViewerContainer from "../containers/NoticeViewerContainer";

const NoticeListPageStyle = styled.div`
  min-height: 100vh;
  padding: 20px 30px;
`;

function NoticeViewerPage({ match }) {
  return (
    <NoticeListPageStyle>
      <NoticeViewerContainer match={match} />
    </NoticeListPageStyle>
  );
}

export default NoticeViewerPage;
