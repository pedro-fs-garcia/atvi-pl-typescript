import Produto from "../modelo/produto";
import Exclusao from "./exclusao";

export default class ExclusaoProduto extends Exclusao {
    private produtos: Array<Produto>;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
    }

    public excluir(): void {
        console.log("\nExclusão de produto");
        
        if (this.produtos.length === 0) {
            console.log("Não há produtos cadastrados.");
            return;
        }

        // Listar produtos para seleção
        console.log("\nProdutos cadastrados:");
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.getNome} (R$ ${produto.getPreco.toFixed(2)})`);
        });

        console.log("\n");
        const indice = this.entrada.receberNumero("Digite o número do produto que deseja excluir (0 para cancelar): ");
        
        if (indice === 0) {
            console.log("Operação cancelada.");
            return;
        }

        if (indice < 1 || indice > this.produtos.length) {
            console.log("Índice inválido.");
            return;
        }

        const produtoSelecionado = this.produtos[indice - 1];
        
        if (this.confirmarExclusao(`o produto ${produtoSelecionado.getNome}`)) {
            // Remover o produto do array
            this.produtos.splice(indice - 1, 1);
            console.log("Produto excluído com sucesso!");
        } else {
            console.log("Operação cancelada.");
        }
    }
} 