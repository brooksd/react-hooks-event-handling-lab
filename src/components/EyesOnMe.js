import React from "react";
// Code EyesOnMe Component Here
const setFocus = () => console.log("Good!");
const setblur = () => console.log("Hey! Eyes on me!");

const EyesOnMe = () => <button onFocus={setFocus} onBlur={setblur}>Eyes on me</button>

export default EyesOnMe;