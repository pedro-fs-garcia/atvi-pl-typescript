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
                let nomeProd = this.entrada.receberTexto('Insira o nome do produto que será atualizado (0 - voltar):');
                let atualizaProd = null;
                if (nomeProd == '0'){
                    executar = false;
                    break;
                }
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
                let continua = this.entrada.receberTexto('\nDeseja continuar atualizando produtos (s/n) ?');
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