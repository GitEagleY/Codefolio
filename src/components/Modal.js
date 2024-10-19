import React from "react";
import "./Modal.css";

const Modal = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null; // If no image is provided, don't render the modal

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} alt="Enlarged" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
