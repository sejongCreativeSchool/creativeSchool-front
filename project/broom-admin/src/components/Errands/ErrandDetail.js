import React from "react";
import PageTemplate from "../Common/PageTemplate";
import styled from "styled-components";
import { changeDataFormat } from "../../lib/changeDataFormat";
import { Button, Modal } from "semantic-ui-react";
import HeaderAndNavPage from "../../pages/HeaderAndNavPage";

const Headerstyle = styled.h3`
  font-family: "S-CoreDream-6Bold";
  font-size: 2rem;
  margin-bottom: 15px;
`;

const ListStyle = styled.div`
  font-size: 1.25rem;
`;

const ItemStyle = styled.div`
  padding: 10px;
  display: flex;
  text-align: center;

  .item-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 10px;
    text-align: center;
  }

  .deleteBtn {
    width: 100px;
    height: 30px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .deleteBtn:hover {
    background-color: red;
  }
`;

const DelteBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  margin-top: 30px;

  .deleteBtn {
    width: 150px;
    height: 40px;
    border: 1px solid #cccccc;
    background-color: rgb(255, 0, 0);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .deleteBtn:hover {
    background-color: rgba(255, 0, 0, 0.8);
  }
`;

function ErrandDetail({ errand, deleteById, history }) {
  return (
    <>
      <HeaderAndNavPage />
      <PageTemplate>
        <Headerstyle>| 심부름 관리</Headerstyle>
        <ListStyle>
          <ItemStyle>
            <div className="item-title">{`심부름 ID `}</div>
            <div>{errand._id}</div>
          </ItemStyle>
          <hr />

          <ItemStyle>
            <div className="item-title">{`카테고리 `}</div>
            <div>{errand.category}</div>
          </ItemStyle>
          <hr />

          <ItemStyle>
            <div className="item-title">{`가격`}</div>
            <div>{`${errand.price}원`}</div>
          </ItemStyle>
          <hr />

          <ItemStyle>
            <div className="item-title">{`기한`}</div>
            <div>{`${errand.dueto} 까지`}</div>
          </ItemStyle>
          <hr />

          <ItemStyle>
            <div className="item-title">{`경로 `}</div>
            <div>{`${errand.from} → ${errand.to}`}</div>
          </ItemStyle>
          <hr />

          <ItemStyle>
            <div className="item-title">{`상세 `}</div>
            <div>{`${errand.desc}`}</div>
          </ItemStyle>
          <hr />

          <ItemStyle>
            <div className="item-title">{`진행 상태 `}</div>
            <div>{`${errand.done ? "완료" : "미완료"}`}</div>
          </ItemStyle>
          <hr />

          <ItemStyle>
            <div className="item-title">{`업로드 `}</div>
            <div>{`${changeDataFormat(errand.createdAt)[0]} ${
              changeDataFormat(errand.createdAt)[1]
            } `}</div>
          </ItemStyle>
          <hr />

          <ItemStyle>
            <div className="item-title">{`최종 수정 `}</div>
            <div>{`${changeDataFormat(errand.updatedAt)[0]} ${
              changeDataFormat(errand.updatedAt)[1]
            } `}</div>
          </ItemStyle>
          <hr />

          <DelteBtnWrapper>
            <div
              className="deleteBtn"
              onClick={async () => {
                if (window.confirm("정말 심부름을 삭제하시겠습니까?")) {
                  await deleteById(errand._id);
                  await alert("삭제가 완료 되었습니다,");
                  await history.goBack();
                }
              }}
            >
              심부름 삭제
            </div>
          </DelteBtnWrapper>
        </ListStyle>
      </PageTemplate>
    </>
  );
}

export default ErrandDetail;
