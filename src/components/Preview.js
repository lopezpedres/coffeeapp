import React from "react";
const initalPreview = {
  id: 1,
  name: "Select a Coffee!",
  description:
    "Click on the preview button of a coffee type to see the ingredients and the instruccion to know how to prepare it",
  imageURL:
    "https://cdn.luxe.digital/media/2020/05/07203610/best-coffee-beans-luxe-digital-775x388.jpg",
};

const Preview = ({ previewCoffee, setpreviewCoffee }) => {
  return (
    <div className="card ms-4">
      <img
        className="card-img-top"
        src={previewCoffee ? previewCoffee.imageURL : initalPreview.imageURL}
        alt="This is an Americano"
      />
      <div className="card-body">
        <h5 className="card-title">
          {previewCoffee ? previewCoffee.name : initalPreview.name}
        </h5>
        <p>{previewCoffee ? previewCoffee.procedure : null}</p>
      </div>
      {previewCoffee ? (
        <div>
          <button
            onClick={() => setpreviewCoffee(initalPreview)}
            className="btn btn-sm btn-danger me-2"
          >
            Delete
          </button>
          <button
            onClick={() => setpreviewCoffee(initalPreview)}
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
