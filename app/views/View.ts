import { inspect } from "../decorators/Inspect.js"
import tempoDeExecucao from "../decorators/tempoDeExecucao.js"

export default abstract class View<Type> {
    protected elemento: HTMLElement
    private escapar: boolean = false

    constructor(selector: string, escapar?: boolean){
        this.elemento = document.querySelector(selector) as HTMLElement
        if (escapar) {
            this.escapar = escapar   
        }
    }
    protected abstract template(model: Type): string
    
    @tempoDeExecucao(true)
    @inspect
    update(model: Type): void{
        const template = this.template(model)
        this.elemento.innerHTML = template
    }
}