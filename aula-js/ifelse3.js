// se alguém tem mais de 60 e menos 80 anos já deve ter sido vacinado  jan/21
// se alguém tem mais ou igual 80 anos já deve ter tomando a terceira dose
// se alguém tem entre 15 e 40 anos já deve ter sido vacinado abr/21
// se alguém tem entre 5 e 15 anos já deve ter sido vacinado jan/22

var pessoa = 41
if (pessoa >= 80) {
    console.log('tomou terceira dose');
} else if (pessoa > 40 && pessoa < 80) {
    console.log('pessoa vacinada em janeiro');
} else if (pessoa >= 15 && pessoa <= 40) {
    console.log('pessoa vacinada em abril');
} else {
    console.log('pessoa não pode ser JANEIRO 22');
}

