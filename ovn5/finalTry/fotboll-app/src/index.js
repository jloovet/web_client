import React from "react"
import ReactDOM from "react-dom/client";
//component file
import AllaSpelare from "./components/AllaSpelare"

//stylesheet
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode>
    <AllaSpelare />
</React.StrictMode >
);