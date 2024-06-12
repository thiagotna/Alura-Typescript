import Negociacao from "../models/Negociacao.js";
export default class NegociacaoController {
    constructor() {
        this.inputData = document.getElementById('data');
        this.inputQuantidade = document.getElementById('quantidade');
        this.inputValor = document.getElementById('valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.limparFormulario();
        console.log(negociacao);
    }
    criaNegociacao() {
        const regex = /-/g;
        const data = new Date(this.inputData.value.replace(regex, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(data, quantidade, valor);
        return negociacao;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
