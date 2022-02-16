const turma = "Senac Web"; // CONST - Não altera o valor ao longo do código GLOBAL
var aluno = "Ana Maria"; // VAR - Valor pode ser alterado ao longo do código GLOBAL
if(aluno != "henning"){
    // LET - O valor só existe no escopo que foi criado LOCAL
    let primeiroNome = aluno.split(" ")[0]; 
    let segundoNome = aluno.split(" ")[1];

    var nome2 = `O nome é: ${primeiroNome} e o sobrenome é ${segundoNome} e a turma é ${turma}` // Valor pode ser alterado ao longo é GLOBAL
    var nome = 'O nome é: ' + primeiroNome +
               ' e o sobrenome é ' + segundoNome +
               ' e a turma é ' + turma // Valor pode ser alterado ao longo é GLOBAL
}

var turmaAluno = "Outro valor"
console.log('turma aluno: ', turmaAluno);
console.log('nome: ', nome);
console.log('nome2: ', nome2);