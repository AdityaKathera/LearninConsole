import React, { Component } from "react";

export default class CourseCategory extends Component {
  render() {
    return (
      <>
        <div
          className="uk-child-width-1-3@s uk-child-width-1-4@m"
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
            <a href="course-path-level.html" className="skill-card">
              <i
                className="icon-brand-angular skill-card-icon"
                style={{ color: "#dd0031" }}
              ></i>
              <div>
                <h2 className="skill-card-title">Cloud Computing</h2>
                <p className="skill-card-subtitle">
                  15 courses <span className="skill-card-bullet"></span> 3
                  bundles
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="course-path-level.html" className="skill-card">
              <i
                className="icon-brand-js-square skill-card-icon"
                style={{ color: "#f7df1e" }}
              ></i>
              <div>
                <h2 className="skill-card-title"> Programming</h2>
                <p className="skill-card-subtitle">
                  2 courses <span className="skill-card-bullet"></span> 13
                  bundles
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="course-path-level.html" className="skill-card">
              <i
                className="icon-brand-html5 skill-card-icon"
                style={{ color: "#f0653f" }}
              ></i>
              <div>
                <h2 className="skill-card-title"> Cybersecurity</h2>
                <p className="skill-card-subtitle">
                  3 courses <span className="skill-card-bullet"></span> 4
                  bundles
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="course-path-level.html" className="skill-card">
              <i
                className="icon-brand-html5 skill-card-icon"
                style={{ color: "#f0653f" }}
              ></i>
              <div>
                <h2 className="skill-card-title"> Database</h2>
                <p className="skill-card-subtitle">
                  3 courses <span className="skill-card-bullet"></span> 4
                  bundles
                </p>
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
}
