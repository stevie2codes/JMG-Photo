import React from "react";
import NavBar from "./components/nav_bar";
import "./App.scss";
import Home from "./pages/home";
import { BrowserRouter, Route } from "react-router-dom";
import Landscape from "./pages/landscape";
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/landscapes" component={Landscape} />
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
