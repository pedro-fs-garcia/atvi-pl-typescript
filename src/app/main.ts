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
import Teste from "../testes/teste";
import TesteErros from "../testes/testeErros";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log('3 - Atualizar dados do cliente');
    console.log('4 - Cadastrar novo pet');
    console.log('5 - Listar pets');
    console.log('6 - Listar 10 clientes que mais consumiram em quantidade');
    console.log('7 - Listar 5 clientes que mais consumiram em valor');
    console.log('8 - Cadastrar Produto');
    console.log('9 - Listar Produtos');
    console.log('10 - Atualizar Produtos');
    console.log('11 - Exibir produtos mais vendidos');
    console.log('12 - Cadastrar Serviço');
    console.log('13 - Listar Serviços');
    console.log('14 - Atualizar Serviços');
    console.log('15 - Exibir serviços mais vendidos');
    console.log('16 - cadastrar nova compra');
    console.log('17 - Listar produtos e serviços mais consumidos por raça e tipo');
    console.log('18 - Executar testes de erros');
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualiza = new AtualizacaoCliente(empresa.getClientes)
            atualiza.atualizar();
            break;
        case 4:
            let cadastroPet = new CadastroPet(empresa.getClientes);
            cadastroPet.cadastrar();
            break;
        case 5:
            let listagemPets = new ListagemPets(empresa.getClientes);
            listagemPets.listar();
            break;
        case 6:
            let listagemDez = new ListagemClientes(empresa.getClientes);
            listagemDez.listarDezQueMaisConsumiram();
            break;
        case 7:
            let listagemCinco = new ListagemClientes(empresa.getClientes);
            listagemCinco.listarCincoQueMaisGastaram();
            break;
        case 8:
            let cadastrarProduto = new CadastroProduto(empresa.getProdutos);
            cadastrarProduto.cadastrar();
            break;
        case 9:
            let listarProidutos = new ListagemProdutos(empresa.getProdutos);
            listarProidutos.listar();
            break;
        case 10:
            let atualizarProduto = new AtualizacaoProduto(empresa.getProdutos);
            atualizarProduto.atualizar();
            break;
        case 11:
            let listProd = new ListagemProdutos(empresa.getProdutos);
            listProd.listarMaisVendidos();
            break;
        case 12:
            let cadastrarServico = new CadastrarServico(empresa.getServicos);
            cadastrarServico.cadastrar();
            break;
        case 13:
            let listarServicos = new ListagemServicos(empresa.getServicos);
            listarServicos.listar();
            break;
        case 14:
            let atualizarServico = new AtualizacaoServico(empresa.getServicos);
            atualizarServico.atualizar();
            break;
        case 15:
            let listSer = new ListagemServicos(empresa.getServicos);
            listSer.listarMaisVendidos();
            break;
        case 16:
            let cadastroCompra = new CadastroCompra(empresa);
            cadastroCompra.cadastro();
            break;
        case 17:
            empresa.listarMaisConsumidosPorRacaETipo();
            break;
        case 18:
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