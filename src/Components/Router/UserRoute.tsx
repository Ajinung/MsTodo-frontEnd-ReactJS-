import React from "react";
import { useRoutes } from "react-router-dom";
import Assigned from "../Dashboard/User/DashBoard/Assigned";
import Important from "../Dashboard/User/DashBoard/Important";
import Myday from "../Dashboard/User/DashBoard/Myday";
import Planned from "../Dashboard/User/DashBoard/Planned";
import Tasks from "../Dashboard/User/DashBoard/Tasks";

const UserRoute = () => {
  const elements = useRoutes([
    {
      path: "/myday",
      element: <Myday />,
    },
    {
      path: "/important",
      element: <Important />,
    },
    {
      path: "/assigned",
      element: <Assigned />,
    },
    {
      path: "/planned",
      element: <Planned />,
    },
    {
      path: "/tasks",
      element: <Tasks />,
    },
  ]);

  return elements;
};

export default UserRoute;
