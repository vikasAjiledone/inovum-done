import React, { Component } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class About extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="about-content about-content-two">
                
                  <div className="about-text">
                    <h2>Who We Are</h2>
                    <strong className="fw-medium">
                      Inovum is a one-stop-shop digital agency that believes a
                      solidly built brand can become a company’s greatest asset.
                      It specialises in intensely understanding the business,
                      its team of experienced professionals have the capability
                      to provide creative solutions for all kinds of businesses
                      – be it start-ups, established companies or Fortune 500
                      firms. Inovum is your go-to partner when it comes to
                      building an effective and powerful brand identity.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <img src="/images/team-about.jpg" alt="" />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src="/images/mission-about.png" alt="" />
              </div>
              <div className="col-md-8">
                <div className="about-content about-content-two">
                  <div className="about-text">
                    <h2>Our Mission</h2>
                    <strong>
                      To offers a complete rebranding solution that helps you
                      create an unforgettable image and give your business the
                      recognition it deserves. Let us help you give your brand a
                      new beginning!
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5 about-contact">
            <h2 className="my-3">Are you looking to give your brand a fresh start?</h2>
            <div className="row align-items-center">
            <div className="col-md-10">
              <strong>
                Join hands with us which enables you to demonstrate your
                products or services and reach out to your target customers
                easily
              </strong>
            </div>
            <div className="col-md-2">
              <button style={{backgroundColor:"blue"}}>
                <a href="tel:+91-9900419833" style={{color:"white"}}>+91 9900419833</a>
              </button>
            </div>
            </div>
          </div>

          {/* If you want to change the video need to update below videoID */}
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="_ysd-zHamjk"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </>
    );
  }
}

export default About;
