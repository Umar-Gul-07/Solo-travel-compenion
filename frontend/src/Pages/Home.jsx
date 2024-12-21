import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div
  id="particles"
  style={{
    background: "url(assets/images/slider-2.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 800
  }}
>
  <canvas
    className="pg-canvas"
    width={1013}
    style={{ display: "block" }}
    height={800}
  />
  <div id="webcoderskull">
    <div className="main_slider_area d-flex align-items-center">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-12">
            <div className="hero-content text-center">
              <div
                className="em-slider-up-title1 wow slideInLeft animated"
                data-wow-duration="2s"
                data-wow-delay="0s"
                style={{
                  visibility: "visible",
                  animationDuration: "2s",
                  animationDelay: "0s",
                  animationName: "slideInLeft"
                }}
              >
                <h3>Open Your Eyes</h3>
              </div>
              <div
                className="em-slider-sub-title wow slideInLeft animated"
                data-wow-duration="2s"
                data-wow-delay="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "2s",
                  animationDelay: "1s",
                  animationName: "slideInLeft"
                }}
              >
                <h1>To The Beautiful World</h1>
              </div>
              <div
                className="em-slider-text wow slideInLeft animated"
                data-wow-duration="2s"
                data-wow-delay="2s"
                style={{
                  visibility: "visible",
                  animationDuration: "2s",
                  animationDelay: "2s",
                  animationName: "slideInLeft"
                }}
              >
                <p>We provide the best toure &amp; travels service</p>
              </div>
              <div
                className="em-slider-button wow slideInRight animated"
                data-wow-duration="2s"
                data-wow-delay="3s"
                style={{
                  visibility: "visible",
                  animationDuration: "2s",
                  animationDelay: "3s",
                  animationName: "slideInRight"
                }}
              >
                <a className="em-active-button" href="#">
                  Star A Tour
                </a>
                <a className="withput-active" href="#">
                  About More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      <div className="search_form_area" id="goal">
        <div className="container">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title  t_center">
                {/* title */}
                <h2>
                  Start<span> Booking Now!</span>
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
            <div className="col-md-3 col-sm-12 col-xs-12">
              <ul className="tourist-tab">
                <li className="active">
                  <i className="fa fa-home" />
                  <a data-toggle="tab" href="#service1">
                    Hotels
                  </a>
                </li>
                <li>
                  <i className="fa fa-plane" />
                  <a data-toggle="tab" href="#service2">
                    Flight
                  </a>
                </li>
                <li>
                  <i className="fa fa-ship" />
                  <a data-toggle="tab" href="#service3">
                    Ship
                  </a>
                </li>
                <li>
                  <i className="fa fa-umbrella" />
                  <a data-toggle="tab" href="#service4">
                    Tour
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="tab_area">
                <div className="tab-content">
                  <div className="active in tab-pane fade " id="service1">
                    <div className="single_tab">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="main-search-form">
                            <form action="#">
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Type Keywords</label>
                                  <input
                                    className="form-control"
                                    name="keyword"
                                    type="text"
                                    placeholder="Keyword"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Enter Destination</label>
                                  <input
                                    type="text"
                                    name="destination"
                                    placeholder="Destination "
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field datetime">
                                  <label>Check In Date</label>
                                  <input
                                    type="date"
                                    name="checkin"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <label>Check Out Date</label>
                                <div className="input-field datetime">
                                  <input
                                    type="date"
                                    name="checkout"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Number Of Guests </label>
                                  <input
                                    type="number"
                                    name="number"
                                    placeholder="Guest"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <input
                                    type="submit"
                                    defaultValue="⌕ Search"
                                    className="submit-btn th-bg"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="service2">
                    <div className="single_tab">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="main-search-form">
                            <form action="#">
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Origin City</label>
                                  <select className="select">
                                    <option value="">Origin City</option>
                                    <option value="aye">America</option>
                                    <option value="eh">Canada</option>
                                    <option value="ooh">London</option>
                                    <option value="whoop">Bangladesh</option>
                                    <option value="whoop">Paris</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Destination City</label>
                                  <select className="select">
                                    <option value="">Destination City</option>
                                    <option value="aye">America</option>
                                    <option value="eh">Canada</option>
                                    <option value="ooh">London</option>
                                    <option value="whoop">Bangladesh</option>
                                    <option value="whoop">Paris</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field datetime">
                                  <label>Deparature Date</label>
                                  <input
                                    type="date"
                                    name="checkin"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <label>Return Date</label>
                                <div className="input-field datetime">
                                  <input
                                    type="date"
                                    name="checkout"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Flight Class</label>
                                  <select className="select">
                                    <option value="">Economic</option>
                                    <option value="aye">Economic</option>
                                    <option value="eh">Business</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Number Of Adult </label>
                                  <input
                                    type="number"
                                    name="number"
                                    placeholder="Adult"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Number Of Kids </label>
                                  <input
                                    type="number"
                                    name="kids"
                                    placeholder="Kids"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <input
                                    type="submit"
                                    defaultValue="⌕ Search"
                                    className="submit-btn th-bg"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="service3">
                    <div className="single_tab">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="main-search-form">
                            <form action="#">
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field datetime">
                                  <label>Pickup Date Time</label>
                                  <input
                                    type="date"
                                    name="pickup"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Total Hours </label>
                                  <input
                                    type="number"
                                    name="hours"
                                    placeholder="Hours"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Pickup Location</label>
                                  <input
                                    className="form-control"
                                    name="keyword"
                                    type="text"
                                    placeholder="Pickup Location"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Drop Location</label>
                                  <input
                                    className="form-control"
                                    name="keyword"
                                    type="text"
                                    placeholder="Drop Location"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <input
                                    type="submit"
                                    defaultValue="⌕ Search"
                                    className="submit-btn th-bg"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="service4">
                    <div className="single_tab">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="main-search-form">
                            <form action="#">
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Type Keword</label>
                                  <input
                                    className="form-control"
                                    name="keyword"
                                    type="text"
                                    placeholder="Keyword"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Select Location</label>
                                  <select className="select">
                                    <option value="">Select Location</option>
                                    <option value="aye">America</option>
                                    <option value="eh">Canada</option>
                                    <option value="ooh">London</option>
                                    <option value="whoop">Bangladesh</option>
                                    <option value="whoop">Paris</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field datetime">
                                  <label>Check In Date</label>
                                  <input
                                    type="date"
                                    name="pickup"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <label>Number Of Guest </label>
                                  <input
                                    type="number"
                                    name="hours"
                                    placeholder="Guest"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="input-field">
                                  <input
                                    type="submit"
                                    defaultValue="⌕ Search"
                                    className="submit-btn th-bg"
                                  />
                                </div>
                              </div>
                            </form>
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

      <div className="popular_package_area">
        <div className="container">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title  t_center">
                {/* title */}
                <h2>
                  Popular<span> Package</span>
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
            {/* SINGLE PACKAGE */}
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
            {/* SINGLE PACKAGE */}
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
            {/* SINGLE PACKAGE */}
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
            {/* SINGLE PACKAGE */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_package">
                <div className="pack_thumb">
                  <img src="assets/images/pk3.jpg" alt="" />
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
                      <a href="single-pack.html">France Stunning Places</a>
                    </h2>
                    <span>Paris, France</span>
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
            {/* SINGLE PACKAGE */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_package">
                <div className="pack_thumb">
                  <img src="assets/images/pk1.jpg" alt="" />
                  <div className="package_price">
                    <span>$740</span>
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
            {/* SINGLE PACKAGE */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_package">
                <div className="pack_thumb">
                  <img src="assets/images/pk2.jpg" alt="" />
                  <div className="package_price">
                    <span>$740</span>
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
          </div>
        </div>
      </div>

      <div className="count_down_area" id="countdown">
        <div className="container">
          <div className="row ">
            <div className="col-lg-9 col-md-9">
              <div className="count_down_title">
                <h2>
                  On Going Limited <span>Time Offer</span>
                </h2>
                <h1>Discount 10-30% Off</h1>
              </div>
              <div className="counterdowns">
                <div className="counter">
                  <div className="timer">
                    <div className="autob" data-countdown="2024/12/19">
                      <span className="cdowns days">
                        <span className="time-counts">0</span> <p>Days</p>
                      </span>{" "}
                      <span className="cdowns hour">
                        <span className="time-counts">0</span> <p>Hour</p>
                      </span>{" "}
                      <span className="cdowns minutes">
                        <span className="time-counts">00</span> <p>Min</p>
                      </span>{" "}
                      <span className="cdowns second">
                        {" "}
                        <span>
                          <span className="time-counts">00</span> <p>Sec</p>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 ">
              <div className="count_down_btn">
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top_destination_area">
        <div className="container">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title  t_center">
                {/* title */}
                <h2>
                  Top <span> Destinations</span>
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
              <div className="row">
                <div className="destination_curousel owl-carousel curosel-style owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-1940px, 0px, 0px)",
                        transition: "all",
                        width: 5820,
                      }}
                    >
                      <div className="owl-item cloned" style={{ width: 970 }}>
                        <div className="col-md-12">
                          <div className="single_destination">
                            <div className="destination_thumb">
                              <img src="assets/images/dest1.jpg" alt="" />
                            </div>
                            <div className="destination_content">
                              <h1>FC Barselona</h1>
                              <h2>Spain</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim on veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                extra one Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                commodo consequat awesome dolore porem.
                              </p>
                              <div className="destination_button">
                                <a href="#">More Details</a>
                                <a className="active" href="#">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item cloned" style={{ width: 970 }}>
                        <div className="col-md-12">
                          <div className="single_destination">
                            <div className="destination_thumb">
                              <img src="assets/images/dest2.jpg" alt="" />
                            </div>
                            <div className="destination_content">
                              <h1>Bocka Juniors</h1>
                              <h2>Argentina</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim on veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                extra one Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                commodo consequat awesome dolore porem.
                              </p>
                              <div className="destination_button">
                                <a href="#">More Details</a>
                                <a className="active" href="#">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item active" style={{ width: 970 }}>
                        <div className="col-md-12">
                          <div className="single_destination">
                            <div className="destination_thumb">
                              <img src="assets/images/dest1.jpg" alt="" />
                            </div>
                            <div className="destination_content">
                              <h1>FC Barselona</h1>
                              <h2>Spain</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim on veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                extra one Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                commodo consequat awesome dolore porem.
                              </p>
                              <div className="destination_button">
                                <a href="#">More Details</a>
                                <a className="active" href="#">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: 970 }}>
                        <div className="col-md-12">
                          <div className="single_destination">
                            <div className="destination_thumb">
                              <img src="assets/images/dest2.jpg" alt="" />
                            </div>
                            <div className="destination_content">
                              <h1>Bocka Juniors</h1>
                              <h2>Argentina</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim on veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                extra one Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                commodo consequat awesome dolore porem.
                              </p>
                              <div className="destination_button">
                                <a href="#">More Details</a>
                                <a className="active" href="#">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item cloned" style={{ width: 970 }}>
                        <div className="col-md-12">
                          <div className="single_destination">
                            <div className="destination_thumb">
                              <img src="assets/images/dest1.jpg" alt="" />
                            </div>
                            <div className="destination_content">
                              <h1>FC Barselona</h1>
                              <h2>Spain</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim on veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                extra one Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                commodo consequat awesome dolore porem.
                              </p>
                              <div className="destination_button">
                                <a href="#">More Details</a>
                                <a className="active" href="#">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item cloned" style={{ width: 970 }}>
                        <div className="col-md-12">
                          <div className="single_destination">
                            <div className="destination_thumb">
                              <img src="assets/images/dest2.jpg" alt="" />
                            </div>
                            <div className="destination_content">
                              <h1>Bocka Juniors</h1>
                              <h2>Argentina</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim on veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                extra one Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                commodo consequat awesome dolore porem.
                              </p>
                              <div className="destination_button">
                                <a href="#">More Details</a>
                                <a className="active" href="#">
                                  Book Now
                                </a>
                              </div>
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

      <div className="feature_area_head">
        <div className="container">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title  t_center white_color">
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
        </div>
      </div>

      <div className="feature_area_main">
        <div className="container">
          <div className="row main_feature">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="feature-curousel owl-carousel curosel-style owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-969px, 0px, 0px)",
                        transition: "all",
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

      <div className="portfolio_area" id="gallery">
        <div className="container-fluid">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title t_center">
                {/* title */}
                <h2>
                  Most Incredible <span> Places</span>
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
              <div className="row">
                <div className="gallery_curosel owl-carousel curosel-style owl-loaded owl-drag">
                  {/* START SINGLE PORTFOLIO  */}
                  {/* START SINGLE PORTFOLIO  */}
                  {/* START SINGLE PORTFOLIO  */}
                  {/* START SINGLE PORTFOLIO  */}
                  {/* START SINGLE PORTFOLIO  */}
                  {/* START SINGLE PORTFOLIO  */}
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-1000px, 0px, 0px)",
                        transition: "all",
                        width: 3503,
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "250.167px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_portfolio">
                            <div className="single_portfolio_thumb">
                              <a href="single-portfolio.html">
                                <img src="assets/images/3.jpg" alt="" />
                              </a>
                              <div className="port_icon">
                                <a
                                  className="portfolio-icon venobox vbox-item"
                                  data-gall="myportfolio"
                                  href="assets/images/3.jpg"
                                >
                                  <i className="fa-regular fa-image" />
                                </a>
                                <a href="hotel.html">
                                  <i className="fa fa-link" />
                                </a>
                              </div>
                            </div>
                            <div className="portfolio_content">
                              <h2>
                                Place: <span>Juventus, Italy</span>
                              </h2>
                              <p>
                                Captured By: <span>Anowar</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "250.167px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_portfolio">
                            <div className="single_portfolio_thumb">
                              <a href="single-portfolio.html">
                                <img src="assets/images/4.jpg" alt="" />
                              </a>
                              <div className="port_icon">
                                <a
                                  className="portfolio-icon venobox vbox-item"
                                  data-gall="myportfolio"
                                  href="assets/images/4.jpg"
                                >
                                  <i className="fa-regular fa-image" />
                                </a>
                                <a href="hotel.html">
                                  <i className="fa fa-link" />
                                </a>
                              </div>
                            </div>
                            <div className="portfolio_content">
                              <h2>
                                Place: <span>Barselona, Spain</span>
                              </h2>
                              <p>
                                Captured By: <span>Anowar</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "250.167px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_portfolio">
                            <div className="single_portfolio_thumb">
                              <a href="single-portfolio.html">
                                <img src="assets/images/5.jpg" alt="" />
                              </a>
                              <div className="port_icon">
                                <a
                                  className="portfolio-icon venobox vbox-item"
                                  data-gall="myportfolio"
                                  href="assets/images/5.jpg"
                                >
                                  <i className="fa-regular fa-image" />
                                </a>
                                <a href="hotel.html">
                                  <i className="fa fa-link" />
                                </a>
                              </div>
                            </div>
                            <div className="portfolio_content">
                              <h2>
                                Place: <span>Man City, England</span>
                              </h2>
                              <p>
                                Captured By: <span>Anowar</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "250.167px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_portfolio">
                            <div className="single_portfolio_thumb">
                              <a href="single-portfolio.html">
                                <img src="assets/images/1.jpg" alt="" />
                              </a>
                              <div className="port_icon">
                                <a
                                  className="portfolio-icon venobox vbox-item"
                                  data-gall="myportfolio"
                                  href="assets/images/1.jpg"
                                >
                                  <i className="fa-regular fa-image" />
                                </a>
                                <a href="hotel.html">
                                  <i className="fa fa-link" />
                                </a>
                              </div>
                            </div>
                            <div className="portfolio_content">
                              <h2>
                                Place: <span>Barselona, Spain</span>
                              </h2>
                              <p>
                                Captured By: <span>Anowar</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "250.167px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_portfolio">
                            <div className="single_portfolio_thumb">
                              <a href="single-portfolio.html">
                                <img src="assets/images/1.jpg" alt="" />
                              </a>
                              <div className="port_icon">
                                <a
                                  className="portfolio-icon venobox vbox-item"
                                  data-gall="myportfolio"
                                  href="assets/images/1.jpg"
                                >
                                  <i className="fa-regular fa-image" />
                                </a>
                                <a href="hotel.html">
                                  <i className="fa fa-link" />
                                </a>
                              </div>
                            </div>
                            <div className="portfolio_content">
                              <h2>
                                Place: <span>Barselona, Spain</span>
                              </h2>
                              <p>
                                Captured By: <span>Anowar</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "250.167px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_portfolio">
                            <div className="single_portfolio_thumb">
                              <a href="single-portfolio.html">
                                <img src="assets/images/2.jpg" alt="" />
                              </a>
                              <div className="port_icon">
                                <a
                                  className="portfolio-icon venobox vbox-item"
                                  data-gall="myportfolio"
                                  href="assets/images/2.jpg"
                                >
                                  <i className="fa-regular fa-image" />
                                </a>
                                <a href="hotel.html">
                                  <i className="fa fa-link" />
                                </a>
                              </div>
                            </div>
                            <div className="portfolio_content">
                              <h2>
                                Place: <span>Read Madrid, Spain</span>
                              </h2>
                              <p>
                                Captured By: <span>Hossain Khan</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "250.167px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_portfolio">
                            <div className="single_portfolio_thumb">
                              <a href="single-portfolio.html">
                                <img src="assets/images/3.jpg" alt="" />
                              </a>
                              <div className="port_icon">
                                <a
                                  className="portfolio-icon venobox vbox-item"
                                  data-gall="myportfolio"
                                  href="assets/images/3.jpg"
                                >
                                  <i className="fa-regular fa-image" />
                                </a>
                                <a href="hotel.html">
                                  <i className="fa fa-link" />
                                </a>
                              </div>
                            </div>
                            <div className="portfolio_content">
                              <h2>
                                Place: <span>Juventus, Italy</span>
                              </h2>
                              <p>
                                Captured By: <span>Anowar</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "250.167px" }}
                      >
                        <div className="col-md-12">
                          <div className="single_portfolio">
                            <div className="single_portfolio_thumb">
                              <a href="single-portfolio.html">
                                <img src="assets/images/4.jpg" alt="" />
                              </a>
                              <div className="port_icon">
                                <a
                                  className="portfolio-icon venobox vbox-item"
                                  data-gall="myportfolio"
                                  href="assets/images/4.jpg"
                                >
                                  <i className="fa-regular fa-image" />
                                </a>
                                <a href="hotel.html">
                                  <i className="fa fa-link" />
                                </a>
                              </div>
                            </div>
                            <div className="portfolio_content">
                              <h2>
                                Place: <span>Barselona, Spain</span>
                              </h2>
                              <p>
                                Captured By: <span>Anowar</span>
                              </p>
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

      <div className="blog_area" id="blog">
        <div className="container">
          <div className="row">
            {/* area section title*/}
            <div className="col-md-12">
              <div className="section-title  t_center">
                {/* title */}
                <h2>
                  Latest Blog <span> Post</span>
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
            {/* blog owl carousel */}
            <div className="blog_carousel owl-carousel curosel-style owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transition: "all",
                    width: 1617,
                  }}
                >
                  <div
                    className="owl-item active"
                    style={{ width: "323.333px" }}
                  >
                    <div className="col-md-12">
                      {/* tourist SINGLE BLOG */}
                      <div className="tourist-single-blog ">
                        {/* BLOG THUMB */}
                        <div className="blog_thumb_inner">
                          <div className="tourist-blog-thumb ">
                            <a href="blog-details.html">
                              <img src="assets/images/blog1.jpg" alt="blog1" />
                            </a>
                          </div>
                        </div>
                        <div className="em-blog-content-area ">
                          {/* BLOG META */}
                          <div className="tourist-blog-meta">
                            <div className="tourist-blog-meta-left">
                              <span>
                                <i className="fa fa-calendar" />
                                January 3, 2024{" "}
                              </span>
                              <a href="#">
                                <span>
                                  <i className="fa fa-user" />
                                  tourist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                          {/* BLOG TITLE */}
                          <div className="blog-page-title ">
                            <h2>
                              <a href="blog-details.html">
                                Earn Money Online From Awesome Online Market
                              </a>
                            </h2>
                          </div>
                          <div className="blog_btn">
                            <a href="#">Learn More</a>
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
                      {/* tourist SINGLE BLOG */}
                      <div className="tourist-single-blog ">
                        {/* BLOG THUMB */}
                        <div className="blog_thumb_inner">
                          <div className="tourist-blog-thumb ">
                            <a href="blog-details.html">
                              <img src="assets/images/blog2.jpg" alt="blog2" />
                            </a>
                          </div>
                        </div>
                        <div className="em-blog-content-area ">
                          {/* BLOG META */}
                          <div className="tourist-blog-meta">
                            <div className="tourist-blog-meta-left">
                              <span>
                                <i className="fa fa-calendar" />
                                January 7, 2024{" "}
                              </span>
                              <a href="#">
                                <span>
                                  <i className="fa fa-user" />
                                  tourist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                          {/* BLOG TITLE */}
                          <div className="blog-page-title ">
                            <h2>
                              <a href="blog-details.html">
                                Grow Your Business Creative Business Preparation
                              </a>
                            </h2>
                          </div>
                          <div className="blog_btn">
                            <a href="#">Learn More</a>
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
                      {/* tourist SINGLE BLOG */}
                      <div className="tourist-single-blog ">
                        {/* BLOG THUMB */}
                        <div className="blog_thumb_inner">
                          <div className="tourist-blog-thumb ">
                            <a href="blog-details.html">
                              <img src="assets/images/blog3.jpg" alt="blog3" />
                            </a>
                          </div>
                        </div>
                        <div className="em-blog-content-area ">
                          {/* BLOG META */}
                          <div className="tourist-blog-meta">
                            <div className="tourist-blog-meta-left">
                              <span>
                                <i className="fa fa-calendar" />
                                September 14, 2024{" "}
                              </span>
                              <a href="#">
                                <span>
                                  <i className="fa fa-user" />
                                  tourist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                          {/* BLOG TITLE */}
                          <div className="blog-page-title ">
                            <h2>
                              <a href="blog-details.html">
                                Our Awesome Corporate Creative Communication
                              </a>
                            </h2>
                          </div>
                          <div className="blog_btn">
                            <a href="#">Learn More</a>
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
                      {/* tourist SINGLE BLOG */}
                      <div className="tourist-single-blog ">
                        {/* BLOG THUMB */}
                        <div className="blog_thumb_inner">
                          <div className="tourist-blog-thumb ">
                            <a href="blog-details.html">
                              <img src="assets/images/blog4.jpg" alt="blog4" />
                            </a>
                          </div>
                        </div>
                        <div className="em-blog-content-area ">
                          {/* BLOG META */}
                          <div className="tourist-blog-meta">
                            <div className="tourist-blog-meta-left">
                              <span>
                                <i className="fa fa-calendar" />
                                December 7, 2024{" "}
                              </span>
                              <a href="#">
                                <span>
                                  <i className="fa fa-user" />
                                  tourist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                          {/* BLOG TITLE */}
                          <div className="blog-page-title ">
                            <h2>
                              <a href="blog-details.html">
                                Top Ten Freelancing
                              </a>
                            </h2>
                          </div>
                          <div className="blog_btn">
                            <a href="#">Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "323.333px" }}>
                    <div className="col-md-12">
                      {/* tourist SINGLE BLOG */}
                      <div className="tourist-single-blog ">
                        {/* BLOG THUMB */}
                        <div className="blog_thumb_inner">
                          <div className="tourist-blog-thumb ">
                            <a href="blog-details.html">
                              <img src="assets/images/blog1.jpg" alt="blog1" />
                            </a>
                          </div>
                        </div>
                        <div className="em-blog-content-area ">
                          {/* BLOG META */}
                          <div className="tourist-blog-meta">
                            <div className="tourist-blog-meta-left">
                              <span>
                                <i className="fa fa-calendar" />
                                November 1, 2024{" "}
                              </span>
                              <span>
                                <i className="fa fa-user" />
                                tourist{" "}
                              </span>
                            </div>
                          </div>
                          {/* BLOG TITLE */}
                          <div className="blog-page-title ">
                            <h2>
                              <a href="blog-details.html">
                                Theme Selling Website
                              </a>
                            </h2>
                          </div>
                          <div className="blog_btn">
                            <a href="#">Learn More</a>
                          </div>
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
              <div className="owl-dots disabled" />
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
}

export default Home;
