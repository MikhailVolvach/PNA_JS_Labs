export class Breadcrumb {
    constructor(parent, pageName) {
        this.parent = parent;
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

    render() {
        this.parent.insertAdjacentHTML("beforeend", this.Html);
    }
}