import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const LoaderStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

function Loader() {
  return (
    <LoaderStyle>
      <Icon loading name="spinner" size="massive" color="white" />
    </LoaderStyle>
  );
}

export default Loader;
