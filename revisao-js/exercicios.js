// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a, b) => a - b) 
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrPar = []
    for(let num of array){
        if (num % 2 == 0){
            arrPar.push(num)
        }
    }
    return arrPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let arrPar = []
   for(let arr of array){
       if (arr % 2 == 0){
        arrPar.push(arr **2)
       }
   }
   return arrPar
}



// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let numMaior = 0
   for(let arr of array){
       if(arr > numMaior){
           numMaior = arr
       }
   }
   return numMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let par = []
   let control = 0

   while(par.length < n){
       if(control % 2 == 0){
           par.push(control)
       }
       control++
   }
  return par
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const atores = []
  for (let i = 0;i <=filme.atores.length -1; i++){
      atores.push(`${filme.atores[i]}`)
  }
  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}