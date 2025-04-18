import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class ListagemPets {
    private clientes: Array<Cliente>;
    constructor (clientes:Array<Cliente>){
        this.clientes = clientes;
    }

    public listar(){
        let execucao = true;
        while (execucao){
            console.log('Listagem de pets');
            console.log('1 - Listar todos os pets');
            console.log('2 - Listar os pets de um cliente');
            console.log('0 - voltar');
            let entrada = new Entrada();
            let opcao = entrada.receberNumero('Escolha uma opção ed listagem de pets: ');
            switch(opcao){
                case 1:
                    this.listarTodos();
                    break;
                case 2:
                    let cpf = entrada.receberTexto('Insira o valor do cpf do cliente: ');
                    this.listarPorCliente(cpf);
                    break;
                case 0:
                    execucao = false;
                    break;
                default:
                    console.log('Operação não atendida. Tente uma opção disponível\n');
            }
        }
    }

    public listarTodos(){
        this.clientes.forEach(cliente => {
            console.log(`\nCliente: ${cliente.getCpf.getValor}`);
            cliente.listarPets();
            console.log("--------------------------------");
        });
    }

    public listarPorCliente(cpf:string){
        for (let cliente of this.clientes){
            if (cliente.getCpf.getValor === cpf){
                cliente.listarPets();
                break;
            }
        }
    }
}