import { React, useEffect } from "react";

const Cards = ({ singlecoffee, setPreviewCoffee, setformValues }) => {
  const PreviewHanlder = () => {
    setPreviewCoffee(singlecoffee);
    setformValues(singlecoffee);
  };
  useEffect(() => {
    console.log("Card");
  });
  return (
    <div className=" col-6 card mt-2 ">
      <img
        className="card-img-top"
        src={singlecoffee.imageURL}
        alt="This is an Americano"
      />
      <div className="card-body">
        <h5 className="card-title">{singlecoffee.name}</h5>
        <p>{singlecoffee.description}</p>
        <button
          className="btn btn-sm btn-dark"
          onClick={() => PreviewHanlder(singlecoffee)}
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default Cards;
