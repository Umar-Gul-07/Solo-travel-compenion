import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "./include/PageTitle";

const Blogs = ({ title }) => {
  return (
    <div>
      <Helmet> {title}</Helmet>
      <PageTitle title={title} />
      <div className="blog_area blog-grid" id="blog">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4 col-md-4 col-sm-5 col-xs-12 sidebar-right content-widget pdsr">
              <div className="blog-left-side widget">
                <div id="search-3" className="widget widget_search">
                  <div className="search">
                    <form action="#" method="get">
                      <input
                        type="text"
                        name="s"
                        defaultValue=""
                        placeholder="Type Your Keyword"
                        title="Search for:"
                      />
                      <button type="submit" className="icons">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  id="em_recent_post_widget-8"
                  className="widget widget_recent_data"
                >
                  <div className="single-widget-item">
                    <h2 className="widget-title">Popular Post</h2>
                    <div className="recent-post-item">
                      <div className="recent-post-image">
                        <a href="#">
                          <img
                            width={100}
                            height={80}
                            src="assets/images/recent1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="recent-post-text">
                        <h4>
                          <a href="#">3 Ways to Transform Your Blog Into</a>
                        </h4>
                        <span className="rcomment">October 16, 2024</span>
                      </div>
                    </div>
                    <div className="recent-post-item">
                      <div className="recent-post-image">
                        <a href="#">
                          <img
                            width={100}
                            height={80}
                            src="assets/images/recent2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="recent-post-text">
                        <h4>
                          <a href="#">How Important Is Design To Business.</a>
                        </h4>
                        <span className="rcomment">October 16, 2024</span>
                      </div>
                    </div>
                    <div className="recent-post-item">
                      <div className="recent-post-image">
                        <a href="#">
                          <img
                            width={100}
                            height={80}
                            src="assets/images/recent3.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="recent-post-text">
                        <h4>
                          <a href="#">
                            Your Small Business Web Design Solution.
                          </a>
                        </h4>
                        <span className="rcomment">October 16, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="categories-3" className="widget widget_categories">
                  <h2 className="widget-title">Categories</h2>
                  <ul>
                    <li className="cat-item cat-item-8">
                      <a href="#/">Bridge Calbart</a>
                    </li>
                    <li className="cat-item cat-item-10">
                      <a href="#">Corporate building</a>
                    </li>
                    <li className="cat-item cat-item-9">
                      <a href="#">Corporate Office</a>
                    </li>
                    <li className="cat-item cat-item-11">
                      <a href="#">Road Map</a>
                    </li>
                  </ul>
                </div>
                <div id="text-4" className="widget widget_text">
                  <h2 className="widget-title">Instagram</h2>
                  <div className="textwidget">
                    <div
                      id="sb_instagram"
                      className="sbi sbi_disable_mobile sbi_col_3 sbi_small"
                      style={{ width: "100%" }}
                      data-id={6711435208}
                      data-num={6}
                      data-res="auto"
                      data-cols={3}
                      data-options='{"sortby": "none", "showbio": "false", "headercolor": "", "imagepadding": "5"}'
                      data-sbi-index={0}
                    >
                      <div id="sbi_images" style={{ padding: 5 }}>
                        <div className="sbi_item sbi_type_image">
                          <div className="sbi_photo_wrap">
                            <a className="sbi_photo" href="#">
                              <img
                                src="assets/images/n.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="sbi_item sbi_type_image">
                          <div className="sbi_photo_wrap">
                            <a className="sbi_photo" href="#">
                              <img
                                src="assets/images/n1.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="sbi_item sbi_type_image">
                          <div className="sbi_photo_wrap">
                            <a className="sbi_photo" href="#">
                              <img
                                src="assets/images/n2.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="sbi_item sbi_type_image">
                          <div className="sbi_photo_wrap">
                            <a className="sbi_photo" href="#">
                              <img
                                src="assets/images/n3.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="sbi_item sbi_type_image">
                          <div className="sbi_photo_wrap">
                            <a className="sbi_photo" href="#">
                              <img
                                src="assets/images/n4.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="sbi_item sbi_type_image">
                          <div className="sbi_photo_wrap">
                            <a className="sbi_photo" href="#">
                              <img
                                src="assets/images/n5.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="archives-3" className="widget widget_archive">
                  <h2 className="widget-title">Archives</h2>
                  <ul>
                    <li>
                      <a href="#">21 October 2024</a>
                    </li>
                    <li>
                      <a href="#">10 February 2024</a>
                    </li>
                  </ul>
                </div>
                <div id="tags" className="widget tagcloud">
                  <h2 className="widget-title">Archives</h2>
                  <a href="#">Event</a>
                  <a href="#">Food</a>
                  <a href="#">Water</a>
                  <a href="#">Glass</a>
                  <a href="#">Ciramic</a>
                  <a href="#">Plastic</a>
                  <a href="#">Polite</a>
                  <a href="#">Modern</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
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
                            Earn Money Online Frome Awesome Online Market
                          </a>
                        </h2>
                      </div>
                      <div className="blog_btn">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  {/* tourist SINGLE BLOG */}
                  <div className="tourist-single-blog ">
                    {/* BLOG THUMB */}
                    <div className="blog_thumb_inner">
                      <div className="tourist-blog-thumb ">
                        <a href="blog-details.html">
                          <img src="assets/images/blog2.jpg" alt="blog1" />
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
                            Grow Your Business Creative Business Prepration
                          </a>
                        </h2>
                      </div>
                      <div className="blog_btn">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
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
                            Nobember 1, 2024{" "}
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
                          <a href="blog-details.html">Theme Selling Website</a>
                        </h2>
                      </div>
                      <div className="blog_btn">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  {/* tourist SINGLE BLOG */}
                  <div className="tourist-single-blog ">
                    {/* BLOG THUMB */}
                    <div className="blog_thumb_inner">
                      <div className="tourist-blog-thumb ">
                        <a href="blog-details.html">
                          <img src="assets/images/blog3.jpg" alt="blog1" />
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
                            Our Awesome Corporat Creative Communication
                          </a>
                        </h2>
                      </div>
                      <div className="blog_btn">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  {/* tourist SINGLE BLOG */}
                  <div className="tourist-single-blog ">
                    {/* BLOG THUMB */}
                    <div className="blog_thumb_inner">
                      <div className="tourist-blog-thumb ">
                        <a href="blog-details.html">
                          <img src="assets/images/blog4.jpg" alt="blog1" />
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
                          <a href="blog-details.html">Top Ten Freelancing</a>
                        </h2>
                      </div>
                      <div className="blog_btn">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  {/* tourist SINGLE BLOG */}
                  <div className="tourist-single-blog ">
                    {/* BLOG THUMB */}
                    <div className="blog_thumb_inner">
                      <div className="tourist-blog-thumb ">
                        <a href="blog-details.html">
                          <img src="assets/images/blog2.jpg" alt="blog1" />
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
                            Grow Your Business Creative Business Prepration
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
              {/* start pagination */}
              <div className="row">
                <div className="col-md-12">
                  <div className="paginations">
                    <ul className="page-numbers">
                      <li>
                        <span
                          aria-current="page"
                          className="page-numbers current"
                        >
                          1
                        </span>
                      </li>
                      <li>
                        <a className="page-numbers" href="#">
                          2
                        </a>
                      </li>
                      <li>
                        <a className="next page-numbers" href="#">
                          <i className="fa fa-long-arrow-right" />
                        </a>
                      </li>
                    </ul>
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

export default Blogs;
