import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import needer from "../../res/carousel/needer.png";
import helper from "../../res/carousel/helper.png";

const CarouselContainer = styled.div`
  width: 100%;
  border: 0px;
`;

const CarouselItem = styled.div`
  width: 100%;
`;

function CarouselUpdate() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <CarouselContainer>
      <Slider {...settings}>
        <CarouselItem>
          <img src={needer} alt="needer" style={{ width: "100%" }} />
        </CarouselItem>

        <CarouselItem>
          <img src={helper} alt="helper" style={{ width: "100%" }} />
        </CarouselItem>
      </Slider>
    </CarouselContainer>
  );
}

export default CarouselUpdate;
