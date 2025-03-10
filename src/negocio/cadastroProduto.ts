import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class CadastroProduto{
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos:Array<Produto>){
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(){
        console.log('\nInício do cadastro de novo produto');
        let executar = true;
        while (executar){
            try{
                let nome = this.entrada.receberTexto('Insira o nome do produto: ');
                let preco = this.entrada.receberNumero('Insira o preco do produto');
                for (let produto of this.produtos){
                    if (produto.getNome == nome){
                        console.log('Já existe um produto com esse nome. Tente novamente.');
                        continue;
                    }
                }
                this.produtos.push(new Produto(nome, preco));
                executar = false;
            }catch(error){
                console.log('valores inseridos são inválidos. Tente novamente');
            }
        }
    }
}
