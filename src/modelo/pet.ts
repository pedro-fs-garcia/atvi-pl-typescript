export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}

    public listarAtributos(){
        console.log(`Nome do pet: ${this.nome}`);
        console.log(`Tipo de pet: ${this.tipo}`);
        console.log(`Raça do pet: ${this.raca}`);
        console.log(`Gênero do pet: ${this.genero}`);
        console.log('-----------');
    }
}