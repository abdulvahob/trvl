import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>check out thres EPIC Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <CardItem
              src="images/img-9.jpg"
              text="Explore the hiddin waterfall deepinside 
                        the Amazon JUngle"
              lable="Adventure "
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the hiddin waterfall deepinside 
                        the Amazon JUngle"
              lable="Adventure "
              path="/services"
            />


          </ul>

          <div className="cards__items">
          <CardItem
              src="images/img-3.jpg"
              text="Travel through the Islands of Bali in a Private Cruise "
              lable="Luhury "
              path="/servise"
            />
              <CardItem
              src="images/img-4.jpg"
              text="Travel through the Islands of Bali in a Private Cruise "
              lable="Luhury "
              path="/servise"
            />
              <CardItem
              src="images/img-5.jpg"
              text="Travel through the Islands of Bali in a Private Cruise "
              lable="Luhury "
              path="/servise"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
