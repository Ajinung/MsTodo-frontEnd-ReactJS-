import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <Container>
        <Menu onClick={toggleShow}>menu</Menu>

        <Nav
          to="/myday"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : " none",
              backgroundColor: isActive ? "#1DA1F2" : " #1DA1F2",

              borderLeft: isActive ? "4px solid #1DA1F2" : "none",
            };
          }}
        >
          <span>
            <MdOutlineWbSunny />
          </span>
          <p> My Day</p>
        </Nav>
        <Nav to="/important">
          <span>
            <AiOutlineStar />
          </span>
          <p>Important</p>
        </Nav>
        <Nav to="/planned">
          <span>
            <BiCalendar />
          </span>
          <p>Planned</p>
        </Nav>
        <Nav to="/assigned">
          <span>
            <FaRegUser />
          </span>
          <p>Assigned to me</p>
        </Nav>
        <Nav to="/tasks">
          <span>
            <FiHome />
          </span>
          <p>Tasks</p>
        </Nav>
      </Container>
    </div>
  );
};

export default Sidebar;

const Nav = styled(NavLink)`
  width: 100%;
  height: 6vh;
  color: #000000e8;
  font-size: 14.8px;
  display: flex;
  align-items: center;
  text-decoration: none;

  p {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  span {
    margin-left: 30px;
    margin-right: 20px;
  }

  :hover {
    cursor: pointer;
    background-color: #eff6fc;
  }
`;

const Menu = styled.p`
  cursor: pointer;
  margin-left: 30px;
  margin-top: 40px;
`;

const Container = styled.div`
  width: 300px;
  height: calc(100vh - 6vh);
  max-height: 100%;
  /* background-color: transparent; */
  box-shadow: rgba(0, 0, 0, 0.088) 0px 3px 8px;
  position: fixed;
  margin-top: 6vh;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
