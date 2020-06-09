import React from "react";
import MarketingVideo from "../components/MarketingVideo";
import { PageTemplateStyle } from "../components/common/PageTemplate";
import Responsive from "../components/common/Responsive";

function PageThree() {
  return (
    <PageTemplateStyle>
      <Responsive>
        <MarketingVideo />
      </Responsive>
    </PageTemplateStyle>
  );
}

export default PageThree;
