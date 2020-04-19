import React from "react";
import styled from "styled-components";

import { fancyRestaurants } from "../restaurantInfo/restaurantInfo";
import KakaoMapContainer from "../containers/KakaoMapContainer";

import naver from "../res/naver.png";

const SecondPageStyle = styled.div`
  display: flex;
  width: 100%;

  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+KR&display=swap");

  .stress {
    font-size: 4rem;
    font-family: "Do Hyeon", sans-serif;
  }

  .description {
    font-family: "Do Hyeon", sans-serif;
  }

  .descriptiondiv {
    display: flex;
    margin-top: 60px;
    justify-content: center;
    background-color: #dbdbdb;
    height: 80px;
    align-items: center;
  }

  .container {
    width: 100%;
  }

  .namediv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
  }
  .name {
    font-size: 2rem;
    font-weight: bold;
    color: rgb(195, 0, 47);
  }

  .inneritem {
    margin-top: 20px;
    padding: 0% 5%;
  }

  .navericondiv {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 100px;
  }

  .navericon {
    max-width: 30%;
  }
`;

function StoreDetail({ id }) {
  const naverSearch = () => {
    window.open(
      `https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=${fancyRestaurants[id].name}`,
      "_blank"
    );
  };

  return (
    <SecondPageStyle>
      <div className="container">
        <KakaoMapContainer />
        <div className="namediv">
          <h3 className="name">{fancyRestaurants[id].name}</h3>
        </div>
        <div className="inneritem">
          <h3>카테고리: {fancyRestaurants[id].category} </h3>
        </div>

        <div className="inneritem">
          <h3>추천메뉴:{fancyRestaurants[id].recommend}</h3>
        </div>
        <div className="descriptiondiv">
          <div className="stress">"</div>
          <div className="description">{fancyRestaurants[id].description}</div>
          <div className="stress">"</div>
        </div>
        <div onClick={naverSearch} className="navericondiv">
          <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
            네이버에 음식점 검색하기
          </div>
          <img className="navericon" src={naver} alt="네이버로보기"></img>
        </div>
      </div>
    </SecondPageStyle>
  );
}

export default StoreDetail;
