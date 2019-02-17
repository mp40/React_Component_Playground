// eslint-disable-next-line
import React from "react";
import './Modal.css';

const Modal = (props)=>{
    return (
        <div className="modalContainer">
            <div className="modal">
                Modal displayed
                <button id="closeModal" onClick={props.toggleModal}>
                    Close Modal
                </button>
            </div>
        </div>
    )
}

export default Modal; 