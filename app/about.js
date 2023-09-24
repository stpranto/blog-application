import React from 'react';
import Header from './header';
import Footer from './footer';
const AboutPage = () => {
  return (
    <div>
      <Header />
      <section>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          consectetur, est a tincidunt ornare, purus felis tristique nisi, in
          bibendum ex justo id justo.
        </p>
      </section>
      <section>
        <h2>Our Team</h2>
        <ul>
          <li>John Doe - CEO</li>
          <li>Jane Smith - COO</li>
          <li>Mike Johnson - CTO</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
