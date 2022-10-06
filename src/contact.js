import React from 'react'
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css'


function Contact() {
    return (
        <>
            <div class="register-area  py-5">
                <div class="container">
                    <h3 class="login-header">Contact us</h3>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="register-contact  clearfix">
                                <form id="contact-form" class="contact-form" action="mail.php" method="post">
                                    <div class="address-wrapper row">
                                        <div class="col-md-12">
                                            <div class="address-fname">
                                                <input class="form-control" type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="address-email">
                                                <input class="form-control" type="email" name="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="address-web">
                                                <input class="form-control" type="text" name="website" placeholder="Website" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="address-subject">
                                                <input class="form-control" type="text" name="subject" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="address-textarea">
                                                <textarea name="message" class="form-control" placeholder="Write your message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="footer-content mail-content clearfix">
                                        <div class="send-email float-md-right">
                                            <input value="Submit" class="return-customer-btn" type="submit" />
                                        </div>
                                    </div>
                                    <p class="form-message"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                    <h1>Contact us</h1>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact register-contact">
                            <form id="contact-form" class="contact-form" action="contact.js" method="post">
                                <div className="row">
                                    <div className="col col-md-12">
                                        <input type="text" placeholder='Name' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact