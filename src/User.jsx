import React from "react";

const User = ({ user, handleShowModal }) => {
    return (
        <div className="user" onClick={handleShowModal}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Balance: {user.balance}</p>
            <img src={user.picture} alt="" />
        </div>
    )
}

export default User;