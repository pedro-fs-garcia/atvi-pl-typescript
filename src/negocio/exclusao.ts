import Entrada from "../io/entrada";

export default abstract class Exclusao {
    protected entrada: Entrada;

    constructor() {
        this.entrada = new Entrada();
    }

    protected confirmarExclusao(nome: string): boolean {
        const confirmacao = this.entrada.receberTexto(`Tem certeza que deseja excluir ${nome}? (s/n): `);
        return confirmacao.toLowerCase() === 's';
    }

    public abstract excluir(): void;
} 