import Negociacao from "../models/Negociacao.js"
import Negociacoes from "../models/Negociacoes.js"
import NegociacoesView from "../views/NegociacoesView.js"

export default class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoes-view')

    constructor() {
        this.inputData = document.getElementById('data') as HTMLInputElement
        this.inputQuantidade = document.getElementById('quantidade') as HTMLInputElement
        this.inputValor = document.getElementById('valor') as HTMLInputElement
        this.negociacoes = new Negociacoes()
        this.negociacoesView.update(this.negociacoes)
    }

    adiciona():void{
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        this.limparFormulario()
        this.negociacoesView.update(this.negociacoes)
    }

    criaNegociacao(): Negociacao{
        const regex = /-/g
        const data = new Date(this.inputData.value.replace(regex, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        const negociacao = new Negociacao(data, quantidade, valor)
        return negociacao
    }
    limparFormulario():void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }
}