import Servico from "../modelo/servico";

export default class ListagemServicos {
    private servicos:Array<Servico>;
    constructor(servicos:Array<Servico>){
        this.servicos = servicos
    }

    public listar(){
        console.log('\nLista de todos os serviços disponíveis:');
        for (let i=0; i<this.servicos.length; i++){
            let ser = this.servicos[i];
            console.log(`Índice do serviço: ${i}`);
            ser.listarAtributos();
            console.log('---------------');
        }
    }

    public listarMaisVendidos(){
        console.log('Lista dos 10 servicos mais vendidos:');
        let ordenados = [...this.servicos].sort((s1:Servico,s2:Servico) => 
            s2.consumo - s1.consumo
        );
        let top10 = ordenados.slice(0,10);
        top10.forEach(ser => {
            ser.listarAtributos()
        });
    }
}