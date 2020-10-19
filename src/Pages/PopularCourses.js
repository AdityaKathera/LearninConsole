import React, { Component } from "react";

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
            {this.props.popularCourses?.map(course =>
                <div>
                <a href="course-path-level.html">
                  <div className="course-path-card">
                    <img src={course.imageUrl} alt="aws" />
                    <div className="course-path-card-contents">
                      <h3> {course.title} </h3>
                      <p>
                        {course.description}
                      </p>
                    </div>
                    <div className="course-path-card-footer">
                      <h5>
                        <i className="icon-feather-film mr-1"></i> {course.lectureCount} Lectures
                      </h5>
                      <div>
                        <h5>
                          <i className="icon-feather-clock mr-1"></i>
                          {course.totalHours} Hours
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </div>          
            )}
          </div>
        </div>
      </>
    );
  }
}
