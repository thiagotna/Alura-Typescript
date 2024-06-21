import { Modelo } from "../interfaces/Modelo.js";
import Negociacao from "./Negociacao.js";

export default class Negociacoes implements Modelo<Negociacoes>{
    private negociacoes: Negociacao[] = []

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[]{
        return this.negociacoes
    }

    public paraTexto(){
        return `${console.log(JSON.stringify(this.negociacoes))}`
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    }
}