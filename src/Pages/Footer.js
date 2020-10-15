import React, { Component } from "react";
import logofinal from '../images/logofinal.png'
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="footer">
          <div class="container">
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
              <div class="uk-width-1-3@m">
                <a href="dashboard.html" class="logo">
                  <img src={logofinal} alt="" />
                </a>
                <br />
                <br />
              </div>
              <div class="uk-width-expand@s uk-width-1-2">
                <div class="footer-links pl-lg-8">
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
              <div class="uk-width-expand@s uk-width-1-2">
                <div class="footer-links pl-lg-8">
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
              <div class="uk-width-expand@s uk-width-1-2">
                <div class="footer-links pl-lg-8">
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
              class="uk-grid-collapse"
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: 0,
                padding: 0,
                listStyle: "none",
                position: "unset",
              }}
            >
              <div class="uk-width-expand@s uk-first-column">
                <p>
                  © 2020 <strong>Learninconsole</strong>. All Rights Reserved.
                </p>
              </div>
              <div class="uk-width-auto@s">
                <nav class="footer-nav-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="icon-brand-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-brand-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-brand-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-brand-twitter"></i>
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
