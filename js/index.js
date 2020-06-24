import {TopPanel} from "./components/topPanel.js";
import {IconButton} from "./components/iconButton.js";

let appContainer = document.querySelector("#app-container");
let leftOptions =[
    "HOME",
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

let secondaryLeftOptions = ["Canvas"].map(text=>{
   let h1Ele = document.createElement("h1");
   h1Ele.innerHTML =text;
   return h1Ele;
});

let secondaryRightOptions = [
    {text:"HOME",iconClass:"fas fa-home"},
    {text:"FLIGHTS",iconClass:"fas fa-plane"},
    {text:"HOTELS",iconClass:"fas fa-building"},
    {text:"HOLIDAYS",iconClass:"fas fa-archive"},
    {text:"1800 105 2541", iconClass:"fas fa-phone"}
].map(btnSchemaItem=>{
    let cssOptions = {backgroundColor:"transparent",color:"white"};
    if(btnSchemaItem.text=="HOME"){
        cssOptions = Object.assign({},cssOptions,{border:"1px solid lightgray"});
    }
    else
    {
        cssOptions = Object.assign({},cssOptions,{border:"none"});
    }
    return (new IconButton(btnSchemaItem.text,btnSchemaItem.iconClass,cssOptions)).createElement();
})
let secondaryTopPanel = new TopPanel(secondaryLeftOptions,secondaryRightOptions);
let secondaryTopPanelEle = secondaryTopPanel.createElement();
secondaryTopPanelEle.style.alignItems = "baseline";
appContainer.append(topPanel.createElement());
appContainer.append(secondaryTopPanelEle);

