import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar() {
        let execucao = true;
        while (execucao) {
            console.log('\nListagem de pets');
            console.log('1 - Listar todos os pets');
            console.log('2 - Listar os pets de um cliente');
            console.log('0 - Voltar');
            
            let opcao = this.entrada.receberNumero('Escolha uma opção de listagem de pets: ');
            switch(opcao) {
                case 1:
                    this.listarTodos();
                    break;
                case 2:
                    this.listarPorCliente();
                    break;
                case 0:
                    execucao = false;
                    break;
                default:
                    console.log('Operação não atendida. Tente uma opção disponível\n');
            }
        }
    }

    public listarTodos() {
        console.log('\nListagem de todos os pets:');
        this.clientes.forEach((cliente, index) => {
            console.log(`\nCliente ${index + 1}: ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`);
            cliente.listarPets();
            console.log("--------------------------------");
        });
    }

    public listarPorCliente() {
        console.log('\nClientes cadastrados:');
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`);
        });

        let indice = this.entrada.receberNumero('Digite o número do cliente para listar seus pets (0 para voltar):');
        if (indice === 0) {
            return;
        }

        if (indice < 1 || indice > this.clientes.length) {
            console.log('Índice inválido. Por favor, escolha um número entre 1 e ' + this.clientes.length);
            return;
        }

        let clienteSelecionado = this.clientes[indice - 1];
        console.log(`\nPets do cliente ${clienteSelecionado.nome}:`);
        clienteSelecionado.listarPets();
    }
}