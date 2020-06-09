import React from "react";
import styled from "styled-components";
import HeaderImg from "../../res/common/header.svg";
import Responsive from "./Responsive";
import logo from "../../res/common/logo.svg";

import { Link as ScrollLink } from "react-scroll";

const HeaderImgStyle = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    display: flex;
    max-width: 100vw;
    height: 40vh;
    justify-content: space-between;
    margin-top: 10px;

    overflow: hidden;

    .inside-responsive {
      display: flex;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
    }

    .header-img {
    }

    .logo-wrapper {
      display: flex;
      align-items: center;
    }

    .logo-wrapper:hover {
      cursor: pointer;
    }

    font-family: "S-CoreDream-6Bold";
    color: white;
    font-size: 1.5rem;

    .img-bg-wrapper {
      width: 100vw;
      height: 30vh;
      position: absolute;
      z-index: -1;
    }
  }
`;

const ListStyle = styled.ul`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    list-style: none;
    display: flex;

    .list-item {
      margin-left: 10px;
      margin-right: 10px;
    }

    .list-item:hover {
      cursor: pointer;
    }
  }
`;

const Img = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    width: 100vw;
    height: 1000px;

    background-image: url(${HeaderImg});
    background-repeat: repeat-x;

    position: absolute;
    z-index: -1;
    top: -500px;
  }
`;

/////////////////////////////

const HeaderMobileStyle = styled.div`
  @media (max-width: 1024px) {
    width: 100vw;
    height: 10vh;
    background-color: #ff1229;

    font-family: "S-CoreDream-6Bold";
    font-weight: bold;
    color: white;
    font-size: 2rem;

    display: flex;

    align-items: center;
    margin-bottom: 30px;

    .logo {
      max-height: 8vh;
    }
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;
function Header() {
  return (
    <>
      <HeaderImgStyle>
        <div className="img-bg-wrapper">
          <Img />
        </div>
        <Responsive>
          <div className="inside-responsive">
            <div
              className="logo-wrapper"
              onClick={() => {
                window.location.reload();
              }}
            >
              <div>
                <img
                  src={logo}
                  alt="로고"
                  style={{ maxHeight: "8vh", marginRight: "10px" }}
                />
              </div>
              <span style={{ fontSize: "2rem" }}>부름</span>
            </div>
            <div>
              <ListStyle>
                <li className="list-item">
                  <ScrollLink
                    activeClass="active"
                    to="needer"
                    spy={true}
                    smooth={true}
                    duration={700}
                  >
                    NEEDER
                  </ScrollLink>
                </li>

                <li className="list-item">
                  <ScrollLink
                    activeClass="active"
                    to="helper"
                    spy={true}
                    smooth={true}
                    duration={800}
                  >
                    HELPER
                  </ScrollLink>
                </li>
              </ListStyle>
            </div>
          </div>
        </Responsive>
      </HeaderImgStyle>
      {/* 아래는 반응형 모바일 헤더 */}
      <HeaderMobileStyle>
        <div
          onClick={() => {
            window.location.reload();
          }}
          style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
        >
          <div
            style={{
              display: "flex",
              height: "10vh",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="로고"
              className="logo"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            />
          </div>
          <div>부름</div>
        </div>
      </HeaderMobileStyle>
    </>
  );
}

export default Header;
