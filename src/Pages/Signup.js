import React, { Component } from 'react'
import Footer from './Footer';
import NavBarTitle from "./NavBarTitle";

export default class Signup extends Component {
    render() {
        return (
            <div>
                <header className="header header-horizontal header bg-grey uk-light">
                    <NavBarTitle />
                </header>
                 {/* <!-- Content
                    ================================================== --> */}
                    <div uk-height-viewport="expand: true" class="uk-flex uk-flex-middle">
                        <div class="uk-width-1-3@m uk-width-1-2@s m-auto"><br></br><br></br> <br></br><br></br><br></br>                           
                        <div class="uk-card-default p-5 rounded">
                                <div class="mb-4 uk-text-center">
                                    <h3 class="mb-0"> Create new Account</h3>
                                    <p class="my-2">Login to manage your account.</p>
                                </div>
                                <form class="uk-child-width-1-1 uk-grid-small" uk-grid>

                                    <div>
                                        <div class="uk-form-group">
                                            <label class="uk-form-label"> Name</label>

                                            <div class="uk-position-relative w-100">
                                                <span class="uk-form-icon">
                                                    <i class="icon-feather-user"></i>
                                                </span>
                                                <input class="uk-input" type="text" placeholder="Full name" />
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div class="uk-form-group">
                                            <label class="uk-form-label"> Email</label>

                                            <div class="uk-position-relative w-100">
                                                <span class="uk-form-icon">
                                                    <i class="icon-feather-mail"></i>
                                                </span>
                                                <input class="uk-input" type="email" placeholder="name@example.com" />
                                            </div>

                                        </div>
                                    </div>

                                    <div class="uk-width-1-2@s">
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
                                    <div class="uk-width-1-2@s">
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
                                            <input type="submit" class="btn btn-default" value="Get Started"></input> &nbsp; &nbsp;
                                                Already have an account? &nbsp; &nbsp;
                                                <a href="/Login">Login</a>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div> <br></br> <br></br> 
                    <Footer />
            </div>
        )
    }
}
