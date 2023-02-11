import React from "react";
import styled from "styled-components";
import assigned from "../../../../Assets/assigned.svg";
import { FaRegUser } from "react-icons/fa";

const Assigned = () => {
  return (
    <div>
      <Container>
        <MydayContainer>
          <TitleDate>
            <Left>
              <First>
                <span>
                  <FaRegUser />
                </span>
                <p>Assigned to me</p>
              </First>
            </Left>
          </TitleDate>
        </MydayContainer>
      </Container>
    </div>
  );
};

export default Assigned;

const MydayContainer = styled.div`
  width: 95%;
  height: 87%;
  margin-top: 80px;
`;

const First = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  color: #7fa52d;

  p {
    margin: 0;
    margin-left: 10px;
  }
  span {
    margin: 0;
    font-size: 25px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 30px;
  }
`;
const TitleDate = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  margin-top: 5px;
`;

const Left = styled.div``;

const Container = styled.div`
  width: calc(100% - 300px);
  margin-left: 300px;
  background-color: #f7f7f7;
  background-image: url(${assigned});
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`;
