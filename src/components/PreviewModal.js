import ModalComponent from "./ModalComponent";
import { Button } from "react-bootstrap";

import { useState, useEffect } from "react";
import types from "../Types/types";

const PreviewModal = ({
  PreviewDispatch,
  formValues,
  setformValues,
  setPreviewCoffee,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("PreviewModal");
  });

  const onSubmitHandler = (e) => {
    console.log("Form Submitted");
    setPreviewCoffee(formValues);

    e.preventDefault();

    PreviewDispatch({ type: types.coffeeUpdate, payload: formValues });
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
        Edit
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

export default PreviewModal;
