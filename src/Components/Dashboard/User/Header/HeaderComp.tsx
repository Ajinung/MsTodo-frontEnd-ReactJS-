import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { VscSearch } from "react-icons/vsc";
import {
  AiOutlineSetting,
  AiOutlineQuestion,
  AiOutlineNotification,
} from "react-icons/ai";

const HeaderComp: React.FC = () => {
  return (
    <div>
      <Container>
        <Head>
          <Logo>
            <h2>etorDo</h2>
          </Logo>
          <Search>
            <Icon>
              <VscSearch />
            </Icon>
            <Input type="search" name="" id="" placeholder="Search..." />
          </Search>
          <Navs>
            <Icons>
              <AiOutlineSetting />
            </Icons>
            <Icons>
              <AiOutlineQuestion />
            </Icons>
            <Icons>
              <AiOutlineNotification />
            </Icons>
            <User>
              <p>IE</p>
            </User>
          </Navs>
        </Head>
        <Sidebar />
      </Container>
    </div>
  );
};

export default HeaderComp;

const User = styled.div`
  margin-left: 25px;
  width: 30px;
  height: 60%;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }
`;
const Icons = styled.div`
  margin-left: 25px;
  font-size: 20px;
`;
const Icon = styled.div`
  margin-left: 10px;
  color: #2564cf;
  font-size: 15px;
`;
const Input = styled.input`
  margin-left: 10px;
  flex: 1;
  height: 80%;
  border: 0;
  outline: 0;
  font-size: 15px;
  color: #000000a9;

  ::placeholder {
    color: #0000004e;
  }
`;
const Logo = styled.div`
  margin-left: 30px;

  h2 {
    margin: 0;
    color: #fffffff5;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 70%;
  background-color: #fff;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navs = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #ffffffde;
  margin-right: 30px;
`;

const Head = styled.div`
  width: 100%;
  height: 6vh;
  background-color: #2564cf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;

const Container = styled.div``;
