import React, { Component } from "react";
import Link from "next/link";

class WorkProcess extends Component {
  render() {
    return (
      <>
        <section className="work-process-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>Our Services</h2>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
            </div>

            <div className="work-process">
              <img src="/images/man-with-mobile.png" alt="logo" />

              <div className="work-process-list">
                <div className="single-work-process">
                  <div className="icon">
                    <img src="/images/web3.png" alt="" />
                  </div>
                  <Link href="/services" >
                    <h3 style={{cursor:"pointer"}}>Web Design</h3>
                  </Link>
                  {/* <span>Visual Design</span> */}
                </div>
                <div className="single-work-process">
                  <div className="icon">
                    {/* <i className="pe-7s-sun"></i> */}
                    <img src="/images/social3.png" alt="" />
                  </div>
                  <Link href="/services" >
                  <h3 style={{cursor:"pointer"}}>SMM</h3>
                  </Link>
                  {/* <span>Lunch/Analyse</span> */}
                </div>
                
                <div className="single-work-process">
                  <div className="icon">
                    {/* <i className="pe-7s-note2"></i> */}
                    <img src="/images/paid3.png" alt="" />
                  </div>
                  <Link href="/services" >
                  <h3 style={{cursor:"pointer"}}>Paid Ads</h3>
                  </Link>
                  {/* <span>Requirements</span> */}
                </div>
                

                

                <div className="single-work-process">
                  <div className="icon">
                    {/* <i className="pe-7s-light"></i> */}
                    <img src="/images/public3.png" alt="" />
                  </div>
                  <Link href="/services" >
                  <h3 style={{cursor:"pointer"}}>Public Relations</h3>
                  </Link>
                  {/* <span>User Research</span> */}
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    {/* <i className="pe-7s-airplay"></i> */}
                    <img src="/images/logo3.png" alt="" />
                  </div>
                  <Link href="/services" >
                  <h3 style={{cursor:"pointer"}}>Logo Designing & Branding</h3>
                  </Link>
                  {/* <span>Screen Flow</span> */}
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    {/* <i className="pe-7s-display2"></i> */}
                    <img src="/images/photo3.png" alt="" />
                  </div>
                  <Link href="/services" >
                  <h3 style={{cursor:"pointer"}}>SEO</h3>
                  </Link>
                  {/* <span>Wireframes</span> */}
                </div>
              </div>

              <img
                src="/images/circle.png"
                className="rotateme circle-image"
                alt="image"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default WorkProcess;
