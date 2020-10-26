import React, { Component } from "react";
import instructorImage from "../images/main_right.png";
import { Link } from "react-router-dom";
export default class InstructorInfo extends Component {
  render() {
    return (
      <>
        <div className="section-small delimiter-top">
          <div className="section">
            <div className="page-content-inner">
              <div className="section-small text-md-right text-center">
                <div
                  className="uk-child-width-1-2@m uk-gird-large uk-flex-middle"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    position: "unset",
                  }}
                >
                  <div>
                    <h2>Become An Instructor</h2>
                    <p>
                      Get started with just your name and your email address.
                    </p>
                    <Link href="/InsReg" className="btn btn-soft-light">
                      Get started
                    </Link>
                  </div>
                  <div>
                    <img src={instructorImage} alt="" align="right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
