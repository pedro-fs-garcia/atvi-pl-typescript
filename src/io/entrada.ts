import promptSync from "prompt-sync";
import Cliente from "../modelo/cliente";
export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero  = new Number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(mensagem)
        return texto
    }
    public receberCliente(clientes:Array<Cliente>){
        let executar = true;
        let cpf = this.receberTexto('Insira o cpf do cliente: ');

        while(executar){
            try{
                if (cpf == '0'){
                    executar = false;
                    break;
                }
                let cliente = null;
                for (let cli of clientes){
                    if (cli.getCpf.getValor === cpf){
                        cliente = cli;
                        return cliente;
                    }
                }
                console.log('Cliente não encontrado. Tente outro cpf.');
                console.log("Ou digite '0' para cancelar a operação");
                cpf = this.receberTexto('Insira o cpf do cliente: ');
            }catch(error){
                console.log('Os valores digitados são inválidos. Tente novamente.')
            }
        }
    }
}