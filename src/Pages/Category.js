import React, { Component } from "react";
import CourseCategory from "./CourseCategory";
import PopularCourses from "./PopularCourses";
import LatestVideos from "./LatestVideos";
import InstructorInfo from "./InstructorInfo";
import Footer from "./Footer";
import { courseCategory, latestCourses, popularCourses } from '../mockdata';

export default class Category extends Component {
  render() {
    return (
      <>
        <div className="section-small delimiter-top">
          <div className="page-content">
            <div className="page-content-inner">
              <h2 className="mb-3" align="center">
                Choose Your Course Category
              </h2>

              <div className="section-header"></div>
              <CourseCategory
                courseCategory={courseCategory}
              />
              <br />
              <br />
              <PopularCourses popularCourses={popularCourses} />
            </div>
            <br />
            <br />
            <LatestVideos latestCourses={latestCourses}/>
            <InstructorInfo />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
