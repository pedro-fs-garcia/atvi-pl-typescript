import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Atualizacao from "./atualizacao";

export default class AtualizacaoCliente extends Atualizacao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    private continue = true;
    
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log('\nInício da atualização de clientes');
        console.log("\nClientes cadastrados:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`);
        });
        
        console.log('Digite "0" ou "cancelar" em qualquer campo para cancelar a operação\n');
        let execucao = true;
        
        while (execucao) {
            try {
                let inputCpf = this.entrada.receberTexto('Insira o cpf do cliente que será atualizado (0 para voltar):');
                if (inputCpf === '0' || inputCpf.toLowerCase() === 'cancelar') {
                    execucao = false;
                    break;
                }

                let clienteEncontrado = false;
                for (let cliente of this.clientes) {
                    if (cliente.getCpf.getValor === inputCpf) {
                        clienteEncontrado = true;
                        console.log('\nCliente encontrado:\n------------');
                        cliente.listarPrincipaisAtributos();
                        console.log('------------------\n');
                        this.atualizaAtributos(cliente);
                        console.log('===============\n');
                        break;
                    }
                }

                if (!clienteEncontrado) {
                    console.log('CPF não encontrado na lista de clientes. Tente novamente.');
                }
            } catch (error) {
                console.log('Erro ao processar a atualização. Tente novamente.');
            }
        }
    }
    
    public atualizaAtributos(cliente: Cliente): void {
        let execucao = true;
        while (execucao) {
            try {
                console.log(`\nOpções de atualização do cliente:`);
                console.log(`1 - Atualizar nome`);
                console.log(`2 - Atualizar Nome Social`);
                console.log('3 - Atualizar RG');
                console.log('4 - Atualizar telefones');
                console.log('5 - Atualizar pets');
                console.log(`0 - Voltar`);
                let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
                
                switch (opcao) {
                    case 1:
                        let novoNome = this.entrada.receberTexto('Insira o novo nome do cliente (0 para cancelar):');
                        if (novoNome === '0' || novoNome.toLowerCase() === 'cancelar') {
                            console.log('Operação cancelada.');
                            break;
                        }
                        cliente.nome = novoNome;
                        console.log('Nome atualizado com sucesso!');
                        break;
                    case 2:
                        let novoNomeSocial = this.entrada.receberTexto('Insira o novo nome social do cliente (0 para cancelar):');
                        if (novoNomeSocial === '0' || novoNomeSocial.toLowerCase() === 'cancelar') {
                            console.log('Operação cancelada.');
                            break;
                        }
                        cliente.nomeSocial = novoNomeSocial;
                        console.log('Nome social atualizado com sucesso!');
                        break;
                    case 3:
                        this.atualizaRG(cliente);
                        break;
                    case 4:
                        this.atualizaTelefones(cliente);
                        break;
                    case 5:
                        this.atualizaPets(cliente);
                        break;
                    case 0:
                        execucao = false;
                        break;
                    default:
                        console.log('Operação não atendida, tente novamente.');
                }
            } catch (error) {
                console.log('Erro ao processar a atualização. Tente novamente.');
            }
        }
    }

    public atualizaRG(cliente:Cliente){
        try{
            let novoValor = this.entrada.receberTexto('Insira o novo valor do rg (0 para cancelar):');
            if (novoValor == '0' || novoValor.toLowerCase() == 'cancelar'){
                console.log('Operação cancelada.');
                return;
            }
            let novaData = this.entrada.receberTexto ('Insira a data de emissão do rg no formato dd/mm/yyyy (0 para cancelar):')
            if (novaData == '0' || novaData.toLowerCase() == 'cancelar'){
                console.log('Operação cancelada.');
                return;
            }
            let ano = new Number(novaData[2].valueOf()).valueOf()
            let mes = new Number(novaData[1].valueOf()).valueOf()
            let dia = new Number(novaData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia);
            let novoRG = new RG(novoValor, dataEmissao);
            cliente.setRg(novoRG);
            console.log('RG atualizado com sucesso!');
        }catch(error){
            console.log('valores fornecidos inválidos')
        }
    }

    public atualizaTelefones(cliente: Cliente): void {
        let execucao = true;
        while (execucao) {
            try {
                console.log(`\nTelefones do cliente: ${cliente.nome}\n`);
                if (cliente.getTelefones.length === 0) {
                    console.log('Nenhum telefone cadastrado.\n');
                } else {
                    for (let i = 0; i < cliente.getTelefones.length; i++) {
                        let telefone = cliente.getTelefones[i];
                        console.log(`${i} - (${telefone.getDdd}) ${telefone.getNumero}\n`);
                    }
                }

                console.log(`\nOpções de atualização dos telefones:`);
                console.log(`1 - Adicionar telefone`);
                console.log(`2 - Deletar telefone`);
                console.log(`0 - Voltar`);
                let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);

                switch (opcao) {
                    case 1:
                        let ddd = this.entrada.receberTexto('Insira o ddd (0 para cancelar): ');
                        if (ddd === '0' || ddd.toLowerCase() === 'cancelar') {
                            console.log('Operação cancelada.');
                            break;
                        }
                        let numero = this.entrada.receberTexto('Insira o numero (0 para cancelar):');
                        if (numero === '0' || numero.toLowerCase() === 'cancelar') {
                            console.log('Operação cancelada.');
                            break;
                        }
                        cliente.getTelefones.push(new Telefone(ddd, numero));
                        console.log('Telefone adicionado com sucesso!');
                        break;
                    case 2:
                        if (cliente.getTelefones.length === 0) {
                            console.log('Não há telefones cadastrados para este cliente.');
                            break;
                        }
                        let index = this.entrada.receberNumero('Insira o índice do telefone que deverá ser excluído:');
                        if (index < 0 || index >= cliente.getTelefones.length) {
                            console.log('Índice inválido.');
                            break;
                        }
                        cliente.getTelefones.splice(index, 1);
                        console.log('Telefone removido com sucesso!');
                        break;
                    case 0:
                        execucao = false;
                        break;
                    default:
                        console.log('Operação não atendida, tente novamente.');
                }
            } catch (error) {
                console.log('Valores inseridos são inválidos. Tente novamente.');
            }
        }
    }

    public atualizaPets(cliente: Cliente): void {
        let execucao = true;
        while (execucao) {
            try {
                let clientePets = cliente.getPets;
                console.log(`\nPets do cliente:\n`);
                if (clientePets.length === 0) {
                    console.log('Nenhum pet cadastrado.\n');
                } else {
                    for (let i = 0; i < clientePets.length; i++) {
                        console.log(`${i} - ${clientePets[i].getNome}`);
                    }
                }

                console.log(`\nOpções de atualização dos pets:`);
                console.log(`1 - Adicionar pet ao cliente`);
                console.log(`2 - Deletar pet do cliente`);
                console.log(`0 - Voltar`);
                let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);

                switch (opcao) {
                    case 1:
                        let nome = this.entrada.receberTexto('Insira o nome do pet (0 para cancelar): ');
                        if (nome === '0' || nome.toLowerCase() === 'cancelar') {
                            console.log('Operação cancelada.');
                            break;
                        }
                        let tipo = this.entrada.receberTexto('Insira o tipo de pet (0 para cancelar):');
                        if (tipo === '0' || tipo.toLowerCase() === 'cancelar') {
                            console.log('Operação cancelada.');
                            break;
                        }
                        let raca = this.entrada.receberTexto('Insira a raça do pet (0 para cancelar):');
                        if (raca === '0' || raca.toLowerCase() === 'cancelar') {
                            console.log('Operação cancelada.');
                            break;
                        }
                        let genero = this.entrada.receberTexto('Insira o gênero do pet (0 para cancelar):');
                        if (genero === '0' || genero.toLowerCase() === 'cancelar') {
                            console.log('Operação cancelada.');
                            break;
                        }
                        cliente.adicionaPet(new Pet(nome, raca, genero, tipo));
                        console.log('Pet adicionado com sucesso!');
                        break;
                    case 2:
                        if (clientePets.length === 0) {
                            console.log('Não há pets cadastrados para este cliente.');
                            break;
                        }
                        let index = this.entrada.receberNumero('Insira o índice do pet que deverá ser excluído:');
                        if (index < 0 || index >= clientePets.length) {
                            console.log('Índice inválido.');
                            break;
                        }
                        cliente.getPets.splice(index, 1);
                        console.log('Pet removido com sucesso!');
                        break;
                    case 0:
                        execucao = false;
                        break;
                    default:
                        console.log('Operação não atendida, tente novamente.');
                }
            } catch (error) {
                console.log('Valores inseridos são inválidos. Tente novamente.');
            }
        }
    }
}