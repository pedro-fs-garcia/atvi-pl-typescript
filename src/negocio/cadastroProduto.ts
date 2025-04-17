import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class CadastrarProduto {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log('\nInício do cadastro de novo produto');
        console.log('Digite "0" ou "cancelar" em qualquer campo para cancelar a operação\n');
        
        let executar = true;
        while (executar) {
            try {
                let nome = this.entrada.receberTexto('Insira o nome do produto (0 para cancelar): ');
                if (nome === '0' || nome.toLowerCase() === 'cancelar') {
                    console.log('Operação cancelada pelo usuário.');
                    break;
                }
                
                let preco = this.entrada.receberNumero('Insira o preço do produto (0 para cancelar): ');
                if (preco === 0) {
                    console.log('Operação cancelada pelo usuário.');
                    break;
                }
                
                if (preco < 0) {
                    console.log('O preço não pode ser negativo. Tente novamente.');
                    continue;
                }
                
                let quantidade = this.entrada.receberNumero('Insira a quantidade em estoque (0 para cancelar): ');
                if (quantidade === 0) {
                    console.log('Operação cancelada pelo usuário.');
                    break;
                }
                
                if (quantidade < 0) {
                    console.log('A quantidade não pode ser negativa. Tente novamente.');
                    continue;
                }
                
                let produtoExistente = false;
                for (let produto of this.produtos) {
                    if (produto.getNome === nome) {
                        produtoExistente = true;
                        console.log('Já existe um produto com esse nome. Tente novamente.');
                        break;
                    }
                }
                
                if (!produtoExistente) {
                    const novoProduto = new Produto(nome, preco, quantidade);
                    this.produtos.push(novoProduto);
                    console.log('\nProduto cadastrado com sucesso!');
                    console.log(`Nome: ${nome}`);
                    console.log(`Preço: R$ ${preco.toFixed(2)}`);
                    console.log(`Quantidade em estoque: ${quantidade}\n`);
                    executar = false;
                }
            } catch (error) {
                console.log('Valores inseridos são inválidos. Tente novamente.');
            }
        }
    }
}
