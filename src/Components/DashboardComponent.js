import React, { Component } from "react";
import NavBar from "../Pages/NavBar";
import MainContent from "./MainContent";

export default class DashboardComponent extends Component {
  render() {
    return (
      <div id="wrapper" className="bg-white">
        <NavBar />
        <MainContent />
      </div>
    );
  }
}
