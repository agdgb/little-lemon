import React from "react";
import "./Specials.css";
import Card from "./Card";
import image1 from "../src/img/img1.png";
import image2 from "../src/img/img3.png";
import image3 from "../src/img/img4.png";

function Specials() {
  return (
    <section className="container">
      <div className="card-top">
        <h1>Specials</h1>
        <a href="">Online Menu</a>
      </div>
      <div className="cards">
        <Card
          image={image1}
          price="$12.99"
          title="Greek Salad"
          desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        />
        <Card
          image={image2}
          price="$5.99"
          title="Bruchetta"
          desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
        />
        <Card
          image={image3}
          price="$5.00"
          title="Lemon Desset"
          desc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  );
}

export default Specials;
