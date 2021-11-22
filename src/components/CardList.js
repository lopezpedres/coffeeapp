import { React, useEffect } from "react";
import Cards from "./Cards";

const CardList = ({ PreviewState, setPreviewCoffee, setformValues }) => {
  useEffect(() => {
    console.log("CardList");
  });
  return (
    <div className="row ">
      <h2>Coffee List</h2>
      {console.log(PreviewState)}
      {PreviewState.map((singlecoffee) => (
        <Cards
          key={singlecoffee.id}
          singlecoffee={singlecoffee}
          setPreviewCoffee={setPreviewCoffee}
          setformValues={setformValues}
        />
      ))}
    </div>
  );
};

export default CardList;
