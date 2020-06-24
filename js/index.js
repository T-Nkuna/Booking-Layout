import {TopPanel} from "./components/topPanel.js";

let appContainer = document.querySelector("#app-container");
let leftOptions =[
    "Home",
    "FAQS",
    "CONTACT",
    "USD"
].map(optionName=>{
    let option = document.createElement("a");
    option.innerHTML = optionName;
    return option;
});
let topPanel = new TopPanel(leftOptions,[]);
appContainer.append(topPanel.createElement());

