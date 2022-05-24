// Exercicio de interpretação

// 1. Exercicio 
/*

a) Explique o que o código faz. Qual o teste que ele realiza?

// Se o número que o usuário coloca passa ou não no teste, baseado nos números pares ou impares.

b) Para que tipos de números ele imprime no console "Passou no teste"? 

//Par

c) Para que tipos de números a mensagem é "Não passou no teste"? 

//Impar

// 2 . Exercicio

O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

a) Para que serve o código acima? Para escolher uma fruta e saber o preço.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? Sera 2,25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
O valor da pêra seria 5

// 3. Exercicio


a) O que a primeira linha está fazendo? 

// Ela esta convertendo uma string para número.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? 

//Se for 10 passou no teste, se for -10 , será "Esta mensagem é secreta!!!"

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. 

// Sim, pois não exite nenhum "Else" para números menores do que zero.


//Exercícios de escrita de código


    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
        a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
        b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
        c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
         

        RESOLUÇÃO

        let usuario = Number(prompt("Qual a sua idade?"))

        if  (usuario >= 18){console.log("Voce pode dirigir")
        } else{console.log("Voce ainda é menor de idade, não pode dirigir")}

    2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
        
        RESOLUÇÃO

        let turno = prompt("Digite M para matutino, V para vespertino ou N para noturno")

        if (turno == "M"){
          console.log("Bom dia")

        } else if (turno == "V"){
          console.log("Boa tarde")

        } else if (turno == "N"){
          console.log("Boa noite")

        } else {
          console.log("comando inválido")}
        

    3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

     RESOLUÇÃO   

    let turno = prompt("Digite M para matutino, V para vespertino ou N para noturno")

        switch (turno){
          case "M":
            console.log("Bom dia")
            break
          case "V":
            console.log("Boa tarde")
            break
          case "N":
            console.log("Boa noite")
            break
          default:
            console.log("Comando inválido")
            break
        }      

   // 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("


    //RESOLUÇÃO

   let generoFilme = prompt("Qual o genero do filme?")
   let precoIngresso = prompt("Qual o valor do ingresso?")

   if (generoFilme == "Fantasia" && precoIngresso <= "15"){
     console.log("Bom filme!")
   } else{
     console.log("Escolha outro filme")
   }
*/