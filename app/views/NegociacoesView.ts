import { extend } from "jquery"
import Negociacao from "../models/Negociacao"
import Negociacoes from "../models/Negociacoes.js"
import View from "./View.js"
import { escape } from "../decorators/escape.js"

export default class NegociacoesView extends View<Negociacoes> {
   
    @escape
    protected template(model: Negociacoes): string{
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
                            <td>${this.formatarData(negociacao.data)}</td>                            
                            <td>${negociacao.quantidade}</td>                            
                            <td>${negociacao.valor}</td>                            
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `
    }

    private formatarData(data: Date): string{
        return new Intl.DateTimeFormat().format(data)
    }
    
}