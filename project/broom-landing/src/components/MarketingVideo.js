import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IframeWrapper = styled.div`
  width: 100%;
  height: 50vh;

  .iframe {
    border: 0px;
  }
`;

function MarketingVideo() {
  return (
    <VideoContainer>
      <IframeWrapper>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/n8RSuWc3B_8"
          allow="accelerometer; autoplay;"
          allowfullscreen
          title="broom_video"
          className="iframe"
        ></iframe>
      </IframeWrapper>
    </VideoContainer>
  );
}

export default MarketingVideo;
