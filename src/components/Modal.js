import React from "react";

export default function Modal({ open, closeModal, modal, results, openModal }) {
  //   const { id, links } = image;
  console.log(modal);
  const { urls, links, user, profile_image } = modal;
  if (!open) {
    return null;
  } else
    return (
      <div className="container-fluid modal-container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5"
          >
            <div className="p-4 mx-center modal-img">
              <img
                src={urls.regular}
                alt={user.name}
                style={{ height: "14rem", width: "100%" }}
              />
            </div>

            <div className="close-modal" onClick={() => closeModal()}>
              <button type="button" class="btn btn-dark text-capitalize m-2">
                close
              </button>
            </div>
            <a href={urls.regular} download>
              <button type="button" className="btn btn-primary ">
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    );
}
