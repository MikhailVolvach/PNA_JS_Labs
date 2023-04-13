// import data from '../../../backend/PseudoBack/data.json' assert {type: "json"};

// import { CarouselPage } from "../CarouselPage/CarouselPage.js";

import { Card } from "../../components/layout/index.js";

import { ajax,  urls, Constants } from "../../modules/index.js";
import { UserPage } from "../UserPage/UserPage.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const userPage = new UserPage(this.parent, cardId);
        userPage.render();
    }

    getData() {
        ajax.post(urls.getGroupMembers(Constants.GROUP_ID), (data) => {
            this.renderData(data.response.items);
        })
    }

    renderData(items) {
        items.forEach((item, index) => {
            const userCard = new Card(this.pageRoot);
            userCard.render(item, this.clickCard.bind(this));
        });
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

        this.getData();
    }
}
