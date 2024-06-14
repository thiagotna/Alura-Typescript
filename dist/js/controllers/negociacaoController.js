import { DiasDaSemana } from "../enums/diasDaSemana.js";
import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import MensagemView from "../views/MensagensView.js";
import NegociacoesView from "../views/NegociacoesView.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoesView = new NegociacoesView('#negociacoes-view', true);
        this.mensagemView = new MensagemView('#mensagem-view', false);
        this.inputData = document.getElementById('data');
        this.inputQuantidade = document.getElementById('quantidade');
        this.inputValor = document.getElementById('valor');
        this.negociacoes = new Negociacoes();
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Só é possível adicionar negociações em dias uteis!');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    criaNegociacao() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        return negociacao;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociacao adicionada com sucesso');
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}
