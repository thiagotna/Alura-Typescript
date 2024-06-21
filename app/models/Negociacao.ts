import { Modelo } from "../interfaces/Modelo.js"

export default class Negociacao implements Modelo<Negociacao>{
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ){}

    public static criaDe(dataString: string, quantidadeString: string, valorString: string) : Negociacao{
        const regex = /-/g
        const data = new Date(dataString.replace(regex, ','))
        const quantidade = parseInt(quantidadeString)
        const valor = parseFloat(valorString)
        return new Negociacao(data, quantidade, valor)
    }

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate()
        && this.data.getMonth() === negociacao.data.getMonth() 
        && this.data.getFullYear() === negociacao.data.getFullYear()
    }

    get data(): Date{
        const data = new Date(this._data.getTime())
        return data
    }

    get volume(){
        return this.quantidade * this.valor
    }

    public paraTexto(): string{
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `
    }
}