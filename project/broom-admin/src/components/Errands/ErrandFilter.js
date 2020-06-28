import React from "react";
import { Checkbox } from "semantic-ui-react";
import styled, { css } from "styled-components";
import ErrandSearchContainer from "../../containers/errands/ErrandSearchContainer";

const FilterStyle = styled.div`
  background-color: #ccc;
  border-radius: 10px;
  border-bottom: 2px solid #ccc;

  display: flex;
  flex-direction: column;

  padding: 14px;

  .category-list {
    display: flex;
    list-style: none;
    padding-left: 0px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  margin-bottom: 30px;
`;

const CategoryItem = styled.li`
  background-color: white;
  color: black;
  width: 80px;
  height: 40px;
  text-align: center;
  font-size: 1.1rem;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 3px;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.checkValue &&
    css`
      background-color: #0105ac;
      color: white;
    `}

  &:hover {
    cursor: pointer;
  }
`;

function ErrandFilter({ category, progress, updateCategory, updateProgress }) {
  return (
    <FilterStyle>
      <ul className="category-list">
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <h3>카테고리</h3>
        </div>
        <CategoryItem
          id="가져다줘"
          checkValue={category.indexOf("가져다줘") > -1}
          onClick={updateCategory}
        >
          가져다줘
        </CategoryItem>

        <CategoryItem
          id="사다줘"
          checkValue={category.indexOf("사다줘") > -1}
          onClick={updateCategory}
        >
          사다줘
        </CategoryItem>

        <CategoryItem
          id="전달해줘"
          checkValue={category.indexOf("전달해줘") > -1}
          onClick={updateCategory}
        >
          전달해줘
        </CategoryItem>
        <CategoryItem
          id="제출해줘"
          checkValue={category.indexOf("제출해줘") > -1}
          onClick={updateCategory}
        >
          제출해줘
        </CategoryItem>
        <CategoryItem
          id="프린트해줘"
          checkValue={category.indexOf("프린트해줘") > -1}
          onClick={updateCategory}
        >
          프린트해줘
        </CategoryItem>
        <CategoryItem
          id="같이해줘"
          checkValue={category.indexOf("같이해줘") > -1}
          onClick={updateCategory}
        >
          같이해줘
        </CategoryItem>
        <CategoryItem
          id="대신해줘"
          checkValue={category.indexOf("대신해줘") > -1}
          onClick={updateCategory}
        >
          대신해줘
        </CategoryItem>
        <CategoryItem
          id="기타"
          checkValue={category.indexOf("기타") > -1}
          onClick={updateCategory}
        >
          기타
        </CategoryItem>
      </ul>

      <ul className="category-list">
        <h3>진행 상태</h3>
        <div style={{ marginLeft: "15px", display: "flex" }}>
          <div>
            <Checkbox
              type="radio"
              label="완료"
              style={{ marginRight: "15px" }}
              checked={progress.indexOf("done") > -1}
              onClick={updateProgress}
              id="done"
            />
          </div>
          <div>
            <Checkbox
              type="radio"
              label="미완료"
              id="notDone"
              checked={progress.indexOf("notDone") > -1}
              onClick={updateProgress}
              style={{ marginRight: "15px" }}
            />
          </div>
        </div>
      </ul>

      <div>
        <h3>검색</h3>
        <ErrandSearchContainer />
      </div>
    </FilterStyle>
  );
}

export default ErrandFilter;
