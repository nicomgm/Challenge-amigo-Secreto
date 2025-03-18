// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let inputAmigo = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");
console.log(listaAmigos)

function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo() {
    if (listaAmigos == 0) {
        alert("Debes agregar un nombre");
        return;
    }
    let random = Math.floor(Math.random() * listaAmigos.length);
    let amigoRandom = listaAmigos[random];
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoRandom}</li>`;
};