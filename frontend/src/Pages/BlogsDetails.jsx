import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "./include/PageTitle";

const BlogsDetails = ({ title }) => {
  return (
    <div>
      <Helmet> {title}</Helmet>
      <PageTitle title={title} />

      <div className="blog_area blog-grid blog-details-area" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog_details">
                    <div className="blog_dtl_thumb">
                      <img src="assets/images/service2.jpg" alt="" />
                    </div>
                    <div className="blog_dtl_content">
                      <h2>Election The Most Important</h2>
                      {/* BLOG META */}
                      <div className="tourist-blog-meta">
                        <div className="tourist-blog-meta-left">
                          <span>
                            <i className="fa fa-calendar" />
                            10 Mar 2024{" "}
                          </span>
                          <span>
                            <i className="fa fa-comments-o" />
                            20 Comments{" "}
                          </span>
                        </div>
                        <div className="tourist-blog-meta-right">
                          <span>
                            <i className="fa fa-thumbs-up" />
                            14
                          </span>
                        </div>
                      </div>
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
                      <h3>Election Day Is Coming</h3>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical on
                        Latin literature from 45 BC, making it over 2000 years
                        old. Richard McClintock, a Latin professor at thes
                        Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites
                      </p>
                      <blockquote>
                        Richard McClintock, a Latin professor at thes
                        Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites dorem awesme
                        loren very creative{" "}
                        <p className="signatures">Mr. Adam Jone</p>{" "}
                      </blockquote>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical on
                        Latin literature from 45 BC, making it over 2000 years
                        old. Richard McClintock, a Latin professor at thes
                        Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  {/* BLOG COMMENTST SECTION */}
                  <div className="blog_comments_section">
                    <div className="comments_ttl">
                      <h3>3 Comments</h3>
                    </div>
                    {/* Single Comments */}
                    <div className="single_comments">
                      <div className="comments_thumb">
                        <img src="assets/images/18.jpg" alt="" />
                      </div>
                      <div className="commentst_content">
                        <div className="post_meta">
                          <span className="badmin">John Dome</span>
                          <span className="badmin">
                            <i className="fa fa-clock-o" /> Jan 06 2024
                          </span>
                          <a href="#">
                            <span className="commentst_meta_reply">
                              <i className="fa fa-reply" />
                              Reply
                            </span>
                          </a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolor magna ali Ut enim ad minim veniam, quis nostrud
                          exercitation .
                        </p>
                      </div>
                      {/* Single Comments Inner */}
                      <div className="single_commentst_inner">
                        <div className="comments_thumb">
                          <img src="assets/images/19.jpg" alt="" />
                        </div>
                        <div className="commentst_content">
                          <div className="post_meta">
                            <span className="badmin">John Dome</span>
                            <span className="badmin">
                              <i className="fa fa-clock-o" /> Jan 06 2024
                            </span>
                            <a href="#">
                              <span className="commentst_meta_reply">
                                <i className="fa fa-reply" />
                                Reply
                              </span>
                            </a>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor magna ali Ut enim ad minim veniam, quis
                            nostrud exercitation .
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Single Comments */}
                    <div className="single_comments">
                      <div className="comments_thumb">
                        <img src="assets/images/20.jpg" alt="" />
                      </div>
                      <div className="commentst_content">
                        <div className="post_meta">
                          <span className="badmin">John Dome</span>
                          <span className="badmin">
                            <i className="fa fa-clock-o" /> Jan 06 2024
                          </span>
                          <a href="#">
                            <span className="commentst_meta_reply">
                              <i className="fa fa-reply" />
                              Reply
                            </span>
                          </a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolor magna ali Ut enim ad minim veniam, quis nostrud
                          exercitation .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="blog_reply">
                    <div className="reply_ttl">
                      <h3>Leave A Comments</h3>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="contact_form">
                          <form
                            action="https://formspree.io/f/myyleorq"
                            method="POST"
                            id="dreamit-form"
                          >
                            <div className="form_field">
                              <div className="form_field_inner">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Name"
                                />
                              </div>
                              <div className="form_field_inner">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="E-Mail"
                                />
                              </div>
                            </div>
                            <div className="form_field">
                              <div className="form_field_inner">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Subject"
                                />
                              </div>
                              <div className="form_field_inner">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Number"
                                />
                              </div>
                            </div>
                            <div className="form_field text_area">
                              <div className="form_field_inner">
                                <textarea
                                  name="textarea"
                                  placeholder="Message...."
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="form_field">
                              <div className="contact_button">
                                <button name="submit">Send Message</button>
                              </div>
                            </div>
                          </form>
                          <div id="status" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  id="em_recent_post_widget-7"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
