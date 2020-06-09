import React from "react";
import NeederDetail, {
  BackgroundDiv,
} from "../components/needer-detail/NeederDetail";

import styled from "styled-components";
import Responsive from "../components/common/Responsive";
import MobileNeederDetail from "../components/needer-detail/MobileNeederDetail";

export const PageTemplateStyle = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    width: 100vw;
    height: 160vh;
    margin-bottom: 10%;
  }
`;

const MobilePage = styled.div`
  @media (min-width: 1025x) {
    display: none;
  }

  @media (max-width: 1024px) {
    margin-bottom: 10vh;
  }
`;

function PageFour() {
  return (
    <>
      <PageTemplateStyle>
        <BackgroundDiv>
          <Responsive>
            <NeederDetail />
          </Responsive>
        </BackgroundDiv>
      </PageTemplateStyle>

      <MobilePage>
        <MobileNeederDetail />
      </MobilePage>
    </>
  );
}

export default PageFour;
