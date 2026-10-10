
import {
    cadastrarQuadra,
    cadastrarCliente,
    criarReserva,
    verificarDisponibilidade
} from "./app.js";

console.log("\n=== BEACH CLUB ===\n");

// Cadastrar uma quadra
const quadra = cadastrarQuadra("Quadra 1", "Futebol");
console.log("Quadra cadastrada:", quadra.nome);

// Cadastrar um cliente
const cliente = cadastrarCliente("Ronaldo", "11999999999");
console.log("Cliente cadastrado:", cliente.nome);

// Criar uma reserva
const reserva = criarReserva(
    cliente,
    quadra,
    "20/10/2026",
    "14:00"
);

console.log("\nReserva criada com sucesso!");
console.log(reserva.mostrarDados());

// Verificar disponibilidade
const disponivel = verificarDisponibilidade(
    quadra,
    "20/10/2026",
    "14:00"
);

console.log(
    "\nDisponibilidade:",
    disponivel ? "Disponível" : "Indisponível"
);
