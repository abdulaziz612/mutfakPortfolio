import React from "react";
import contactCSS from "./../Contact/Contact.module.css";
import star from "./../../assets/star.png";
import arrow from "./../../assets/arrow.png";

function Contact() {
  return (
    <div className={`${contactCSS.contactWrapper} section`} id="contact">
      <div className={contactCSS.Content}>
        <h1 className="section_title">
          Book a Table <br /> With Us
          <img src={star} alt="" />
        </h1>

        <p>
          Enjoy a fine dining experience at our restaurant. Reserve your table
          now and let us serve you delicious meals in a cozy ambiance.
        </p>

        <div className={contactCSS.socialWrapper}>
          <div className={contactCSS.detail}>
            <p>
              Call for Reservation <span>+63 126597878</span>
            </p>
            <p>
              Email Us <span>reservations@restaurant.com</span>
            </p>
          </div>
          <div className={contactCSS.social}>
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-youtube-line"></i>
            <i className="ri-github-line"></i>
          </div>

          <img src={arrow} alt="" id={contactCSS.arrow} />
        </div>
      </div>
      <div className={contactCSS.form}>
        <h2>Reserve Your Table</h2>

        <div className={contactCSS.inputWrapper}>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className={contactCSS.inputWrapper}>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className={contactCSS.inputWrapper}>
          <input type="text" placeholder="Number of Guests" />
        </div>

        <textarea placeholder="Special Requests"></textarea>

        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Contact;
