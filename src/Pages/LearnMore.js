import React, { Component } from "react";
import learn_more_img from "../images/main_left.png";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
export default class LearnMore extends Component {
  render() {
    return (
      <>
        <div className="section">
          <div className="page-content-inner">
            <div className="section-small text-md-left text-center">
              <div
                className="uk-child-width-1-2@m uk-gird-large uk-flex-middle"
                uk-grid={1}
                style={{ display: "flex" }}
              >
                <div>
                  <img src={learn_more_img} alt="" />
                </div>
                <div>
                  <h2>
                    Learn to code anytime <br /> and everywhere{" "}
                  </h2>
                  <p>
                    Get started with just your name and your email adress . It’s
                    as simple <br /> as that -- no payments or credit card
                    information required.{" "}
                  </p>
                  <Link href="/Signup" className="btn btn-soft-light">
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
