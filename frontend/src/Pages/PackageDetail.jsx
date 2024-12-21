import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "./include/PageTitle";

const PackageDetail = ({ title }) => {
  return (
    <div>
      <Helmet>{title}</Helmet>
      <PageTitle title={title} />

      <div className="course_area course-grid course-details" id="course">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="course_details">
                    <div className="course_title">
                      <h1>Thailand – All Stunning Places</h1>
                      <ul>
                        <li>
                          4 Days, 5 Nights{" "}
                          <span>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </span>{" "}
                          (3 Reviews) Code: LMPROU $500
                        </li>
                      </ul>
                    </div>
                    <div className="blog_dtl_thumb">
                      <img src="assets/images/hotel2.jpg" alt="" />
                    </div>
                    <div className="course_dtl_content">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical on
                        Latin literature from 45 BC, making it over 2000 years
                        old. Richard McClintock, a Latin professor at thes
                        Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word
                        in classical literature, discoverede the undoubtable
                        source. Lorem Ipsum comes from sections 1.10.32 and
                        1.10.33 of "de Finibus Bonorum is et Malorum" (The
                        Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This book is a treatise on thes theory of ethics, very
                        popular during the Renaissance. The first line of Lorem
                        Ipsum, "Lorem ipsum ines dolor sit amet..", comes from a
                        line in section 1.10.32.
                      </p>
                    </div>
                    <div className="course_dtl_tab">
                      <div className="tab_area">
                        <ul className="eduzone-tab">
                          <li className="active">
                            <a data-toggle="tab" href="#service1">
                              Description
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#service2">
                              Tour Itenarary
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#service3">
                              Tour Map
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#service4">
                              Vadeos{" "}
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#service5">
                              Reviews
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div
                            className="active in tab-pane fade "
                            id="service1"
                          >
                            <div className="course_single_tab">
                              <div className="course_single_tab_inner">
                                <h2>Tour Description</h2>
                                <p>
                                  Contrary to popular belief, Lorem Ipsum is not
                                  simply random text. It has roots in a piece of
                                  classical on Latin literature from 45 BC,
                                  making it over 2000 years old. Richard
                                  McClintock, a Latin professor at thes
                                  Hampden-Sydney College in Virginia, looked up
                                  one of the more obscure Latin words,
                                  consectetur, from a Lorem Ipsum passage, and
                                  going through the cites of the word in
                                  classical literature, discoverede the
                                  undoubtable source. Lorem Ipsum comes from
                                  sections
                                </p>
                              </div>
                              <div className="course_single_tab_inner">
                                <h2>Additional Info</h2>
                                <ul>
                                  <li>
                                    <i className="fa fa-map-marker" />
                                    Location <span>Thailand</span>
                                  </li>
                                  <li>
                                    <i className="fa fa-clock-o" />
                                    Duration <span>4 days</span>
                                  </li>
                                  <li>
                                    <i className="fa fa-user" />
                                    Min Age <span>15+</span>
                                  </li>
                                  <li>
                                    <i className="fa fa-users" />
                                    Max People <span>7</span>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane" />
                                    Landing <span>Thailand</span>
                                  </li>
                                  <li>
                                    <i className="fa fa-calendar-check-o" />
                                    Check In<span>25/3/2024</span>
                                  </li>
                                  <li>
                                    <i className="fa fa-calendar-check-o" />
                                    Check Out<span>26/3/2024</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade " id="service2">
                            <div className="course_single_tab">
                              <div className="course_instructor">
                                <div className="instructor_title">
                                  <h1>1</h1>
                                </div>
                                <div className="instructor_content">
                                  <h2>Day 1: Meeting The All Members</h2>
                                  <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piplese of in classical on Latin literature
                                    from 45 BC, making it over 2000 years old.
                                    Richard McClintock, a Latin professor at
                                    thes Hampden-Sydney College in Virginia,
                                    looked up one of the more obscure Latin
                                    words, consectetur.Country international to
                                    urist attractions mil es train Moscow guide.
                                    Japan horse riding money Bacel ona Buda pest
                                    yach.
                                  </p>
                                </div>
                              </div>
                              <div className="course_instructor">
                                <div className="instructor_title">
                                  <h1>2</h1>
                                </div>
                                <div className="instructor_content">
                                  <h2>Day 2: Unforgettable Journey</h2>
                                  <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piplese of in classical on Latin literature
                                    from 45 BC, making it over 2000 years old.
                                    Richard McClintock, a Latin professor at
                                    thes Hampden-Sydney College in Virginia,
                                    looked up one of the more obscure Latin
                                    words, consectetur.Country international to
                                    urist attractions mil es train Moscow guide.
                                    Japan horse riding money Bacel ona Buda pest
                                    yach.
                                  </p>
                                </div>
                              </div>
                              <div className="course_instructor">
                                <div className="instructor_title">
                                  <h1>3</h1>
                                </div>
                                <div className="instructor_content">
                                  <h2>Day 3: Night Party</h2>
                                  <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piplese of in classical on Latin literature
                                    from 45 BC, making it over 2000 years old.
                                    Richard McClintock, a Latin professor at
                                    thes Hampden-Sydney College in Virginia,
                                    looked up one of the more obscure Latin
                                    words, consectetur.Country international to
                                    urist attractions mil es train Moscow guide.
                                    Japan horse riding money Bacel ona Buda pest
                                    yach.
                                  </p>
                                </div>
                              </div>
                              <div className="course_instructor">
                                <div className="instructor_title">
                                  <h1>4</h1>
                                </div>
                                <div className="instructor_content">
                                  <h2>Day 4: Time To Say Good Bay</h2>
                                  <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piplese of in classical on Latin literature
                                    from 45 BC, making it over 2000 years old.
                                    Richard McClintock, a Latin professor at
                                    thes Hampden-Sydney College in Virginia,
                                    looked up one of the more obscure Latin
                                    words, consectetur.Country international to
                                    urist attractions mil es train Moscow guide.
                                    Japan horse riding money Bacel ona Buda pest
                                    yach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade " id="service3">
                            <div className="course_single_tab">
                              <div className="google_map_area">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="google_map_area">
                                        <iframe
                                          className="map"
                                          src="https://snazzymaps.com/embed/65241"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade " id="service4">
                            <div className="course_single_tab">
                              {/* BLOG COMMENTST SECTION */}
                              <div className="single-video">
                                <div className="em-video-image">
                                  <img
                                    src="assets/images/hotel3.jpg"
                                    alt="insert image"
                                  />
                                </div>
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
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade " id="service5">
                            <div className="course_single_tab">
                              <div className="course_reviews">
                                <div className="reviews_thumb">
                                  <img src="assets/images/team1.jpg" alt="" />
                                </div>
                                <div className="reviews_content">
                                  <h2>Jessica Farnandes</h2>
                                  <span>Sr. Teacher</span>
                                  <span className="ratting">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </span>
                                  <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical on Latin literature from
                                  </p>
                                </div>
                              </div>
                              <div className="course_reviews">
                                <div className="reviews_thumb">
                                  <img src="assets/images/team2.jpg" alt="" />
                                </div>
                                <div className="reviews_content">
                                  <h2>Adam Jhone</h2>
                                  <span>Sr. Teacher</span>
                                  <span className="ratting">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </span>
                                  <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical on Latin literature from
                                  </p>
                                </div>
                              </div>
                              <div className="course_reviews ">
                                <div className="reviews_content">
                                  <div className="avarage_ratting">
                                    <h2>
                                      Avarage Ratting{" "}
                                      <span className="ratting_point">
                                        4.55
                                      </span>
                                    </h2>
                                    <span className="ratting">
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star-o" />
                                    </span>
                                    <div className="our_skill">
                                      {/*Skill Item Left*/}
                                      <div className="skill-wrapper">
                                        {/* single progress bar */}
                                        <h5>5 Star</h5>
                                        <div className="progress">
                                          <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuemax={100}
                                            style={{ width: "100%" }}
                                          >
                                            <span className="ttop">4</span>
                                          </div>
                                        </div>
                                        {/* single progress bar */}
                                        <h5>4 Star</h5>
                                        <div className="progress">
                                          <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuemax={100}
                                            style={{ width: "90%" }}
                                          >
                                            <span className="ttop">1</span>
                                          </div>
                                        </div>
                                        {/* single progress bar */}
                                        <h5>3 Star</h5>
                                        <div className="progress">
                                          <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuemax={100}
                                            style={{ width: "30%" }}
                                          >
                                            <span className="ttop">0</span>
                                          </div>
                                        </div>
                                        {/* single progress bar */}
                                        <h5>2 Star</h5>
                                        <div className="progress">
                                          <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuemax={100}
                                            style={{ width: "15%" }}
                                          >
                                            <span className="ttop">0</span>
                                          </div>
                                        </div>
                                        {/* single progress bar */}
                                        <h5>1 Star</h5>
                                        <div className="progress">
                                          <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuemax={100}
                                            style={{ width: "5%" }}
                                          >
                                            <span className="ttop">0</span>
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
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-5 col-xs-12 sidebar-right content-widget pdsr">
              <div className="blog-left-side widget">
                <div className="course_title">
                  <h1>Book This Tour</h1>
                </div>
                <div className="em_contact_form">
                  <form action="#">
                    <div className="contact_form_inner">
                      <div className="form_field">
                        <div className="form_field_inner">
                          <input type="text" name="name" placeholder="Name*" />
                        </div>
                        <div className="form_field_inner">
                          <input
                            type="email"
                            name="email"
                            placeholder="Confirm email*"
                          />
                        </div>
                        <div className="form_field_inner">
                          <input
                            type="email"
                            name="phone"
                            placeholder="Phone number*"
                          />
                        </div>
                        <div className="form_field_inner">
                          <input
                            type="text"
                            name="name"
                            placeholder="Number Of Tickets*"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="em_contact_form">
                  <form action="#">
                    <div className="contact_form_inner">
                      <div className="form_field">
                        <div className="form_field_comment">
                          <div className="field_comment_inner">
                            <textarea
                              name="comment"
                              placeholder="Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact_bnt0">
                      <a href="#">Check Avaibalyti</a>
                    </div>
                    <div className="contact_bnt">
                      <button name="submit">Book Now</button>
                    </div>
                  </form>
                </div>
                <div id="categories-3" className="widget widget_categories">
                  <div className="single_widget">
                    <div className="single_widget_text">
                      <h2>Any Question?</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectet ur adipiscing
                        elit, sedpr do eiusmod tempor incididunt ut.
                      </p>
                      <span>
                        <i className="fa fa-phone" />
                        +088 017 659 315 75
                      </span>
                      <span>
                        <i className="fa fa-envelope-o" />
                        nfo@yourcompany.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title2">
                {/* title */}
                <h2>Related Post</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_package">
                <div className="pack_thumb">
                  <img src="assets/images/pk1.jpg" alt="" />
                  <div className="package_price">
                    <span>$940</span>
                  </div>
                </div>
                <div className="package_content">
                  <div className="package_meta">
                    <span>
                      <i className="fa fa-user" />
                      Number Of Days: 2
                    </span>
                    <span>
                      <i className="fa fa-calendar" />
                      Persons: 2
                    </span>
                  </div>
                  <div className="package_title">
                    <h2>
                      <a href="single-pack.html">Barselona Football Tour</a>
                    </h2>
                    <span>Barselona, Spain</span>
                  </div>
                  <div className="package_content_inner">
                    <div className="package_btn">
                      <a href="single-pack.html">Details</a>
                    </div>
                    <div className="package_ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_package">
                <div className="pack_thumb">
                  <img src="assets/images/pk2.jpg" alt="" />
                  <div className="package_price">
                    <span>$820</span>
                  </div>
                </div>
                <div className="package_content">
                  <div className="package_meta">
                    <span>
                      <i className="fa fa-user" />
                      Number Of Days: 2
                    </span>
                    <span>
                      <i className="fa fa-calendar" />
                      Persons: 2
                    </span>
                  </div>
                  <div className="package_title">
                    <h2>
                      <a href="single-pack.html">Real Madrid Vocation</a>
                    </h2>
                    <span>Madrid, Spain</span>
                  </div>
                  <div className="package_content_inner">
                    <div className="package_btn">
                      <a href="single-pack.html">Details</a>
                    </div>
                    <div className="package_ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_package">
                <div className="pack_thumb">
                  <img src="assets/images/pk3.jpg" alt="" />
                  <div className="package_price">
                    <span>$640</span>
                  </div>
                </div>
                <div className="package_content">
                  <div className="package_meta">
                    <span>
                      <i className="fa fa-user" />
                      Number Of Days: 2
                    </span>
                    <span>
                      <i className="fa fa-calendar" />
                      Persons: 2
                    </span>
                  </div>
                  <div className="package_title">
                    <h2>
                      <a href="single-pack.html">Brazil Stunning Places</a>
                    </h2>
                    <span>Combodia, Brazil</span>
                  </div>
                  <div className="package_content_inner">
                    <div className="package_btn">
                      <a href="single-pack.html">Details</a>
                    </div>
                    <div className="package_ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
