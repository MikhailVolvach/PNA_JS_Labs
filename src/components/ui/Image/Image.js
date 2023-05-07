import { Elem, getElem } from "../../../utils/index.js";

export class Image extends Elem {
    constructor(parent, src = "") {
        super(parent, "image")
        this.src = src;
    }

    getHtml() {
        return this.createHtmlString("img", false, [`src="${this.src}"`], ["image", "rounded-circle", "mx-5"]); // <img src="${this.src}" class="image placeholder rounded mx-auto d-block">
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

