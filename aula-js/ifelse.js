// Estuturas condionais

// Um aluno recebe 4 notas ao longo do ano. Ao final, essa notas são somadas e divididas por 4 para tirar
// a média do aluno: 
// Se a média for maior ou igual a 7, o aluno está aprovado. 
// Se a média for menor que 7 e maior ou igual a 3, o aluno está de recuperação.
// Se a média for menor que 3 o aluno está reprovado


//  AVALIANDO A NOTA DO ALUNO
nota1 = 2;
nota2 = 3;
nota3 = 3;
nota4 = 3;
media = 7

console.log('a media é ', media);
resultado = "";

//  IF ANINHADO
if (media >= 7) {
    resultado = "Aprovado";
} else if (media >= 3 && media < 7) {
    resultado = "Recuperação";
} else {
    resultado = "Reprovado";
}

// operador ternário
resultado = (media >= 7) ? "Aprovado" : (media >= 3 && media < 7) ? "Recuperação" : "Reprovado";

console.log(resultado)


// AVALIANDO A IDADE
idade = 15
// avaliando a idade
                    // condição     // verdadeiro       // falso   
var verificaIdade = (idade >= 18) ? "Maior de idade" : "Menor de idade"; // analisando a idade do aluno

if (idade >= 18) {
    verificaIdade = "Maior de idade";
} else {
    verificaIdade = "Menor de idade";
}

console.log(verificaIdade)

