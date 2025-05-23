import React from "react";
import headerCSS from "./../Header/Header.module.css";

import star from "./../../assets/star.png";
import chef1 from "./../../assets/chef-1.jpg";
import chef2 from "./../../assets/chef-1.jpg";
import chef3 from "./../../assets/chef-1.jpg";
import headerIMG from "./../../assets/resturant.jpeg";
import arrow from "./../../assets/arrow.png";

function Header() {
  return (
    <div className={`${headerCSS.headerWrapper} section`}>
      <div className={headerCSS.content}>
        <h1>
          Welcome to
          <img src={star} alt="star icon" /> <br />
          <br /> Gourmet Delight
        </h1>

        <p>
          Experience the finest culinary creations crafted with passion and the
          freshest ingredients. Indulge in a dining experience like no other.
        </p>

        <div className={headerCSS.profiles}>
          <div className={headerCSS.img}>
            <img src={chef1} alt="Chef 1" />
            <img src={chef2} alt="Chef 2" />
            <img src={chef3} alt="Chef 3" />
          </div>

          <p>
            Meet our world-class chefs dedicated to bringing you exquisite
            flavors.
          </p>
        </div>

        <button>Reserve a Table</button>

        
      </div>
      <div className={headerCSS.headerIMG}>
        <img src={headerIMG} alt="Restaurant Interior" />
      </div>
    </div>
  );
}

export default Header;
