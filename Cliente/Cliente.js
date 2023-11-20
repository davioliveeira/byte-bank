export class Cliente{
    get cpf(){
        return this._cpf;
    }

    autenticar(senha){
        return this._senha == senha;
    }
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
}