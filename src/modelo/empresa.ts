import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }

    public listarMaisConsumidosPorRacaETipo(): void {
        let consumoPorRaca = new Map<string, Map<string, number>>();
        let consumoPorTipo = new Map<string, Map<string, number>>();

        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                let raca = pet.getRaca;
                let tipo = pet.getTipo;

                if (!consumoPorRaca.has(raca)) {
                    consumoPorRaca.set(raca, new Map());
                }
                this.atualizarConsumo(consumoPorRaca.get(raca)!, cliente);

                if (!consumoPorTipo.has(tipo)) {
                    consumoPorTipo.set(tipo, new Map());
                }
                this.atualizarConsumo(consumoPorTipo.get(tipo)!, cliente);
            });
        });

        console.log("\n=== Produtos e Serviços mais consumidos por Raça ===");
        this.exibirConsumo(consumoPorRaca);

        console.log("\n=== Produtos e Serviços mais consumidos por Tipo de Pet ===");
        this.exibirConsumo(consumoPorTipo);
    }

    private atualizarConsumo(mapa: Map<string, number>, cliente: Cliente): void {
        cliente.getProdutosConsumidos.forEach(produto => {
            mapa.set(produto.getNome, (mapa.get(produto.getNome) || 0) + produto.consumo);
        });
        cliente.getServicosConsumidos.forEach(servico => {
            mapa.set(servico.getNome, (mapa.get(servico.getNome) || 0) + servico.consumo);
        });
    }

    private exibirConsumo(mapa: Map<string, Map<string, number>>): void {
        mapa.forEach((itens, chave) => {
            console.log(`\n${chave}:`);
            let ordenado = Array.from(itens.entries()).sort((a, b) => b[1] - a[1]);
            ordenado.forEach(([nome, quantidade]) => {
                console.log(`  ${nome} - ${quantidade} vezes`);
            });
        });
    }
    
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
}