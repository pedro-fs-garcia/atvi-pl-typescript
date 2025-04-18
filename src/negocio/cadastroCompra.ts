import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class CadastroCompra {
    private empresa: Empresa;
    private entrada: Entrada;
    
    constructor (empresa:Empresa){
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public cadastro(){
        console.log('\nIniciando uma nova compra\n');
        let execucao = true;
        while(execucao){
            try{
                console.log('Opções:')
                console.log('1 - Venda de produto');
                console.log('2 - Venda de serviço');
                console.log('0 - voltar');
                let opcao = this.entrada.receberNumero('Escolha uma opção:');
                switch(opcao){
                    case 1:
                        this.comprarProduto();
                        break;
                    case 2:
                        this.comprarServico();
                        break;
                    case 0:
                        execucao = false;
                        break;
                    default:
                        console.log('Operação não suportada. Tente novamente.')
                }

            }catch(error){
                console.log('Os valores informados são são válidos. Tente novamente.');
            }
        }
    }

    public comprarProduto(){
        console.log("\nClientes cadastrados:");
        this.empresa.getClientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`);
        });
        let executar = true;
        while(executar){
            try{
                let cpf = this.entrada.receberTexto('Insira o cpf do cliente (0 - voltar): ');
                if (cpf === '0'){
                    executar = false;
                    break;
                }
                let cliente = null;
                for (let cli of this.empresa.getClientes){
                    if (cli.getCpf.getValor === cpf){
                        cliente = cli;
                        break;
                    }
                }
                if (cliente === null){
                    console.log('\nCliente não encontrado. Tente outro cpf.\n');
                    continue;
                }
                let prodNome = this.entrada.receberTexto('Digite o nome do produto vendido (0 - voltar): ');
                if (prodNome === '0'){
                    executar = false;
                    break;
                }
                let produto = null;
                for (let prod of this.empresa.getProdutos){
                    if (prod.getNome === prodNome){
                        produto = prod;
                        break;
                    }
                }
                if (produto === null){
                    console.log('\nProduto não encontrado. Tente novamente.\n')
                    continue;
                }
                let quant = this.entrada.receberNumero('Digite a quantidade de itens que serão comprados (0 - voltar): ');
                if (quant === 0) {
                    executar = false;
                    break;
                }
                this.registrarCompraProduto(cliente, produto, quant);
                executar = false;

            }catch(error){
                console.log('Valores digitados são inválidos. Tente novamente.')
            }
        }
    }


    public registrarCompraProduto(cliente:Cliente, produto:Produto, quantidade:number){
        try {
            if (quantidade > produto.getQuantidadeEstoque) {
                console.log(`\nErro: Quantidade insuficiente em estoque.`);
                console.log(`Quantidade disponível: ${produto.getQuantidadeEstoque}\n`);
                return;
            }
            
            cliente.adicionaProduto(produto, quantidade);
            produto.registrarCompra(quantidade);
            console.log(`\nCompra registrada com sucesso!`);
            console.log(`Cliente: ${cliente.nome}`);
            console.log(`Produto: ${produto.getNome}`);
            console.log(`Quantidade: ${quantidade}`);
            console.log(`Valor total: R$ ${(produto.getPreco * quantidade).toFixed(2)}`);
            console.log(`Quantidade restante em estoque: ${produto.getQuantidadeEstoque}\n`);
        } catch (error: any) {
            console.log(`\nErro ao registrar compra: ${error.message}\n`);
        }
    }

    public comprarServico(){
        console.log("\nClientes cadastrados:");
        this.empresa.getClientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`);
        });
        let executar = true;
        while (executar){
            try{
                let cpf = this.entrada.receberTexto('Insira o cpf do cliente (0 - voltar): ');
                if (cpf === '0'){
                    executar = false;
                    break;
                }
                let cliente = null;
                for (let cli of this.empresa.getClientes){
                    if (cli.getCpf.getValor === cpf){
                        cliente = cli;
                        break;
                    }
                }
                if (cliente === null){
                    console.log('\nCliente não encontrado. Tente outro cpf.\n');
                    continue;
                }
                let servNome = this.entrada.receberTexto('Insira o nome do serviço vendido (0 - voltar): ');
                if (servNome === '0'){
                    executar = false;
                    break;
                }
                let servico = null;
                for (let prod of this.empresa.getServicos){
                    if (prod.getNome === servNome){
                        servico = prod;
                        break;
                    }
                }
                if (servico === null){
                    console.log('\nServiço não encontrado. Tente novamente.\n');
                    continue;
                }
                this.registrarCompraServico(cliente, servico);
                executar = false;

            }catch(error){
                console.log('Valores inseridos são inválidos. Tente novamente.')
            }
        }
    }

    public registrarCompraServico(cliente:Cliente, servico:Servico){
        cliente.adicionaServico(servico);
        servico.registrarCompra();
        console.log(`\nCompra registrada com sucesso!`);
        console.log(`Cliente: ${cliente.nome}`);
        console.log(`Serviço: ${servico.getNome}`);
        console.log(`Valor: R$ ${servico.getPreco.toFixed(2)}\n`);
    }
}