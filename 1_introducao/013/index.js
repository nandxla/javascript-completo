const alunos = ['Fernando', 'Luiz', 'Sergio', 'Lia'];

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// methods
alunos.push('Luiza');
alunos.push('Fábio');

alunos.unshift('Claudinho');
alunos.unshift('Mario Souto');

const lastElement = alunos.pop();
const firstElement = alunos.shift();

console.log(alunos);
