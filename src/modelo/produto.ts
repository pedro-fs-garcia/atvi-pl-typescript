export default class Produto {
    private nome: string;
    private preco: number;
    private quantidadeEstoque: number;
    public consumo:number;
    
    constructor (nome:string, preco:number, quantidadeEstoque:number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
        this.consumo = 0;
    }

    public get getNome(){
        return this.nome;
    }

    public get getPreco(){
        return this.preco;
    }

    public get getQuantidadeEstoque(){
        return this.quantidadeEstoque;
    }

    public listarAtributos(){
        console.log(`Nome do produto: ${this.nome}`);
        console.log(`Preco do produto: ${this.preco}`);
        console.log(`Quantidade em estoque: ${this.quantidadeEstoque}`);
        console.log(`Este produto foi comprado ${this.consumo} vezes`);
    }

    public registrarCompra(quantidade:number){
        if (quantidade > this.quantidadeEstoque) {
            throw new Error('Quantidade insuficiente em estoque');
        }
        this.consumo += quantidade;
        this.quantidadeEstoque -= quantidade;
    }

    public adicionarEstoque(quantidade:number){
        if (quantidade < 0) {
            throw new Error('Não é possível adicionar quantidade negativa ao estoque');
        }
        this.quantidadeEstoque += quantidade;
    }

    public setNome(nome:string){
        this.nome = nome;
    }

    public setPreco(preco:number){
        this.preco = preco;
    }

    public setQuantidadeEstoque(quantidade:number){
        if (quantidade < 0) {
            throw new Error('A quantidade em estoque não pode ser negativa');
        }
        this.quantidadeEstoque = quantidade;
    }
}