import React from "react";

const Preview = ({ previewCoffee, setpreviewCoffee, initalPreview }) => {
  return (
    <div className="card ms-4">
      <img
        className="card-img-top"
        src={previewCoffee.imageURL}
        alt="This is an Americano"
      />
      <div className="card-body">
        <h5 className="card-title">{previewCoffee.name}</h5>
        <p>{previewCoffee.procedure}</p>
      </div>
      <button
        onClick={() => setpreviewCoffee(initalPreview)}
        className="btn btn-sm btn-dark"
      >
        Reset
      </button>
    </div>
  );
};

export default Preview;
