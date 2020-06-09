import React from "react";
import HelperDetail, { BackgroundDiv } from "../components/HelperDetail";
import Responsive from "../components/common/Responsive";
import styled from "styled-components";
import MobileHelperDetail from "../components/MobileHelperDetail";

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
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
  }
`;

function PageFive() {
  return (
    <>
      <PageTemplateStyle>
        <BackgroundDiv>
          <Responsive>
            <HelperDetail />
          </Responsive>
        </BackgroundDiv>
      </PageTemplateStyle>

      <MobilePage>
        <MobileHelperDetail />
      </MobilePage>
    </>
  );
}

export default PageFive;
