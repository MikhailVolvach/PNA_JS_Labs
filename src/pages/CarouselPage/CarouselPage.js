import data from "../../../backend/PseudoBack/data.json"  assert { type: "json" };
import { MainPage } from "../../pages/index.js";
import { BackButtonComponent, Headers, Breadcrumb } from "../../components/ui/index.js";
import { Carousel, Header } from "../../components/layout/index.js";
import { getElem } from "../../utils/index.js";

export class CarouselPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = +id;
  }

  clickBack() {
    const mainPage = new MainPage(this.parent);
    mainPage.render();
  }

  render() {
    this.parent.innerHTML = "";
    
    const pageElem = getElem(this.parent, "carouselPage");
    const pageElemHtmlString = pageElem.htmlString; // Получаем html-строку элемента страницы
    
    this.parent.insertAdjacentHTML("beforeend", pageElemHtmlString);
    const pageElemNode = pageElem.node(); // Запрашивваем элемент страницы после его появления

    const pageHeader = new Header(pageElemNode);
    pageHeader.render();

    const pageHeaderElem = getElem(pageElemNode, "header");
    const headerElemNode = pageHeaderElem.node();

    /* PageHeader */
    const pageHeaderText = new Headers(headerElemNode, 1, data.images[this.id].title);
    const backButton = new BackButtonComponent(headerElemNode);
    const breadcrumb = new Breadcrumb(headerElemNode, data.images[this.id].title);

    backButton.render(this.clickBack.bind(this));
    pageHeaderText.render();
    breadcrumb.render();

    
    /* Body */
    const carousel = new Carousel(pageElemNode, data.images[this.id].links);
    carousel.render();
  }
}
