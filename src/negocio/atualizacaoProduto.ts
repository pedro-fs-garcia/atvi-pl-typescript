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
        console.log('\nInício da atualização de Produtos');
        let executar = true;
        while(executar){
            try{
                let nomeProd = this.entrada.receberTexto('Insira o nome do produto que será atualizado:');
                let atualizaProd = null;
                for (let prod of this.produtos){
                    if (prod.getNome == nomeProd){
                        atualizaProd = prod;
                        break;
                    }
                }
                if (atualizaProd === null){
                    console.log('Não foi encontrado nenhum produto com esse nome.')
                    continue;
                }
                this.atualizarProduto(atualizaProd);
                let continua = this.entrada.receberTexto('Deseja continuar atualizando produtos (s/n) ?');
                if (continua.toLowerCase() != 's'){
                    executar = false;
                }

            }catch(error){
                console.log('Os valores inseridos são inválidos. Tente novamente.');
            }
        }
    }

    public atualizarProduto(produto:Produto){
        let novoNome = this.entrada.receberTexto('Insira o novo nome do produto / deixe em branco para manter o nome atual');
        let novoPreco = this.entrada.receberNumero('Insira o novo preco do produto / deixe em branco para manter o preço atual');
        if (novoNome != ""){
            produto.setNome(novoNome);
        }
        if (novoPreco){
            produto.setPreco(novoPreco);
        }
        console.log('Produto atualizado\n')
    }
}