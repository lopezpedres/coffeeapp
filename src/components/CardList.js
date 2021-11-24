import { React, useEffect } from "react";

import Cards from "./Cards";
import NewModal from "./NewModal";

const CardList = ({
  PreviewState,
  setPreviewCoffee,
  setformValues,
  formValues,
  PreviewDispatch,
  PreviewCoffee,
}) => {
  useEffect(() => {
    console.log("CardList");
  });
  return (
    <div className="row ">
      <h2>Coffee List</h2>

      <NewModal
        PreviewCoffee={PreviewCoffee}
        templateFormValues={formValues}
        setPreviewCoffee={setPreviewCoffee}
        PreviewDispatch={PreviewDispatch}
        setformValues={setformValues}
      />
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
