import { Elem } from "../../../utils/index.js";

const HeaderSizeEnum = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6"
}

export class Headers extends Elem {
    constructor(parent, headerSize, children) {
        super(parent, "h");
        this.headerSize = HeaderSizeEnum[headerSize];
        this.children = children;
    }

    get getHtml() {
        return `<h${this.headerSize} class="h h${this.headerSize}">${this.children}</h${this.headerSize}>`;
    }

    createHtmlString() {}

    render() {
        const html = this.getHtml;
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}
