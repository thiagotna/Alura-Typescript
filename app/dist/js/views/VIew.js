var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/Inspect.js";
import tempoDeExecucao from "../decorators/tempoDeExecucao.js";
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
__decorate([
    tempoDeExecucao(true),
    inspect
], View.prototype, "update", null);
