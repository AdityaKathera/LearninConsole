import { Carousel } from "antd";
import React, { Component } from "react";
import Category from "../Pages/Category";
import Caro from "../Pages/Caro";
import LearnMore from "../Pages/LearnMore";

export default class MainContent extends Component {
  render() {
    return (
      <div className="page-content">
        <Caro />
        <LearnMore />
        <Category />
      </div>
    );
  }
}
