import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class Teste{
    private empresa: Empresa;
    constructor(empresa:Empresa){
        this.empresa = empresa;
    }

    public main(){
        this.gerarClientes();
        this.gerarPets();
        this.gerarProdutos();
        this.gerarServicos();
        this.gerarCompras();
    }

    public gerarClientes(){
        for (let i=0; i<10; i++){
            let cpf = new CPF(this.gerarCpfAleatorio(), new Date());
            let cliente = new Cliente(`Cliente ${i + 1}`, `Nome Social ${i + 1}`, cpf);
            this.empresa.getClientes.push(cliente);
        }
    }

    public gerarPets(){
        this.empresa.getClientes.forEach(cliente => {
            for (let i = 0; i < 2; i++) {
                let nomePet = `Pet${i + 1}_Cliente${cliente.nome}`;
                let racaPet = this.gerarRacaAleatoria();
                let generoPet = Math.random() < 0.5 ? "Macho" : "Fêmea";
                let tipoPet = Math.random() < 0.5 ? "Cachorro" : "Gato";

                let pet = new Pet(nomePet, racaPet, generoPet, tipoPet);
                cliente.adicionaPet(pet);
            }
        });
    }

    public gerarProdutos(){
        const listaProdutos = [
            { nome: "Ração para gato", preco: 32.99, quantidade: 50 },
            { nome: "Ração para cachorro", preco: 45.50, quantidade: 40 },
            { nome: "Brinquedo para pet", preco: 20.00, quantidade: 30 },
            { nome: "Caminha para pet", preco: 80.99, quantidade: 20 },
            { nome: "Coleira", preco: 15.75, quantidade: 35 },
            { nome: "Shampoo para pet", preco: 25.30, quantidade: 25 },
            { nome: "Caixa de areia", preco: 55.00, quantidade: 15 },
            { nome: "Tapete higiênico", preco: 40.20, quantidade: 30 },
            { nome: "Petiscos", preco: 18.90, quantidade: 45 },
            { nome: "Roupa para pet", preco: 50.00, quantidade: 20 }
        ];

        listaProdutos.forEach(prod => {
            let produto = new Produto(prod.nome, prod.preco, prod.quantidade);
            this.empresa.getProdutos.push(produto);
        });
    }

    public gerarServicos(){
        const listaServicos = [
            { nome: "Banho", preco: 50.00 },
            { nome: "Tosa", preco: 40.00 },
            { nome: "Consulta veterinária", preco: 100.00 },
            { nome: "Vacinação", preco: 80.00 },
            { nome: "Adestramento", preco: 120.00 },
            { nome: "Higienização dental", preco: 70.00 },
            { nome: "Corte de unhas", preco: 25.00 },
            { nome: "Hidratação de pelos", preco: 90.00 },
            { nome: "Daycare (creche para pets)", preco: 150.00 },
            { nome: "Transporte para pets", preco: 60.00 }
        ];

        listaServicos.forEach(serv => {
            let servico = new Servico(serv.nome, serv.preco);
            this.empresa.getServicos.push(servico);
        });
    }

    public gerarCompras(){
        this.empresa.getClientes.forEach(cliente => {
            let produtoAleatorio = this.empresa.getProdutos[Math.floor(Math.random() * this.empresa.getProdutos.length)];
            let quantidade = Math.floor(Math.random()*10)+1;
            try {
                cliente.adicionaProduto(produtoAleatorio, quantidade);
                produtoAleatorio.registrarCompra(quantidade);
            } catch (error) {
                // Se não houver estoque suficiente, tenta outro produto
                let outroProduto = this.empresa.getProdutos.find(p => p !== produtoAleatorio);
                if (outroProduto) {
                    cliente.adicionaProduto(outroProduto, quantidade);
                    outroProduto.registrarCompra(quantidade);
                }
            }

            let servicoAleatorio = this.empresa.getServicos[Math.floor(Math.random() * this.empresa.getServicos.length)];
            cliente.adicionaServico(servicoAleatorio);
            servicoAleatorio.registrarCompra();
        });
    }

    private gerarCpfAleatorio(): string {
        let cpf = "";
        for (let i = 0; i < 11; i++) {
            cpf += Math.floor(Math.random() * 10).toString();
        }
        return cpf;
    }

    private gerarRacaAleatoria(): string {
        const racas = ["Bulldog", "Poodle", "Labrador", "Siamês", "Persa", "Vira-lata"];
        return racas[Math.floor(Math.random() * racas.length)];
    }
}