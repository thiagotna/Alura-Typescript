import NegociacaoController from "./controllers/NegociacaoController.js";

const contoller = new NegociacaoController()
const form = document.querySelector('form')

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        contoller.adiciona()
    })   
} else {
    throw new Error('Aplicação não pode ser iniciado. Verifique se há um formnulário no DOM')
}