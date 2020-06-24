export class TopPanel
{
    constructor(leftOptions,rightOptions){
        this.leftOptions = leftOptions;
        this.rightOptions = rightOptions;
    }

    createElement(){

        let containerElement = document.createElement("div");
        containerElement.classList.add("top-panel");
        let leftPanel = document.createElement("div");
        let rightPanel = document.createElement("div");
        [leftPanel,rightPanel].forEach(panel=>containerElement.appendChild(panel));
        this.leftOptions.forEach(leftOption=>leftPanel.appendChild(leftOption));
        this.rightOptions.forEach(rightOption=>rightPanel.appendChild(rightOption));
        this.domElement = containerElement;
        return containerElement;
    }
}