import React from "react";
import styled from "styled-components";
import HeaderComp from "./Components/Dashboard/User/Header/HeaderComp";
import AuthRoutes from "./Components/Router/AuthRoutes";
import UserRoute from "./Components/Router/UserRoute";

function App() {
  return (
    <div>
      <HeaderComp />
      <AuthRoutes />
      <Container>
        <UserRoute />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  /* overflow: hidden; */
`;
