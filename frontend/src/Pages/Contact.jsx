import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "./include/PageTitle";

const Contact = ({ title }) => {
  return (
    <div>
      <Helmet>{title}</Helmet>
      <PageTitle title={title} />

      <div className="contact_area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="contact_form">
                <h2 className="contact-title">Contact</h2>
                <form
                  action="https://formspree.io/f/myyleorq"
                  method="POST"
                  id="dreamit-form"
                >
                  <div className="form_field">
                    <div className="form_field_inner">
                      <input type="text" name="name" placeholder="Your Email" />
                    </div>
                    <div className="form_field_inner">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                  </div>
                  <div className="form_field">
                    <div className="form_field_inner">
                      <input type="text" name="name" placeholder="Website" />
                    </div>
                    <div className="form_field_inner">
                      <input
                        type="text"
                        name="name"
                        placeholder="Phone Number"
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
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="company_info">
                <h2 className="contact-title2">Our Office</h2>
                <div className="single_company_info">
                  <div className="company_info_icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="company_info_content">
                    <h5>Location</h5>
                    <p>
                      PO Box 16122, Collins Street West, Victoria 8007, NewYork,
                      USA
                    </p>
                  </div>
                </div>
                <div className="single_company_info">
                  <div className="company_info_icon">
                    <i className="fa fa-phone-square" />
                  </div>
                  <div className="company_info_content">
                    <h5>Phone</h5>
                    <p>Mobail: +33 694 445 25 , Fox: 12548566544</p>
                  </div>
                </div>
                <div className="single_company_info">
                  <div className="company_info_icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="company_info_content">
                    <h5>Gmail</h5>
                    <p>grant@example.com , demo@example.com</p>
                  </div>
                </div>
                <div className="single_company_info">
                  <div className="company_info_icon">
                    <i className="fa fa-globe" />
                  </div>
                  <div className="company_info_content">
                    <h5>Website</h5>
                    <p>www.consultant.com, www.raytheme.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="google_map_area">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="google_map_area">
          <iframe className="map" src="https://snazzymaps.com/embed/65241" />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Contact;
