import { Elem } from "../../../utils/index.js";

export class Breadcrumb extends Elem{
    constructor(parent, pageName) {
        super(parent, "breadcrumb");
        this.pageName = pageName;
    }

    get Html() {
        return `<nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">${this.pageName}</li>
            </ol>
        </nav>`;
    }

    createHtmlString() {}

    render() {
        this.parent.insertAdjacentHTML("beforeend", this.Html);
    }
}