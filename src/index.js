import "./style/index.less";

const component = () => {
    const element = document.createElement('div');

    console.log([...new Set([1,2,3])]);
    const text = document.createElement('span');
    text.innerHTML = `3435${111}`;
    element.appendChild(text);

    const img = document.createElement("img");
    img.src = require("img/1.jpg");
    element.appendChild(img);

    return element;
};

document.body.appendChild(component());