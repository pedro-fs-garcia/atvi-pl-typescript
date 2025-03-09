import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Atualizacao from "./atualizacao";

export default class AtualizacaoCliente extends Atualizacao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    constructor (clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log('\nInício da atualização de clientes');
        let inputCpf = this.entrada.receberTexto('Insira o cpf do cliente que será atualizado:');
        this.clientes.forEach(cliente => {
            if (cliente.getCpf.getValor === inputCpf){
                this.atualizaAtributos(cliente);
            }else{
                console.log('CPF não encontrado na lista de clientes. Tente novamente.');
            }
        })
    }
    
    public atualizaAtributos(cliente:Cliente):void{
        let execucao = true;
        while (execucao) {
            console.log(`Opções de atualização do cliente:`);
            console.log(`1 - Atualizar nome`);
            console.log(`2 - Atualizar Nome Social`);
            console.log('3 - Atualizar RG');
            console.log('4 - Atualizar telefones');
            console.log('5 - Atualizar pets');
            console.log(`0 - Voltar`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            
            switch (opcao) {
                case 1:
                    let novoNome = this.entrada.receberTexto('Insira o novo nome do cliente:');
                    cliente.nome = novoNome;
                    break;
                case 2:
                    let novoNomeSocial = this.entrada.receberTexto('Insira o novo nome social do cliente:');
                    cliente.nomeSocial = novoNomeSocial;
                    break;
                case 3:
                    this.atualizaRG(cliente);
                    break;
                case 4:
                    this.atualizaTelefones(cliente);
                    break;
                case 5:
                    this.atualizaPets(cliente);
                    break
                case 0:
                    execucao = false;
                    break;
                default:
                    console.log('operação não atendida, tente novamente.');
            }
        }
    }

    public atualizaRG(cliente:Cliente){
        try{
            let novoValor = this.entrada.receberTexto('Insira o novo valor do rg:');
            let novaData = this.entrada.receberTexto ('Insira a data de emissão do rg no formato dd/mm/yyyy:')
            let ano = new Number(novaData[2].valueOf()).valueOf()
            let mes = new Number(novaData[1].valueOf()).valueOf()
            let dia = new Number(novaData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia);
            let novoRG = new RG(novoValor, dataEmissao);
            cliente.setRg(novoRG);
        }catch(error){
            console.log('valores fornecidos inválidos')
        }
    }

    public atualizaTelefones(cliente:Cliente){
        // adicionar ou excluir telefones
        try {
            console.log(`telefones do cliente: ${cliente.nome}\n`);
            for (let i=0; i<cliente.getTelefones.length; i++){
                let telefone = cliente.getTelefones[i];
                console.log(`${i} - (${telefone.getDdd}) ${telefone.getNumero}\n`);
            }
            let execucao = true;
            while (execucao){
                console.log(`Opções de atualização dos telefones:`);
                console.log(`1 - Adicionar telefone`);
                console.log(`2 - Deletar telefone`);
                console.log(`0 - Voltar`);
                let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
                switch (opcao) {
                    case 1:
                        let ddd = this.entrada.receberTexto('Insira o ddd: ');
                        let numero = this.entrada.receberTexto('Insira o numero:');
                        cliente.getTelefones.push(new Telefone(ddd, numero));
                        break;
                    case 2:
                        let index = this.entrada.receberNumero('Insira o índice do telefone que deverá ser excluído:');
                        delete cliente.getTelefones[index];
                        break;
                    case 0:
                        execucao = false;
                        break;
                    default:
                        console.log('operação não atendida, tente novamente.');
                }
            }
        } catch (error) {
            console.log('Valores inseridos são inválidos');
        }
    }

    public atualizaPets(cliente:Cliente){
        try {
            let clientePets = cliente.getPets
            console.log(`Pets do cliente:\n`);
            for (let i=0; i<clientePets.length; i++){
                console.log(`${i} - ${clientePets[i].getNome}`);
            }
            let execucao = true;
            while (execucao){
                console.log(`Opções de atualização dos telefones:`);
                console.log(`1 - Adicionar pet do cliente`);
                console.log(`2 - Deletar pet do cliente`);
                console.log(`0 - Voltar`);
                let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
                switch (opcao) {
                    case 1:
                        let nome = this.entrada.receberTexto('Insira o nome do pet: ');
                        let tipo = this.entrada.receberTexto('Insira o tipo de pet:');
                        let raca = this.entrada.receberTexto('Insira a raça do pet:');
                        let genero = this.entrada.receberTexto('Insira o gênero do pet:');
                        cliente.adicionaPet(new Pet(nome, raca, genero, tipo));
                        break;
                    case 2:
                        let index = this.entrada.receberNumero('Insira o índice do pet que deverá ser excluído:');
                        delete cliente.getTelefones[index];
                        break;
                    case 0:
                        execucao = false;
                        break;
                    default:
                        console.log('operação não atendida, tente novamente.');
                }
            }
        } catch (error) {
            console.log('Valores inseridos são inválidos');
        }
    }
}