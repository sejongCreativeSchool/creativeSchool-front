import React from "react";
import moai from "../res/moai.ico";
import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: rgb(137, 150, 160);
  height: 115px;
  padding: 5%;
  display: flex;
  flex-direction: row;
  p {
    color: whitesmoke;
  }

  .footertextdiv {
    display: flex;
    align-items: center;
  }

  .moaiDiv {
    display: flex;
    margin-left: auto;
    align-items: center;
  }
  .moaiImg {
    max-width: 40px;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <div className="footertextdiv">
        <div>
          <p>
            맛집 선정 기준은 전적으로 제작자 취향입니다.
            <br />
            맛집들은 추후에 변경될 수 있습니다.
            <br />
            모바일 이외의 기기에서 화면이 깨질 수 있습니다.
          </p>
        </div>
      </div>
      <div className="moaiDiv">
        <img src={moai} alt="프로필" className="moaiImg" />
      </div>
    </FooterStyle>
  );
}

export default Footer;
