const form = document.querySelector('#imc-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const peso = form.querySelector('#peso').value;
    const altura = form.querySelector('#altura').value;

    const imc = returnImc(altura, peso);
    showResult(imc.category)
});

function returnImc(altura, peso) {
    const imc = peso / altura ** 2;
    let category;

    if (imc >= 40) {
        category = 'Obesidade Grau 3';        
    } else if (imc >= 35) {
        category = 'Obesidade Grau 2';        
    } else if (imc >= 30) {
        category = 'Obesidade Grau 1';        
    } else if (imc >= 25) {
        category = 'Sobrepeso';        
    } else if (imc >= 18.5) {
        category = 'Peso Normal';        
    } else {
        category = 'Abaixo do Peso';        
    }

    return {
        imc: imc,
        category: category,
    }
}

function showResult(result) {
    const boxResult = document.querySelector('#box-result');
    const p = document.createElement('p');

    p.innerText = result;
    boxResult.appendChild(p);
}
