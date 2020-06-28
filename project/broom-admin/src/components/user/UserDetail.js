import React from "react";
import styled from "styled-components";
import PageTemplate from "../Common/PageTemplate";
import { changeDataFormat } from "../../lib/changeDataFormat";
import HeaderAndNavPage from "../../pages/HeaderAndNavPage";

const Headerstyle = styled.h3`
  margin-bottom: 15px;

  font-family: "S-CoreDream-6Bold";
  font-size: 2rem;
`;

const UserImageBlock = styled.div`
  margin-bottom: 20px;
`;

const ListStyle = styled.div`
  font-size: 1.25rem;
`;

const ItemStyle = styled.div`
  display: flex;

  padding: 10px;

  text-align: center;

  .item-title {
    margin-right: 10px;

    text-align: center;

    font-weight: bold;
    font-size: 1.5rem;
  }

  .deleteBtn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 30px;

    border: 1px solid #cccccc;
    border-radius: 5px;
  }

  .deleteBtn:hover {
    background-color: red;
  }
`;

const DelteBtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 30px;

  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  .deleteBtn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 40px;

    border: 1px solid #cccccc;
    border-radius: 5px;

    background-color: rgb(255, 0, 0);
  }

  .deleteBtn:hover {
    background-color: rgba(255, 0, 0, 0.8);
  }
`;

const UserProfileBlock = styled.div``;
function UserDetail({ user, history, deleteById }) {
  return (
    <>
      <HeaderAndNavPage />
      <PageTemplate>
        <div>
          <Headerstyle>| 회원 관리</Headerstyle>
          <div>
            <UserImageBlock>
              <img
                src="https://readyrefrigeration.ca/sites/default/files/styles/headshot/adaptive-image/public/nobody.jpg"
                alt="placeholder"
              />
            </UserImageBlock>
            <UserProfileBlock>
              <ListStyle>
                <ItemStyle>
                  <div className="item-title">{`이름 `}</div>
                  <div>{user.name}</div>
                </ItemStyle>
                <hr />

                <ItemStyle>
                  <div className="item-title">{`학과 `}</div>
                  <div>{user.department ? user.department : "미입력"}</div>
                </ItemStyle>
                <hr />

                <ItemStyle>
                  <div className="item-title">{`연락처`}</div>
                  <div>{user.phone ? user.phone : "미입력"}</div>
                </ItemStyle>
                <hr />

                <ItemStyle>
                  <div className="item-title">{`헬퍼 여부`}</div>
                  <div>{user.helper ? "O" : "X"}</div>
                </ItemStyle>
                <hr />

                <ItemStyle>
                  <div className="item-title">{`가입 날짜 `}</div>
                  <div>{`${changeDataFormat(user.createdAt)[0]} ${
                    changeDataFormat(user.createdAt)[1]
                  } `}</div>
                </ItemStyle>
                <hr />

                <ItemStyle>
                  <div className="item-title">{`업데이트 날짜 `}</div>
                  <div>{`${changeDataFormat(user.updatedAt)[0]} ${
                    changeDataFormat(user.updatedAt)[1]
                  } `}</div>
                </ItemStyle>
                <hr />

                <DelteBtnWrapper>
                  <div
                    className="deleteBtn"
                    onClick={async () => {
                      if (window.confirm("정말 유저를 삭제하시겠습니까?")) {
                        await deleteById(user.accessToken);
                        await alert("삭제가 완료 되었습니다,");
                        await history.goBack();
                      }
                    }}
                  >
                    유저 삭제
                  </div>
                </DelteBtnWrapper>
              </ListStyle>
            </UserProfileBlock>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export default UserDetail;
