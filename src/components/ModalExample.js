import { Button, Modal } from "react-bootstrap";

import { useState, useEffect } from "react";
import types from "../Types/types";

const ModalExample = ({
  PreviewDispatch,
  formValues,
  setformValues,
  setPreviewCoffee,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("ModalExample");
  });

  const onSubmitHandler = (e) => {
    console.log("Form Submitted");
    setPreviewCoffee(formValues);

    e.preventDefault();

    PreviewDispatch({ type: types.coffeeUpdate, payload: formValues });
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
      <Button variant="dark-outline small" size="sm" onClick={handleShow}>
        Edit
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Editing ${
            formValues && formValues.name
          } Coffee Card`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="text" className="col-form-label">
                Name:
              </label>
              <input
                name="name"
                value={formValues.name}
                className="form-control"
                placeholder="Add Name"
                onChange={InputFormHandler}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">
                Description:
              </label>
              <textarea
                name="description"
                value={formValues && formValues.description}
                className="form-control"
                placeholder="Add Description"
                onChange={InputFormHandler}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">
                Procedure:
              </label>
              <textarea
                name="procedure"
                value={formValues && formValues.procedure}
                className="form-control"
                placeholder="Add Procedure"
                onChange={InputFormHandler}
              ></textarea>
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={onSubmitHandler}>
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalExample;
