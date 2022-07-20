const elements = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

for (i = 0; i < elements.length; i++) {
    const {tag, texto} = elements[i];
    
    let element = document.createElement(tag);
    element.innerText = texto;

    document.body.appendChild(element);
}

