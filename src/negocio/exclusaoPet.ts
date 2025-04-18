import Cliente from "../modelo/cliente";
import Exclusao from "./exclusao";

export default class ExclusaoPet extends Exclusao {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public excluir(): void {
        console.log("\nExclusão de pet");
        
        if (this.clientes.length === 0) {
            console.log("Não há clientes cadastrados.");
            return;
        }

        // Listar clientes para seleção
        console.log("\nClientes cadastrados:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });

        console.log("\n");
        const indiceCliente = this.entrada.receberNumero("Digite o número do cliente (0 para cancelar): ");
        
        if (indiceCliente === 0) {
            console.log("Operação cancelada.");
            return;
        }

        if (indiceCliente < 1 || indiceCliente > this.clientes.length) {
            console.log("Índice inválido.");
            return;
        }

        const clienteSelecionado = this.clientes[indiceCliente - 1];
        
        if (clienteSelecionado.getPets.length === 0) {
            console.log("Este cliente não possui pets cadastrados.");
            return;
        }

        // Listar pets do cliente
        console.log("\nPets do cliente:");
        clienteSelecionado.getPets.forEach((pet, index) => {
            console.log(`${index + 1} - ${pet.getNome} (${pet.getTipo}, ${pet.getRaca})`);
        });

        const indicePet = this.entrada.receberNumero("\nDigite o número do pet que deseja excluir (0 para cancelar): ");
        
        if (indicePet === 0) {
            console.log("Operação cancelada.");
            return;
        }

        if (indicePet < 1 || indicePet > clienteSelecionado.getPets.length) {
            console.log("Índice inválido.");
            return;
        }

        const petSelecionado = clienteSelecionado.getPets[indicePet - 1];
        
        if (this.confirmarExclusao(`o pet ${petSelecionado.getNome} do cliente ${clienteSelecionado.nome}`)) {
            // Remover o pet do array de pets do cliente
            clienteSelecionado.getPets.splice(indicePet - 1, 1);
            console.log("Pet excluído com sucesso!");
        } else {
            console.log("Operação cancelada.");
        }
    }
} 