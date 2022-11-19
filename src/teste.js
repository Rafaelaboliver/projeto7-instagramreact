let teste = [8, 6, 8 , 4, 5, 7];

for (let i = 0; i<teste.length; i++) {
    console.log(teste[i]);
}

console.log('usando HOF');
teste.forEach((e) => console.log(e));

let teste2 = teste.map((e) => e*2);
console.log(teste2);

let objeto = [
    {nome: 'cachorro', idade: 2},
    {nome: 'gato', idade: 5}
];

let nome = objeto.map((e) => e.nome);
console.log(nome);