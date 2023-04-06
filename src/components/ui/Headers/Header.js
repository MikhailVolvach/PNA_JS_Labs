const HeaderSizeEnum = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6"
}

export class Headers {
    constructor(parent, headerSize, children) {
        this.parent = parent;
        this.headerSize = HeaderSizeEnum[headerSize];
        this.children = children;
    }

    get getHtml() {
        return `<h${this.headerSize}>${this.children}</h${this.headerSize}>`;
    }

    render() {
        const html = this.getHtml;
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}
