export class InputField{

    constructor(label,placeHolder){
        this.label = label;
        this.placeHolder = placeHolder;
    }
  

    createElement(){
        let containerElement = document.createElement("div");
        containerElement.classList.add("input-field");
        let labelEle = document.createElement("label");
        let inputField = document.createElement("input");
        inputField.placeholder = this.placeHolder;
        labelEle.innerHTML = this.label;
        containerElement.appendChild(labelEle);
        containerElement.appendChild(inputField);
        this.domElement = containerElement;
        return containerElement;

    }

}

export class InputFieldAlt{

    constructor(label,placeholder,cssOptions){
        this.label = label;
        this.placeHolder = placeholder;
        this.cssOptions = cssOptions;
    }

    createElement(){
        
        let fieldContainer = document.createElement("div");
        fieldContainer.classList.add("input-field-alt");
        let label = document.createElement("label");
        label.style.color = this.cssOptions.color;
        label.style.backgroundColor = this.cssOptions.backgroundColor;
        label.innerHTML = this.label;
        let inputField = document.createElement("input");
        inputField.placeholder = this.placeHolder;
        fieldContainer.appendChild(label);
        fieldContainer.appendChild(inputField);
        this.domElement = fieldContainer;
        return fieldContainer;
    }
}