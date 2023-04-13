import { Elem } from "../../../utils/index.js";

export class Header extends Elem{
    constructor(parent) {
        super(parent, "header");
    }

    getHtml() {
        console.log(this.createHtmlString("header"));
        return this.createHtmlString("header"); // "<header id='header'></header>"
    }


    render() {
        const html = this.getHtml();
        this.parent.insertAdjacentHTML("beforeend", html);
    }
}