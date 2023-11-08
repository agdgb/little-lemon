import React from "react";
import "./Card.css";
import cart from "./cart.svg";

function Card(props) {
  return (
    <section className="card">
      {/* <article className="card-body"> */}
      <div className="card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="card-info">
        <div className="card-title">
          <h1>{props.title}</h1>
          <p>{props.price}</p>
        </div>
        <div className="card-description">
          <p>{props.desc}</p>
        </div>
        <div className="card-footer">
          <a href="#">
            Order a delivery&nbsp; &nbsp;
            <img src={cart} alt="" />
          </a>
        </div>
      </div>
      {/* </article> */}
    </section>
  );
}

export default Card;
