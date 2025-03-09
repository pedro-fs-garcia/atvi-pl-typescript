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
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let novocliente = new Cliente ('', '', new CPF('', new Date()));
        this.cadastrarNome(novocliente);
        this.cadastrarNomesocial(novocliente);
        this.cadastrarCpf(novocliente);
        this.cadastrarRg(novocliente);
        this.cadastrarTelefone(novocliente);
        this.cadastrarPet(novocliente);

        this.clientes.push(novocliente);
        console.log(`\nCadastro concluído :)\n`);
    }

    public cadastrarNome(cliente: Cliente) {
        let execucao = true;
        while (execucao) {
            try {
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
                if (["", " ", "abcd"].includes(nome) || !isNaN(Number(nome))) {
                    console.log('Nome digitado é inválido\n');
                } else {
                    cliente.nome = nome;
                    execucao = false;
                }
            } catch (error) {
                console.log('Valores digitados são inválidos.\n');
            }
        }
    }

    public cadastrarNomesocial(cliente:Cliente){
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        cliente.nomeSocial = nomeSocial;
    }

    public cadastrarCpf(cliente:Cliente){
        let executar = true;
        while (executar) {
            try{
                let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                let cpf = new CPF(valor, dataEmissao);
                cliente.setCpf(cpf);
                executar = false;
            }catch(error){
                console.log('valores inválidos. tente novamente\n')
            }
        }
    }

    public cadastrarRg(cliente:Cliente){
        let executar = true;
        while (executar){
            try {
                let rgValor = this.entrada.receberTexto('Por favor, informe o número do RG:');
                let rgData = this.entrada.receberTexto ('Insira a data de emissão do RG no formato dd/mm/yyyy:')
                let rgano = new Number(rgData[2].valueOf()).valueOf()
                let rgmes = new Number(rgData[1].valueOf()).valueOf()
                let rgdia = new Number(rgData[0].valueOf()).valueOf()
                let rgdataEmissao = new Date(rgano, rgmes, rgdia);
                let novoRG = new RG(rgValor, rgdataEmissao);
                cliente.setRg(novoRG);
                executar = false;
            } catch (error) {
                console.log('valores digitados são inválidos. Tente novamente\n')
            }
        }
    }

    public cadastrarTelefone(cliente:Cliente){
        let executar = true;
        while (executar){
            try{
                console.log('Cadastro de novo telefone:\n')
                let ddd = this.entrada.receberTexto('Insira o ddd: ');
                let numero = this.entrada.receberTexto('Insira o numero:');
                cliente.adicionaTelefone(new Telefone(ddd, numero));
                let continuar = this.entrada.receberTexto('Deseja continuar adicionando telefones ao cliente (s/n)?');
                if (continuar.toLowerCase() != 's'){
                    executar = false;
                }
            }catch(error){
                console.log('valores inválidos. tente novamente\n')
            }
        }
    }

    public cadastrarPet(cliente:Cliente){
        let executar = true;
        while (executar){
            try{
                console.log(`Cadastrar novo pet ao cliente ${cliente.nome}\n`)
                let nome = this.entrada.receberTexto('Digite o nome do pet:');
                let tipo = this.entrada.receberTexto('Digite o tipo do pet:');
                let raca = this.entrada.receberTexto('Digite a raça do pet:');
                let genero = this.entrada.receberTexto('Digite o gênero do pet:');
                const pet = new Pet(nome, raca, genero, tipo);
                cliente.adicionaPet(pet);
                let continuar = this.entrada.receberTexto('Deseja continuar adicionando pets ao cliente (s/n)?');
                if (continuar.toLowerCase() != 's'){
                    executar = false;
                }
            }catch(error){
                console.log('valores inválidos. tente novamente\n')
            }
        }
    }
}