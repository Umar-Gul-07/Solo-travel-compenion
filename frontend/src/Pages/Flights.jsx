import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from './include/PageTitle'

const Flights = ({title}) => {
  return (
    <div>
            <Helmet> {title}</Helmet>
            <PageTitle title={title} />

      <div className="hotel_area">
  <div className="container">
    <div className="row">
      {/* area section title*/}
      <div className="col-md-12">
        <div className="section-title  t_center">
          {/* title */}
          <h2>
            Recomanded <span> Flight</span>
          </h2>
          <i className="fa fa-plane" />
          {/* TEXT */}
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single_hotel_area">
          <div className="single_hotel_thumb">
            <img src="assets/images/hotel1.jpg" alt="" />
          </div>
          <div className="single_hotel_content">
            <h2>Sheraton Hotel</h2>
            <p>
              Start from <span>$49</span>/Per Nights 2 Person
            </p>
            <div className="single_hotel_btn">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* SINGLE PACKAGE */}
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single_hotel_area">
          <div className="single_hotel_thumb">
            <img src="assets/images/hotel2.jpg" alt="" />
          </div>
          <div className="single_hotel_content">
            <h2>Daydream Hotel</h2>
            <p>
              Start from <span>$49</span>/Per Nights 2 Person
            </p>
            <div className="single_hotel_btn">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* SINGLE PACKAGE */}
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single_hotel_area">
          <div className="single_hotel_thumb">
            <img src="assets/images/hotel3.jpg" alt="" />
          </div>
          <div className="single_hotel_content">
            <h2>Scarlet Lagoon Hotel</h2>
            <p>
              Start from <span>$49</span>/Per Nights 2 Person
            </p>
            <div className="single_hotel_btn">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* SINGLE PACKAGE */}
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single_hotel_area">
          <div className="single_hotel_thumb">
            <img src="assets/images/hotel4.jpg" alt="" />
          </div>
          <div className="single_hotel_content">
            <h2>Opera House Hotel</h2>
            <p>
              Start from <span>$49</span>/Per Nights 2 Person
            </p>
            <div className="single_hotel_btn">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* SINGLE PACKAGE */}
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single_hotel_area">
          <div className="single_hotel_thumb">
            <img src="assets/images/hotel5.jpg" alt="" />
          </div>
          <div className="single_hotel_content">
            <h2>Sheraton Hotel</h2>
            <p>
              Start from <span>$49</span>/Per Nights 2 Person
            </p>
            <div className="single_hotel_btn">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* SINGLE PACKAGE */}
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single_hotel_area">
          <div className="single_hotel_thumb">
            <img src="assets/images/hotel6.jpg" alt="" />
          </div>
          <div className="single_hotel_content">
            <h2>Daydream Hotel</h2>
            <p>
              Start from <span>$49</span>/Per Nights 2 Person
            </p>
            <div className="single_hotel_btn">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Flights
