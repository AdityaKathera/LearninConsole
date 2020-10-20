import React, { Component } from 'react'
import Footer from './Footer';
import NavBarTitle from "./NavBarTitle";

export default class PrivacyPolicy extends Component {
    render() {
        return (
            <div>

                <header className="header header-horizontal header bg-grey uk-light">
                    <NavBarTitle />
                </header>

                <div class="page-content pt-sm-0">
                <div class="page-content-inner p-sm-0"> 


                <div uk-grid>
                    <div class="uk-width-1-4@m uk-flex-last@m">

                        <nav class="responsive-tab style-3"
                            uk-sticky="top:100 ; offset:120; media:@m ;bottom:true; animation: uk-animation-slide-top">
                            <ul>
                                <li class="uk-active"><a href="#"> Privacy </a></li>
                                <li><a href="#"> Careers</a></li>
                                <li><a href="#"> Terms &amp; Conditions</a></li>
                                <li><a href="#"> Privacy</a></li>
                                <li><a href="#"> Cookies</a></li>
                                <li><a href="#"> Code of Conduct</a></li>
                            </ul>
                        </nav>

                    </div>

                    <div class="uk-width-expand@m m-4 mt-0">
                        
                        <article class="uk-article">
                            <p> para 1
                            </p>
                            <h4 class="mt-4">header 1</h4>
                            <p> para 2</p>
                            <p> para 3</p>
                            <h4 class="mt-4"> header 2</h4>
                            <p>para 4</p>
                            <h4 class="mt-4"> header 3 </h4>
                            <p>para 5</p>
                        </article>

                    </div>


                </div>

                </div>

                </div>

                <br></br> <br></br> 
                <Footer />

            </div>
         
        )
    
    }
}
