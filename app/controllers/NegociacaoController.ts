import tempoDeExecucao from "../decorators/tempoDeExecucao.js"
import { DiasDaSemana } from "../enums/DiasDaSemana.js"
import Negociacao from "../models/Negociacao.js"
import Negociacoes from "../models/Negociacoes.js"
import MensagemView from "../views/MensagensView.js"
import NegociacoesView from "../views/NegociacoesView.js"

export default class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoes-view', true)
    private mensagemView: MensagemView = new MensagemView('#mensagem-view', false)

    constructor() {
        this.inputData = document.getElementById('data') as HTMLInputElement
        this.inputQuantidade = document.getElementById('quantidade') as HTMLInputElement
        this.inputValor = document.getElementById('valor') as HTMLInputElement
        this.negociacoes = new Negociacoes()
    }

    public adiciona(): void{
        const negociacao = this.criaNegociacao()
        
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Só é possível adicionar negociações em dias uteis!')
            return
        }

        this.negociacoes.adiciona(negociacao)
        this.limparFormulario()
        this.atualizaView()
    }

    private criaNegociacao(): Negociacao{
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        return negociacao
    }
    private limparFormulario():void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }
    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociacao adicionada com sucesso')
    }

    private ehDiaUtil(data: Date): boolean{
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }
}