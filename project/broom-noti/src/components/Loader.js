import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const LoaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.3);
`;

function Loader() {
  return (
    <LoaderStyle>
      <Icon loading name="asterisk" size="big" />
    </LoaderStyle>
  );
}

export default Loader;
