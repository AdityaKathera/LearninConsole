import React, { Component } from "react";
import logo2 from '../images/logo2.png'
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap", 
                margin: 0,
                padding: 0,
                listStyle: "none", 
                position: "unset",
              }}
            >
              <div className="uk-width-1-3@m">
                <a href="./" className="logo"><br></br><br></br>
                  <img src={logo2} alt="" width="300" height="50"/>
                </a>
                <br />
                <br />
              </div>
              <div className="uk-width-expand@s uk-width-1-2">
                <div className="footer-links pl-lg-8">
                  <h5>Explore </h5>
                  <ul>
                    <li>
                      <a href="course-card.html"> Courses </a>
                    </li>
                    <li>
                      <a href="course-path.html"> Track </a>
                    </li>
                    <li>
                      <a href="blog-card.html"> Blog </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="uk-width-expand@s uk-width-1-2">
                <div className="footer-links pl-lg-8">
                  <h5> Account </h5>
                  <ul>
                    <li>
                      <a href="profile-1.html"> Profile </a>
                    </li>
                    <li>
                      <a href="#"> Settings </a>
                    </li>
                    <li>
                      <a href="#"> Projects </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="uk-width-expand@s uk-width-1-2">
                <div className="footer-links pl-lg-8">
                  <h5> Resources</h5>
                  <ul>
                    <li>
                      <a href="#"> Contact </a>
                    </li>
                    <li>
                      <a href="page-Privacy.html"> Privacy Policy </a>
                    </li>
                    <li>
                      <a href="page-term.html"> Terms of Use </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div
              className="uk-grid-collapse"
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: 0,
                padding: 0,
                listStyle: "none",
                position: "unset",
              }}
            >
              <div className="uk-width-expand@s uk-first-column">
                <p>
                  © 2020 <strong>Learninconsole</strong>. All Rights Reserved.
                </p>
              </div>
              <div className="uk-width-auto@s">
                <nav className="footer-nav-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon-brand-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-brand-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-brand-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-brand-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
