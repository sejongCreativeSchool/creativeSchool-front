import React from "react";
import styled from "styled-components";

import CarouselUpdate from "../components/common/CarouselUpdate";
import Responsive from "../components/common/Responsive";
import MobileCarousel from "../components/MobileCarousel";

export const PageTemplateStyle = styled.div`
  @media (min-width: 1025px) {
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobilePageTempalte = styled.div``;

function PageTwo() {
  return (
    <>
      <PageTemplateStyle>
        <Responsive>
          <CarouselUpdate />
        </Responsive>
      </PageTemplateStyle>
      <MobilePageTempalte>
        <MobileCarousel />
      </MobilePageTempalte>
    </>
  );
}

export default PageTwo;
