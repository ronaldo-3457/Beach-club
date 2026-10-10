export default class quadra {
    constructor(nome, esporte) {
        if (!nome || !esporte) {
            throw new Error("Nome e esporte são obrigatórios.");
        }

        this.nome = nome;
        this.esporte = esporte;
    }

    mostrarDados() {
        return `quadra: ${this.nome} - Esporte: ${this.esporte}`;
    }
}