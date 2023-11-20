import {Cliente} from "./Cliente/Cliente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { SistemaAutenticacao } from "./SistemaDeAutenticacao.js";

const cliente = new Cliente("Alice", 12345678912, '123')

const diretor = new Diretor("Davi", 10000, 12345678912);
diretor.cadastrarSenha('001002')
const gerente = new Gerente("Carlos", 4500, 987654321);
gerente.cadastrarSenha('001003')

const hasloggedDiretor = SistemaAutenticacao.login(diretor, '001002');
const hasloggedGerente = SistemaAutenticacao.login(gerente, '001003');
const hasloggedCliente = SistemaAutenticacao.login(cliente, '123');

console.log(hasloggedDiretor);
console.log(hasloggedGerente);
console.log(hasloggedCliente);
