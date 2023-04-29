import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";

function Cards() {
  return (
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
              <ul className="cards__items">
                  <CardItem
                      src="images/windsurfing1.jpg"
                      text="“I can't change the direction of the wind, but I can adjust my sails to always reach my destination.” Jimmy Dean"
                      label="Adventure"
                      path="/excursie"
                  />
                  <CardItem
                      src="images/surf.jpg"
                      text="“Surfing is almost a way to fly.” Jef Hakman"
                      label="Adventure"
                      path="/excursie"
                  />
              </ul>
          </div>
        </div>
      </div>
  );
}

export default Cards;
