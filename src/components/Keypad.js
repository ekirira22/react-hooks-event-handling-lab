// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <form>
            <input type="password" onChange={() => {console.log("Entering password...")}} placeholder="Enter password"/>
        </form>
    )
}

export default Keypad;