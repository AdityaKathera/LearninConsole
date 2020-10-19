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
          {this.props.courseCategory?.map(course => 
          <div>
            <a href="course-path-level.html" className="skill-card">
              {/* <i
                className="icon-brand-angular skill-card-icon"
                style={{ color: "#dd0031" }}
              ></i> */}
              <div>
                <h2 className="skill-card-title">{course.title}</h2>
                <p className="skill-card-subtitle">
                  {course.coursesCount} courses 
                  {/* <span className="skill-card-bullet"></span> */}
                  {course.bundlesCount} bundles
                </p>
              </div>
            </a>
          </div>
          )}
        </div>
      </>
    );
  }
}
