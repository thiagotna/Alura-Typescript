import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import MensagemView from "../views/MensagensView.js";
import NegociacoesView from "../views/NegociacoesView.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoesView = new NegociacoesView('#negociacoes-view');
        this.mensagemView = new MensagemView('#mensagem-view');
        this.inputData = document.getElementById('data');
        this.inputQuantidade = document.getElementById('quantidade');
        this.inputValor = document.getElementById('valor');
        this.negociacoes = new Negociacoes();
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociacao adicionada com sucesso');
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
