import React from "react";
import "./Testimony.css";

function Testimony() {
  return (
    <div className="testimony">
      <h1 className="rating">
        <p>Title</p>
      </h1>
      <div className="avatar">
        <svg
          className="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <circle cx="12" cy="8" fill="#464646" r="4" />
          <path
            d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z"
            fill="#464646"
          />
        </svg>
        <p className="name">Customer Name</p>
      </div>
      <p className="review">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus,
        ex eu tempor auctor, sapien nisi dictum felis, at suscipit nibh leo at
        ligula. Praesent aliquet dui metus, ac fermentum massa viverra in.
        purus, quis porta eros.
      </p>
    </div>
  );
}

export default Testimony;
