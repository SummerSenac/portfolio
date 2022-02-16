let dia;
let data = new Date("2022-02-01T12:00:00Z").getDay()
let diaAvaliado = "segunda"

var dias = ["dom", "segunda", "ter", "qua", "qui", "sex", "sab"]

switch (diaAvaliado) {
    case dias[0]:
        dia = 0
        break;
    case dias[1]:
        dia = 1
        break;
    case dias[2]:
        dia = 2
        break;
    case dias[3]:
        dia = 3
        break;
    case dias[4]:
        dia = 4
        break;
    case dias[5]:
        dia = 5
        break;
    default:
        dia = 6
        break;
}

console.log('o dia da semana com switch é: ', dia);

if (data == 0) {
    dia = "Domingo"
} else if (data == 1) {
    dia = "Segunda"
} else if (data == 2) {
    dia = "Terça"
} else if (data == 3) {
    dia = "Quarta"
} else if (data == 4) {
    dia = "Quinta"
} else if (data == 5) {
    dia = "Sexta"
} else  {
    dia = "Sábado"
}

console.log('o dia da semana com ifelse é: ', dia);