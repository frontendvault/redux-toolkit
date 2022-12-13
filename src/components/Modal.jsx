import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-container">
      <div className="modal1">
        <h4 className="mb-4 fw-bold">Remove all items from shopping cart?</h4>
        <div className="d-flex justify-content-evenly">
          <button
            className="btn btn-outline-success"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
