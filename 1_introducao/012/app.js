const numberVar = Number(window.prompt('Write an number: '));
const titleNumber = document.querySelector('#title-number');
const infoNumber = document.querySelector('#info-number');

titleNumber.innerText = numberVar;

infoNumber.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numberVar)}</p>`;
infoNumber.innerHTML += `<p>É inteiro?: ${Number.isInteger(numberVar)}</p>`;
infoNumber.innerHTML += `<p>É NaN: ${Number.isNaN(numberVar)}</p>`;
infoNumber.innerHTML += `<p>Arredonda para cima: ${Math.ceil(numberVar)}</p>`;
infoNumber.innerHTML += `<p>Arredonda para baixo: ${Math.floor(numberVar)}</p>`;
infoNumber.innerHTML += `<p>Com duas casas decimais: ${numberVar.toFixed(2)}</p>`;
