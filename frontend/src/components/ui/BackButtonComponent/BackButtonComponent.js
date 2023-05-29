export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `<button id="button" class="btn btn-primary" type="button">Назад</button>`
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}
