import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rg: RG | null
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rg = null;
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    
    public adicionaTelefone(telefone:Telefone){
        this.telefones.push(telefone);
    }

    public adicionaPet(pet:Pet){
        this.pets.push(pet);
    }

    public adicionaProduto(produto:Produto){
        this.produtosConsumidos.push(produto);
    }

    public adicionaServico(servico:Servico){
        this.servicosConsumidos.push(servico);
    }

    public listarPets(){
        this.pets.forEach(pet => {
            pet.listarAtributos();
        })
    }

    public get getCpf(): CPF {
        return this.cpf
    }
    
    public get getRg(): RG | null {
        return this.rg
    }
    
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    
    public get getPets(): Array<Pet> {
        return this.pets
    }
    
    // Métodos set
    public setNome(nome: string) {
        this.nome = nome
    }
    
    public setNomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial
    }
    
    public setCpf(cpf: CPF) {
        this.cpf = cpf
    }
    
    public setRg(rg: RG) {
        this.rg = rg
    }
    
    public setTelefones(telefones: Array<Telefone>) {
        this.telefones = telefones
    }
    
    public setProdutosConsumidos(produtos: Array<Produto>) {
        this.produtosConsumidos = produtos
    }
    
    public setServicosConsumidos(servicos: Array<Servico>) {
        this.servicosConsumidos = servicos
    }
    
    public setPets(pets: Array<Pet>) {
        this.pets = pets
    }

}