import Cliente from "../modelo/cliente";
import Exclusao from "./exclusao";

export default class ExclusaoCliente extends Exclusao {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public excluir(): void {
        console.log("\nExclusão de cliente");
        
        if (this.clientes.length === 0) {
            console.log("Não há clientes cadastrados.");
            return;
        }

        // Listar clientes para seleção
        console.log("\nClientes cadastrados:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`);
        });

        console.log("\n");
        const indice = this.entrada.receberNumero("Digite o número do cliente que deseja excluir (0 para cancelar): ");
        
        if (indice === 0) {
            console.log("Operação cancelada.");
            return;
        }

        if (indice < 1 || indice > this.clientes.length) {
            console.log("Índice inválido.");
            return;
        }

        const clienteSelecionado = this.clientes[indice - 1];
        
        if (this.confirmarExclusao(`o cliente ${clienteSelecionado.nome}`)) {
            // Remover o cliente do array
            this.clientes.splice(indice - 1, 1);
            console.log("Cliente excluído com sucesso!");
        } else {
            console.log("Operação cancelada.");
        }
    }
} 