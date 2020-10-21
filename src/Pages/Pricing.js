import React, { Component } from 'react'
import Footer from './Footer';
import NavBarTitle from "./NavBarTitle";


export default class Pricing extends Component {
    render() {
        return (
            <div>
                 <header className="header header-horizontal header bg-grey uk-light">
                    <NavBarTitle />
                </header>
                 <div class="page-content-inner" >

                    <div class="pricing pricing-container" style={{marginTop:"100px"}}>

                        <div >

                            <h1> Subscription Plans</h1>
                            <h5> Start learning to day to became expart web Developments and user interface desinger
                            </h5>

                        </div>
                        <div>
                        <div class="pricing-card">
                            <div class="text-center">

                                <h4 class="plan-name"> Basic Plan </h4>
                                <h1 class="price "> <span>₹</span> 499 </h1>
                                <span class="price-type"> / per month</span>
                                <div class="uk-width-auto@s" align="center">
                                            <a href="" type="submit" class="btn btn-default" >Buy Now</a>
                                </div><br></br>

                                   <h6> Course learning checks</h6>
                                    <h6>Certification practice exams</h6>
                                    <h6>Access entire course library</h6>
                                    <h6>Exercise files and practicing</h6>
                                    <h6>Offline viewing and downloading </h6>
                            </div>
                        </div>
                        {/* <div class="pricing-card">
                            <div class="text-center">

                                <h4 class="plan-name"> Basic Plan </h4>
                                <h1 class="price "> <span>₹</span> 499 </h1>
                                <span class="price-type"> / per month</span>
                                <div class="uk-width-auto@s" align="center">
                                            <a href="" type="submit" class="btn btn-default" >Buy Now</a>
                                </div><br></br>

                                   <h6> Course learning checks</h6>
                                    <h6>Certification practice exams</h6>
                                    <h6>Access entire course library</h6>
                                    <h6>Exercise files and practicing</h6>
                                    <h6>Offline viewing and downloading </h6>
                            </div>
                        </div> */}
                        </div>

                        <h6> To start your learning to day you will get free 10 Course first register </h6>

                    </div>
                    </div>
                    <Footer />
            </div>
        )
    }
}
