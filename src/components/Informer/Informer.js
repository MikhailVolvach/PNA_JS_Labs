export class Informer {
    constructor(parent) {
        this.parent = parent;
    }

    getHtml() {
        return `<button type="button" class="btn btn-lg btn-primary" data-bs-toggle="popover" data-bs-title="Заголовок всплывающего окна" data-bs-content="А вот и потрясающий контент. Это очень увлекательно. Верно?">Нажмите, чтобы переключить всплывающее окно</button>`;
    }

    render() {
        const html = this.getHtml();

        this.parent.insertAdjacentHTML('beforeend', html);
    }
}