export default class Servico {
    private nome: string;
    private preco: number;
    public consumo:number;

    constructor (nome:string, preco:number){
        if (!nome || nome.trim() === '') {
            throw new Error('O nome do serviço não pode ser vazio');
        }
        if (preco < 0) {
            throw new Error('O preço do serviço não pode ser negativo');
        }
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
        console.log("--------------------------------");
        console.log(`Nome do serviço: ${this.nome}`);
        console.log(`Preço do serviço: ${this.preco}`);
        console.log(`Este serviço foi comprado ${this.consumo} vezes`);
        console.log("--------------------------------");
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