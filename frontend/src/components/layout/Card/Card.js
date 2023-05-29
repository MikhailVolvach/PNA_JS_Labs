import { Elem } from "../../../utils/index.js";

export class Card extends Elem{
    constructor(parent) {
        super(parent, "card");
    }

    getHtml (id, imgUrl, cardTitle, cardText, buttonText) {
        return `
        <div class="card" style="width: 300px">
            ${ imgUrl ? '<img class="card-img-top" src="' + imgUrl + '" alt="Avatar" /> ' : ""}
            <div class="card-body d-flex flex-column">
                ${ cardTitle ? '<h5 class="card-title">' + cardTitle + '</h5>' : ""}
                ${ cardText !== undefined ? '<p class="card-text">' + cardText + '</p>' : ""}
                <button class="btn btn-primary" id="click-card-${id}" data-id="${id}">${buttonText}</button>
            </div>
        </div>`;
    }

    addListeners(id, listener) {
        document
            .getElementById(`click-card-${id}`)
            .addEventListener("click", listener);
    }

    createHtmlString() {}
    
    render(listener, id=0, imgUrl="", cardTitle="", cardText, buttonText="Нажми на меня") {
        this.listener = listener;

        const html = this.getHtml(id, imgUrl, cardTitle, cardText, buttonText);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(id, this.listener);
    }
}
