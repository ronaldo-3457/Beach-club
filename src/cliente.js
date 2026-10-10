export default class Cliente {
    constructor(nome, telefone) {
        if (!nome || !telefone) {
            throw new Error("Nome e telefone são obrigatórios.");
        }

        this.nome = nome;
        this.telefone = telefone;
    }

    mostrarDados() {
        return `Cliente: ${this.nome} - Telefone: ${this.telefone}`;
    }
}