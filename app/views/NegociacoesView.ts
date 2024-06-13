import Negociacao from "../models/Negociacao"
import Negociacoes from "../models/Negociacoes.js"

export default class NegociacoesView {
    private elemento: HTMLElement

    constructor(selector: string){
        this.elemento = document.querySelector(selector) as HTMLElement
    }

    template(model: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>                            
                            <td>${negociacao.quantidade}</td>                            
                            <td>${negociacao.valor}</td>                            
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `
    }
    update(model: Negociacoes): void{
        const template = this.template(model)
        this.elemento.innerHTML = template
    }
}