import React, { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";

function Nav() {
  const menu = useRef();
  const nav = useRef();

  const handler = () => {
    menu.current.classList.toggle(navCSS.activeNav);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      nav.current.classList.add(navCSS.activeNav);
    } else {
      nav.current.classList.remove(navCSS.activeNav);
    }
  });

  return (
    <nav className={navCSS.nav} ref={nav}>
      <div className={navCSS.logo}>
        <a href="#">Resturant</a>
      </div>
      <ul ref={menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#testimonial">Testimonals</a>
        </li>
        <li>
          <a href="#teams">Teams</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button>Contact Us</button>
      <i className="ri-menu-2-line" id={navCSS.bars} onClick={handler}></i>
    </nav>
  );
}

export default Nav;
