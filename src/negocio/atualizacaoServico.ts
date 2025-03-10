import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class AtualizacaoServico {
    private servicos: Array<Servico>;
    private entrada:Entrada;
    constructor(servicos:Array<Servico>){
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public atualizar(){
        console.log('\nInício da atualização de Serviços');
        let executar = true;
        while (executar){
            try{
                let nomeservico = this.entrada.receberTexto('Insira o nome do serviço que será atualizado:');
                let servico = null;
                for (let ser of this.servicos){
                    if (ser.getNome == nomeservico){
                        servico = ser;
                        break;
                    }
                }
                if (servico === null){
                    console.log('Não foi encontrado nenhum serviço com esse nome.');
                    continue;
                }
                this.atualizarServico(servico);
                let continua = this.entrada.receberTexto('Deseja continuar editando serviços (s/n) ?');
                if (continua.toLowerCase() != 's'){
                    executar = false;
                }
            }catch(error){
                console.log('Os valores inseridos são inválidos. Tente novamente.');
            }
        }
    }

    public atualizarServico(servico:Servico){
        let novoNome = this.entrada.receberTexto('Insira o novo nome do serviço (deixe em branco para manter o nome atual): ');
        let novoPreco = this.entrada.receberNumero('Insira o novo preço do serviço (deixe em branco para manter o preço atual): ');
        if (novoNome != ""){
            servico.setNome(novoNome);
        }
        if (novoPreco){
            servico.setpreco(novoPreco);
        }
        console.log('Serviço atualizado\n');
    }

}