import {InputField,InputFieldAlt} from "../components/InputFields.js";
import {IconButton} from "../components/iconButton.js";
export class SiteForm{

    constructor(){
        this.formContainer = document.createElement("div");
        this.formContainer.classList.add("site-form");
    }

    createFormHeader(contents){
        let headerContainer = document.createElement("div");
        headerContainer.classList.add("site-form-header");
        contents.forEach(content=>headerContainer.appendChild(content));
        return headerContainer;
    }

    createFormBody(firstRowContents,secondRowContents){
        let formBody = document.createElement("div");
        formBody.classList.add("site-form-body");
        let firstRowContainer = document.createElement("div");
        let secondRowContainer = document.createElement("div");
        firstRowContents.forEach(content=>firstRowContainer.appendChild(content));
        secondRowContents.forEach(content=>secondRowContainer.appendChild(content));
        formBody.appendChild(firstRowContainer);
        formBody.appendChild(secondRowContainer);
        return formBody;
    }

    createFormFooter(footerContents){
        let formFooter = document.createElement("div");
        formFooter.classList.add("site-form-footer");
        footerContents.forEach(content=>formFooter.appendChild(content));
        return formFooter;
    }

    createSiteForm(){
        let formTitle = document.createElement("h2");
        formTitle.innerHTML = "BOOK YOUR FLIGHTS";
        let altField = new InputFieldAlt("Domestic","International",{color:"white","backgroundColor":"maroon"});
        let formHeader = this.createFormHeader([formTitle,altField.createElement()]);

        let firstRowContents = [
            {label:"FROM",placeholder:"Eg. Melbourne, Australia"},
            {label:"TO",placeholder:"Eg. New York, United States"}
        ].map(rec=>(new InputField(rec.label,rec.placeholder)).createElement());
        let secondRowContents = [
            {label:"DEPARTURE",placeholder:"MM/DD/YYYY"},
            {label:"RETURN",placeholder:"MM/DD/YYYY"},
            {label:"ADULTS",placeholder:"2"}
        ].map(rec=>(new InputField(rec.label,rec.placeholder)).createElement());

        let formBody = this.createFormBody(firstRowContents,secondRowContents);

        let searchFlightsButtonEle = (new IconButton("SEARCH FLIGHTS","",{backgroundColor:"maroon",color:"white",border:"none"})).createElement();
        let advancedSearchLink = document.createElement("a");
        advancedSearchLink.style.color = "maroon";
        advancedSearchLink.style.textDecoration = "underline";
        advancedSearchLink.style.fontFamily ="italic";
        advancedSearchLink.innerHTML = "Advanced Search"
        advancedSearchLink.style.cursor ="pointer";
        let formFooter = this.createFormFooter([searchFlightsButtonEle,advancedSearchLink]);

        this.formContainer.appendChild(formHeader);
        this.formContainer.appendChild(formBody);
        this.formContainer.appendChild(formFooter);
        return this.formContainer;
    }
}