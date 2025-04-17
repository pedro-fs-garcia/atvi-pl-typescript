import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class TesteErros {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public executarTestes() {
        console.log("\n=== Iniciando Testes de Erros ===\n");
        
        this.testarClienteInvalido();
        this.testarPetInvalido();
        this.testarProdutoInvalido();
        this.testarServicoInvalido();
        this.testarComprasInvalidas();
        
        console.log("\n=== Fim dos Testes de Erros ===\n");
    }

    private testarClienteInvalido() {
        console.log("Testando erros de cliente:");
        
        // Teste 1: CPF inválido
        try {
            new Cliente("Cliente Teste", "Nome Social", new CPF("123", new Date()));
            console.log("❌ Falha: CPF inválido foi aceito");
        } catch (error) {
            console.log("✅ Sucesso: CPF inválido foi rejeitado");
        }

        // Teste 2: Nome vazio
        try {
            new Cliente("", "Nome Social", new CPF("12345678901", new Date()));
            console.log("❌ Falha: Nome vazio foi aceito");
        } catch (error) {
            console.log("✅ Sucesso: Nome vazio foi rejeitado");
        }
    }

    private testarPetInvalido() {
        console.log("\nTestando erros de pet:");
        
        // Teste 1: Nome vazio
        try {
            new Pet("", "Labrador", "Macho", "Cachorro");
            console.log("❌ Falha: Nome de pet vazio foi aceito");
        } catch (error) {
            console.log("✅ Sucesso: Nome de pet vazio foi rejeitado");
        }

        // Teste 2: Raça inválida
        try {
            new Pet("Rex", "", "Macho", "Cachorro");
            console.log("❌ Falha: Raça vazia foi aceita");
        } catch (error) {
            console.log("✅ Sucesso: Raça vazia foi rejeitada");
        }

        // Teste 3: Gênero inválido
        try {
            new Pet("Rex", "Labrador", "Invalido", "Cachorro");
            console.log("❌ Falha: Gênero inválido foi aceito");
        } catch (error) {
            console.log("✅ Sucesso: Gênero inválido foi rejeitado");
        }
    }

    private testarProdutoInvalido() {
        console.log("\nTestando erros de produto:");
        
        // Teste 1: Nome vazio
        try {
            new Produto("", 10.99, 5);
            console.log("❌ Falha: Nome de produto vazio foi aceito");
        } catch (error) {
            console.log("✅ Sucesso: Nome de produto vazio foi rejeitado");
        }

        // Teste 2: Preço negativo
        try {
            new Produto("Produto Teste", -10.99, 5);
            console.log("❌ Falha: Preço negativo foi aceito");
        } catch (error) {
            console.log("✅ Sucesso: Preço negativo foi rejeitado");
        }

        // Teste 3: Quantidade negativa
        try {
            new Produto("Produto Teste", 10.99, -5);
            console.log("❌ Falha: Quantidade negativa foi aceita");
        } catch (error) {
            console.log("✅ Sucesso: Quantidade negativa foi rejeitada");
        }
    }

    private testarServicoInvalido() {
        console.log("\nTestando erros de serviço:");
        
        // Teste 1: Nome vazio
        try {
            new Servico("", 50.00);
            console.log("❌ Falha: Nome de serviço vazio foi aceito");
        } catch (error) {
            console.log("✅ Sucesso: Nome de serviço vazio foi rejeitado");
        }

        // Teste 2: Preço negativo
        try {
            new Servico("Serviço Teste", -50.00);
            console.log("❌ Falha: Preço negativo foi aceito");
        } catch (error) {
            console.log("✅ Sucesso: Preço negativo foi rejeitado");
        }
    }

    private testarComprasInvalidas() {
        console.log("\nTestando erros de compras:");
        
        const cliente = new Cliente("Cliente Teste", "Nome Social", new CPF("12345678901", new Date()));
        const produto = new Produto("Produto Teste", 10.99, 5);
        const servico = new Servico("Serviço Teste", 50.00);

        // Teste 1: Quantidade de produto maior que estoque
        try {
            cliente.adicionaProduto(produto, 10);
            console.log("❌ Falha: Compra com quantidade maior que estoque foi aceita");
        } catch (error) {
            console.log("✅ Sucesso: Compra com quantidade maior que estoque foi rejeitada");
        }

        // Teste 2: Produto nulo
        try {
            cliente.adicionaProduto(null as unknown as Produto, 1);
            console.log("❌ Falha: Compra de produto nulo foi aceita");
        } catch (error) {
            console.log("✅ Sucesso: Compra de produto nulo foi rejeitada");
        }

        // Teste 3: Serviço nulo
        try {
            cliente.adicionaServico(null as unknown as Servico);
            console.log("❌ Falha: Compra de serviço nulo foi aceita");
        } catch (error) {
            console.log("✅ Sucesso: Compra de serviço nulo foi rejeitada");
        }
    }
} 