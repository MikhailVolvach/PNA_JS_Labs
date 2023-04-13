import { Elem } from "../../../utils/index.js";

export class Card extends Elem{
    constructor(parent) {
        super(parent, "card");
    }

    getHtml () {
        return `
        <div class="card" style="width: 300px">
            <img class="card-img-top" src="${this.data.photo_100}" alt="Avatar" /> 
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${this.data.first_name} ${this.data.last_name}</h5>
                <button class="btn btn-primary" id="click-card-${this.data.id}" data-id="${this.data.id}">Нажми на меня</button>
            </div>
        </div>`;
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener);
    }

    createHtmlString() {}
    
    render(data, listener) {
        this.data = data;
        this.listener = listener;

        const html = this.getHtml();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(this.data, this.listener);
    }
}
