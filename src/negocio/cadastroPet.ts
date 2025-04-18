import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log('\nInício do cadastro de novo pet');
        console.log('Digite "0" ou "cancelar" em qualquer campo para cancelar a operação\n');
        console.log("\nClientes cadastrados:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`);
        });
        let executar = true;
        while (executar) {
            try {
                let indice = this.entrada.receberNumero('Digite o número do cliente responsável pelo pet (0 para cancelar):');
                if (indice === 0) {
                    console.log('Operação cancelada pelo usuário.');
                    executar = false;
                    break;
                }
                
                if (indice < 1 || indice > this.clientes.length) {
                    console.log('Índice inválido. Por favor, escolha um número entre 1 e ' + this.clientes.length);
                    continue;
                }
                
                let clienteSelecionado = this.clientes[indice - 1];
                console.log(`\nCliente selecionado: ${clienteSelecionado.nome} (CPF: ${clienteSelecionado.getCpf.getValor})`);
                
                this.cadastrarPet(clienteSelecionado);
                
                let continua = this.entrada.receberTexto('Deseja cadastrar pet para outro cliente (s/n)? ');
                if (continua.toLowerCase() !== 's') {
                    executar = false;
                }
            } catch (error) {
                console.log('Valores digitados são inválidos. Tente novamente\n');
            }
        }
    }

    public cadastrarPet(cliente: Cliente): void {
        let continuar = true;
        while (continuar) {
            try {
                console.log(`\nCadastrar novo pet ao cliente ${cliente.nome}\n`);
                
                let nome = this.entrada.receberTexto('Digite o nome do pet (0 para cancelar):');
                if (nome === '0' || nome.toLowerCase() === 'cancelar') {
                    console.log('Operação cancelada pelo usuário.');
                    break;
                }
                
                let tipo = this.entrada.receberTexto('Digite o tipo do pet (0 para cancelar):');
                if (tipo === '0' || tipo.toLowerCase() === 'cancelar') {
                    console.log('Operação cancelada pelo usuário.');
                    break;
                }
                
                let raca = this.entrada.receberTexto('Digite a raça do pet (0 para cancelar):');
                if (raca === '0' || raca.toLowerCase() === 'cancelar') {
                    console.log('Operação cancelada pelo usuário.');
                    break;
                }
                
                let genero = this.entrada.receberTexto('Digite o gênero do pet (0 para cancelar):');
                if (genero === '0' || genero.toLowerCase() === 'cancelar') {
                    console.log('Operação cancelada pelo usuário.');
                    break;
                }
                
                const pet = new Pet(nome, raca, genero, tipo);
                cliente.adicionaPet(pet);
                console.log('Pet adicionado com sucesso!');
                
                let opcao = this.entrada.receberTexto('Deseja continuar adicionando pets ao cliente (s/n)?');
                if (opcao.toLowerCase() === 'n') {
                    continuar = false;
                }
            } catch (error) {
                console.log('Valores inválidos. Tente novamente\n');
            }
        }
    }
}