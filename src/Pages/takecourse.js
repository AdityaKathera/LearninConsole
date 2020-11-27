import React, { Component } from "react";
import "../assets/css/bootstrap.css";
import "../assets/css/night-mode.css";
import "../assets/css/style.css";
import "../assets/css/framework.css";
// import "../assets/css/framework-rtl.css"
// import "../assets/css/style-rtl.css"
// import "../assets/css/icons.css";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

export default class takecourse extends Component {
  render() {
    return (
      <>
        <div id="wrapper">
          <div className="course-layouts">
            <div className="course-content bg-dark">
              <div className="course-header">
                <Link
                  to="/"
                  className="btn-back"
                  uk-toggle="target: .course-layouts; cls: course-sidebar-collapse"
                >
                  <i className="icon-feather-chevron-left"></i>
                </Link>
                <h4 class="text-white">Build Responsive Websites</h4>
                <div>
                  <Link to="/">
                    <i class="icon-feather-help-circle btns"></i>
                  </Link>
                  <div uk-drop="pos: bottom-right;mode : click">
                    <div className="uk-card-default p-4">
                      <h4>Elementum tellus id mauris faucibuss soluta nobis</h4>
                      <p class="mt-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Nam liber tempor cum soluta nobis eleifend
                        option congue nihil imperdiet
                      </p>
                    </div>
                  </div>
                  <Link to="#">
                    <i className="icon-feather-more-vertical btns"></i>
                  </Link>
                  <div
                    className="dropdown-option-nav"
                    uk-dropdown="pos: bottom-right ;mode : click"
                  >
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="icon-feather-bookmark"></i>
                          Add To Bookmarks
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icon-feather-share-2"></i>
                          Share With Friend
                        </Link>
                      </li>
                      <li>
                        <Link to="#" id="night-mode" className="btn-night-mode">
                          <i className="icon-line-awesome-lightbulb-o"></i>{" "}
                          Night mode
                          <label className="btn-night-mode-switch">
                            <div className="uk-switch-button"></div>
                          </label>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="course-content-inner">
                <ul id="video-slider" className="uk-switcher">
                  <li>
                    <div className="video-responsive">
                      <Iframe
                        url="https://www.youtube.com/embed/9gTw2EDkaDQ"
                        frameborder="0"
                        uk-video="automute: true"
                        allowfullscreen
                        uk-responsive
                      />
                    </div>
                  </li>
                  <li>
                    <div className="video-responsive">
                      <Iframe
                        url="https://www.youtube.com/embed/YcApt9RgiT0"
                        frameborder="0"
                        allowfullscreen
                      />
                    </div>
                  </li>
                  <li>
                    <div className="video-responsive">
                      <Iframe
                        url="https://www.youtube.com/embed/CGSdK7FI9MY"
                        frameborder="0"
                        allowfullscreen
                        uk-responsive
                      />
                    </div>
                  </li>
                  <li>
                    <div className="video-responsive">
                      <Iframe
                        url="https://www.youtube.com/embed/4I1WgJz_lmA"
                        frameborder="0"
                        allowfullscreen
                        uk-responsive
                      />
                    </div>
                  </li>
                  <li>
                    <div className="video-responsive">
                      <Iframe
                        url="https://www.youtube.com/embed/dDn9uw7N9Xg"
                        frameborder="0"
                        allowfullscreen
                        uk-responsive
                      />
                    </div>
                  </li>
                  <li>
                    <div className="video-responsive">
                      <Iframe
                        url="https://www.youtube.com/embed/CPcS4HtrUEU"
                        frameborder="0"
                        allowfullscreen
                        uk-responsive
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="course-sidebar">
              <div className="course-sidebar-title">
                <h3>Table of Contents</h3>
              </div>
              <div className="course-sidebar-container" data-simplebar>
                <li className="course-video-list-section" uk-accordion>
                  <li>
                    <Link className="uk-accordion-title" to="#">
                      Getting Started with HTML5
                    </Link>
                    <div className="uk-accordion-content">
                      <ul className="course-video-list highlight-watched">
                        <li className="watched">
                          <Link to="#">
                            What Is HTML?
                            <span> 2 min </span>
                          </Link>
                        </li>
                        <li className="watched">
                          <Link to="#">
                            Introduction to HTML5
                            <span> 3 min </span>
                          </Link>
                        </li>
                        <li className="watched">
                          <Link to="#">
                            Getting the Browser
                            <span> 5 min </span>
                          </Link>
                        </li>
                        <li className="watched">
                          <Link to="#">
                            Getting the Browser
                            <span> 5 min </span>
                          </Link>
                        </li>
                        <li className="watched">
                          <Link to="#">
                            Setting Up the Editor
                            <span> 2 min </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="uk-open">
                    <Link to="#" className="uk-accordion-title">
                      Your First webpage
                    </Link>
                    <div className="uk-accordion-content">
                      <ul
                        className="course-video-list highlight-watched"
                        uk-switcher=" connect: #video-slider  ; animation: uk-animation-slide-right-small, uk-animation-slide-left-medium"
                      >
                        <li className="watched">
                          <Link to="#">
                            Creating First Page <span> 23 min </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Headings in HTML <span> 23 min</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            The paragraph tag <span> 23 min</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Emphasis and Strong Tag <span> 23 min</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Text Formatting <span> 23 min</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Working with Images <span> 23 min</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Link to="#" class="uk-accordion-title">
                    Some Special Tags
                  </Link>
                  <div className="uk-accordion-content">
                    <ul className="course-video-list">
                      <li className="">
                        <Link to="#">
                          Inserting Images <span> 23 min </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="#">
                          Constructing Lists <span> 23 min </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="#">
                          Horizontal Rule Tag <span> 23 min </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="#">
                          Validation <span> 23 min </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="#">
                          Comments Tag <span> 23 min </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <ul>
                  {" "}
                  <li>
                    <Link to="#" className="uk-accordion-title">
                      HTML Advanced level
                    </Link>
                    <div className="uk-accordion-content">
                      <ul className="course-video-list">
                        <li className="course-video-list">
                          <Link to="#">
                            The Basics of Forms<span> 23 min </span>
                          </Link>
                        </li>
                        <li className="course-video-list">
                          <Link to="#">
                            Link Targets<span> 23 min </span>
                          </Link>
                        </li>
                        <li className="course-video-list">
                          <Link to="#">
                            HTML iframes<span> 23 min </span>
                          </Link>
                        </li>
                        <li className="course-video-list">
                          <Link to="#">
                            The End<span> 23 min </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );  
  }
}
