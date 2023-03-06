import { Button } from '../components/Button/Button.js';

export class App {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const button = new Button("Какой-то текст");
        this.parent.insertAdjacentHTML('beforeend', `${button.getHtml()}`);
    }
}