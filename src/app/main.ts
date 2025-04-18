import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import AtualizacaoProduto from "../negocio/atualizacaoProduto";
import AtualizacaoServico from "../negocio/atualizacaoServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroCompra from "../negocio/cadastroCompra";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastrarServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPets";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServico";
import ExclusaoCliente from "../negocio/exclusaoCliente";
import ExclusaoPet from "../negocio/exclusaoPet";
import ExclusaoProduto from "../negocio/exclusaoProduto";
import ExclusaoServico from "../negocio/exclusaoServico";
import Teste from "../testes/teste";
import TesteErros from "../testes/testeErros";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cadastros`);
    console.log(`2 - Listagens`);
    console.log(`3 - Atualizações`);
    console.log(`4 - Exclusões`);
    console.log(`5 - Relatórios`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            console.log("\nOpções de cadastro:");
            console.log("1 - Cadastrar cliente");
            console.log("2 - Cadastrar pet");
            console.log("3 - Cadastrar produto");
            console.log("4 - Cadastrar serviço");
            console.log("5 - Cadastrar compra");
            console.log("0 - Voltar");
            console.log("\n");
            const opcaoCadastro = entrada.receberNumero("Escolha uma opção: ");
            
            switch (opcaoCadastro) {
                case 1:
                    new CadastroCliente(empresa.getClientes).cadastrar();
                    break;
                case 2:
                    new CadastroPet(empresa.getClientes).cadastrar();
                    break;
                case 3:
                    new CadastroProduto(empresa.getProdutos).cadastrar();
                    break;
                case 4:
                    new CadastrarServico(empresa.getServicos).cadastrar();
                    break;
                case 5:
                    new CadastroCompra(empresa).cadastro();
                    break;
                case 0:
                    break;
                default:
                    console.log("Opção inválida.");
            }
            break;
        case 2:
            console.log("\nOpções de listagem:");
            console.log("1 - Listar clientes");
            console.log("2 - Listar pets");
            console.log("3 - Listar produtos");
            console.log("4 - Listar serviços");
            console.log("0 - Voltar");
            console.log("\n");
            const opcaoListagem = entrada.receberNumero("Escolha uma opção: ");
            
            switch (opcaoListagem) {
                case 1:
                    new ListagemClientes(empresa.getClientes).listar();
                    break;
                case 2:
                    new ListagemPets(empresa.getClientes).listar();
                    break;
                case 3:
                    new ListagemProdutos(empresa.getProdutos).listar();
                    break;
                case 4:
                    new ListagemServicos(empresa.getServicos).listar();
                    break;
                case 0:
                    break;
                default:
                    console.log("Opção inválida.");
            }
            break;
        case 3:
            console.log("\nOpções de atualização:");
            console.log("1 - Atualizar cliente");
            console.log("2 - Atualizar produto");
            console.log("3 - Atualizar serviço");
            console.log("0 - Voltar");
            console.log("\n");
            const opcaoAtualizacao = entrada.receberNumero("Escolha uma opção: ");
            
            switch (opcaoAtualizacao) {
                case 1:
                    new AtualizacaoCliente(empresa.getClientes).atualizar();
                    break;
                case 2:
                    new AtualizacaoProduto(empresa.getProdutos).atualizar();
                    break;
                case 3:
                    new AtualizacaoServico(empresa.getServicos).atualizar();
                    break;
                case 0:
                    break;
                default:
                    console.log("Opção inválida.");
            }
            break;
        case 4:
            console.log("\nOpções de exclusão:");
            console.log("1 - Excluir cliente");
            console.log("2 - Excluir pet");
            console.log("3 - Excluir produto");
            console.log("4 - Excluir serviço");
            console.log("0 - Voltar");
            console.log("\n");
            const opcaoExclusao = entrada.receberNumero("Escolha uma opção: ");
            
            switch (opcaoExclusao) {
                case 1:
                    new ExclusaoCliente(empresa.getClientes).excluir();
                    break;
                case 2:
                    new ExclusaoPet(empresa.getClientes).excluir();
                    break;
                case 3:
                    new ExclusaoProduto(empresa.getProdutos).excluir();
                    break;
                case 4:
                    new ExclusaoServico(empresa.getServicos).excluir();
                    break;
                case 0:
                    break;
                default:
                    console.log("Opção inválida.");
            }
            break;
        case 5:
            console.log("\nOpções de relatórios:");
            console.log("1 - Listar 10 clientes que mais consumiram em quantidade");
            console.log("2 - Listar 5 clientes que mais consumiram em valor");
            console.log("3 - Exibir produtos mais vendidos");
            console.log("4 - Exibir serviços mais vendidos");
            console.log("5 - Listar produtos e serviços mais consumidos por raça e tipo");
            console.log("0 - Voltar");
            console.log("\n");
            const opcaoRelatorio = entrada.receberNumero("Escolha uma opção: ");
            
            switch (opcaoRelatorio) {
                case 1:
                    new ListagemClientes(empresa.getClientes).listarDezQueMaisConsumiram();
                    break;
                case 2:
                    new ListagemClientes(empresa.getClientes).listarCincoQueMaisGastaram();
                    break;
                case 3:
                    new ListagemProdutos(empresa.getProdutos).listarMaisVendidos();
                    break;
                case 4:
                    new ListagemServicos(empresa.getServicos).listarMaisVendidos();
                    break;
                case 5:
                    empresa.listarMaisConsumidosPorRacaETipo();
                    break;
                case 0:
                    break;
                default:
                    console.log("Opção inválida.");
            }
            break;
        case 6:
            let testeErros = new TesteErros(empresa);
            testeErros.executarTestes();
            break;
        case 100:
            let teste = new Teste(empresa);
            teste.main();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}