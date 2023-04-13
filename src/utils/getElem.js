export const getElem = (parent, elemName) => {
    return {
        htmlString: `<div id="${elemName}"></div>`,
        node: function() {return parent.querySelector(`#${elemName}`) ? parent.querySelector(`#${elemName}`) : parent.querySelector(`.${elemName}`);}
    };
}

export class Elem {
    constructor(parent, elemName) {
        this.parent = parent;
        this.elemName = elemName;
    }

    createHtmlString(component = "div", closable = true, params = [""], classList = [""]) {
        console.log(component, closable);
        return `
        <${component} class="${classList.join(' ')}" ${params.join(" ")} id="${this.elemName}"${!closable ? " /" : ""}> ${closable ? "</" + component + ">" : ""}`;
    }

    get node() {
        return this?.parent?.querySelector(`#${this.elemName}`) ? this?.parent?.querySelector(`#${this.elemName}`) : this?.parent?.querySelector(`.${this.elemName}`);
    }
}


