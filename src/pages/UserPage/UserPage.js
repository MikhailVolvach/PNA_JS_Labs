import { ajax, urls } from "../../modules/index.js";
import { getElem, Elem } from "../../utils/getElem.js";
import { Card, Header } from "../../components/layout/index.js";
import { BackButtonComponent, Badge, Headers, Image } from "../../components/ui/index.js";
import { MainPage } from "../MainPage/MainPage.js";

export class UserPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = +id;
        this.data = {};
    }

    clickCard(e) {
        // Клик по кнопке карточки
        const cardId = e.target.dataset.id;
        // ajax.post(urls.addLike(cardId), res => console.log(res));

        // ajax.post(urls.getLikes(cardId, this.id), res => console.log(res));
        // ajax.post(urls.addLike(cardId, this.id), res => {
        //     if ("error" in res) {
        //         ajax.post(urls.deleteLike(cardId, this.id), res => {
        //             console.log("Like deleted");
        //         });
        //     } else {
        //         console.log("Like added");
        //     }
        // });

        ajax(urls.addLike(cardId, this.id))
            .then(res => {
                if ("error" in res) {
                    ajax(urls.deleteLike(cardId, this.id)).then(res => console.log("Like deleted"))
                } else {
                    console.log("Like added");
                }
            })
            // .catch(err => console.log(err));
            // ajax(urls.deleteLike(cardId, this.id)).then(res => console.log)

    }

    clickBack(e) {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    get pageRoot() {
        return document.querySelector("userPage");
    }

    getData(root) {
        // ajax.post(urls.getPosts(this.id), (data) => {this.renderElemsWithData(root, data.response)});
        ajax(urls.getPosts(this.id)).then(response => {this.renderElemsWithData(root, response.response)});
    }

    renderElemsWithData(root, data) {
        root.classList.add("container");

        const userPostsContainerElem = new Elem(root, "userPostsContainer");
        userPostsContainerElem.render();
        const userPostsContainerElemNode = userPostsContainerElem.node();

        userPostsContainerElemNode.classList.add("row");
        userPostsContainerElemNode.classList.add("justify-content-between");
        userPostsContainerElemNode.classList.add("gy-5");

        data.items.forEach(post => {
            const imageUrl = post.hasOwnProperty("copy_history") 
                ? post?.copy_history[0]?.attachments?.find(attachment => attachment?.type === "photo")?.photo?.sizes?.find(size=> size?.type === "q")?.url 
                : post.attachments?.find(attachment => attachment?.type === "photo").photo?.sizes?.find(size => size?.type === "q")?.url;

            const linkUrl = post.hasOwnProperty("copy_history") 
                ? post?.copy_history[0]?.attachments?.find(attachment => attachment?.type === "link")?.url
                : post?.attachments?.find(attachment => attachment?.type === "link")?.url;

            const postText = post.hasOwnProperty("copy_history")
                ? post?.copy_history[0]?.text
                : post?.text;

            const likesCount = post.likes.hasOwnProperty("count")? post.likes.count : 0;
            console.log(likesCount);
            const postId = post?.id;

            const userPostCard = new Card(userPostsContainerElemNode);
            userPostCard.render(this.clickCard.bind(this), postId, imageUrl, "", likesCount, "Like");
        });
    }

    render() {
        this.parent.innerHTML = "";

        const userPageElem = new Elem(this.parent, "userPage");
        const userPageElemHtmlString = userPageElem.createHtmlString();

        this.parent.insertAdjacentHTML("beforeend", userPageElemHtmlString);

        const userPageElemNode = userPageElem.node();

        this.getData(userPageElemNode);
    }
}