import Negociacao from "../models/Negociacao.js";
import { Imprimivel } from "../interfaces/Imprimivel.js";

export default function imprimir(...objectos: Imprimivel[]) {
    for (let objecto of objectos) {
        console.log(objecto.paraTexto())
    }
}