import React, { Component } from "react";
import angular from "../images/course/2.png";

export default class LatestVideos extends Component {
  render() {
    return (
      <div>
        <div className="section-small delimiter-top">
          <div className="container-small">
            <div className="text-center mb-5">
              <h3> Check out our newest </h3>
              <h5>
                With our growing catalog of over 30 Nanodegree programs from
                beginner to advanced
              </h5>
            </div>
            <div
              className="course-grid-slider mt-lg-5"
              uk-slider="finite: true"
            >
              <div className="uk-slider-container pb-3">
                <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
                  {this.props.latestCourses?.map(course =>
                  <li>
                  {/* <a href="course-intro.html"> */}
                    <div className="course-card">
                      <div className="course-card-thumbnail ">
                        <img src={angular} alt={course.imageUrl} />
                        <span className="play-button-trigger"></span>
                      </div>
                      <div className="course-card-body">
                        <div className="course-card-info">
                          <div>
                            <span className="catagroy">{course.courseName}</span>
                          </div>
                          <div>
                            <i className="icon-feather-bookmark icon-small"></i>
                          </div>
                        </div>
                        <h4>{course.title}</h4>
                        <p>
                          {course.description}
                        </p>
                        <div className="course-card-footer">
                          <h5>
                            <i className="icon-feather-film"></i> {course.lectureCount} Lectures
                          </h5>
                          <h5>
                            <i className="icon-feather-clock"></i> {course.totalHours} Hours
                          </h5>
                        </div>
                      </div>
                    </div>
                  {/* </a> */}
                </li>
                )}
                </ul>
                <a
                  className="uk-position-center-left uk-position-small uk-hidden-hover slidenav-prev"
                  href="#"
                  uk-slider-item="previous"
                ></a>
                <a
                  className="uk-position-center-right uk-position-small uk-hidden-hover slidenav-next"
                  href="#"
                  uk-slider-item="next"
                ></a>
              </div>
            </div>
            <div className="text-center">
              <a href="#" className="btn btn-soft-light btn-small btn-circle">
                View More Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
