
import Home from "./home"
import React from 'react'
import { FaFacebookF} from 'react-icons/fa';
import {FaTwitter ,FaGooglePlusG} from 'react-icons/fa';
// import { FaFacebookF} from 'react-icons/fa';
import { Carousel, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import './style.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './about.css'

function About() {
    return (
        <>
        <div className="h100"></div>
        <div class="head-area">
            <div class="container">
                <ol class="head head-list">
                    <li class="head-item">
                        <a href="./home">Home</a>
                    </li>
                    <li class="head-item active">/ about</li>
                </ol>
            </div>
        </div>
        <div class="skill-area pt-5 mt-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-content mb-all-40">
                         
                            <div class="about-title">
                                <h3>about our mission</h3>
                            </div>
                         
                            <p class="mb-15">Rian must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure</p>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia sequuntur magni dolores eos qui ratione em </p>
                            <a class="login-btn" href="#">Read more</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="skill-content">
                            <div class="skill">
                                <div class="progress">
                                    <div class="lead">UI &amp; UX DESIGN</div>
                                <div className='ux progress-bar wow fadeInLeft animated'><span>85%</span></div>
                                </div>
                                <div class="progress">
                                    <div class="lead">WEB DESIGN</div>
                                    {/* <div data-wow-delay="1.2s" data-wow-duration="1.5s" style="width: 90%; visibility: visible; animation-duration: 1.5s; animation-delay: 1.2s; animation-name: fadeInLeft;" data-progress="70%" class="progress-bar wow fadeInLeft animated"><span>90%</span></div> */}
                                </div>
                                <div class="progress">
                                    <div class="lead">APPS DESIGN</div>
                                    {/* <div data-wow-delay="1.2s" data-wow-duration="1.5s" style="width: 75%; visibility: visible; animation-duration: 1.5s; animation-delay: 1.2s; animation-name: fadeInLeft;" data-progress="60%" class="progress-bar wow fadeInLeft animated"><span>75%</span></div> */}
                                </div>
                                <div class="progress">
                                    <div class="lead">SKETCH DESIGN</div>
                                    {/* <div data-wow-delay="1.2s" data-wow-duration="1.5s" style="width: 68%; visibility: visible; animation-duration: 1.5s; animation-delay: 1.2s; animation-name: fadeInLeft;" data-progress="80%" class="progress-bar wow fadeInLeft animated"><span>68%</span></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="our-team dark-white-bg ptb-80">
            <div class="container">
              <div class="about-title team-title">
                  <h3>our team</h3>
              </div>
                <div class="row text-center">
            
                    <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div class="single-team mb-all-30">
                            <div class="team-img sidebar-img sidebar-banner">
                                <a href="#"><img src={require('./about_image/asset 5.jpeg')} alt="team-image"/></a>
                                <div class="team-link">
                                    <ul>
                                        <li><a href="#"><FaFacebookF/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaGooglePlusG/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-info">
                                <h4>Marcos Alonso</h4>
                                <p>web designer</p>
                            </div>
                        </div>
                    </div>
                    
              
                    <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div class="single-team mb-all-30">
                            <div class="team-img sidebar-img sidebar-banner">
                                <a href="#"><img src={require('./about_image/asset 6.jpeg')} alt="team-image"/></a>
                                <div class="team-link">
                                    <ul>
                                    <li><a href="#"><FaFacebookF/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaGooglePlusG/></a></li>
                                          </ul>
                                </div>
                            </div>
                            <div class="team-info">
                                <h4>Luis Aragones</h4>
                                <p>web developer</p>
                            </div>
                        </div>
                    </div>
                    
                
                    <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div class="single-team mb-xxs-30">
                            <div class="team-img sidebar-img sidebar-banner">
                                <a href="#"><img src={require('./about_image/asset 7.jpeg')} alt="team-image"/></a>
                                <div class="team-link">
                                    <ul>
                                    <li><a href="#"><FaFacebookF/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaGooglePlusG/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-info">
                                <h4>Maria Alessis</h4>
                                <p>Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div class="single-team">
                            <div class="team-img sidebar-img sidebar-banner">
                                <a href="#"><img src={require('./about_image/asset 8.jpeg')} alt="team-image"/></a>
                                <div class="team-link">
                                    <ul>
                                    <li><a href="#"><FaFacebookF/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaGooglePlusG/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-info">
                                <h4>John Doe</h4>
                                <p>php developer</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class='container-fluid my-5' >            
        <OwlCarousel items={5}  
          className="owl-theme"  
          loop   
          margin={8} >  
           <div classname=''><img  className="owl1 img" src= {require('./about_image/asset 9.jpeg')}/></div>  
           <div classname=''><img  className="owl1 img" src= {require('./about_image/asset 10.jpeg')}/></div>  
           <div classname=''><img  className="owl1 img" src= {require('./about_image/asset 11.jpeg')}/></div>  
           <div classname=''><img  className="owl1 img" src= {require('./about_image/asset 12.jpeg')}/></div>  
           <div classname=''><img className="owl1 img" src= {require('./about_image/asset 13.jpeg')}/></div>  
           <div classname=''><img  className="owl1 img" src= {require('./about_image/asset 9.jpeg')}/></div>  
           <div classname=''><img  className="owl1 img" src= {require('./about_image/asset 10.jpeg')}/></div>  
           <div classname=''><img  className="owl1 img" src= {require('./about_image/asset 11.jpeg')}/></div>  
           <div classname=''><img  className="owl1 img" src= {require('./about_image/asset 12.jpeg')}/></div>  
           <div classname=''><img className="owl1 img" src= {require('./about_image/asset 13.jpeg')}/></div>  
             </OwlCarousel>  
      </div>  
        </>
    )
}

export default About