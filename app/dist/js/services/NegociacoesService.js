import Negociacao from "../models/Negociacao.js";
export class NegociacoesServices {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(resposta => resposta.json())
            .then((dados) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    }
}
//# sourceMappingURL=NegociacoesService.js.map