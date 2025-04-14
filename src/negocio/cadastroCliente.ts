import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Pet from "../modelo/pet"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private continue = true;
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    private handleError(error: any, message: string = 'Ocorreu um erro inesperado'): void {
        console.error(`\n${message}: ${error instanceof Error ? error.message : error}`);
        console.log('Por favor, tente novamente.\n');
    }

    public cadastrar(): void {
        try {
            console.log('\nInício do cadastro de novo cliente');
            console.log('Digite "0" ou "cancelar" em qualquer campo para cancelar a operação\n');
            
            let cliente = new Cliente('', '', new CPF('', new Date()));
            
            try {
                this.cadastrarNome(cliente);
                if (this.continue) this.cadastrarCpf(cliente);
                if (this.continue) this.cadastrarRg(cliente);
                if (this.continue) this.cadastrarTelefone(cliente);
                if (this.continue) this.cadastrarPet(cliente);
                
                if (this.continue) {
                    this.clientes.push(cliente);
                    console.log('\nCliente cadastrado com sucesso!');
                } else {
                    console.log('\nCadastro cancelado pelo usuário.');
                }
            } catch (error) {
                this.handleError(error, 'Erro durante o cadastro do cliente');
            }
        } catch (error) {
            this.handleError(error, 'Erro ao iniciar o cadastro');
        }
    }

    public cadastrarNome(cliente: Cliente): void {
        if (!this.continue) {
            return;
        }
        
        let nomeValido = false;
        while (!nomeValido && this.continue) {
            try {
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente (0 para cancelar): `);
                if (nome === '0' || nome.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                if (!nome || nome.trim().length < 2 || /^\d+$/.test(nome)) {
                    console.log('Nome inválido. Deve conter pelo menos 2 caracteres e não pode conter apenas números.\n');
                } else {
                    cliente.nome = nome.trim();
                    nomeValido = true;
                }
            } catch (error) {
                console.log('Valores digitados são inválidos.\n');
            }
        }
    }

    public cadastrarNomesocial(cliente:Cliente){
        if (!this.continue){
            return
        }
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente (0 para cancelar): `);
        if (nomeSocial == '0'){
            this.continue = false;
            return;
        }
        cliente.nomeSocial = nomeSocial;
    }

    private validarCPF(cpf: string): boolean {
        cpf = cpf.replace(/[^\d]/g, '');
        if (cpf.length !== 11) return false;
        
        // Validação básica de CPF
        if (/^(\d)\1{10}$/.test(cpf)) return false;
        
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;
        
        if (digitoVerificador1 !== parseInt(cpf.charAt(9))) return false;
        
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;
        
        return digitoVerificador2 === parseInt(cpf.charAt(10));
    }

    private validarRG(rg: string): boolean {
        rg = rg.replace(/[^\d]/g, '');
        return rg.length >= 8 && rg.length <= 10;
    }

    public cadastrarCpf(cliente: Cliente): void {
        if (!this.continue) {
            return;
        }
        
        let cpfValido = false;
        while (!cpfValido && this.continue) {
            try {
                let valor = this.entrada.receberTexto(`Por favor informe o número do cpf (0 para cancelar): `);
                if (valor === '0' || valor.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                if (!this.validarCPF(valor)) {
                    console.log('CPF inválido. Por favor, digite um CPF válido.\n');
                    continue;
                }
                
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy (0 para cancelar): `);
                if (data === '0' || data.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                let partesData = data.split('/');
                if (partesData.length !== 3) {
                    console.log('Formato de data inválido. Use dd/mm/yyyy\n');
                    continue;
                }
                
                let ano = parseInt(partesData[2]);
                let mes = parseInt(partesData[1]) - 1;
                let dia = parseInt(partesData[0]);
                
                if (isNaN(ano) || isNaN(mes) || isNaN(dia)) {
                    console.log('Data inválida. Use apenas números.\n');
                    continue;
                }
                
                let dataEmissao = new Date(ano, mes, dia);
                if (dataEmissao > new Date()) {
                    console.log('Data de emissão não pode ser futura.\n');
                    continue;
                }
                
                let cpf = new CPF(valor, dataEmissao);
                cliente.setCpf(cpf);
                cpfValido = true;
            } catch (error) {
                console.log('Valores inválidos. Tente novamente\n');
            }
        }
    }

    public cadastrarRg(cliente: Cliente): void {
        if (!this.continue) {
            return;
        }
        
        let rgValido = false;
        while (!rgValido && this.continue) {
            try {
                let rgValor = this.entrada.receberTexto('Por favor, informe o número do RG (0 para cancelar):');
                if (rgValor === '0' || rgValor.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                let rgData = this.entrada.receberTexto('Insira a data de emissão do RG no formato dd/mm/yyyy (0 para cancelar):');
                if (rgData === '0' || rgData.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                let partesData = rgData.split('/');
                let rgano = new Number(partesData[2].valueOf()).valueOf();
                let rgmes = new Number(partesData[1].valueOf()).valueOf();
                let rgdia = new Number(partesData[0].valueOf()).valueOf();
                let rgdataEmissao = new Date(rgano, rgmes, rgdia);
                
                let novoRG = new RG(rgValor, rgdataEmissao);
                cliente.setRg(novoRG);
                rgValido = true;
            } catch (error) {
                console.log('Valores digitados são inválidos. Tente novamente\n');
            }
        }
    }

    private validarTelefone(ddd: string, numero: string): boolean {
        ddd = ddd.replace(/\D/g, '');
        numero = numero.replace(/\D/g, '');
        
        return ddd.length === 2 && numero.length >= 8 && numero.length <= 9;
    }

    public cadastrarTelefone(cliente: Cliente): void {
        if (!this.continue) {
            return;
        }
        
        let continuar = true;
        while (continuar && this.continue) {
            try {
                console.log('\nCadastro de novo telefone:');
                let ddd = this.entrada.receberTexto('Insira o ddd (0 para cancelar): ');
                if (ddd === '0' || ddd.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                let numero = this.entrada.receberTexto('Insira o numero (0 para cancelar):');
                if (numero === '0' || numero.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                if (!this.validarTelefone(ddd, numero)) {
                    console.log('Telefone inválido. DDD deve ter 2 dígitos e número deve ter 8 ou 9 dígitos.\n');
                    continue;
                }
                
                cliente.adicionaTelefone(new Telefone(ddd, numero));
                console.log('Telefone adicionado com sucesso!');
                
                let opcao = this.entrada.receberTexto('Deseja continuar adicionando telefones ao cliente (s/n)?');
                if (opcao.toLowerCase() === 'n') {
                    continuar = false;
                }
            } catch (error) {
                console.log('Valores inválidos. Tente novamente\n');
            }
        }
    }

    private validarPet(nome: string, tipo: string, raca: string, genero: string): boolean {
        return nome.trim().length >= 2 &&
               tipo.trim().length >= 2 &&
               raca.trim().length >= 2 &&
               ['m', 'f', 'masculino', 'feminino'].includes(genero.toLowerCase());
    }

    public cadastrarPet(cliente: Cliente): void {
        if (!this.continue) {
            return;
        }
        
        let continuar = true;
        while (continuar && this.continue) {
            try {
                console.log(`\nCadastrar novo pet ao cliente ${cliente.nome}\n`);
                let nome = this.entrada.receberTexto('Digite o nome do pet (0 para cancelar):');
                if (nome === '0' || nome.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                let tipo = this.entrada.receberTexto('Digite o tipo do pet (0 para cancelar):');
                if (tipo === '0' || tipo.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                let raca = this.entrada.receberTexto('Digite a raça do pet (0 para cancelar):');
                if (raca === '0' || raca.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                let genero = this.entrada.receberTexto('Digite o gênero do pet (m/f) (0 para cancelar):');
                if (genero === '0' || genero.toLowerCase() === 'cancelar') {
                    this.continue = false;
                    break;
                }
                
                if (!this.validarPet(nome, tipo, raca, genero)) {
                    console.log('Dados do pet inválidos. Verifique se todos os campos foram preenchidos corretamente.\n');
                    continue;
                }
                
                const pet = new Pet(nome.trim(), raca.trim(), genero.toLowerCase(), tipo.trim());
                cliente.adicionaPet(pet);
                console.log('Pet adicionado com sucesso!');
                
                let opcao = this.entrada.receberTexto('Deseja continuar adicionando pets ao cliente (s/n)?');
                if (opcao.toLowerCase() === 'n') {
                    continuar = false;
                }
            } catch (error) {
                console.log('Valores inválidos. Tente novamente\n');
            }
        }
    }
}