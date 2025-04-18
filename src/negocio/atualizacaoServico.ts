import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class AtualizacaoServico {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public atualizar() {
        console.log('\nInício da atualização de Serviços');
        let executar = true;
        console.log("\nServiços cadastrados:");
        this.servicos.forEach((servico, index) => {
            console.log(`${index + 1} - ${servico.getNome} (R$ ${servico.getPreco.toFixed(2)})`);
        });
        while (executar) {
            try {
                console.log("\n");
                let indice = this.entrada.receberNumero('Insira o número do serviço que será atualizado (0 - voltar):');
                
                if (indice === 0) {
                    console.log('Operação cancelada pelo usuário.');
                    executar = false;
                    break;
                }
                
                if (indice < 1 || indice > this.servicos.length) {
                    console.log('Índice inválido. Por favor, escolha um número entre 1 e ' + this.servicos.length);
                    continue;
                }
                
                let servicoSelecionado = this.servicos[indice - 1];
                this.atualizarServico(servicoSelecionado);
                console.log("\n");
                let continua = this.entrada.receberTexto('Deseja continuar editando serviços (s/n) ?');
                if (continua.toLowerCase() !== 's') {
                    executar = false;
                }
            } catch (error) {
                console.log('Os valores inseridos são inválidos. Tente novamente.');
            }
        }
    }

    public atualizarServico(servico: Servico) {
        console.log(`\nAtualizando serviço: ${servico.getNome} (Preço atual: R$ ${servico.getPreco.toFixed(2)})`);
        
        let novoNome = this.entrada.receberTexto('Insira o novo nome do serviço (0 - cancelar, deixe em branco para manter o nome atual): ');
        
        if (novoNome === '0') {
            console.log('Atualização do serviço cancelada pelo usuário.');
            return;
        }
        
        let novoPreco = this.entrada.receberNumero('Insira o novo preço do serviço (0 - cancelar, deixe em branco para manter o preço atual): ');
        
        if (novoPreco === 0) {
            console.log('Atualização do serviço cancelada pelo usuário.');
            return;
        }
        
        if (novoNome !== "") {
            servico.setNome(novoNome);
        }
        
        if (novoPreco) {
            servico.setpreco(novoPreco);
        }
        
        console.log('Serviço atualizado com sucesso!');
        console.log(`Novo nome: ${servico.getNome}`);
        console.log(`Novo preço: R$ ${servico.getPreco.toFixed(2)}\n`);
    }
}