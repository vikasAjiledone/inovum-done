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
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img
                    src="/images/about-img2.jpg"
                    alt="image"
                    className="rounded-10"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h2>About Us</h2>
                    <p>
                      Our digital marketing solutions are designed to help
                      businesses create a unique and powerful online presence.
                      Our test model of online business branding provides the
                      perfect balance between innovation and familiarity. With
                      our services, we strive to make sure that your brand
                      stands out from the competition in an effective and
                      creative way.
                    </p>
                  </div>

                  <div className="about-text">
                    <h4>Who We Are</h4>
                    <p>
                      Inovum is a one-stop-shop digital agency that believes a
                      solidly built brand can become a company’s greatest asset.
                      It specialises in intensely understanding the business,
                      its team of experienced professionals have the capability
                      to provide creative solutions for all kinds of businesses
                      – be it start-ups, established companies or Fortune 500
                      firms. Inovum is your go-to partner when it comes to
                      building an effective and powerful brand identity
                    </p>
                  </div>

                  <div className="about-text">
                    <h4>Our Mission</h4>
                    <p>
                      To offers a complete rebranding solution that helps you
                      create an unforgettable image and give your business the
                      recognition it deserves. Let us help you give your brand a
                      new beginning!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container mt-5">
            <img src="/images/aboutimg.png" alt="" />
          </div> */}
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
