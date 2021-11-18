import React from "react";
import types from "../Types/types";
const initalPreview = {
  id: 1,
  name: "Select a Coffee!",
  description:
    "Click on the preview button of a coffee type to see the ingredients and the instruccion to know how to prepare it",
  imageURL:
    "https://cdn.luxe.digital/media/2020/05/07203610/best-coffee-beans-luxe-digital-775x388.jpg",
};

const Preview = ({ setPreviewCoffee, PreviewCoffee, PreviewDispatch }) => {
  const deleteHandler = () => {
    setPreviewCoffee(null);
    PreviewDispatch({
      type: types.coffeeDelete,
      payload: PreviewCoffee,
    });
  };
  return (
    <div className="card ms-4">
      <img
        className="card-img-top"
        src={PreviewCoffee ? PreviewCoffee.imageURL : initalPreview.imageURL}
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
          <button
            onClick={() => PreviewDispatch(initalPreview)}
            className="btn btn-sm btn-outline-dark"
          >
            Edit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Preview;
