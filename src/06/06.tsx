import React from "react";

export const User = ()=> {

    const deleteUser = ()=> {
        alert('Delete')
    }

    const saveUser = () => {
        alert('Save')
    }
    return <div>Mario
        <button onClick={saveUser}>Save</button>
        <button onClick={deleteUser}>Delete</button>
    </div>
}