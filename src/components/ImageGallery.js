import React, { useState } from "react";
import Modal from "./Modal";

export default function ImageGallery({ image, openModal }) {
  const { id } = image;
  //   console.log(image);
  return (
    <div className="col-10 col-md-6 col-lg-4 mx-auto my-3 ">
      <img
        src={image.urls.regular}
        alt="image"
        style={{ height: "14rem", width: "100%" }}
        onClick={() => openModal(id)}
      />
    </div>
  );
}
