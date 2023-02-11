import React from "react";
import { useRoutes } from "react-router-dom";
import Register from "../Auth/Register";
import SignIn from "../Auth/SignIn";
import Myday from "../Dashboard/User/DashBoard/Myday";

const AuthRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      children: [
        {
          index: true,
          element: <Myday />,
        },
      ],
    },
  ]);

  return element;
};

export default AuthRoutes;
