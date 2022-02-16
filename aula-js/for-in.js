let pessoa = {
    nome: "Henning",
    idade: "33",
    sexo: "masculino",
    peso: "96"
}

console.log(pessoa["sexo"]) // acessa objeto pelo nome da chave
console.log(pessoa.sexo) // acessa objeto pela propriedade

for (let p in pessoa) {
    console.log('dados da pessoa', p) // chave ex: nome
    console.log('dados da pessoa', pessoa[p]) // valor ex: henning
}