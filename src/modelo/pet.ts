export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        if (!nome || nome.trim() === '') {
            throw new Error('O nome do pet não pode ser vazio');
        }
        if (!raca || raca.trim() === '') {
            throw new Error('A raça do pet não pode ser vazia');
        }
        if (!genero || (genero !== 'Macho' && genero !== 'Fêmea' && genero !== 'm' && genero !== 'f')) {
            throw new Error(`O gênero do pet deve ser "Macho" ou "Fêmea" ou "m" ou "f"`);
        }
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
        console.log("--------------------------------");
        console.log(`Nome do pet: ${this.nome}`);
        console.log(`Tipo de pet: ${this.tipo}`);
        console.log(`Raça do pet: ${this.raca}`);
        console.log(`Gênero do pet: ${this.genero}`);
        console.log("--------------------------------");
    }
}