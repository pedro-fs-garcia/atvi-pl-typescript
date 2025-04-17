import Produto from "../modelo/produto";

export default class ListagemProdutos {
    private produtos:Array<Produto>;
    constructor(produtos:Array<Produto>){
        this.produtos = produtos;
    }

    public listar(){
        console.log('\nLista de todos os produtos disponíveis:');
        for (let i=0; i<this.produtos.length; i++){
            let prod = this.produtos[i]
            console.log(`\nÍndice do produto: ${i}`);
            prod.listarAtributos();
            console.log('-----------------------')
        }
    }

    public listarMaisVendidos(){
        console.log('Lista dos 10 produtos mais vendidos:');
        let ordenados = [...this.produtos].sort((p1:Produto, p2:Produto) => 
            p2.consumo - p1.consumo
        );
        let top10 = ordenados.slice(0,10);
        top10.forEach(prod => {
            prod.listarAtributos()
        });
    }

}