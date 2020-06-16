import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotificationItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  width: 100vw;
  height: 60px;

  padding: 3px 15px;

  border-bottom: 1px solid #cccccc;

  .noti-title {
    width: 94vw;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 1.25rem;
    color: black;
  }
`;

function NotificationItem({ title }) {
  return (
    <NotificationItemStyle>
      <div className="noti-title">{title}</div>
    </NotificationItemStyle>
  );
}

function NotificationList({ notices }) {
  return (
    <div>
      {notices &&
        notices.map((notice) => (
          <Link to={`/${notice._id}`}>
            <NotificationItem title={notice.title} />
          </Link>
        ))}
    </div>
  );
}

export default NotificationList;
