
// VARIAVEIS
// Exercicios variaveis 

/*
lei idade = 15
// VARIAVEL 
console.log(idade) 
// IMPRIME NO CONSOLE
let altura = 180;
console.log(altura)
*/

/*
let nomeAltura = ("Carla tem 1,54 de altura")
console.log(nomeAltura)
let idade = 29;
console.log(idade)
*/

/*
let nomeFilha = ("A flavia e filha da de azul")
console.log(nomeFilha)
let mae = ("A de azul e a carla")
console.log(mae)
*/

// CONSTANTES

/*
// let pode ter seu valor alterado , const nao
const valorIngressoAdulto = 21; 
//valorIngressoAdulto = 34; essa linha nao pode existir 
console.log(valorIngressoAdulto)
*/

// PRIMITIVOS


/*
let nome = 'Carla'; // String literal
let idade = 29;     // Number literal 
let estaAprovado = true; // Boolean
let sobrenome = undefined; // Undefined
let corSelecionado = null; // Redefinir o valor 
*/

// TIPAGEM DINAMICA


// ctrl + l = limpa o console

// typeof = pergunta o tipo do codigo

// OBJETOS
/*
let nome = 'Carla';
let idade = 29;
let estaAprovado = true;
let sobrenome = undefined;


let pessoa = {
    nome: 'Carla',  
    idade: 29,
    estaAprovado: true, 
    sobrenome: 'Campos'  
};

console.log(pessoa);

*/
/*
// ARRAY [] conjunto de dados, indice e a posicao 
// length tamanho

let familia = [true,45,'Carla',17];
console.log(familia.length);
console.log(familia[0]);
*/

/*
let nomeDoColega = {
    nome: 'Felipe',
    idade: 36,
    estaAprovado: true,
    cidade: 'cachoeirinha',
};

console.log(nomeDoColega);
*/

// FUNCOES

/*
let corDeCabelo = "castanho"
function resetaCor(cor, tonalidade){
    corDeCabelo = cor + ' ' + tonalidade;
};

console.log(corDeCabelo);
resetaCor("loiro", "claro")
console.log(corDeCabelo)
*/

// 1 REALIZA UMA TAREFA, NAO DEVOLVE NADA 

/*
function dizerNome(){
    console.log('Carla');  

}

dizerNome();
// FAZ UM CALCULO OU OPERACAO E RETORNA ALGO
function MultiplicaPorDois(valor){
    return valor* 2;
}

//console.log(MultiplicaPorDois(5));

let resultado = MultiplicaPorDois(5);

console.log(resultado)
*/

// OPERADORES ARITIMETICOS(MATEMATICOS)
/*
let salario = 100;

// +, - , * , / , **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

// ++ --

let idade = 18;

console.log(++idade)
console.log(idade)

//ATRIBUICAO

let valorTecladoGamer = 100;
// ValorTecladoGamer = valorTecladoGamer + valorTecladoGamer
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

*/
// OPERADORES DE IGUALDADE
//IGUALDEADE ESCRITA
//Consoel.log (1 ===1);
//console.log( '1' === 1 ); FORMA MAIS RECOMENDADA

// IGUALDADE SOLTA
//console.log ( 1 == 1 );
//console.log ( '1' == 1 ); NAO E RECOMENDADO

// OPERADOR TERNARIO
/*
//Tem um cliente, 100 premium, comum

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);
*/
//COMPARACAO
//LOGICOS e (&&)
// Retorna TRUE se os dois operandos foram true

//console.log(true && false);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade  possuiCarteiraDeTrabalho;

console.log(podeAplicar);



//

