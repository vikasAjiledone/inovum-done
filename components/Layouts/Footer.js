import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                
                  </div>

                  <p>
                    Welcome to The Digital Agency Our digital marketing
                    solutions are designed to help businesses create a unique
                    and powerful online presence. Our test model of online
                    business branding provides the perfect balance between
                    innovation and familiarity. With our services, we strive to
                    make sure that your brand stands out from the competition in
                    an effective and creative way.
                  </p>

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100090058983722&mibextid=ZbWKwL" >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/InovumC/status/1639123990009749504?s=20" >
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCysNBW3zPl70VfUYgTqZ8Ww" >
                        <i className="icofont-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/inovum_communications/?igshid=ZDdkNTZiNTM%3D" >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6" style={{paddingLeft:"50px"}}>
                <div className="single-footer-widget ml-4 pl-5">
                  <h3>Explore</h3>

                  <ul className="list">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                      {/* <Link href="/about"> */}
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                      {/* <Link href="/services"> */}
                        <a>Services</a>
                      </Link>
                    </li>

                    
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget ml-4">
                  <h3>Quick Links</h3>

                  <ul className="list">
                    <li>
                      <Link href="/contact">
                      {/* <Link href="/contact"> */}
                        <a>Contact Us</a>
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h3>Get in Touch</h3>

                  <ul className="get-in-touch">
                    <li>
                      <i className="icofont-home"></i> 
                      No 53, 11th Cross ,Near Deepa Complex, Papareddy palya, Nagarabhavi, Karnataka, Bengaluru – 560072
                    </li>
                    <br />
                    <li>
                      <i className="icofont-live-support"></i>
                      <a href="tel:+91-9900419833">+91-9900419833</a>
                    </li>
                    <li>
                      <i className="icofont-envelope"></i>
                      <a href="mailto:contact@inovumcommunication.com">contact@inovumcommunication.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
              <p>
                Copyright &copy; {currentYear} Inovum. All Rights Reserved By{" "}
                <a href="#" >
                Inovum.
                </a>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
