import "./style.css";
import fillSearchContainer from "./displayInitial";

// get main body in DOM
const body = document.querySelector("body");
// create initial search header
body.appendChild(fillSearchContainer());
