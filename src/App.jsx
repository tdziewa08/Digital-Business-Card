import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Info from "./Info.jsx"
import About from "./About.jsx"
import Interests from "./Interests.jsx"
import Footer from "./Footer.jsx"


const ROOT = ReactDOM.createRoot(document.getElementById("root"));
ROOT.render(
    <React.StrictMode>
        <Info />
        <About />
        <Interests />
        <Footer />
    </React.StrictMode>
);