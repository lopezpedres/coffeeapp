import React from "react";
import Cards from "./Cards";

const CardList = ({ PreviewState, setPreviewCoffee }) => {
  return (
    <div className="row ">
      <h2>Coffee List</h2>
      {console.log(PreviewState)}
      {PreviewState.map((singlecoffee) => (
        <Cards
          key={singlecoffee.id}
          singlecoffee={singlecoffee}
          setPreviewCoffee={setPreviewCoffee}
        />
      ))}
    </div>
  );
};

export default CardList;
