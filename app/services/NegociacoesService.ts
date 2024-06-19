import { NegociacoesDoDia } from "../interfaces/NegociacoesDoDia.js";
import Negociacao from "../models/Negociacao.js";

export class NegociacoesServices {

    public obterNegociacoesDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
        .then( resposta => resposta.json())
        .then((dados: NegociacoesDoDia[]) => {
            return dados.map( dadoDeHoje => {
                return new Negociacao(
                    new Date(),
                    dadoDeHoje.vezes,
                    dadoDeHoje.montante
                ) 
            })
        })
    }
}