import React from "react";
import "./BeerCard.css";
import RatingComponent from "./RatingComponent";

function BeerCard({ beer }) {
  return (
    <div className="beer-card">
      <img src={beer.image} alt={beer.name} className="beer-image" />
      <h2>{beer.name}</h2>
      <p>{beer.style}</p>
      <p>{beer.price}</p>
      <div className="rating">
        <RatingComponent
          rating={beer.rating.average}
          totalRatings={beer.rating.reviews}
        />
      </div>
    </div>
  );
}

export default BeerCard;
