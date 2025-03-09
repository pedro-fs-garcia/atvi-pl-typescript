import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>;
    private entrada : Entrada;
    constructor (clientes:Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log('\nInício do cadastro de novo pet');
        let executar = true;
        while (executar) {
            try {
                let clienteCpf = this.entrada.receberTexto('Digite o cpf do cliente responsável pelo pet:');
                let cliente = null
                for (let cli of this.clientes) {
                    if (cli.getCpf.getValor === clienteCpf) {
                        cliente = cli;
                        break;
                    }
                }
                if (cliente == null){
                    console.log('Cliente não encontrado. Tente novamente\n')
                    continue;
                }
                this.cadastrarPet(cliente);
                
            }catch(error){
                console.log('Valores digitados são inválidos. Tente novamente\n')
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