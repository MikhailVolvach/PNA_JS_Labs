export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    getHtml() {
        return "<header id='header'></header>"
    }

    render() {
        const html = this.getHtml();
        this.parent.insertAdjacentHTML("beforeend", html);
    }
}