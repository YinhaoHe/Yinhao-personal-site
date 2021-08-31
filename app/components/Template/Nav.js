import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yinhao He</h2>
        <Link to="/contact">
          <p>yinhaohe7@gmail.com</p>
        </Link>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Yinhao (Charles). I am an aspiring software engineer. I am
        a <a href="https://www.ics.uci.edu/about/">UC, Irvine</a> graduate
        student, major in Computer Science,{' '}
        <a href="http://www.networkedsystems.uci.edu/">(Networked Systems)</a>.
        I used to work at <a href="https://www.cameo.com/">Cameo</a> and {' '}
        <a href="https://www.ardentlabs.io/">
          Ardent Labs
        </a>{' '}
        as a full-stack software engineer intern {' '}
        with a strong focus on React/React Native, Node.js and TypeScript. Before full-stack developer, I used to work on Java web as a software engineer intern at{' '}
        <a href="http://www.ccb.com/en/home/indexv3.html">
          China Construction Bank (CCB)
        </a>
        . Other than an engineer, I also worked as a volunteer developer/trainer at <a href="http://www.ardentacademy.com/?gclid=CjwKCAjw9vn4BRBaEiwAh0muDPhA5t8eTpzBpMEMe1MeMLIcuky2OcVV9BDoYLEHD3xtGGaWV-420hoCdpYQAvD_BwE">
          Ardent Academy
        </a> teaching Python for AI. I enjoy programming, and I am actively looking for a full-time SDE position.
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
