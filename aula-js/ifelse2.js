var pessoa1 =  20
var pessoa2 =  65
var pessoa3 = 15

// Só podem ser vacinas pessoas entre 15 e 60 anos

// teste com OU || OR
if (pessoa3 >= 20 || pessoa2 <= 60) {
    console.log('sim as pessoas pode ser vacinada');
} else {
    console.log('pessoas não podem ser vacinadas');
}

// teste com E || AND
if (pessoa3 >= 20 && pessoa2 <= 60) {
    console.log('sim as pessoas pode ser vacinada');
} else {
    console.log('pessoas não podem ser vacinadas');
}



// Operador E && (AND) e você também tem o OU || (OR)
// if(idade > 35){
//     console.log('A pessoa ', nome, ' passou da meia idade');
//     return
// }else if (idade > 18 || idade < 35){
//     console.log('A pessoa ', nome, ' ainda é jovem');
//     return
// }

// console.log('A pessoa não é de meia idade')