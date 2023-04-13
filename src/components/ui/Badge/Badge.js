import { Elem } from "../../../utils/index.js";

export class Badge extends Elem{
    constructor(parent) {
        super(parent, "badge");
    }

    get Html() {
        return `<span class="badge bg-primary">Online</span>`;
    }

    createHtmlString() {}

    render() {
        this.parent?.insertAdjacentHTML("beforeend", this.Html)
    }
}