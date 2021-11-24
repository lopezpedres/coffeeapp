import React from "react";
import { Button, Modal } from "react-bootstrap";
const ModalComponent = ({
  formValues,
  handleClose,
  InputFormHandler,
  show,
  onSubmitHandler,
}) => {
  return (
    <>
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

export default ModalComponent;
