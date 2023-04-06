import data from '../../../backend/PseudoBack/data.json' assert {type: "json"};

import { CarouselPage } from "../CarouselPage/CarouselPage.js";

import { Card } from "../../components/layout/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const carouselPage = new CarouselPage(this.parent, cardId);
        carouselPage.render();
    }

    get pageRoot() {
        return document.getElementById("main-page");
    }

    get getHtml() {
        return `<div id="main-page" class="d-flex justify-content-around"></div>`;
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHtml;
        this.parent.insertAdjacentHTML('beforeend', html);

        data.themes.map((element, index) => {
            const card = new Card(this.pageRoot);
            card.render(element.title, {id: index}, this.clickCard.bind(this))
        });
    }
}
