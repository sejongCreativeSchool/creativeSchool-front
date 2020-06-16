import React, { useEffect } from "react";
import styled from "styled-components";

import {
  changeFromDataFormat,
  changeDataFormat,
} from "../lib/changeDataFormat";

const NoticeViewerTitleStyle = styled.div`
  font-weight: bold;
  margin-bottom: 15px;

  .title-wrapper {
    display: flex;
    justify-content: center;
    font-size: 1.75rem;
    margin-bottom: 25px;

    line-height: 140%;
  }

  .date-wrapper {
    display: flex;

    padding-bottom: 5px;
    border-bottom: 1px solid #cccccc;

    font-size: 1.25rem;
  }

  .date {
    margin-left: auto;
  }
`;

const HTMLWrapper = styled.div`
  max-width: 100%;

  .html-content {
    line-height: 140% !important;
    font-size: 1.5rem !important;

    img {
      max-width: 100% !important;
    }
  }
`;

function NoticeViewer({ notice, html }) {
  useEffect(() => {
    console.log(html);
  }, []);
  return (
    <>
      <NoticeViewerTitleStyle>
        <div className="title-wrapper">
          <span>{notice && notice.title}</span>
        </div>
        <div className="date-wrapper">
          <span className="date">{`게시: ${
            notice && changeDataFormat(notice.updateAt)[0]
          }`}</span>
        </div>
      </NoticeViewerTitleStyle>

      <HTMLWrapper>
        {html && (
          <div
            className="html-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </HTMLWrapper>
    </>
  );
}

export default NoticeViewer;
