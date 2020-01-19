import ReactDom from "react-dom"
import React from "react"
import App from "./App.js"

const  renderElement = document.querySelector("#app");

ReactDom.render(<App/>, renderElement,()=>{
    console.info("rendered");
})
