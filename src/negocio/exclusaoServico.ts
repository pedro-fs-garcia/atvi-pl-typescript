import Servico from "../modelo/servico";
import Exclusao from "./exclusao";

export default class ExclusaoServico extends Exclusao {
    private servicos: Array<Servico>;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
    }

    public excluir(): void {
        console.log("\nExclusão de serviço");
        
        if (this.servicos.length === 0) {
            console.log("Não há serviços cadastrados.");
            return;
        }

        // Listar serviços para seleção
        console.log("\nServiços cadastrados:");
        this.servicos.forEach((servico, index) => {
            console.log(`${index + 1} - ${servico.getNome} (R$ ${servico.getPreco.toFixed(2)})`);
        });
        console.log("\n");
        const indice = this.entrada.receberNumero("Digite o número do serviço que deseja excluir (0 para cancelar): ");
        
        if (indice === 0) {
            console.log("Operação cancelada.");
            return;
        }

        if (indice < 1 || indice > this.servicos.length) {
            console.log("Índice inválido.");
            return;
        }

        const servicoSelecionado = this.servicos[indice - 1];
        
        if (this.confirmarExclusao(`o serviço ${servicoSelecionado.getNome}`)) {
            // Remover o serviço do array
            this.servicos.splice(indice - 1, 1);
            console.log("Serviço excluído com sucesso!");
        } else {
            console.log("Operação cancelada.");
        }
    }
} 