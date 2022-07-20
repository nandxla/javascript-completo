// existe uma forma mais rápida de atribuir o valores de um array em uma variavel
const alunos = ['Nando', 'Luketa', 'Sejo', 'Naviado'];
const [a1, a2, ...resto] = alunos;
console.log(a1, a2, resto);

// existe uma forma mais rápida de atribuir o valores de um objeto em uma variavel
const pessoa = {
    nome: 'Nandola',
    idade: 18,
    profissao: 'Progamador',
    endereco: {
        
    }
}