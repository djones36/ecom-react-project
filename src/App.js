import React from "react";
import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Nav from "./components/home/nav";
function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About />
    </div>
  );
}

export default App;
