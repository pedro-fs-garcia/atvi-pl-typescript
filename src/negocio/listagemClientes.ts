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
}