import { MainPage, CarouselPage } from '../pages/index.js';

class App {
    constructor(parent) {
        this.parent = parent;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const carouselPage = new CarouselPage(this.pageRoot, cardId);
        carouselPage.render();
    }

    get pageRoot() {
        return document.getElementById('app');
    }

    get getHtml() {
        return `
            <div id="app"></div>
        `
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHtml;
        this.parent.insertAdjacentHTML('beforeend', html);

        const mainPage = new MainPage(this.pageRoot);
        mainPage.render();
    }
}

export default App;
