import NegociacaoController from "./controllers/NegociacaoController.js";

const contoller = new NegociacaoController()
const form = document.querySelector('form')

form?.addEventListener('submit', (event) => {
    event.preventDefault()
    contoller.adiciona()
})