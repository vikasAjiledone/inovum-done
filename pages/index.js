import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/MarketingAgencyTwo/MainBanner";
import Services from "../components/MarketingAgencyTwo/Services";
import About from "../components/MarketingAgencyTwo/About";
import OurWorks from "../components/MarketingAgencyTwo/OurWorks";
import Feedback from "../components/Common/Feedback";
import Team from "../components/Common/Team";
import FunFacts from "../components/Common/FunFacts";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaArea from "../components/Common/CtaArea";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import WorkProcess from "../components/DefaultHome/WorkProcess";
import Head from "next/head";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";

class Index extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Inovum</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <NavbarTwo />

        <MainBanner />

        {/* <Services /> */}


        {/* <OurWorks /> */}

        <WorkProcess />
        {/* <About /> */}

        {/* <Feedback /> */}

        {/* <Team /> */}

        {/* <FunFacts /> */}

        {/* <LatestNewsSlider /> */}

        <CtaAreaTwo />

        {/* <Partner /> */}

        <Footer />
      </>
    );
  }
}

export default Index;
