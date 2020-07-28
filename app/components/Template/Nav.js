import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yinhao He</h2>
        <p>yinhaohe7@gmail.com</p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Yinhao (Charles). I am an aspiring software engineer. I am
        a <a href="https://www.ics.uci.edu/about/">UC, Irvine</a> graduate
        student, major in Computer Science,{" "}
        <a href="http://www.networkedsystems.uci.edu/">(Networked Systems)</a>.
        I currently work in <a href="https://www.ardentlabs.io/">Ardent Labs</a>{" "}
        as a Software Developer. I also work as a Programming Instructor at{" "}
        <a href="http://www.ardentacademy.com/?gclid=CjwKCAjw9vn4BRBaEiwAh0muDPhA5t8eTpzBpMEMe1MeMLIcuky2OcVV9BDoYLEHD3xtGGaWV-420hoCdpYQAvD_BwE">
          Ardent Academy
        </a>
        . Before Ardent, I used to work as a Network Engineer at{" "}
        <a href="http://www.ccb.com/en/home/indexv3.html">
          China Construction Bank (CCB)
        </a>
        . I enjoy programming, and I am looking for a full-time SDE position.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Yinhao ;He <Link to="/">yinhaohe.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
