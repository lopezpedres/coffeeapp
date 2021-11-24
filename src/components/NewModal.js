import React from "react";
import types from "../Types/types";
import { useState, useEffect } from "react";
import ModalComponent from "./ModalComponent";
import { Button } from "react-bootstrap";

const NewModal = ({
  PreviewDispatch,
  templateFormValues,
  setPreviewCoffee,
}) => {
  const [formValues, setformValues] = useState(templateFormValues);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("NewModal");
  });

  const onSubmitHandler = (e) => {
    console.log("Form Submitted");
    setPreviewCoffee(formValues);

    e.preventDefault();

    PreviewDispatch({ type: types.coffeeNew, payload: formValues });
    setformValues("");
    handleClose();
  };

  const InputFormHandler = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setformValues(changedFormValues);
  };
  return (
    <>
      <Button variant="dark small" size="sm" onClick={handleShow}>
        New Coffee
      </Button>
      <ModalComponent
        PreviewDispatch={PreviewDispatch}
        formValues={formValues}
        setformValues={setformValues}
        setPreviewCoffee={setPreviewCoffee}
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        onSubmitHandler={onSubmitHandler}
        InputFormHandler={InputFormHandler}
      />
    </>
  );
};

export default NewModal;
