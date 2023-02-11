import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  document.title = "create account";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:2000/api/register", { name, email, password })
      .then((res) => {
        Swal.fire({
          title: "Registration Successful!",
          html: "redirecting you to login",
          timer: 1000,
          timerProgressBar: true,

          willClose: () => {
            navigate("/");
          },
        });
      });
  };
  return (
    <Container>
      <Wrapper onSubmit={register}>
        <Logo>eTorDo</Logo>

        <AuthArea>
          <h2>Create account</h2>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            required
            placeholder="FullName"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            required
            placeholder="eMail"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            placeholder="Enter Password"
            minLength={8}
            aria-hidden="true"
          />

          <span>
            Already have an account? <Account to="/">Sign in!</Account>
          </span>
        </AuthArea>
        <Buttons>
          <Button type="submit" color="#fff" background="#2564cf">
            Register
          </Button>
        </Buttons>
      </Wrapper>
      <Footer>Developed by Isaac Etor. © {new Date().getFullYear()}</Footer>
    </Container>
  );
};

export default Register;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const Footer = styled.button`
  width: 100%;
  border: 0;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000a0;
  font-size: 15px;
`;
const Button = styled.button<{ color: string; background: string }>`
  background-color: ${(props) => props.background};
  width: 120px;
  height: 40px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 0;
  color: ${(props) => props.color};
  transition: all 350ms;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const Account = styled(NavLink)`
  margin-left: 5px;
  text-decoration: none;
  color: #0c64c2;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const AuthArea = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  input {
    height: 40px;
    padding: 10px 0px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #2563cf40;
    background-color: transparent;
    font-size: 16px;
    color: #000000c6;
    margin-bottom: 20px;
  }

  span {
    display: flex;
    font-size: 14px;
  }

  h2 {
    margin: 15px 0px;
    font-weight: 500;
    color: #000000cf;
  }
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2564cf;
`;

const Wrapper = styled.form`
  max-width: 370px;
  width: calc(100% - 40px);
  padding: 44px;
  min-width: 320px;
  /* min-height: 330px; */
  background-color: #f8f9f8;
  box-shadow: rgba(99, 99, 99, 0.156) 0px 2px 8px 0px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
    box-shadow: none;
    min-width: 90%;
    max-width: 90%;
    padding: 0;
    padding-top: 44px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f7f7;
  background: radial-gradient(
    circle at -8.9% 51.2%,
    #2564cf 0%,
    #2564cf 15.9%,
    #2563cfc5 15.9%,
    #2563cfb7 24.4%,
    #f7f7f7 24.5%,
    #f7f7f7 66%
  );
  color: #000000ca;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: poppins;

  @media screen and (max-width: 550px) {
    width: 100%;
    background: none;
    background-color: none;
    background-color: #f8f9f8;
  }
`;
