
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:
/*
function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
        if (a === b){
        console.log("Verdadeiro")
        } else (console.log("Falso"));{

        }

} checarIgualdade(10, 10)

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior( a, b) {
    if (a > b ){
    console.log("a maior")    
    } else (console.log("b e maior"));{

    }
} verificaSeEMaior(23, 52)

//console.log(verificaSeEMaior(321, 2156));


/*
// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= // FALSE
// b-) 1=='1'=// TRUE
// c-) 'a'==='b'=// FALSE
// d-) 'b'>'a'=// TRUE
// e-) 0!==null=// TRUE

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------


let usuario = []
const cadastro = () => {
     for (let i = 0; i < 1; i++){
         usuario.push(prompt("qual o seu nome?"))
         usuario.push(Number((prompt("qual o ano de seu nascimento?"))))
         usuario.push(prompt("cadastre sua senha"))
         usuario.push(prompt("qual sua nacionalidade?"))
         if (2022 - usuario[1] < 18){
             console.log("E preciso ter 18 anos ou mais para se cadastrar")
         } else if ( usuario[2].length < 6){
             console.log("A senha deve ter ao menos 6 caracteres")
         };
      console.log(usuario)   
     }

}
console.log(cadastro());
*/
// Exercício 4-----------------------------------------------------------------------------------------------

//Escreva uma função que peça uma senha para o usuário e verifique se está é a mesma senha cadastrada por ele.  Dentro da função defina uma senha válida  Ex: const senha=”labenu”

//- Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
//- Caso a senha seja inválida imprima no console (Senha Inválida)

/*
function pedirSenha(){
    const senhaOriginal = "Labenu"
    let senhaUsuario = prompt("Digite a senha cadastrada")
    if (senhaUsuario === senhaOriginal){
        console.log("Usuário logado")
    } else{
        console.log("Senha inválida")
    };
} 
pedirSenha()


*/

/*
// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    let nomeUsuario = prompt("Digite seu nome")
    let tempo
    let data
    let vacina = prompt("Qual a vacina que tomou?")
    if (vacina === "Coronavac"){
       tempo = 28
       data = "20/06/2022"
       console.log(`Olá ${nomeUsuario}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)

    } else if (vacina === "Astrazenica"){
        tempo = 90
        data = "23/07/2022"
        console.log(`Olá ${nomeUsuario}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)

    } else if (vacina === "Pfizer"){
        tempo = 90
        data = "23/07/2022"
        console.log(`Olá ${nomeUsuario}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)    

    } else {
        console.log("Informação inválida")
    };
}
console.log(primeiraDose())

*/
/*
// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    let nomeUsuario = 
    if (usuario.nome === "Artur"){
        usuarios[0] = {nome: "Artur", imunizacao: "completa"}
    }
    


}
console.log(segundaDose("Artur"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());
*/
