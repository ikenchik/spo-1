import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Main from "pages/Main";
import Lcpacient from "pages/Lcpacient";
import Lcdoctor from "pages/Lcdoctor";
import SignUPpacnum from "pages/SignUPpacnum";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Main /> },
    { path: "*", element: <NotFound /> },
    {
      path: "main",
      element: <Main />,
    },
    {
      path: "lcpacient",
      element: <Lcpacient />,
    },
    {
      path: "lcdoctor",
      element: <Lcdoctor />,
    },
    {
      path: "signuppacnum",
      element: <SignUPpacnum />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
