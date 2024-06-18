export default function tempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor) {
            const metodoOriginal =  descriptor.value //Método Original
            let divisor = 1;
            let unidade = 'milisegundos'
            if (emSegundos) {
                divisor = 1000
                unidade = 'segundos'
            }
            //MOdificando o método original
            descriptor.value = function (...args: any[]) {
                const t1 = performance.now()
                const retorno = metodoOriginal.apply(this, args) //This neste conexto representa uma instancia da classe
                const t2 = performance.now()
                console.log(`Método ${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}!`)
                retorno
            }
            return descriptor
        }
}