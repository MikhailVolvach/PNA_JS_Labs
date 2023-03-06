"use strict"

export class Button {
    constructor(text = "") {
        this.text = text;
    }

    getHtml() {
        return `<button type='button' class='btn btn-primary'>${this.text}</button>`;
    }
}