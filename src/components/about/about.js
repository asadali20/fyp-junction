import React, { Component } from 'react';
import Header from '../header/header';
import {i} from 'react-bootstrap';
import '../about/about.css';
import img1 from '../../images/images.jpg'

class About extends Component{
    render()
    {
        return(
          <div className='About-new'>
            <Header/>
            <div className='About' background-image='../../images/app-image1.jpg'>
              
                <div className='about-content text-center'>
                    <div>
                        <h3 className="About-mainheadings">About us</h3>
                    </div>
                    <div className="content text-center">
                        <h3>Welcome To Our FYP Junction Website </h3>
                        <p class="col-md-12">The idea of making FYP Junction was presented by our team lead after observing 3 years in
                            university
                            he came to the conclusion that there is no platform for the students of final year where they can sell
                            their 
                            projects or they can get the investment for their projects many students had brilliant ideas but they could
                            not
                            completed their FYP's due to lack of investment or financial problems so after experiencing all these thing
                            we decided to make a platform where students can get the investment for their projects and investors can get
                            the 
                            right place to invest their money
                        </p>
                    </div>
                </div>
                <div classname="about-Services">
        <section className="choose py-5" id="services">
          <div className="container py-md-3">
            <h3 className="About-mainheadings"> What we provide</h3>
            <div className="feature-grids row">
              <div className="col-lg-3 col-sm-6">
                <div className="f1 icon1 p-4">
                  <div className="icon">
                    <i className="fa fa-bandcamp" style={{fontSize: '36px', color: 'red'}} />
                  </div>
                  <h3 className="my-3">Project Sales</h3>
                  <p>
                    We are providing the best platform to sell your project and get the good investments through our platform.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                <div className="f1 icon2 p-4">
                  <div className="icon">
                    <i className="fa fa-codepen" style={{fontSize: '36px', color: 'blue'}} />
                  </div>
                  <h3 className="my-3">Online chat system </h3>
                  <p>We are providing you the platform where you can easily communicate with each other and arrange meetings
                    regarding your projects.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                <div className="f1 icon3 p-4">
                  <div className="icon">
                    <i className="fa fa-btc" style={{fontSize: '36px', color: 'green'}} />
                  </div>
                  <h3 className="my-3">Bidding system </h3>
                  <p>If your project is interesting and many investors want to invests so students can get the high amount of
                    investment through our bidding system.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                <div className="f1 icon4 p-4">
                  <div className="icon">
                    <i className="fa fa-cloud" style={{fontSize: '36px', color: 'orange'}} />
                  </div>
                  <h3 className="my-3">Project Reviews</h3>
                  <p>
                    We are providing the review system where every one can review your projects and give you the rating
                    according to the project so it will increse the worth of your project</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

            </div>
            </div>
        );
    }
};

export default About;