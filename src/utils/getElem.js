export const getElem = (parent, elemName) => {
    return {
        htmlString: `<div id="${elemName}"></div>`,
        node: function() {return parent.querySelector(`#${elemName}`) ? parent.querySelector(`#${elemName}`) : parent.querySelector(`.${elemName}`);}
    };
}


