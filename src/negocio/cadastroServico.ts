import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class CadastrarServico {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log('\nInício do cadastro de novo serviço');
        console.log('Digite "0" ou "cancelar" em qualquer campo para cancelar a operação\n');
        
        let executar = true;
        while (executar) {
            try {
                let nome = this.entrada.receberTexto('Insira o nome do serviço (0 para cancelar): ');
                if (nome === '0' || nome.toLowerCase() === 'cancelar') {
                    console.log('Operação cancelada pelo usuário.');
                    break;
                }
                
                let preco = this.entrada.receberNumero('Insira o preço do serviço (0 para cancelar): ');
                if (preco === 0) {
                    console.log('Operação cancelada pelo usuário.');
                    break;
                }
                
                if (preco < 0) {
                    console.log('O preço não pode ser negativo. Tente novamente.');
                    continue;
                }
                
                let servicoExistente = false;
                for (let servico of this.servicos) {
                    if (servico.getNome === nome) {
                        servicoExistente = true;
                        console.log('Já existe um serviço com esse nome. Tente novamente.');
                        break;
                    }
                }
                
                if (!servicoExistente) {
                    this.servicos.push(new Servico(nome, preco));
                    console.log('\nServiço cadastrado com sucesso!');
                    console.log(`Nome: ${nome}`);
                    console.log(`Preço: R$ ${preco.toFixed(2)}\n`);
                    executar = false;
                }
            } catch (error) {
                console.log('Valores inseridos são inválidos. Tente novamente.');
            }
        }
    }
}