import React from "react";

export default function Modal({ open, image, closeModal, modal }) {
  //   const { id, links } = image;
  console.log(modal);

  if (!open) {
    return null;
  } else
    return (
      <div className="container modal-container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5"
          >
            <div className="close-modal" onClick={closeModal}>
              Close
            </div>
          </div>
        </div>
      </div>
    )``;
}
