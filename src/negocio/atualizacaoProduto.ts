import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import ListagemProdutos from "./listagemProdutos";

export default class AtualizacaoProduto {
    private produtos: Array<Produto>;
    private entrada:Entrada
    constructor(produtos:Array<Produto>){
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public atualizar(){
        console.log("\nInício da atualização de Produtos");
        console.log("\nProdutos cadastrados:");
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.getNome} (R$ ${produto.getPreco.toFixed(2)})`);
        });
        let executar = true;
        while(executar){
            try{
                let indice = this.entrada.receberNumero('Insira o número do produto que será atualizado (0 - voltar):');
                if (indice === 0){
                    executar = false;
                    break;
                }
                
                if (indice < 1 || indice > this.produtos.length) {
                    console.log('Índice inválido. Por favor, escolha um número entre 1 e ' + this.produtos.length);
                    continue;
                }
                
                let produtoSelecionado = this.produtos[indice - 1];
                this.atualizarProduto(produtoSelecionado);
                console.log("\n");
                let continua = this.entrada.receberTexto('Deseja continuar atualizando produtos (s/n) ?');
                if (continua.toLowerCase() != 's'){
                    executar = false;
                }

            }catch(error){
                console.log('\nOs valores inseridos são inválidos. Tente novamente.');
            }
        }
    }

    public atualizarProduto(produto:Produto){
        let novoNome = this.entrada.receberTexto('Insira o novo nome do produto / deixe em branco para manter o nome atual: ');
        let novoPreco = this.entrada.receberNumero('Insira o novo preco do produto / digite 0 para manter o preço atual: ');
        let novaQuantidade = this.entrada.receberNumero('Insira a nova quantidade em estoque / digite 0 para manter a quantidade atual: ');
        
        if (novoNome != ""){
            produto.setNome(novoNome);
        }
        if (novoPreco > 0){
            produto.setPreco(novoPreco);
        }
        if (novaQuantidade > 0){
            produto.setQuantidadeEstoque(novaQuantidade);
        }
        console.log('Produto atualizado com sucesso!\n');
        produto.listarAtributos();
    }
}