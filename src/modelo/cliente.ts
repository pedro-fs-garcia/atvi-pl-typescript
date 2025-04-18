import { type } from "os"
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
    private itensConsumidos: number;
    private valorConsumido: number;
    
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        if (!nome || nome.trim() === '') {
            throw new Error('O nome do cliente não pode ser vazio');
        }
        if (!cpf || !cpf.getValor || cpf.getValor.length !== 11) {
            throw new Error('CPF inválido');
        }
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rg = null;
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
        this.itensConsumidos = 0;
        this.valorConsumido = 0;
    }
    
    public adicionaTelefone(telefone:Telefone){
        this.telefones.push(telefone);
    }

    public adicionaPet(pet:Pet){
        this.pets.push(pet);
    }

    public adicionaProduto(produto:Produto, quantidade:number){
        if (quantidade > produto.getQuantidadeEstoque) {
            throw new Error('Quantidade solicitada maior que o estoque disponível');
        }
        this.produtosConsumidos.push(produto);
        this.itensConsumidos += quantidade;
        this.valorConsumido += produto.getPreco * quantidade;
    }

    public adicionaServico(servico:Servico){
        this.servicosConsumidos.push(servico);
        this.itensConsumidos += 1;
        this.valorConsumido += servico.getPreco;
    }

    public listarPets(){
        this.pets.forEach(pet => {
            pet.listarAtributos();
        });
    }

    public listarPrincipaisAtributos(){
        console.log("--------------------------------");
        console.log(`Nome do cliente: ${this.nome}`);
        console.log(`CPF do cliente: ${this.cpf.getValor}`);
        console.log('Pets:');
        this.pets.forEach(pet => {
            console.log(`   nome do pet: ${pet.getNome}`)
        });
        console.log(`Quatidade de itens consumidos: ${this.getItensConsumidos}`);
        console.log(`Valor consumido: ${this.valorConsumido}`);
        console.log("--------------------------------");
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
    
    public get getItensConsumidos(){
        return this.itensConsumidos;
    }

    public get getValorConsumido(){
        return this.valorConsumido;
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