import NegociacaoController from "./controllers/NegociacaoController.js";
const contoller = new NegociacaoController();
const form = document.querySelector('form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
    contoller.adiciona();
});
