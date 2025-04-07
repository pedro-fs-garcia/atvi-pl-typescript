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
        let executar = true;
        while(executar){
            try{
                let cpf = this.entrada.receberTexto('Insira o cpf do cliente: ');
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
                    executar = false;
                    continue;
                }
                let prodNome = this.entrada.receberTexto('Digite o nome do produto vendido:');
                let produto = null;
                for (let prod of this.empresa.getProdutos){
                    if (prod.getNome === prodNome){
                        produto = prod;
                        break;
                    }
                }
                if (produto === null){
                    console.log('\nProduto não encontrado. Tente novamente.\n')
                    executar = false;
                    continue;
                }
                let quant = this.entrada.receberNumero('Digite a quatidade de itens que serão comprados: ')
                this.registrarCompraProduto(cliente, produto, quant);
                executar = false;

            }catch(error){
                console.log('Valores digitados são inválidos. Tente novamente.')
            }
        }
    }


    public registrarCompraProduto(cliente:Cliente, produto:Produto, quantidade:number){
        cliente.adicionaProduto(produto, quantidade);
        produto.registrarCompra(quantidade);
    }

    public comprarServico(){
        let executar = true;
        while (executar){
            try{
                let cpf = this.entrada.receberTexto('Insira o cpf do cliente: ');
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
                    console.log('Cliente não encontrado. Tente outro cpf.');
                    executar = false;
                    continue;
                }
                let servNome = this.entrada.receberTexto('Insira o nome do serviço vendido:');
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
                    console.log('servico não encontrado. Tente novamente.')
                    executar = false;
                    continue;
                }
                let quant = this.entrada.receberNumero('Digite a quatidade de itens que serão comprados: ')
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
    }
}