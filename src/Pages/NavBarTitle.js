import React, { Component } from "react";
import MainContent from "../Components/MainContent";
import "../assets/css/bootstrap.css";
import "../assets/css/night-mode.css";
import "../assets/css/style.css";
import "../assets/css/framework.css";
import logo1 from '../images/logo1.png'

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
              <a href="./" className="logo">
                  <img src={logo1} alt="" width="300" height="50"/>
              </a>
              {/* <!-- spacing --> */}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

              <nav id="navigation">
                <ul id="responsive">
                  <li>
                    <a href="./">Home</a>{""}
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
                    <a href="/Contact">Contact Us</a>{" "}
                  </li>
                  <li>
                    <a href="/Price">Pricing</a>{" "}
                  </li>
                  {/* <li>
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
                        <a href="ContactUs">Contact Us</a>
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
                  </li> */}
                </ul>
              </nav>
                

                {/* <!-- spacing --> */}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 

                {/* <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header text-center">
                        <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body mx-3">
                        <div class="md-form mb-5">
                          <i class="fas fa-user prefix grey-text"></i>
                          <input type="text" id="orangeForm-name" class="form-control validate" />
                          <label data-error="wrong" data-success="right" for="orangeForm-name">Your name</label>
                        </div>
                        <div class="md-form mb-5">
                          <i class="fas fa-envelope prefix grey-text"></i>
                          <input type="email" id="orangeForm-email" class="form-control validate" />
                          <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label>
                        </div>

                        <div class="md-form mb-4">
                          <i class="fas fa-lock prefix grey-text"></i>
                          <input type="password" id="orangeForm-pass" class="form-control validate" />
                          <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
                        </div>

                      </div>
                      <div class="modal-footer d-flex justify-content-center">
                        <button class="btn btn-deep-orange">Sign up</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center">
                  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">Launch
                    Modal Register Form</a>
                </div> */}
               
                {/* <!-- login --> */}
                
                <a href="/Login" className="btn btn-soft-light" style={{color:'#3e416d'}}>
                Log in
                </a> &nbsp; &nbsp; 
        

                {/* <!-- Signup --> */}
                <a href="/Signup" className="btn btn-soft-light" style={{color:'#3e416d'}}>
                Sign up
                </a>

                {/* <!-- Instructor Portal --> */}&nbsp; &nbsp; &nbsp; &nbsp; 
                <a href="/InsPortal">
                Instructor Portal
                </a>

              {/* <!-- Main Navigation / End --> */}
            </div>
            
            {/* <!--  Right Side Content   --> */}

            {/* <div className="uk-navbar-right">
              <div className="header-widget">
                <div className="searchbox uk-visible@s" style={{display:'flex'}}>
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="Search..."
                  />
                  <button className="btn-searchbox"> </button>
                </div> */}

                {/* <div
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
                </div> */}
              {/* </div>
            </div> */}
          </nav>
        </div>
      </>
    );
  }
}
