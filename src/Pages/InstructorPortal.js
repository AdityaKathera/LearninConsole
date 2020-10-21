import React, { Component } from 'react'
import Footer from './Footer';
import NavBarTitle from "./NavBarTitle";

export default class Login extends Component {
    constructor(){
        super();
        console.log('cons')
    }
    render() {
        return (
               
               <div>
                 <header className="header header-horizontal header bg-grey uk-light">
                    <NavBarTitle />
                </header>
                                {/* <!-- Content
                    ================================================== --> */}
                    <div uk-height-viewport="expand: true" class="uk-flex uk-flex-middle">
                        <div class="uk-width-1-3@m uk-width-1-2@s m-auto"> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
                            <div class="uk-card-default p-5 rounded">
                                <div class="mb-4 uk-text-center">
                                    <h3 class="mb-0">Instructor Log in</h3>
                                    <p class="my-2">Login to manage your instructor account.</p>
                                </div>
                                <form>

                                    <div class="uk-form-group">
                                        <label class="uk-form-label"> Email</label>

                                        <div class="uk-position-relative w-100">
                                            <span class="uk-form-icon">
                                                <i class="icon-feather-mail"></i>
                                            </span>
                                            <input class="uk-input" type="email" placeholder="name@example.com" />
                                        </div>

                                    </div>

                                    <div class="uk-form-group">
                                        <label class="uk-form-label"> Password</label>

                                        <div class="uk-position-relative w-100">
                                            <span class="uk-form-icon">
                                                <i class="icon-feather-lock"></i>
                                            </span>
                                            <input class="uk-input" type="password" placeholder="********" />
                                        </div>
                                        <div class="uk-width-expand@s">
                                            <a href="page-forgot.html">Forgot Password?</a>
                                        </div>

                                    </div>

                                    <div class="mt-4 uk-flex-middle uk-grid-small" uk-grid>
                                        
                                        <div class="uk-width-auto@s">
                                            <button type="submit" class="btn btn-default">Log in</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        
                        {/* Vertical line */}
                        <div style={{"borderLeft":"1px solid grey","height":"200px","position":"absolute","left":"50%", marginTop:'150px', opacity:'0.3'}}>
                        </div>
                        
                        {/* Instructor Registeration */}
                        <div class="uk-width-1-3@m uk-width-1-2@s m-auto"> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
                            <div class="uk-card-default p-5 rounded">
                                <div class="mb-4 uk-text-center">
                                    <h3 class="mb-0">Become an instructor</h3>
                                    <p class="my-2">Login to manage your instructor account.</p>
                                </div>

                                    <div class="mt-4 uk-flex-middle uk-grid-small" uk-grid>
                                        
                                        <div class="uk-width-auto@s" align="center">
                                            <a href="/InsReg" type="submit" class="btn btn-default" >Register</a>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div> <br></br> <br></br> 
                    <Footer />
                </div>
            
        )
    }
}
