import React from "react";

import "./App.scss";
import Home from "./pages/home";
import { BrowserRouter, Route } from "react-router-dom";
import Landscape from "./pages/landscape";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/landscapes" component={Landscape} />
      </BrowserRouter>
    </div>
  );
}

export default App;
