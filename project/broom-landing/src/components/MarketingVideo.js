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
`;

function MarketingVideo() {
  return (
    <VideoContainer>
      <IframeWrapper>
        <iframe
          width="100%"
          height="100%"
          src="https://youtu.be/n8RSuWc3B_8"
          allow="autoplay = 1;"
          title="marketing-video"
        />
      </IframeWrapper>
    </VideoContainer>
  );
}

export default MarketingVideo;
