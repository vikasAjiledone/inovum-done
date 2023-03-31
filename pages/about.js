import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import TeamStyleThree from "../components/Common/TeamStyleThree";
import Feedback from "../components/Common/Feedback";
import Partner from "../components/Common/Partner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

class Aabout extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        {/* <PageBanner 
                    pageTitle="About Us" 
                    BGImage="bg-about"
                />   */}
        <div className={`page-title-area bg-about`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <h1 style={{paddingBottom:"3%",color:"#fff"}}>WELCOME TO DIGITAL AGENCY</h1>
                <h3 style={{ color: "#fff", paddingTop: "0px" }} className="about-para">
                  Our digital marketing solutions are designed to help
                  businesses create a unique and powerful online presence. Our
                  test model of online business branding provides the perfect
                  balance between innovation and familiarity. With our services,
                  we strive to make sure that your brand stands out from the
                  competition in an effective and creative way.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <AboutContent />

        {/* <FunFactsTwo />

                <TeamStyleThree />

                <Feedback />

                <Partner />

                <CtaAreaTwo />
                 */}
        <Footer />
      </>
    );
  }
}

export default Aabout;
