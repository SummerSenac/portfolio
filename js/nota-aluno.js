function calcularNota() {
    let notas = $('input');
    let media = (+notas[0].value) +
        (+notas[1].value) +
        (+notas[2].value) +
        (+notas[3].value);
    $('#resultado').html(verAprovacao(media/4));
}

function verAprovacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 3 && media < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}
