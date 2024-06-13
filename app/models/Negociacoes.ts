import Negociacao from "./Negociacao.js";

export default class Negociacoes{
    private negociacoes: Negociacao[] = []

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): readonly Negociacao[]{
        return this.negociacoes
    }
}