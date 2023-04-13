import { ajax, urls } from "../../modules/index.js";
import { getElem, Elem } from "../../utils/getElem.js";
import { Header } from "../../components/layout/index.js";
import { BackButtonComponent, Badge, Headers, Image } from "../../components/ui/index.js";
import { MainPage } from "../MainPage/MainPage.js";

export class UserPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = +id;
    }

    clickBack(e) {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    getData(root) {
        ajax.post(urls.getUserInfo(this.id), (data) => {
            // console.log(this.data);
            this.renderElemsWithData(root, data.response[0]);
        })
    }

    renderElemsWithData(root, data) {
        const userPageHeaderElem = new Elem(root, "header");
        const userPageHeaderElemNode = userPageHeaderElem.node();

        const userInfo = new Elem(userPageHeaderElemNode, "userInfo");
        
        const userAvatar = new Image(userPageHeaderElemNode, data?.photo_100);
        userAvatar.render();

        userInfo.render();
        // const userInfoHtml = userInfo.createHtmlString("div");

        const userInfoNode = userInfo.node();

        const userName = new Headers(userInfoNode, 3, `${data?.first_name} ${data?.last_name}`);
        const userCountry = new Headers(userInfoNode, 3, `${data.country.title}`)
        

        console.log(data.online);
        // Если пользователь онлайн, то рисуем badge online
        if (data.online) {
            const userNameNode = userName.node();
            const onlineBadge = new Badge(userNameNode);
            
            onlineBadge.render();
        }

        
        userName.render();
        userCountry.render();
    }

    render() {
        this.parent.innerHTML = "";

        this.getData();

        // const userPageElem = getElem(this.parent, "userPage");
        // const userPageElemHtmlString = userPageElem.htmlString;
        const userPageElem = new Elem(this.parent, "userPage");
        const userPageElemHtmlString = userPageElem.createHtmlString();

        this.parent.insertAdjacentHTML("beforeend", userPageElemHtmlString);
        const userPageElemNode = userPageElem.node();

        const backButton = new BackButtonComponent(userPageElemNode);

        backButton.render(this.clickBack.bind(this));
        

        const userPageHeader = new Header(userPageElemNode);
        userPageHeader.render();

        // const userPageHeaderElem = getElem(userPageElemNode, "header");
        // const userPageHeaderElemNode = userPageHeaderElem.node();
        const userPageHeaderElem = new Elem(userPageElemNode, "header");
        const userPageHeaderElemNode = userPageHeaderElem.node();
        userPageHeaderElemNode.classList.add("text-start");
        userPageHeaderElemNode.classList.add("d-flex");
        userPageHeaderElemNode.classList.add("align-items-center");

        /* HEADER */
        
        this.getData(userPageElemNode);

        /* BODY */
    }
}