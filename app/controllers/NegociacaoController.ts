
import { domInjector } from "../decorators/domInjector.js"
import { DiasDaSemana } from "../enums/DiasDaSemana.js"
import Negociacao from "../models/Negociacao.js"
import Negociacoes from "../models/Negociacoes.js"
import MensagemView from "../views/MensagensView.js"
import NegociacoesView from "../views/NegociacoesView.js"
import { NegociacoesServices } from "../services/NegociacoesService.js"
import imprimir from "../utils/imprimir.js"

export default class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement    
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement
    @domInjector('#valor')
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes()
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoes-view', true)
    private mensagemView: MensagemView = new MensagemView('#mensagem-view', false)
    private negociacaoService: NegociacoesServices = new NegociacoesServices

    constructor() {
        this.negociacoesView.update(this.negociacoes)
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
        imprimir(negociacao, this.negociacoes)
    }

    public importarDados(): void {
        this.negociacaoService.obterNegociacoesDoDia()   
        .then( negociacoesDeHoje => {
            return negociacoesDeHoje.filter( negociacaoDeHoje => {
                return !this.negociacoes
                .lista()
                .some( negociacao => negociacao.ehIgual(negociacaoDeHoje))
            })
        })     
        .then( negociacoesDeHoje => {
            for( let negociacao of negociacoesDeHoje){
                this.negociacoes.adiciona( negociacao )
            }
            this.negociacoesView.update(this.negociacoes)
        })
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