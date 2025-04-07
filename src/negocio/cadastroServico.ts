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
        console.log('\nInício do cadastro de novo servico\n pressione 0 a qualquer momento para encerrar o cadastro');
        let executar = true;
        while (executar){
            try{
                let nome = this.entrada.receberTexto('Insira o nome do servico: ');
                if (nome == '0'){
                    console.log('Encerrando o cadastro de servicos');
                    break;
                }
                let preco = this.entrada.receberNumero('Insira o preco do servico: ');
                
                for (let servico of this.servicos){
                    if (servico.getNome == nome){
                        console.log('Já existe um servico com esse nome. Tente novamente.');
                        continue;
                    }
                }
                this.servicos.push(new Servico(nome, preco));
                executar = false;
            }catch(error){
                console.log('valores inseridos são inválidos. Tente novamente');
            }
        }
    }
}