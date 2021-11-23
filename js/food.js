export class Food{
    constructor(id, name, htmlFoodList) {
        this.name = name
        this.htmlTag = document.createElement("li");
        this.htmlTag.innerText = name
        htmlFoodList.appendChild(this.htmlTag);
    }

    removeFromHtml() {
        this.htmlTag.remove()
    }
}
