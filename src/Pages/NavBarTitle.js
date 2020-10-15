import React, { Component } from "react";
import "../assets/css/bootstrap.css";
import "../assets/css/night-mode.css";
import "../assets/css/style.css";
import "../assets/css/framework.css";
export default class NavBarTitle extends Component {
  render() {
    return (
      <>
        <div className="container">
          <nav uk-navbar="true">
            {/* <!-- left Side Content --> */}
            <div className="uk-navbar-left">
              {/* <!-- menu icon --> */}
              <span className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </span>

              {/* <!-- logo --> */}
              <a href="dashboard.html" className="logo">
                <h3> Learninconsole</h3>
                <img src="../assets/images/logofina2.png" alt="" />
              </a>

              <nav id="navigation">
                <ul id="responsive">
                  <li>
                    <a href="#">Home</a>{" "}
                  </li>
                  <li>
                    <a href="#">Explore</a>
                    <ul className="dropdown-nav nav-large nav-courses">
                      <li>
                        <a href="course-card.html#">
                          <i
                            className="icon-brand-js-square"
                            style={{ color: "#f7df1e" }}
                          ></i>{" "}
                          JavaScript
                        </a>
                      </li>
                      <li>
                        <a href="course-card.html">
                          <i
                            className="icon-brand-node-js"
                            style={{ color: "green" }}
                          ></i>{" "}
                          NodeJS{" "}
                        </a>
                      </li>
                      <li>
                        <a href="course-card.html">
                          <i
                            className="icon-brand-angular"
                            style={{ color: "#dd0031" }}
                          ></i>{" "}
                          Angular{" "}
                        </a>
                      </li>
                      <li>
                        <a href="course-card.html">
                          <i
                            className="icon-brand-css3-alt"
                            style={{ color: "blue" }}
                          ></i>{" "}
                          CSS{" "}
                        </a>
                      </li>
                      <li>
                        <a href="course-card.html">
                          <i
                            className="icon-brand-html5"
                            style={{ color: "#f0653f" }}
                          ></i>{" "}
                          HTML5{" "}
                        </a>
                      </li>
                      <li>
                        <a href="course-card.html">
                          <i
                            className="icon-brand-react"
                            style={{ color: "#67fcef" }}
                          ></i>{" "}
                          React{" "}
                        </a>
                      </li>
                      <li>
                        <a href="course-card.html">
                          <i
                            className="icon-brand-vuejs"
                            style={{ color: "green" }}
                          ></i>{" "}
                          Vue JS{" "}
                        </a>
                      </li>
                      <li>
                        <a href="course-card.html">
                          <i
                            className="icon-brand-python"
                            style={{ color: "#b1b172" }}
                          ></i>{" "}
                          Python{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog-1.html">About Us</a>{" "}
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown-nav">
                      <li>
                        <a href="page-pricing.html">Pricing</a>{" "}
                      </li>
                      <li>
                        <a href="page-Privacy.html">Privacy</a>
                      </li>
                      <li>
                        <a href="page-term.html">Terms</a>
                      </li>
                      <li>
                        <a href="page-contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="#">Account</a>
                        <ul className="dropdown-nav">
                          <li>
                            <a href="page-login.html">login</a>
                          </li>
                          <li>
                            <a href="page-register.html">register</a>
                          </li>
                          <li>
                            <a href="page-simple-login.html">Simple login</a>
                          </li>
                          <li>
                            <a href="page-simple-register.html">
                              Simple register
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Development</a>
                        <ul className="dropdown-nav">
                          <li>
                            <a href="page-elements.html">Elements</a>
                          </li>
                          <li>
                            <a href="page-components.html">Components</a>
                          </li>
                          <li>
                            <a href="page-icons.html">Icons</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>

              {/* <!-- Main Navigation / End --> */}
            </div>

            {/* <!--  Right Side Content   --> */}

            {/* <div className="uk-navbar-right">
              <div className="header-widget">
                <div className="searchbox uk-visible@s">
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="Search..."
                  />
                  <button className="btn-searchbox"> </button>
                </div>

                <div
                  uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                  className="dropdown-search"
                >
                  <div
                    className="erh BR9 MIw"
                    style={{
                      top: "-27px",
                      position: "absolute",
                      left: "24px",
                      fill: "currentColor",
                      height: "24px",
                      pointerEvents: "one",
                      color: "#f5f5f5",
                    }}
                  >
                    <svg width="22" height="22">
                      <path d="M0 24 L12 12 L24 24"></path>
                    </svg>
                  </div>

                  <ul class="dropdown-search-list">
                    <li class="list-title">Recent Searches</li>
                    <li>
                      <a href="course-intro.html">
                        Ultimate Web Designer And Developer Course
                      </a>
                    </li>
                    <li>
                      <a href="course-intro.html">
                        The Complete Ruby on Rails Developer Course{" "}
                      </a>
                    </li>
                    <li>
                      <a href="course-intro.html">
                        Bootstrap 4 From Scratch With 5 Real Projects{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="course-intro.html">
                        The Complete 2020 Web Development Bootcamp{" "}
                      </a>
                    </li>
                    <li class="menu-divider">
                      <li>
                        <a href="course-intro.html">
                          Bootstrap 4 From Scratch With 5 Real Projects{" "}
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="course-intro.html">
                          The Complete 2020 Web Development Bootcamp{" "}
                        </a>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </nav>
        </div>
      </>
    );
  }
}
