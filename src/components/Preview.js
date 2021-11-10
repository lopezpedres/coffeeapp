import React from "react";

const Preview = ({ previewCoffee }) => {
  return (
    <div className="card ms-4">
      <img
        className="card-img-top"
        src={previewCoffee.imageURL}
        alt="This is an Americano"
      />
      <div className="card-body">
        <h5 className="card-title">{previewCoffee.name}</h5>
        <p>{previewCoffee.description}</p>
      </div>
    </div>
  );
};

export default Preview;
