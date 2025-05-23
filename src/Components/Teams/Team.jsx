import React from "react";
import teamCSS from "./Team.module.css";

import Team1 from "./../../assets/team1.png";
import Team2 from "./../../assets/team2.png";
import Team3 from "./../../assets/team3.png";

import star from "./../../assets/star.png";

function Team() {
  return (
    <div className={teamCSS.teamWrapper} id="team">
      <div className={teamCSS.anim_text}>
        <div>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
          <h3>
            Meet Our Chefs
            <img src={star} alt="" />
          </h3>
        </div>
      </div>

      <h1 className="section_title">
        Our Talented <br /> Culinary Team
        <img src={star} alt="" />
      </h1>

      <div className={teamCSS.Teams_Cards}>
        <div className={teamCSS.card}>
          <img src={Team1} alt="Team Member" />
          <h3>John Doe</h3>
          <p>Head Chef</p>
        </div>
        <div className={teamCSS.card}>
          <img src={Team3} alt="Team Member" />
          <h3>Mark Taylor</h3>
          <p>Pastry Chef</p>
        </div>
        <div className={teamCSS.card}>
          <img src={Team2} alt="Team Member" />
          <h3>Jack Taylor</h3>
          <p>Sous Chef</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
