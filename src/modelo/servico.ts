export default class Servico {
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
        console.log(`Nome do serviço: ${this.nome}`);
        console.log(`Preço do serviço: ${this.preco}`);
        console.log(`Este serviço foi comprado ${this.consumo} vezes`);
    }

    public registrarCompra(){
        this.consumo += 1;
    }

    public setNome(nome:string){
        this.nome = nome;
    }

    public setpreco(preco:number){
        this.preco = preco;
    }
}