import React, { Component } from "react";
import Slider from "react-slick";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import { Carousel } from 'antd';

export default class Caro extends Component {
  render() {
      return (
          <Carousel autoplay>
              <div>
                  {/* <img src={slider1} /> */}
                  <div
                    className="home-hero"
                    uk-img={1}
                    style={{ backgroundImage: "url(" + slider1 + ")" }}
                  >
                    {/* <img src={slider1}></img> */}
                    <div className="uk-width-1-1">
                      <div className="page-content-inner uk-position-z-index">
                        <h1>
                          A Multilingual Learning <br></br> Platform 
                        </h1>
                        <h4 className="my-lg-4">
                          {" "}
                          Start Learning In Your Native Language 
                        </h4>
                        <a href="#" className="btn btn-default">
                          Free Trail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              <div>
                  <div
                        className="home-hero"
                        uk-img={1}
                        style={{ backgroundImage: "url(" + slider2 + ")" }}
                      >
                        {/* <img src={slider2}></img> */}
                        <div className="uk-width-1-1">
                          <div className="page-content-inner uk-position-z-index">
                            <h1 align="right">
                              Become an Instructor
                            </h1>
                            <h4 className="my-lg-4" align="right">
                              {" "}
                              Learn how to build websites & apps <br /> write a code or start
                              a business
                            </h4>
                            <a href="#" className="btn btn-default" style={{float:'right'}}>
                              Register
                            </a>
                          </div>
                        </div>
                  </div>
              </div>
              <div>
                  <div
                        className="home-hero"
                        uk-img={1}
                        style={{ backgroundImage: "url(" + slider3 + ")" }}
                      >
                        {/* <img src={slider3}></img> */}
                        <div className="uk-width-1-1">
                          <div className="page-content-inner uk-position-z-index">
                            <h1 align="right">
                              Learn HTML , CSS , iphone <br /> Apps & More
                            </h1>
                            <h4 className="my-lg-4" align="right">
                              {" "}
                              Learn how to build websites & apps <br /> write a code or start
                              a business
                            </h4>
                            {/* <a href="#" className="btn btn-default">
                              Free Trail
                            </a> */}
                          </div>
                        </div>
                  </div>
              </div>
            </Carousel>
      );
  }
};
