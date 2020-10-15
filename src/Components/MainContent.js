import React, { Component } from "react";
import Category from "../Pages/Category";
import Introduction from "../Pages/Introduction";
import LearnMore from "../Pages/LearnMore";

export default class MainContent extends Component {
  render() {
    return (
      <div className="page-content">
        <Introduction />
        <LearnMore />
        <Category />
      </div>
    );
  }
}
