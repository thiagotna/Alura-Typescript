export default class View {
    constructor(selector, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(selector);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
