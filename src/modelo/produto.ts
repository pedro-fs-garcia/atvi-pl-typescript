export default class Produto {
    private nome: string;
    private preco: number;
    public consumo:number;
    
    constructor (nome:string, preco:number){
        this.nome = nome;
        this.preco = preco;
        this.consumo = 0;
    }

    public get getNome(){
        return this.nome;
    }

    public get getPreco(){
        return this.preco;
    }

    public listarAtributos(){
        console.log(`Nome do produto: ${this.nome}`);
        console.log(`Preco do produto: ${this.preco}`);
        console.log(`Este produto foi comprado ${this.consumo}`);
    }

    public registrarCompra(quantidade:number){
        this.consumo += quantidade;
    }

    public setNome(nome:string){
        this.nome = nome;
    }

    public setPreco(preco:number){
        this.preco = preco;
    }
}