import React from "react";
import styled from "styled-components";

import campus from "../res/first-page/campus.svg";
import heartMarker from "../res/first-page/heartMarker.svg";

import ScrollAnimation from "react-animate-on-scroll";
import Responsive from "./common/Responsive";

import leaf2 from "../res/first-page/leaf2.svg";

import mobileMap from "../res/common/map.svg";

const PCWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;

const MainComponentStyle = styled.div`
  width: 100%;
  margin-top: 5%;
  height: 50vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BroomText = styled.div`
  display: flex;
  flex-direction: column;

  width: 40vw;
  margin-left: 15vw;

  margin-top: 10px;

  white-space: nowrap;

  .text-school {
    margin: 0;
    padding: 0;

    font-family: "S-CoreDream-6Bold";
    font-size: 2rem;
    color: #606060;
  }

  .broom-text {
    margin: 0;
    padding: 0;

    margin-top: 20px;

    font-family: "S-CoreDream-6Bold";
    font-size: 4.3rem;
    color: #ff1229;
  }
`;

const MapStyle = styled.div`
  display: flex;
  margin-right: 15vw;

  .marker {
    width: 100%;
  }

  .marker-wrapper {
    position: relative;
    left: 52%;
    top: -7vh;

    z-index: 2;
    max-width: 7vw;
  }

  .map {
    width: 100%;
  }

  .map-wrapper {
    width: 41.6vw;
    max-width: 700px;
  }
`;

const LeafDiv = styled.div`
  position: absolute;
  z-index: 3;

  .leaf2 {
    position: absolute;
  }
`;

const BroomMobileText = styled.div`
  font-family: "S-CoreDream-6Bold";
  font-weight: bold;
  font-size: 2rem;
  color: #606060;

  .broom {
    font-size: 3rem;
    color: #ff1229;
    margin-top: 10px;
  }
`;

const BroomMobileMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 100px;

  .map-wrapper {
    max-width: 90vw;
  }

  .map {
    max-width: 100%;
  }

  .marker {
    position: relative;
    max-width: 15vw;
    bottom: 30vh;
  }
`;

function MainComponent() {
  return (
    <>
      <PCWrapper>
        <MainComponentStyle>
          <BroomText>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              className="broomText"
              animateOnce={true}
              delay={2000}
            >
              <h4 className="text-school">
                학교에서
                <br />
                심부름이 필요할 때
              </h4>
              <h4 className="broom-text">부름</h4>
            </ScrollAnimation>
          </BroomText>

          <MapStyle>
            <div className="marker-wrapper">
              <ScrollAnimation
                delay={2500}
                animateIn="animate__backInDown"
                initiallyVisible={false}
                animateOnce={true}
              >
                <img className="marker" src={heartMarker} alt="marker" />
              </ScrollAnimation>
            </div>

            <div className="map-wrapper">
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                animateOnce={true}
                delay={2000}
              >
                <img className="map" src={campus} alt="campus" />
              </ScrollAnimation>
            </div>
          </MapStyle>

          <LeafDiv>
            <ScrollAnimation
              animateIn="animate__hinge"
              initiallyVisible={false}
              animateOnce={true}
              duration={2}
            >
              <img src={leaf2} alt="leaf2" className="leaf2" />
            </ScrollAnimation>
          </LeafDiv>
        </MainComponentStyle>
      </PCWrapper>
      <MobileWrapper>
        <BroomMobileText>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            className="broomText"
            animateOnce={true}
          >
            <div className="broom-desc">학교에서</div>
            <div className="broom-desc">심부름이 필요할 때,</div>
            <div className="broom">부름</div>
          </ScrollAnimation>
        </BroomMobileText>

        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          className="broomText"
          animateOnce={true}
        >
          <BroomMobileMap>
            <div className="map-wrapper">
              <img src={mobileMap} alt="map" className="map" />
            </div>
          </BroomMobileMap>
        </ScrollAnimation>
      </MobileWrapper>
    </>
  );
}

export default MainComponent;
