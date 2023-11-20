import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoinicial, agencia, cliente){
        super(saldoinicial, agencia, cliente);
    }
}