import React, { Component } from 'react'
import Footer from './Footer';
import NavBarTitle from "./NavBarTitle";
import bg from "../images/bg.jpg";
import { loginUser } from '../store/action/login';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Login extends Component {
    static getDerivedStateFromProps(nextProps) {
        const { userDetails } = nextProps;
        if (userDetails) {
          console.log(userDetails)
        }
    }

    constructor(props){
        super(props);
        this.state = {
            userDetails: false
        }
    }

    onLogin(event) {
        this.props.onUserLogin('123')
    }
    render() {
        return (
               
               <div>
                 <header className="header header-horizontal header bg-grey uk-light">
                    <NavBarTitle />
                </header>

                    <div style={{ backgroundImage: "url(" + + ")", }}>
                    
                    {/* <!-- Content
                    ================================================== --> */}
                    <div uk-height-viewport="expand: true" class="uk-flex uk-flex-middle">
                        <div class="uk-width-1-3@m uk-width-1-2@s m-auto"> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
                            <div class="uk-card-default p-5 rounded">
                                <div class="mb-4 uk-text-center">
                                    <h3 class="mb-0"> Welcome back</h3>
                                    <p class="my-2">Login to manage your account.</p>
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
                                        <div class="uk-width-expand@s">
                                            <p> Don't have an account? <Link href="/Signup">Sign up</Link></p>
                                        </div>
                                        <div class="uk-width-auto@s">
                                            <button type="button" class="btn btn-default" onClick={(event) => this.onLogin(event)}>Login</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        
                    </div> <br></br> <br></br> 
                    </div>
                    <Footer />
                    
                </div>
            
        )
    }
}

Login.propTypes = {
  onUserLogin: PropTypes.func,
  userDetails: PropTypes.any

};

const mapStateToProps = state => ({
  userDetails: state.user.userDetails
})

const mapDispatchToProps = dispatch => ({
    onUserLogin: userCredentials => dispatch(loginUser(userCredentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
