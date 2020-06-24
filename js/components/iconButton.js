export class IconButton
{
    constructor(text,iconClass,cssOptions){
        this.text =text;
        this.iconClass = iconClass;
        this.cssOptions = cssOptions;
    }

    createElement(){
        let iconContainer = document.createElement("a");
        iconContainer.setAttribute("name",this.text);
        iconContainer.className = "icon-button";
        iconContainer.style.color = this.cssOptions.color;
        iconContainer.style.backgroundColor = this.cssOptions.backgroundColor;
        iconContainer.style.border = this.cssOptions.border;
        iconContainer.style.borderLeft = this.cssOptions.borderLeft;
        let icon = document.createElement("i");
        icon.className = this.iconClass;
        let textContainer = document.createElement("span");
        textContainer.innerHTML = this.text;
        iconContainer.appendChild(icon);
        iconContainer.append(textContainer);
        this.domElement = iconContainer;
        return iconContainer;
    }
}