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

let rightOptions = [
    "fab fa-facebook-f",
    "fab fa-twitter",
    "fab fa-pinterest-p","fab fa-instagram",
    "fas fa-phone","fas fa-envelope"
].map(iconClass=>{
    let iconContainer = document.createElement("a");
    let icon = document.createElement("i");
    icon.className = iconClass;
    iconContainer.appendChild(icon);
    return iconContainer;
})
let topPanel = new TopPanel(leftOptions,rightOptions);
appContainer.append(topPanel.createElement());

