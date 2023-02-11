import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const MoreDetails = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <Container>
        <Menu>
          <AddTask>
            <div>
              <Radio type="radio" name="" id="" />
              <Input type="text" name="" id="" placeholder="Add a task" />
            </div>
          </AddTask>
        </Menu>
        <Center>
          <Nav>
            <span>
              <MdOutlineWbSunny />
            </span>
            <p> Add to My Day</p>
          </Nav>
        </Center>
        <Center>
          <Nav>
            <span>
              <AiOutlineStar />
            </span>
            <p>Remind me</p>
          </Nav>
        </Center>
        <Center>
          <Nav>
            <span>
              <BiCalendar />
            </span>
            <p>Add due date</p>
          </Nav>
        </Center>
        <Center>
          <Nav onClick={toggle}>
            <span>
              <FaRegUser />
            </span>
            <p> Assigned</p>
          </Nav>
        </Center>
        <Center>
          <AddTask2>
            <div>
              <Textarea
                name=""
                id=""
                cols={30}
                rows={20}
                placeholder="Add note"
              ></Textarea>
            </div>
          </AddTask2>
          <AddTask2>
            {show ? (
              <Assigned>
                <h1>Assign task to user</h1>
                <input type="text" />
              </Assigned>
            ) : null}
          </AddTask2>
        </Center>
      </Container>
    </div>
  );
};

export default MoreDetails;

const Assigned = styled.div`
  /* width: 90%;
  height: 90%; */
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 90px;
  flex-direction: column;

  h1 {
    margin: 0;
    font-size: 17px;
    font-weight: 500;
  }
  input {
    width: 90%;
    height: 50%;
    box-shadow: rgba(159, 159, 159, 0.24) 0px 3px 8px;
    border: none;
    outline: none;
  }
`;

const Center = styled.div`
  width: 95%;
  margin: auto;
`;

const Input = styled.input`
  height: 70%;
  width: 100%;
  flex: 1;
  border: 0;
  outline: 0;
  margin-left: 15px;
  margin-top: 3px;
  color: #000000e1;

  ::placeholder {
    color: #2564cf;
  }
`;
const Textarea = styled.textarea`
  height: 70%;
  width: 10%;
  flex: 1;
  border: 0;
  outline: 0;
  margin-left: 15px;
  margin-top: 3px;
  color: #000000e1;
  font-family: poppins;
  font-size: 12px;

  ::placeholder {
    color: #0c0c0c;
  }
`;
const Radio = styled.input`
  height: 50px;
  width: 17px;

  ::placeholder {
    color: #2564cf;
  }
`;

const AddTask = styled.div`
  width: 70%;
  height: 7vh;
  background-color: #fff;
  border-bottom: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 98%;
    height: 90%;
    display: flex;
    align-items: center;
  }
`;
const AddTask2 = styled.div`
  width: 70%;
  height: 12vh;
  background-color: #fff;
  border-bottom: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  div {
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
  }
`;
const Nav = styled.div`
  width: 70%;
  height: 7vh;
  background-color: #fff;
  border-radius: 5px;
  color: #000000bd;
  font-size: 14.8px;
  display: flex;
  align-items: center;
  margin: 5px;
  position: relative;

  p {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-weight: 100;
    color: #00000082;
  }
  span {
    margin-left: 20px;
    margin-right: 20px;
  }

  :hover {
    cursor: pointer;
    background-color: #eff6fc;
  }
`;

const Menu = styled.p`
  margin-left: 20px;
  margin-top: 40px;
`;

const Container = styled.div`
  width: 400px;
  height: calc(100vh - 6vh);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  margin-top: 6vh;
  background-color: transparent;
`;
