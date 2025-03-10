import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class CadastrarServico {
    private servicos:Array<Servico>;
    private entrada:Entrada;
    constructor(servicos:Array<Servico>){
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrar(){
        console.log('\nInício do cadastro de novo serviço');
        let executar = true;
        while(executar){
            try{
                let nome = this.entrada.receberTexto('Insira o nome do serviço: ');
                let preco = this.entrada.receberNumero('Insira o preço do serviço:');
                for (let servico of this.servicos){
                    if (servico.getNome == nome){
                        console.log('Já existe um serviço com esse nome. Tente novamente.');
                        continue;
                    }
                    this.servicos.push(new Servico(nome, preco));
                    executar = false;
                }
            }catch(error){
                console.log('Valors inseridos são inválidos. Tente novamente.');
            }
        }
    }
}