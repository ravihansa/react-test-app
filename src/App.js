import React, { Component } from "react";
import NavBar from "./components/navbar";
import SideNavBar from "./components/sidenavbar";
import "./App.css";
import "./css/sidenavbar.css";
import "./css/navbar.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SideNavBar />
        <main className="container" />
      </React.Fragment>
    );
  }
}

export default App;
