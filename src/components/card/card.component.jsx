import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2`}
      width="200px"
      height="200px"
    ></img>
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
