import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "./include/PageTitle";

const About = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageTitle title={title} />

      <div className="feature_area_main about-pages">
        <div className="container">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title t_center">
                {/* title */}
                <h2>
                  Why Choose <span> Tourist</span>
                </h2>
                <i className="fa fa-plane" />
                {/* TEXT */}
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonumm
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="feature-curousel owl-carousel curosel-style owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-969px, 0px, 0px)",
                        transition: "0.25s",
                        width: 3557,
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-usd" />
                            </div>
                            <div className="feature_content">
                              <h2>Best Price Guarantee</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-usd" />
                            </div>
                            <div className="feature_content">
                              <h2>Best Price Guarantee</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-car" />
                            </div>
                            <div className="feature_content">
                              <h2>Travel Arrangements</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-car" />
                            </div>
                            <div className="feature_content">
                              <h2>Travel Arrangements</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-plane" />
                            </div>
                            <div className="feature_content">
                              <h2>Cheap Flights</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-usd" />
                            </div>
                            <div className="feature_content">
                              <h2>Best Price Guarantee</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "323.333px" }}>
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-usd" />
                            </div>
                            <div className="feature_content">
                              <h2>Best Price Guarantee</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "323.333px" }}>
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-car" />
                            </div>
                            <div className="feature_content">
                              <h2>Travel Arrangements</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-car" />
                            </div>
                            <div className="feature_content">
                              <h2>Travel Arrangements</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-plane" />
                            </div>
                            <div className="feature_content">
                              <h2>Cheap Flights</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_feature">
                            <div className="feture_icon">
                              <i className="fa fa-usd" />
                            </div>
                            <div className="feature_content">
                              <h2>Best Price Guarantee</h2>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration.
                              </p>
                            </div>
                            <div className="feature_button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <div className="owl-prev">
                      <i className="fa fa-long-arrow-left" />
                    </div>
                    <div className="owl-next">
                      <i className="fa fa-long-arrow-right" />
                    </div>
                  </div>
                  <div className="owl-dots">
                    <div className="owl-dot active">
                      <span />
                    </div>
                    <div className="owl-dot">
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video_area" id="video">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="choose-video-icon">
                <div className="video-icon">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="#"
                  >
                    <i className="fa fa-play-circle" />
                  </a>
                </div>
                <div className="video_content">
                  <h2>We Are Happy Family</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="counter_area" id="fun-fact">
        <div className="container">
          <div className="row counter_main">
            {/* single counter */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="single_counter">
                <div className="single_counter_inner">
                  <div className="countr_text">
                    <h1>3250</h1>
                  </div>
                  <div className="counter_title">
                    <h4>Happy Customers</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* single counter */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="single_counter">
                <div className="single_counter_inner">
                  <div className="countr_text">
                    <h1>1280</h1>
                  </div>
                  <div className="counter_title">
                    <h4>Completed Project</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* single counter */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="single_counter">
                <div className="single_counter_inner">
                  <div className="countr_text">
                    <h1>4052</h1>
                  </div>
                  <div className="counter_title">
                    <h4>Cup Of Tea</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* single counter */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="single_counter">
                <div className="single_counter_inner">
                  <div className="countr_text">
                    <h1>1024</h1>
                  </div>
                  <div className="counter_title">
                    <h4>Wining Award</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial_area" id="testimonial">
        <div className="container">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title t_center">
                {/* title */}
                <h2>
                  What travellers <span> Say</span>
                </h2>
                <i className="fa fa-plane" />
                {/* TEXT */}
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonumm
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                {/*testimonial owl carousel */}
                <div className="testimonial_list owl-carousel curosel-style owl-loaded owl-drag">
                  {/* Start Single Testimonial */}
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-969px, 0px, 0px)",
                        transition: "all",
                        width: 2910,
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_testimonial">
                            <div className="em_test_thumb">
                              <img src="assets/images/18.jpg" alt="" />
                            </div>
                            <div className="em_testi_text">
                              <p>
                                Lorem ipsum dolor sit amet consec adipiscing
                                elit, sed diam nonummy nibh euismo consectetuer
                                once of adipiscing sed diam
                              </p>
                            </div>
                            <div className="em_testi_content">
                              <div className="em_testi_title">
                                <h2>
                                  Mr. Anowar<span>Web Developer</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="owl-item active"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_testimonial">
                            <div className="em_test_thumb">
                              <img src="assets/images/18.jpg" alt="" />
                            </div>
                            <div className="em_testi_text">
                              <p>
                                Lorem ipsum dolor sit amet consec adipiscing
                                elit, sed diam nonummy nibh euismo consectetuer
                                once of adipiscing sed diam
                              </p>
                            </div>
                            <div className="em_testi_content">
                              <div className="em_testi_title">
                                <h2>
                                  Adame Milne <span>Co-Founder</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_testimonial">
                            <div className="em_test_thumb">
                              <img src="assets/images/18.jpg" alt="" />
                            </div>
                            <div className="em_testi_text">
                              <p>
                                Lorem ipsum dolor sit amet consec adipiscing
                                elit, sed diam nonummy nibh euismo consectetuer
                                once of adipiscing sed diam
                              </p>
                            </div>
                            <div className="em_testi_content">
                              <div className="em_testi_title">
                                <h2>
                                  Leonel Messi<span>The Boss</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_testimonial">
                            <div className="em_test_thumb">
                              <img src="assets/images/18.jpg" alt="" />
                            </div>
                            <div className="em_testi_text">
                              <p>
                                Lorem ipsum dolor sit amet consec adipiscing
                                elit, sed diam nonummy nibh euismo consectetuer
                                once of adipiscing sed diam
                              </p>
                            </div>
                            <div className="em_testi_content">
                              <div className="em_testi_title">
                                <h2>
                                  Mr. Anowar<span>Web Developer</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_testimonial">
                            <div className="em_test_thumb">
                              <img src="assets/images/18.jpg" alt="" />
                            </div>
                            <div className="em_testi_text">
                              <p>
                                Lorem ipsum dolor sit amet consec adipiscing
                                elit, sed diam nonummy nibh euismo consectetuer
                                once of adipiscing sed diam
                              </p>
                            </div>
                            <div className="em_testi_content">
                              <div className="em_testi_title">
                                <h2>
                                  Adame Milne <span>Co-Founder</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "323.333px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_testimonial">
                            <div className="em_test_thumb">
                              <img src="assets/images/18.jpg" alt="" />
                            </div>
                            <div className="em_testi_text">
                              <p>
                                Lorem ipsum dolor sit amet consec adipiscing
                                elit, sed diam nonummy nibh euismo consectetuer
                                once of adipiscing sed diam
                              </p>
                            </div>
                            <div className="em_testi_content">
                              <div className="em_testi_title">
                                <h2>
                                  Leonel Messi<span>The Boss</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe_area">
        <div className="container">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title  t_center white_color">
                {/* title */}
                <h2>
                  Subscribes <span> Now</span>
                </h2>
                <i className="fa fa-plane" />
                {/* TEXT */}
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonumm
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="em_quote_form">
                <form action="#">
                  <div className="quote_form_inner">
                    <div className="quote_form_field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                      <button className="quote_button" name="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand_area">
        <div className="container">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title t_center">
                {/* title */}
                <h2>
                  Our Brand <span> Partner</span>
                </h2>
                <i className="fa fa-plane" />
                {/* TEXT */}
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonumm
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="brand_carousel owl-carousel curosel-style owl-loaded owl-drag">
                {/*single brand */}
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all",
                      width: 1128,
                    }}
                  >
                    <div className="owl-item active" style={{ width: 188 }}>
                      <div className="col-md-12">
                        <div className="single_brand">
                          <div className="brand_thumb">
                            <img src="assets/images/brand1.png" alt="brand1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 188 }}>
                      <div className="col-md-12">
                        <div className="single_brand">
                          <div className="brand_thumb">
                            <img src="assets/images/brand2.png" alt="brand2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 188 }}>
                      <div className="col-md-12">
                        <div className="single_brand">
                          <div className="brand_thumb">
                            <img src="assets/images/brand3.png" alt="brand3" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 188 }}>
                      <div className="col-md-12">
                        <div className="single_brand">
                          <div className="brand_thumb">
                            <img src="assets/images/brand4.png" alt="brand4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 188 }}>
                      <div className="col-md-12">
                        <div className="single_brand">
                          <div className="brand_thumb">
                            <img src="assets/images/brand5.png" alt="brand5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 188 }}>
                      <div className="col-md-12">
                        <div className="single_brand">
                          <div className="brand_thumb">
                            <img src="assets/images/brand6.png" alt="brand6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <div className="owl-prev disabled">
                    <i className="fa fa-long-arrow-left" />
                  </div>
                  <div className="owl-next">
                    <i className="fa fa-long-arrow-right" />
                  </div>
                </div>
                <div className="owl-dots">
                  <div className="owl-dot active">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
