import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        for (let i = 0; i < this.clientes.length; i++){
            console.log(`Indice do cliente: ${i}`);
            console.log(`Nome: ` + this.clientes[i].nome);
            console.log(`Nome social: ` + this.clientes[i].nomeSocial);
            console.log(`CPF: ` + this.clientes[i].getCpf.getValor);
            console.log(`--------------------------------------`);            
        }
        // this.clientes.forEach(cliente => {
        //     console.log(`Nome: ` + cliente.nome);
        //     console.log(`Nome social: ` + cliente.nomeSocial);
        //     console.log(`CPF: ` + cliente.getCpf.getValor);
        //     console.log(`--------------------------------------`);
        // });
        console.log(`\n`);
    }

    public listarDezQueMaisConsumiram() {
        let ordenados = [...this.clientes].sort((c1: Cliente, c2: Cliente) => 
            c2.getItensConsumidos - c1.getItensConsumidos
        );
        let top10 = ordenados.slice(0, 10);
        console.log('Listagem dos dez clientes que mais consumiram em quantidade:\n');
        top10.forEach(cli => {
            cli.listarPrincipaisAtributos();
        });
        console.log('\n')
    }

    public listarCincoQueMaisGastaram(){
        let ordenados = [...this.clientes].sort((c1: Cliente, c2: Cliente) => 
            c2.getValorConsumido - c1.getValorConsumido
        );
        let top5 = ordenados.slice(0, 5); // Pegando os 10 primeiros
        console.log('Listagems dos cinco clientes que mais consumiram em valor:\n');
        top5.forEach(cli => {
            cli.listarPrincipaisAtributos();
        });
        console.log('\n')
    }
}