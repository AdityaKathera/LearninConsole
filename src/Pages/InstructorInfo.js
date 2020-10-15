import React, { Component } from "react";
import instructorImage from "../images/main_right.png";

export default class InstructorInfo extends Component {
  render() {
    return (
      <>
        <div class="section-small delimiter-top">
          <div class="section">
            <div class="page-content-inner">
              <div class="section-small text-md-right text-center">
                <div
                  class="uk-child-width-1-2@m uk-gird-large uk-flex-middle"
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
                    <a href="#" class="btn btn-soft-light">
                      Get started
                    </a>
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
