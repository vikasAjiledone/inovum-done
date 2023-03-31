import React, { useState } from "react";
import Link from "next/link";

let text = `Are you looking to leverage social media to attract more customers and increase production? Our team of experts at Inovum understand your needs and develop the most effective strategies to help you achieve your goals. With our proven track record of success, we can generate focused content that resonates with your target audience and drives measurable results, whether it be increased engagement, website visits, or conversions. Try us today and see why thousands of businesses have chosen Inovum as their go-to social media marketing partner!
`;

let Seo = `Are you visible on the first page of search engine results?
Inovum's SEO team can help. Our team of experts will optimize your website for search engines, boosting your online visibility and driving more leads to your business! With our proven strategies, you'll be able to reach a larger audience and increase your sales.
`;

let logo = ` We understand that logos are the first impression of your company. Every brand has a unique story to tell. With our technology-driven logo design services, you can create a powerful impression and communicate your brand’s story with ease. Our team of experts use the latest technologies to craft logos that are not just visually appealing but also conveys the desired message about your brand. Try us today`;

let paid = `Are you marketing your business to the right people? Paid advertising is the best way to reach a great number of people with your message. It can be done by ranking at the top of the search engine results page and targeting pertinent audiences based on location, demographics, interests, and more. With a team focused on delivering results, we plan the best channel for your goals, develop attractive collateral, and relentlessly optimise to outperform the target return so you can scale your campaigns. We are eager to become your partner in producing quantifiable, long-lasting outcomes.`;

let email = ` Inovum offers the best email marketing strategy that will help you engage with your customers, educate them about the benefits of your business, and persuade them to buy from you. Our strategy is tailored to fit your business needs and has been proven to generate more leads and improve user engagement. Our tailored email campaigns will help you build relationships with your customers, engage them, and convert leads into sales`;

let Public = `What reputation does your company hold in the market? In business, reputation is everything. We give the brand control over the positive information that is spread about their enterprise. We also assist them in responding appropriately and handling any unfavourable remarks. Our sole responsibility as the provider is to draw attention to and demonstrate how effective and well-known your company is. We are firm believers in using creative concepts that come to life across all media to convey distinct brand messages.`;

let web = ` Are you looking for a comprehensive website design solution to meet all of your needs and more? Look no further. Our website design service provides everything from planning and development to launch and maintenance. Plus, we provide total marketing support and custom programming, all in one easy package. With us, you can take the worry out of website design and trust that your project is in the right hands. Don't wait - get the website you need today!`;

let branding = `We understand that logos are the first impression of your company. Every brand has a unique story to tell. With our technology-driven logo design services, you can create a powerful impression and communicate your brand’s story with ease. Our team of experts use the latest technologies to craft logos that are not just visually appealing but also conveys the desired message about your brand. Try us today`;

let photo = `Attention spans are shrinking, and you need to capture your audience's attention quickly! Content is King and with our photography and video services, you can be sure to capture your audience’s attention instantly. Our solution offers high-quality photography and video solutions. We make it easy to create engaging visuals that tell your story in an impactful way. With our services, you can create stunning visuals that will boost website traffic, conversions, and engagement. Let us help you create remarkable results!`;

let result = text.slice(0, 121);
let result1 = Seo.slice(0, 121);
let result2 = logo.slice(0, 121);
let result3 = paid.slice(0, 121);
let result4 = email.slice(0, 121);
let result5 = Public.slice(0, 121);
let result6 = web.slice(0, 121);
let result7 = branding.slice(0, 121);
let result8 = photo.slice(0, 121);

console.log(result);

const Services = () => {
  const [first, setfirst] = useState(result);
  const [seo, setSeo] = useState(result1);
  const [logo, setLogo] = useState(result2);
  const [paid, setPaid] = useState(result3);
  const [email, setEmail] = useState(result4);
  const [Public, setPublic] = useState(result5);
  const [web, setweb] = useState(result6);
  const [branding, setbranding] = useState(result7);
  const [photo, setphoto] = useState(result8);

  return (
    <>
      <div className="bg-fcfbfb ptb-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <h6>We provide a wide range of Services</h6>
            <p>
              Inovum communications is a digital marketing agency that believes
              that every business needs an online presence, regardless of the
              industry in which it operates. We intend to assist your business
              by creating value where your brand starts anew.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-rocket bg-13c4a1"></i>
                <h3>
                  <Link href="#">
                    {/* <Link href="/service-details"> */}
                    <a>SEO Optimization</a>
                  </Link>
                </h3>
                <p>{seo}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-diamond bg-6610f2"></i>
                <h3>
                  <Link href="#">
                    {/* <Link href="/service-details"> */}
                    <a>Logo Designing</a>
                  </Link>
                </h3>
                <p>{logo}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-light bg-ffb700"></i>
                <h3>
                  <Link href="#">
                    {/* <Link href="/service-details"> */}
                    <a>Social Media Marketing</a>
                  </Link>
                </h3>
                <p>{first}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-target bg-fc3549"></i>
                <h3>
                  <Link href="#">
                    {/* <Link href="/service-details"> */}
                    <a> Paid Advertising</a>
                  </Link>
                </h3>
                <p>{paid}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-mail-open-file bg-00d280"></i>
                <h3>
                  <Link href="#">
                    {/* <Link href="/service-details"> */}
                    <a>Email Marketing</a>
                  </Link>
                </h3>
                <p>{email}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-users bg-ff612f"></i>
                <h3>
                  <Link href="#">
                    {/* <Link href="/service-details"> */}
                    <a>Public Relations</a>
                  </Link>
                </h3>
                <p>{Public}</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-global bg-fc3549"></i>
                <h3>
                  <Link href="#">
                    {/* <Link href="/service-details"> */}
                    <a>Website Designing</a>
                  </Link>
                </h3>
                <p>{web}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-display1 bg-00d280"></i>
                <h3>
                  <Link href="#">
                    {/* <Link href="/service-details"> */}
                    <a>Branding</a>
                  </Link>
                </h3>
                <p>{branding}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-photo bg-ff612f"></i>
                <h3>
                  <Link href="#">
                    {/* <Link href="/service-details"> */}
                    <a>Photography & Videography</a>
                  </Link>
                </h3>
                <p>{photo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
