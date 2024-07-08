// Leia o nome do usuário e escreva o nome dele na tela 10 vezes.

var usuario = prompt("Qual o seu nome?");
if (usuario) {
    for (var i = 0; i < 10; i += 1) {
        console.log(usuario);
    }
} else {
    console.log("Informado");
}