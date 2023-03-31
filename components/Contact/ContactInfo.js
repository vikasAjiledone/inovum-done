import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>Mail Here</h3>
                {/* <p><a href="mailto:: contact@inovumcommunication.com">: contact@inovumcommunication.com</a></p> */}
                <p >
                  <a href="mailto:: contact@inovumcommunication.com" style={{padding:"5px"}}>
                     contact@inovumcommunication.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Visit Here</h3>
                <p>
                  No 53, 11th Cross ,Near Deepa Complex, Papareddy palya <br />{" "}
                  Nagarabhavi, Karnataka, Bengaluru – 560072
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Call Here</h3>
                {/* <p><a href="+1234567890">+123 456 7890</a></p> */}
                <p>
                  <a href="tel:+91-9900419833">+91-9900419833</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
