import React from "react";

const Cards = ({ card }) => {
  return (
    <div className=" col-6 card ">
      <img
        className="card-img-top"
        src={card.imageURL}
        alt="This is an Americano"
      />
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p>{card.description}</p>
        <button className="btn btn-sm btn-light">Preview</button>
      </div>
    </div>
  );
};

export default Cards;
