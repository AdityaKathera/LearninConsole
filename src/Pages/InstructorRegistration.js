import React, { Component } from 'react'
import Footer from './Footer';
import NavBarTitle from "./NavBarTitle";
import instructor from "../images/instructor.jpg";

export default class InstructorRegistration extends Component {
    render() {
        return (
            <div>
                 <div style={{backgroundColor:'white'}}>
                <header className="header header-horizontal header bg-grey uk-light">
                    <NavBarTitle />
                </header><br></br><br></br>
                        
                    <div style={{backgroundColor:'white'}}>
                        <div
                        className="home-hero"
                        uk-img={1}
                        style={{ backgroundImage: "url(" + instructor + ")"}}
                      >
                            <div className="uk-width-1-1" style={{marginTop:'250px'}}>
                                {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
                                <div className="page-content-inner uk-position-z-index">
                                    <div class="mb-4 uk-text-center">
                                    <h2 class="mb-0" align="left"> Create Your Instructor Account</h2>
                                    {/* <p class="my-2"></p> */}
                                </div>
                                {/* <div class="uk-card-default p-5 rounded"> */}
                                <form class="uk-child-width-1-1 uk-grid-small" uk-grid style={{marginTop:'50px'}}>

                                    <div>
                                        <div class="uk-form-group" style={{width:'40%'}}>
                                            <label class="uk-form-label"> First Name</label>

                                            <div class="uk-position-relative w-100">
                                                <span class="uk-form-icon">
                                                    <i class="icon-feather-user"></i>
                                                </span>
                                                <input class="uk-input" type="text" placeholder="First name" />
                                            </div>
                                            <label class="uk-form-label"> Last Name</label>

                                            <div class="uk-position-relative w-100">
                                                <span class="uk-form-icon">
                                                    <i class="icon-feather-user"></i>
                                                </span>
                                                <input class="uk-input" type="text" placeholder="Last name" />
                                            </div>

                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div class="uk-form-group" style={{width:'40%'}}>
                                            <label class="uk-form-label"> Email</label>

                                            <div class="uk-position-relative w-100">
                                                <span class="uk-form-icon">
                                                    <i class="icon-feather-mail"></i>
                                                </span>
                                                <input class="uk-input" type="email" placeholder="name@example.com" />
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <div class="uk-form-group" style={{width:'40%'}}>
                                            <label class="uk-form-label"> Experienced in (Domain)</label>

                                            <div class="uk-position-relative w-100">
                                                <span class="uk-form-icon">
                                                    <i class="icon-feather-mail"></i>
                                                </span>
                                                <input class="uk-input" type="email" placeholder="Enter your expertise" />
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <div class="uk-form-group" style={{width:'40%'}}>
                                            <label class="uk-form-label"> Teaching Experience</label>

                                            <div class="uk-position-relative w-100">
                                                <span class="uk-form-icon">
                                                    <i class="icon-feather-mail"></i>
                                                </span>
                                                <input class="uk-input" type="number" placeholder="Enter your years of expertise" />
                                            </div>

                                        </div>
                                    </div>

                                    <div class="uk-width-1-2@s" style={{width:'40%'}}>
                                        <div class="uk-form-group">
                                            <label class="uk-form-label"> Password</label>

                                            <div class="uk-position-relative w-100">
                                                <span class="uk-form-icon">
                                                    <i class="icon-feather-lock"></i>
                                                </span>
                                                <input class="uk-input" type="password" placeholder="********" />
                                            </div>

                                        </div>
                                    </div>
                                    <div class="uk-width-1-2@s" style={{width:'40%'}}>
                                        <div class="uk-form-group">
                                            <label class="uk-form-label"> Confirm password</label>

                                            <div class="uk-position-relative w-100">
                                                <span class="uk-form-icon">
                                                    <i class="icon-feather-lock"></i>
                                                </span>
                                                <input class="uk-input" type="password" placeholder="********" />
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <div class="mt-4 uk-flex-middle uk-grid-small" uk-grid>

                                            <div class="uk-width-auto@s">
                                            <input type="submit" class="btn btn-default" value="Register"></input> &nbsp; &nbsp;
                                                Already have an account? &nbsp; &nbsp;
                                                <a href="/InsPortal">Instructor Login</a>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                                </div>
                                {/* </div> */}
                            </div>
                        
                      </div>

                    </div>
                    
                    {/* Break */}
                    <br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br>
                    <br></br><br></br>
                    
                    </div>
                    <Footer />
                    
        </div>
        )
    }
}
