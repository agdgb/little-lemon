import React from "react";
import "./About.css";
import image1 from "../src/img/img2.png";
import image2 from "../src/img/img5.png";

function About() {
  return (
    <section className="about-container">
      <article className="about-left">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p className="ads">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
          <br />
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </article>
      <article className="about-right">
        <img className="bottom-image" src={image2} alt="" />
        <img className="top-image" src={image1} alt="" />
      </article>
    </section>
  );
}

export default About;
