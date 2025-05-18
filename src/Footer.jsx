import React from "react"
import twitter from  "./assets/Twitter Icon.png"
import facebook from "./assets/Facebook Icon.png"
import instagram from "./assets/Instagram Icon.png"
import gitHub from "./assets/GitHub Icon.png"

export default function Footer () {
    return (
        <div className="socials">
            <a href ="https://x.com/?lang=en">
                <img src={twitter}></img>
            </a>

            <a href ="https://www.facebook.com/">
                <img src={facebook}></img>
            </a>
            
            <a href="https://www.instagram.com/">
                <img src={instagram}></img>
            </a>
            
            <a href="https://github.com/">
                <img src={gitHub}></img>
            </a>
        </div>
    )
}





















//social icons