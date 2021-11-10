import React from "react";
import Cards from "./Cards";

const CardList = ({ CoffeeData, setpreviewCoffee }) => {
  return (
    <div className="row ">
      <h2>Coffee List</h2>
      {CoffeeData.map((singlecoffee) => (
        <Cards
          key={singlecoffee.id}
          singlecoffee={singlecoffee}
          setpreviewCoffee={setpreviewCoffee}
        />
      ))}
    </div>
  );
};

export default CardList;
