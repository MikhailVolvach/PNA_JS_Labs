export class Card {
    constructor(parent) {
        this.parent = parent;
    }

    getHtml () {
        return `
        <div class="card w-25">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${this.title}</h5>
                <button class="btn btn-primary" id="click-card-${this.data.id}" data-id="${this.data.id}">Нажми на меня</button>
            </div>
        </div>`;
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener);
    }
    
    render(title, data, listener) {
        this.title = title;
        this.data = data;
        this.listener = listener;

        const html = this.getHtml();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(this.data, this.listener);
    }
}
