import View from "./View.js"

export default class MensagemView extends View<string> {

    protected template(model: string){
        return `<p class="alert alert-info">${model}</p>`
    }

}