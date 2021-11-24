import { React, useEffect } from "react";
import types from "../Types/types";
import PreviewModal from "./PreviewModal";
const initalPreview = {
  id: 1,
  name: "Select a Coffee!",
  description:
    "Click on the preview button of a coffee type to see the ingredients and the instruccion to know how to prepare it",
  imageURL:
    "https://cdn.luxe.digital/media/2020/05/07203610/best-coffee-beans-luxe-digital-775x388.jpg",
};

const Preview = ({
  setPreviewCoffee,
  PreviewCoffee,
  PreviewDispatch,
  setformValues,
  formValues,
}) => {
  const imgStyles = {
    height: "350px",
    objectFit: "cover",
  };
  const deleteHandler = () => {
    setPreviewCoffee(null);
    PreviewDispatch({
      type: types.coffeeDelete,
      payload: PreviewCoffee,
    });
  };
  useEffect(() => {
    console.log("Preview");
  });
  return (
    <div className="card ms-4">
      <img
        className="card-img-top"
        src={PreviewCoffee ? PreviewCoffee.imageURL : initalPreview.imageURL}
        style={imgStyles}
        alt="This is an Americano"
      />
      <div className="card-body">
        <h5 className="card-title">
          {PreviewCoffee ? PreviewCoffee.name : initalPreview.name}
        </h5>
        <p>{PreviewCoffee ? PreviewCoffee.procedure : null}</p>
      </div>
      {PreviewCoffee ? (
        <div>
          <button
            onClick={() => deleteHandler(PreviewCoffee)}
            className="btn btn-sm btn-danger me-2"
          >
            Delete
          </button>

          <PreviewModal
            setPreviewCoffee={setPreviewCoffee}
            PreviewCoffee={PreviewCoffee}
            PreviewDispatch={PreviewDispatch}
            formValues={formValues}
            setformValues={setformValues}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Preview;
