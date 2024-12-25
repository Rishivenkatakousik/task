import React from "react";

function RatingComponent({ rating, totalRatings }) {
  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex" }}>
        {[...Array(fullStars)].map((_, index) => (
          <span
            key={`full-${index}`}
            style={{ color: "orange", fontSize: "20px" }}
          >
            ★
          </span>
        ))}
        {halfStar === 1 && (
          <span
            style={{ color: "orange", fontSize: "20px", position: "relative" }}
          >
            ★
            <span
              style={{
                content: "'★'",
                color: "lightgray",
                position: "absolute",
                clipPath: "inset(0 50% 0 0)",
              }}
            >
              ★
            </span>
          </span>
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <span
            key={`empty-${index}`}
            style={{ color: "lightgray", fontSize: "20px" }}
          >
            ★
          </span>
        ))}
      </div>
      <br></br>
      <div style={{ marginLeft: "10px", fontSize: "14px", marginTop: "5px" }}>
        <span style={{ fontWeight: "bold" }}>{rating.toFixed(1)}</span>
        <span style={{ color: "gray", marginLeft: "5px" }}>
          {totalRatings} ratings
        </span>
      </div>
    </div>
  );
}

export default RatingComponent;
