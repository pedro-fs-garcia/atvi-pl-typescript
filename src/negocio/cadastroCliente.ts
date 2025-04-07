import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Pet from "../modelo/pet"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private continue = true;
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        console.log(`Digite '0' em qualquer campo para cancelar o cadastro\n`);
        let novocliente = new Cliente ('', '', new CPF('', new Date()));
        this.cadastrarNome(novocliente);
        this.cadastrarNomesocial(novocliente);
        this.cadastrarCpf(novocliente);
        this.cadastrarRg(novocliente);
        this.cadastrarTelefone(novocliente);
        this.cadastrarPet(novocliente);
        if (!this.continue){
            console.log("Cadastro cancelado pelo usuário.");
            return;
        }
        this.clientes.push(novocliente);
        console.log(`\nCadastro concluído :)\n`);
    }

    public cadastrarNome(cliente: Cliente) {
        if (!this.continue){
            return
        }
        let execucao = 's';
        while (execucao == 's') {
            try {
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente (0 para cancelar): `);
                if (nome == '0'){
                    this.continue = false;
                    break;
                }
                if (["", " ", "abcd"].includes(nome) || !isNaN(Number(nome))) {
                    console.log('Nome digitado é inválido\n');
                } else {
                    cliente.nome = nome;
                    execucao = 'n';
                }
            } catch (error) {
                console.log('Valores digitados são inválidos.\n');
            }
        }
    }

    public cadastrarNomesocial(cliente:Cliente){
        if (!this.continue){
            return
        }
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente (0 para cancelar): `);
        if (nomeSocial == '0'){
            this.continue = false;
            return;
        }
        cliente.nomeSocial = nomeSocial;
    }

    public cadastrarCpf(cliente:Cliente){
        if (!this.continue){
            return
        }
        let executar = 's';
        while (executar == 's') {
            try{
                let valor = this.entrada.receberTexto(`Por favor informe o número do cpf (0 para cancelar): `);
                if (valor == '0'){
                    this.continue = false;
                    break;
                }
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy (0 para cancelar): `);
                if (data == '0'){
                    this.continue = false;
                    break;
                }
                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                let cpf = new CPF(valor, dataEmissao);
                cliente.setCpf(cpf);
                executar = 'n';
            }catch(error){
                console.log('valores inválidos. tente novamente\n')
            }
        }
    }

    public cadastrarRg(cliente:Cliente){
        if (!this.continue){
            return
        }
        let executar = 's';
        while (executar == 's'){
            try {
                let rgValor = this.entrada.receberTexto('Por favor, informe o número do RG (0 para cancelar):');
                if (rgValor == '0'){
                    this.continue = false;
                    break;
                }
                let rgData = this.entrada.receberTexto ('Insira a data de emissão do RG no formato dd/mm/yyyy (0 para cancelar):')
                if (rgData == '0'){
                    this.continue = false;
                    break;
                }
                let rgano = new Number(rgData[2].valueOf()).valueOf()
                let rgmes = new Number(rgData[1].valueOf()).valueOf()
                let rgdia = new Number(rgData[0].valueOf()).valueOf()
                let rgdataEmissao = new Date(rgano, rgmes, rgdia);
                let novoRG = new RG(rgValor, rgdataEmissao);
                cliente.setRg(novoRG);
                executar = 'n';
            } catch (error) {
                console.log('valores digitados são inválidos. Tente novamente\n')
            }
        }
    }

    public cadastrarTelefone(cliente:Cliente){
        if (!this.continue){
            return
        }
        let executar = 's';
        while (executar == 's'){
            try{
                console.log('\nCadastro de novo telefone:')
                let ddd = this.entrada.receberTexto('Insira o ddd (0 para cancelar): ');
                if (ddd == '0'){
                    this.continue = false;
                    break;
                }
                let numero = this.entrada.receberTexto('Insira o numero (0 para cancelar):');
                if (numero == '0'){
                    this.continue = false;
                    break;
                }
                cliente.adicionaTelefone(new Telefone(ddd, numero));
                let opcao = this.entrada.receberTexto('Deseja continuar adicionando telefones ao cliente (s/n)?');
                if (opcao.toLowerCase() == '0'){
                    this.continue = false;
                    break;
                }
                executar = opcao.toLowerCase() == 's' ? 's' : 'n';
            }catch(error){
                console.log('valores inválidos. tente novamente\n')
            }
        }
    }

    public cadastrarPet(cliente:Cliente){
        if (!this.continue){
            return
        }
        let executar = 's';
        while (executar == 's'){
            try{
                console.log(`Cadastrar novo pet ao cliente ${cliente.nome}\n`)
                let nome = this.entrada.receberTexto('Digite o nome do pet (0 para cancelar):');
                if (nome == '0'){
                    this.continue = false;
                    break;
                }
                let tipo = this.entrada.receberTexto('Digite o tipo do pet (0 para cancelar):');
                if (tipo == '0'){
                    this.continue = false;
                    break;
                }
                let raca = this.entrada.receberTexto('Digite a raça do pet (0 para cancelar):');
                if (raca == '0'){
                    this.continue = false;
                    break;
                }
                let genero = this.entrada.receberTexto('Digite o gênero do pet (0 para cancelar):');
                if (genero == '0'){
                    this.continue = false;
                    break;
                }
                const pet = new Pet(nome, raca, genero, tipo);
                cliente.adicionaPet(pet);
                let opcao = this.entrada.receberTexto('Deseja continuar adicionando pets ao cliente (s/n)?');
                if (opcao.toLowerCase() == '0'){
                    this.continue = false;
                    break;
                }
                executar = opcao.toLowerCase() == 's' ? 's' : 'n';
            }catch(error){
                console.log('valores inválidos. tente novamente\n')
            }
        }
    }
}