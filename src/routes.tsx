import React from "react";
import { Route, BrowserRouter }  from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path= "/" exact />
      <Route component={About} path= "/about" />

    </BrowserRouter>
  )
}

export default Routes;
