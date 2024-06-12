import Negociacao from "../models/Negociacao.js"

export default class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement

    constructor() {
        this.inputData = document.getElementById('data') as HTMLInputElement
        this.inputQuantidade = document.getElementById('quantidade') as HTMLInputElement
        this.inputValor = document.getElementById('valor') as HTMLInputElement
    }

    adiciona():void{
        const negociacao = this.criaNegociacao()
        this.limparFormulario()
        console.log(negociacao)
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