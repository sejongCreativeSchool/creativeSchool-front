import React from "react";
import Header from "../components/common/Header";
import MainComponent from "../components/MainComponent";
import { PageTemplateStyle } from "../components/common/PageTemplate";
import Responsive from "../components/common/Responsive";
function PageOne() {
  return (
    <PageTemplateStyle>
      <Header />
      <Responsive>
        <MainComponent />
      </Responsive>
    </PageTemplateStyle>
  );
}

export default PageOne;
