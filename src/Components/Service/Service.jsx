import React from "react";
import restaurantCSS from "./Service.module.css";

import star from "./../../assets/star.png";
import imgArrow from "./../../assets/arrow-right.svg";
import restaurantBg from "./../../assets/returant-bg.jpg";

function Restaurant() {
  return (
    <div className={`${restaurantCSS.ServiceWrapper} section`} id="restaurant">
      <h1 className="section_title">
        Welcome to Our <br /> Exquisite Restaurant
        <img src={star} alt="" />
      </h1>

      <div className={restaurantCSS.serviceCards}>
        <div className={restaurantCSS.serviceCard}>
          <i className="ri-restaurant-line"></i>
          <h2>Gourmet Cuisine</h2>
          <p>
            Experience a diverse menu crafted with passion by our expert chefs.
          </p>
          <img src={imgArrow} alt="" />
        </div>
        <div className={restaurantCSS.serviceCard}>
          <i className="ri-cake-line"></i>
          <h2>Delicious Desserts</h2>
          <p>Indulge in our freshly made, decadent sweet treats.</p>
          <img src={imgArrow} alt="" />
        </div>
        <div className={restaurantCSS.serviceCard}>
          <i className="ri-cup-line"></i>
          <h2>Signature Beverages</h2>
          <p>
            Refresh yourself with our handcrafted cocktails, wines, and drinks.
          </p>
          <img src={imgArrow} alt="" />
        </div>
        <div className={restaurantCSS.serviceCard}>
          <i className="ri-bowl-line"></i>
          <h2>Cozy Ambiance</h2>
          <p>
            Enjoy a warm and welcoming atmosphere, perfect for any occasion.
          </p>
          <img src={imgArrow} alt="" />
        </div>
      </div>

      <div className={restaurantCSS.Title}>
        <h3>
          Elevating Your Dining <img src={star} alt="" />
          <br /> Experience
        </h3>

        <p>
          From fresh ingredients to an inviting atmosphere, we ensure an
          unforgettable dining journey.
        </p>
      </div>

      <div className={restaurantCSS.service_bottom_container}>
        <div className={restaurantCSS.restaurantImg}>
          <img src={restaurantBg} alt="" />
        </div>
        <div className={restaurantCSS.service_contentWrapper}>
          <div className={restaurantCSS.content}>
            <h2>20+</h2>
            <p>Years of Culinary Excellence</p>
          </div>
          <div className={restaurantCSS.content}>
            <h2>500+</h2>
            <p>Satisfied Guests Daily</p>
          </div>
          <div className={restaurantCSS.content}>
            <h2>100%</h2>
            <p>Fresh & Organic Ingredients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
