export default class Reserva {
    constructor(cliente, quadra, data, horario) {
        if (!cliente || !quadra || !data || !horario) {
            throw new Error(
                "Cliente, quadra, data e horário são obrigatórios."
            );
        }
        this.cliente = cliente;
        this.quadra = quadra;
        this.data = data;
        this.horario = horario;
        this.cancelada = false;
    }
    cancelar() {
        if (this.cancelada) {
            throw new Error("Esta reserva já foi cancelada.");
        }
        this.cancelada = true;
    }
    mostrarDados() {
        return `Reserva: ${this.cliente.nome} | ${this.quadra.nome} | Data: ${this.data} | Horário: ${this.horario}`;
    }
}