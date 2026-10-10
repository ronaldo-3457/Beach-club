import Quadra from "./quadra.js";
import Cliente from "./cliente.js";
import Reserva from "./reserva.js";

const quadras = [];
const clientes = [];
const reservas = [];

function cadastrarQuadra(nome, esporte) {
    const quadra = new Quadra(nome, esporte);
    quadras.push(quadra);
    return quadra;
}

function cadastrarCliente(nome, telefone) {
    const cliente = new Cliente(nome, telefone);
    clientes.push(cliente);
    return cliente;
}
function criarReserva(cliente, quadra, data, horario) {
    if (!clientes.includes(cliente)) {
        throw new Error("Cliente não cadastrado no sistema.");
    }
    if (!quadras.includes(quadra)) {
        throw new Error("Quadra não cadastrada no sistema.");
    }
    const conflito = reservas.some((reserva) =>
        !reserva.cancelada &&
        reserva.quadra === quadra &&
        reserva.data === data &&
        reserva.horario === horario
    );
    if (conflito) {
        throw new Error("Esta quadra já está reservada nesse dia e horário.");
    }
    const reserva = new Reserva(cliente, quadra, data, horario);
    reservas.push(reserva);
    return reserva;
}
function cancelarReserva(reserva) {
    if (!reservas.includes(reserva)) {
        throw new Error("Reserva não encontrada no sistema.");
    }
    reserva.cancelar();
}
function verificarDisponibilidade(quadra, data, horario) {
    if (!quadras.includes(quadra)) {
        throw new Error("Quadra não cadastrada no sistema.");
    }
    return !reservas.some((reserva) =>
        !reserva.cancelada &&
        reserva.quadra === quadra &&
        reserva.data === data &&
        reserva.horario === horario
    );
}
function listarReservas() {
    return reservas.filter((reserva) => !reserva.cancelada);
}
export {
    quadras,
    clientes,
    reservas,
    cadastrarQuadra,
    cadastrarCliente,
    criarReserva,
    cancelarReserva,
    verificarDisponibilidade,
    listarReservas
};