import React from "react";
import Cards from "./Cards";

const CardList = ({ cards }) => {
  return (
    <div className="row">
      <h2>Coffee List</h2>
      {cards.map((card) => (
        <Cards key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
