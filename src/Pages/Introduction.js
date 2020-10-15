import React, { Component } from "react";
import main_back from "../images/main_back.png";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <div
          className="home-hero"
          uk-img={1}
          style={{ backgroundImage: "url(" + main_back + ")" }}
        >
          {/* <img src={main_back}></img> */}
          <div className="uk-width-1-1">
            <div className="page-content-inner uk-position-z-index">
              <h1>
                Learn HTML , CSS , iphone <br /> Apps & More
              </h1>
              <h4 className="my-lg-4">
                {" "}
                Learn how to build websites & apps <br /> write a code or start
                a business
              </h4>
              <a href="#" className="btn btn-default">
                Free Trail
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
