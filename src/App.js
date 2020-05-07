import React, { lazy, Suspense } from "react";
import NavBar from "./components/nav_bar";
import "./App.scss";
import Home from "./pages/home";
import { BrowserRouter, Route } from "react-router-dom";
import DarkMode from "./darkModeToggle";
const Landscape = lazy(() => import("./pages/landscape"));
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Suspense fallback={<h1>Loading Route...</h1>}>
          <BrowserRouter>
            <DarkMode />
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/landscapes" component={Landscape} />
          </BrowserRouter>
        </Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;
