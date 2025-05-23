import React from "react";
import projectCSS from "./../Project/Project.module.css";
import star from "./../../assets/star.png";
import project1 from "./../../assets/dish.jpg";
import project2 from "./../../assets/dish.jpg";
import project3 from "./../../assets/dish.jpg";
import project4 from "./../../assets/dish.jpg";
import project5 from "./../../assets/dish.jpg";

function Project() {
  return (
    <div className={`${projectCSS.projectWrapper} section`} id="project">
      <h1 className="section_title">
        Explore Our <br /> Signature Dishes
        <img src={star} alt="" />
      </h1>

      <div className={projectCSS.projectContainer}>
        <div className={projectCSS.projectCard}>
          <img src={project1} alt="" />
          <h3>Project 1</h3>
          <button>View Now</button>
        </div>
        <div className={projectCSS.projectCard}>
          <img src={project2} alt="" />
          <h3>Project 2</h3>
          <button>View Now</button>
        </div>
        <div className={projectCSS.projectCard}>
          <img src={project3} alt="" />
          <h3>Project 3</h3>
          <button>View Now</button>
        </div>
        <div className={projectCSS.projectCard}>
          <img src={project4} alt="" />
          <h3>Project 4</h3>
          <button>View Now</button>
        </div>
        <div className={projectCSS.projectCard}>
          <img src={project5} alt="" />
          <h3>Project 5</h3>
          <button>View Now</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
