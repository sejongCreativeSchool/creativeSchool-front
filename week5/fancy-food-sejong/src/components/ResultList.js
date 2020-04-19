import React from "react";
import { fancyRestaurants } from "../restaurantInfo/restaurantInfo";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import styled from "styled-components";

import korean from "../res/foodicon/korean.png";
import japanese from "../res/foodicon/japanese.png";
import chinese from "../res/foodicon/chinese.png";
import western from "../res/foodicon/western.png";
import cafe from "../res/foodicon/cafe.png";
import alcohol from "../res/foodicon/alcohol.png";

const chooseIcon = (item) => {
  //카테고리에 맞는 그림을 반환한다.
  switch (item) {
    case "한식":
      return korean;
    case "일식":
      return japanese;
    case "중식":
      return chinese;
    case "양식":
      return western;
    case "카페":
      return cafe;
    case "술집":
      return alcohol;
    default:
      return null;
  }
};

const ResultListStyle = styled.div`
  .item {
    padding: 5% 5%;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
  }

  .category {
    max-width: 30px;
    display: block;
  }
  .categorydiv {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: 12px;
    justify-content: center;
  }

  .arrowIcon {
    color: rgb(195, 0, 47);
  }
`;

const getFilteredList = (filterState) => {
  const { korean, japanese, chinese, western, cafe, alcohol } = filterState;

  let showedList = [];

  if (korean) {
    showedList = showedList.concat(
      fancyRestaurants.filter((item) => item.category === "한식")
    );
  }
  if (japanese) {
    showedList = showedList.concat(
      fancyRestaurants.filter((item) => item.category === "일식")
    );
  }
  if (chinese) {
    showedList = showedList.concat(
      fancyRestaurants.filter((item) => item.category === "중식")
    );
  }
  if (western) {
    showedList = showedList.concat(
      fancyRestaurants.filter((item) => item.category === "양식")
    );
  }
  if (cafe) {
    showedList = showedList.concat(
      fancyRestaurants.filter((item) => item.category === "카페")
    );
  }
  if (alcohol) {
    showedList = showedList.concat(
      fancyRestaurants.filter((item) => item.category === "술집")
    );
  }

  console.log(showedList);
  return showedList;
};

function ResultList({ filterState, onSetCenterPosition }) {
  return (
    <ResultListStyle>
      {getFilteredList(filterState).map((item) => (
        <div
          className="item"
          onClick={() => {
            onSetCenterPosition(item.id);
          }}
        >
          <div>
            <div style={{ fontWeight: "bold" }}>{item.name}</div>
            <div>추천메뉴 : {item.recommend}</div>
          </div>

          <div className="categorydiv">
            <img
              src={chooseIcon(item.category)}
              alt="종류"
              className="category"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>{item.category}</div>
            </div>
          </div>

          <div>
            <div>
              <Link to="/detail">
                <Icon name="angle right" size="big" className="arrowIcon" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </ResultListStyle>
  );
}

export default ResultList;
