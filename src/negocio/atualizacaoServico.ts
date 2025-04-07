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
        
        while (executar) {
            try {
                let nomeservico = this.entrada.receberTexto('\nInsira o nome do serviço que será atualizado (0 - voltar):');
                
                if (nomeservico === '0') {
                    console.log('Operação cancelada pelo usuário.');
                    executar = false;
                    break;
                }
                
                let servico = null;
                for (let ser of this.servicos) {
                    if (ser.getNome === nomeservico) {
                        servico = ser;
                        break;
                    }
                }
                
                if (servico === null) {
                    console.log('Não foi encontrado nenhum serviço com esse nome.');
                    continue;
                }
                this.atualizarServico(servico);
                let continua = this.entrada.receberTexto('\nDeseja continuar editando serviços (s/n) ?');
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