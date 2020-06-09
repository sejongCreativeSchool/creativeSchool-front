import React from "react";
import styled from "styled-components";

const PageTemplateStyle = styled.div`
  padding-left: 250px;
  padding-top: 100px;
  padding-right: 3vw;
`;

function PageTemplate({ children }) {
  return <PageTemplateStyle>{children}</PageTemplateStyle>;
}

export default PageTemplate;
