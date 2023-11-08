import React from "react";
import Testimony from "./Testimony";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <article>
      <h1 className="testimonials-header"> testimonials</h1>
      <div className="testimonies">
        <Testimony />
        <Testimony />
        <Testimony />
      </div>
      </article>
    </section>
  );
}

export default Testimonials;
