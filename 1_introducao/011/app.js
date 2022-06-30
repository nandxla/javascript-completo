const nome = window.prompt('Digite seu nome completo:');

document.body.innerHTML += `Seu nome é ${nome} <br>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)} <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br>`;
document.body.innerHTML += `Seu nome em letra maiúscula ${nome.toUpperCase()} <br>`;
document.body.innerHTML += `Seu nome em letra minúscula ${nome.toLowerCase()} <br>`;
