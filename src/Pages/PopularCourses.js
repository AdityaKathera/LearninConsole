import React, { Component } from "react";
import aws from "../images/course/aws.png";
import azure from "../images/course/azure.png";
import pentesting from "../images/course/hacker.png";
import python from "../images/course/python.png";

export default class PopularCourses extends Component {
  render() {
    return (
      <>
        <div className="section-small delimiter-top">
          <h2 className="mt-lg-7 mt-4" align="center">
            Popular Courses
          </h2>
          <br />
          <br />
          <div
            className="uk-child-width-1-2@s uk-child-width-1-4@m"
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
              <a href="course-path-level.html">
                <div className="course-path-card">
                  <img src={aws} alt="aws" />
                  <div className="course-path-card-contents">
                    <h3> Amazon Web Services </h3>
                    <p>
                      JavaScript is how you build interactivity on the web ...
                    </p>
                  </div>
                  <div className="course-path-card-footer">
                    <h5>
                      <i className="icon-feather-film mr-1"></i> 24 Lectures
                    </h5>
                    <div>
                      <h5>
                        <i className="icon-feather-clock mr-1"></i>
                        55 Hours
                      </h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a href="course-path-level.html">
                <div className="course-path-card">
                  <img src={python} alt="python" />
                  <div className="course-path-card-contents">
                    <h3> Programming in Python </h3>
                    <p> Lorem ipsum adipiscing elit, sed do eiusmod tempor..</p>
                  </div>
                  <div className="course-path-card-footer">
                    <h5>
                      <i className="icon-feather-film mr-1"></i> 24 Lectures
                    </h5>
                    <div>
                      <h5>
                        <i className="icon-feather-clock mr-1"></i>
                        55 Hours
                      </h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a href="course-path-level.html">
                <div className="course-path-card">
                  <img src={pentesting} alt="hacker" />
                  <div className="course-path-card-contents">
                    <h3> Penetration Testing</h3>
                    <p>
                      HTML is the building blocks of the web. It gives pages ..
                    </p>
                  </div>
                  <div className="course-path-card-footer">
                    <h5>
                      <i className="icon-feather-film mr-1"></i> 24 Lectures{" "}
                    </h5>
                    <div>
                      <h5>
                        <i className="icon-feather-clock mr-1"></i>
                        55 Hours
                      </h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a href="course-path-level.html">
                <div className="course-path-card">
                  <img src={azure} alt="azure" />
                  <div className="course-path-card-contents">
                    <h3> Microsoft Azure </h3>
                    <p>
                      JavaScript is how you build interactivity on the web ...
                    </p>
                  </div>
                  <div className="course-path-card-footer">
                    <h5>
                      <i className="icon-feather-film mr-1"></i> 24 Lectures
                    </h5>
                    <div>
                      <h5>
                        <i className="icon-feather-clock mr-1"></i>
                        55 Hours
                      </h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
