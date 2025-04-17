import Empresa from "../modelo/empresa";
import TesteErros from "./testeErros";

// Criar uma instância da empresa
const empresa = new Empresa();

// Criar uma instância do teste de erros
const testeErros = new TesteErros(empresa);

// Executar os testes
console.log("Iniciando execução dos testes de erros...\n");
testeErros.executarTestes();
console.log("\nExecução dos testes de erros concluída."); 