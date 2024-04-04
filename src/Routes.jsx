import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Main from "pages/Main";
import Lcpacient from "pages/Lcpacient";
import Lcdoctor from "pages/Lcdoctor";
import SignUPpacnum from "pages/SignUPpacnum";
import SignUPpacemail from "pages/SignUPpacemail";
import SignUPdocnum from "pages/SignUPdocnum";
import SignUPdocemail from "pages/SignUPdocemail";

function ProjectRoutes() {
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
    {
      path: "signuppacemail",
      element: <SignUPpacemail />,
    },
    {
      path: "signuppdocnum",
      element: <SignUPdocnum />,
    },
    {
      path: "signuppdocemail",
      element: <SignUPdocemail />,
    }
  ]);

  return element;
}

export default ProjectRoutes;
