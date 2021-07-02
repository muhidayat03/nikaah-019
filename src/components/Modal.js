import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

/**
 * Modal component
 *
 * This is generic modal used by our application. You can customise this modal
 * as needed per feature.
 */
const Modal = ({
  children,
  title,
  visible,
  animated = true,
  onClose,
  height = "auto",
}) => {
  const [modalAnimation, setModalAnimation] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (!visible) {
      setModalAnimation(visible);

      if (animated) {
        setTimeout(() => {
          setVisibleModal(visible);
          document.body.classList.remove("modal-open");
        }, 200);
      } else {
        setVisibleModal(visible);
        document.body.classList.remove("modal-open");
      }
      return;
    }

    setVisibleModal(visible);
    document.body.classList.add("modal-open");

    if (animated) {
      setTimeout(() => {
        setModalAnimation(visible);
      }, 200);
    } else {
      setModalAnimation(visible);
    }
    return;
  }, [visible, animated]);

  // This will allow devs to opt out of animation if they don't need it
  const transitionStyle = animated
    ? { transition: `200ms ease-out`, height }
    : {};

  // Don't let this component render HTML unless the modal is ready
  if (!visibleModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`modal ${modalAnimation && "modal--visible"}`}>
      <div
        className="modal-overlay"
        style={transitionStyle}
        onClick={handleClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal_title"
        className="modal-body"
        style={transitionStyle}
      >
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
