// Abstract Class 

export class Conta {
    constructor(saldoInicial,agencia,cliente){
        if (this.constructor == Conta) throw new Error("Não é uma boa prática instanciar esse objeto do tipo Conta");
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    sacar(valor){
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0; 
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}