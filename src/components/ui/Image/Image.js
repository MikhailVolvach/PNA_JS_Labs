import { Elem, getElem } from "../../../utils/index.js";

export class Image extends Elem{
    constructor(parent, src = "") {
        super(parent, "image")
        this.src = src;
    }

    getHtml() {
        return this.createHtmlString("img", false, [`src="${this.src}"`], ["image", "placeholder", "rounded-circle", "mx-auto", "d-block"]); // <img src="${this.src}" class="image placeholder rounded mx-auto d-block">
    }

    render() {
        console.log(this.getHtml());
        this.parent.insertAdjacentHTML("beforeend", this.getHtml());

        const imgElemNode = this.node;
        imgElemNode.onload = function() {
            imgElemNode.classList.remove("placeholder");
        }
    }
}

