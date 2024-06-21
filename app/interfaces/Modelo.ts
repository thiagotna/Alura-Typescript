import { Comparavel } from "./Comparavel.js";
import { Imprimivel } from "./Imprimivel.js";

export interface Modelo<Type> extends Imprimivel, Comparavel<Type> {}