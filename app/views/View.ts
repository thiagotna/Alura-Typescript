export default abstract class View<Type> {
    protected elemento: HTMLElement

    constructor(selector: string){
        this.elemento = document.querySelector(selector) as HTMLElement
    }
    protected abstract template(model: Type): string
    
    update(model: Type): void{
        const template = this.template(model)
        this.elemento.innerHTML = template
    }
}