import { Button, Modal } from "react-bootstrap";

import { useState } from "react";

const ModalExample = ({ PreviewCoffee, PreviewDispatch }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark-outline small" size="sm" onClick={handleShow}>
        Edit
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Editing ${PreviewCoffee.name} Coffee Card`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="text" className="col-form-label">
                Name:
              </label>
              <input
                className="form-control"
                placeholder={PreviewCoffee.name}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                placeholder={PreviewCoffee.description}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">
                Procedure:
              </label>
              <textarea
                className="form-control"
                placeholder={PreviewCoffee.procedure}
              ></textarea>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalExample;
