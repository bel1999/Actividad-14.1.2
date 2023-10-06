
document.addEventListener("DOMContentLoaded", () => {

    const frases = ["frase aleatoria 1","frase aleatoria 2","frase aleatoria 3","frase aleatoria 4","frase aleatoria 5","frase aleatoria 6","frase aleatoria 7","frase aleatoria 8","frase aleatoria 9","frase aleatoria 10"];

    let index1 = Math.floor(Math.random() * frases.length);
    let index2 = Math.floor(Math.random() * frases.length);
    let index3 = Math.floor(Math.random() * frases.length);
    let frase1 = document.getElementById("frase1");
    frase1.textContent = `${frases[index1]}`;
    let frase2 = document.getElementById("frase2");
    frase2.textContent = `${frases[index2]}`;
    let frase3 = document.getElementById("frase3");
    frase3.textContent = `${frases[index3]}`;

    let opciones = document.getElementById('opciones');
    let btnopciones = document.getElementById('btnopciones');

    btnopciones.addEventListener("click", () => {
        opciones.classList.toggle('d-none');
    })

})
