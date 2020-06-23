import React from "react";
import styled from "styled-components";
import NotificationListContainer from "../containers/NotificationListContainer";

const NoticeListPageStyle = styled.div`
  min-height: 100vh;
`;

function NoticeListPage() {
  return (
    <NoticeListPageStyle>
      <NotificationListContainer />
    </NoticeListPageStyle>
  );
}

export default NoticeListPage;
