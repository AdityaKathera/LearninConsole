import React, { Component } from 'react'
import Footer from './Footer';
import NavBarTitle from "./NavBarTitle";
import contact_us from "../images/contact_us.jpg";

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <header className="header header-horizontal header bg-grey uk-light">
                    <NavBarTitle />
                </header><br></br><br></br>
                        
                    <div>
                        <div
                        className="home-hero"
                        uk-img={1}
                        style={{ backgroundImage: "url(" + contact_us + ")" }}
                      >
                            <div className="uk-width-1-1">
                                <div className="page-content-inner uk-position-z-index">
                                    <h2 align="left">
                                    Drop us your feedback
                                    </h2><br></br>
                                         <form>

                                            <div class="uk-form-group" style={{width:'40%'}}>
                                                <label class="uk-form-label"> Name</label>

                                                <div class="uk-position-relative w-100">
                                                    <input type="text" name="name" placeholder="Enter your fullname" />
                                                </div>

                                            </div>
                                            <div class="uk-form-group" style={{width:'40%'}}>
                                                <label class="uk-form-label"> Email</label>

                                                <div class="uk-position-relative w-100">
                                                    <input type="text" name="email" placeholder="Enter your Email" />
                                                </div>

                                            </div>
                                            <div class="uk-form-group" style={{width:'40%'}}>
                                                <label class="uk-form-label"> Contact Number</label>

                                                <div class="uk-position-relative w-100">
                                                    <input type="text" name="number" placeholder="Enter your contact number" />
                                                </div>

                                            </div>
                                            <div class="uk-form-group" style={{width:'40%'}}>
                                                <label class="uk-form-label"> 
                                                Feedback
                                                </label>

                                                <div class="uk-position-relative w-100">
                                                    <textarea name="comment" placeholder="Drop your message"></textarea>
                                                </div>
                                                
                                            </div>



                                            <div class="mt-4 uk-flex-middle uk-grid-small" uk-grid>
                                                <div class="uk-width-auto@s">
                                                    <button type="submit" class="btn btn-default">Submit</button>
                                                </div>
                                            </div>

                                        </form>
                                </div>
                            </div>
                        
                      </div>
                    </div>
                    <Footer />
            </div>
        )
    }
}
