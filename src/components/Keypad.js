import React from "react";
// Code Keypad Component Here


const Keypad = () => {
    const change = () => console.log("Entering password...")

    return <input onChange={change} type="password" />

}

export default Keypad;