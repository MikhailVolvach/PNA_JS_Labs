import { getElem } from "../../../utils/index.js";

export class Image {
    constructor(parent, src) {
        this.parent = parent;
        this.src = src;
    }

    getHtml() {
        return `<img src="${this.src}" class="image placeholder rounded mx-auto d-block">`
    }

    render() {
        const imgElem = getElem(this.parent, "image");
        this.parent.insertAdjacentHTML("beforeend", this.getHtml());
        const imgElemNode = imgElem.node();
        if (imgElemNode.complete) {
            imgElemNode.classList.remove("placeholder");
        }
    }
}

