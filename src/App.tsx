// eslint-disable-next-line no-use-before-define
import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Navbar from "./Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
