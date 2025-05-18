import React from "react"
import walter from "./assets/walter-white-shocked.gif"
import email from "./assets/emailIcon.png"
import linkedIn from "./assets/LinkedIn.png"


export default function Info () {
    return (
        <>

        <div className="info">
            <img src={walter}></img>
            <h1>Walter White</h1>
            <h3>Frontend Developer</h3>
        </div>

        <small>www.savewalterwhite.com</small>

        <div className="buttons">
            <a href="https://mail.yahoo.com/">
                <button id="email"><img src={email}></img>
                &nbsp; Email
                </button>
            </a>
            
            <a href ="https://www.linkedin.com/">
                <button id="linkedIn"> <img src={linkedIn}></img>
                &nbsp; LinkedIn
                </button> 
            </a>
        </div>

        </>
    )
}

//photo, name, buttons, etc.