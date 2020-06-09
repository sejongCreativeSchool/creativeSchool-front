import React from "react";
import styled from "styled-components";
import PageTemplate from "../components/Common/PageTemplate";
import ErrandTableContainer from "../containers/errands/ErrandTableContainer";
import ErrandFilterContainer from "../containers/errands/ErrandFilterContainer";

const Headerstyle = styled.h3`
  font-family: "S-CoreDream-6Bold";
  font-size: 2rem;
  margin-bottom: 15px;
`;

function ErrandsPage() {
  return (
    <PageTemplate>
      <Headerstyle>| 심부름 관리</Headerstyle>
      <ErrandFilterContainer />
      <ErrandTableContainer />
    </PageTemplate>
  );
}

export default ErrandsPage;
