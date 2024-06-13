import Negociacao from "./Negociacao.js";

export default class Negociacoes{
    private negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes
    }
}