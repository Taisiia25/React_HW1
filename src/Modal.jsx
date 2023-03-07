import React from "react";

const Modal = ({ handleCloseModal, user }) => {
    return (
       <div className="modal" onClick={handleCloseModal}>
            <div className="modal_container">
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Balance: {user.balance}</p>
                <img src={user.picture} alt="" />
            </div>
       </div>
    )
}

export default Modal;