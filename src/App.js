import React, { lazy, Suspense } from "react";
import NavBar from "./components/nav_bar";
import "./App.scss";
import Home from "./pages/home";
import Contact from "./pages/contact";

import { BrowserRouter, Route } from "react-router-dom";
const Landscape = lazy(() => import("./pages/landscape"));
const Weddings = lazy(() => import("./pages/weddings"));
const FurryFreinds = lazy(() => import("./pages/furryFriends"));
const Portraits = lazy(() => import("./pages/portraits"));
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Suspense fallback={<h1>Loading Route...</h1>}>
          <BrowserRouter>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/landscapes" component={Landscape} />
            <Route exact path="/furryFriends" component={FurryFreinds} />
            <Route exact path="/portraits" component={Portraits} />
            <Route exact path="/weddings" component={Weddings} />
            <Route exact path="/contact" component={Contact} />
          </BrowserRouter>
        </Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;
